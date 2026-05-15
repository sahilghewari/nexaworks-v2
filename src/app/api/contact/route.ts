import type { NextRequest } from "next/server";
import { ContactConfirmation } from "@/components/emails/ContactConfirmation";
import { InternalNotification } from "@/components/emails/InternalNotification";
import { CONTACT_EMAIL, SUPPORT_EMAIL } from "@/lib/constants";
import { jsonResponse, emptyResponse } from "@/lib/http";
import { sendEmail, type SendEmailResult } from "@/lib/resend";
import { contactSchema } from "@/lib/validations";

export async function OPTIONS(request: NextRequest) {
  return emptyResponse(request, { status: 204 });
}

export async function POST(request: NextRequest) {
  try {
    let payload: unknown;
    try {
      payload = await request.json();
    } catch (parseError) {
      console.error("Contact route JSON parse error", parseError);
      return jsonResponse(
        request,
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }
    const result = contactSchema.safeParse(payload);

    if (!result.success) {
      return jsonResponse(
        request,
        {
          error: "Invalid contact form submission.",
          details: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = result.data;
    const adminRecipients = [CONTACT_EMAIL, SUPPORT_EMAIL].filter(Boolean);
    const summaryLines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company ?? "N/A"}`,
      `Phone: ${data.phone ?? "N/A"}`,
      `Role: ${data.role ?? "N/A"}`,
      `Stack: ${data.stack ?? "N/A"}`,
      `Requested KPI/Workflow: ${data.kpi ?? "N/A"}`,
      "",
      "Message:",
      data.message,
    ];

    const adminPromise: Promise<SendEmailResult> = adminRecipients.length
      ? sendEmail({
          to: adminRecipients,
          subject: `[Pilot Request] New Lead: ${data.name} via CompanyBrain`,
          react: InternalNotification({
            title: "New contact form submission",
            items: [
              { label: "Name", value: data.name },
              { label: "Email", value: data.email },
              { label: "Company", value: data.company ?? "N/A" },
              { label: "Phone", value: data.phone ?? "N/A" },
              { label: "Role", value: data.role ?? "N/A" },
              { label: "Stack", value: data.stack ?? "N/A" },
              { label: "Requested KPI/Workflow", value: data.kpi ?? "N/A" },
              { label: "Message", value: data.message },
            ],
          }),
          text: summaryLines.join("\n"),
        })
      : Promise.resolve<SendEmailResult>({ id: null, skipped: true });

    const customerPromise = sendEmail({
      to: data.email,
      subject: "We've received your message",
      react: ContactConfirmation({
        name: data.name,
        company: data.company,
        message: data.message,
      }),
    });

    const [adminResult, customerResult] = await Promise.all([adminPromise, customerPromise]);

    const failedAttempts = [adminResult, customerResult].filter(
      (result) => !result.skipped && result.error
    );

    if (failedAttempts.length) {
      console.error("Contact email dispatch failures", failedAttempts.map((item) => item.error));

      return jsonResponse(
        request,
        {
          message: "Contact request received, but we could not send the notification emails.",
          warning: "Our team has your details and will reach out manually.",
        },
        { status: 202 }
      );
    }

    return jsonResponse(request, {
      message: "Contact request received. Our team will follow up shortly.",
    });
  } catch (error) {
    console.error("Contact route error", error);
    return jsonResponse(
      request,
      {
        error: "Unexpected error while submitting contact form.",
      },
      { status: 500 }
    );
  }
}
