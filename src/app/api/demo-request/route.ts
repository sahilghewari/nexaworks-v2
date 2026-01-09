import type { NextRequest } from "next/server";
import { DemoRequestAck } from "@/components/emails/DemoRequestAck";
import { InternalNotification } from "@/components/emails/InternalNotification";
import { CONTACT_EMAIL, SUPPORT_EMAIL } from "@/lib/constants";
import { jsonResponse, emptyResponse } from "@/lib/http";
import { sendEmail, type SendEmailResult } from "@/lib/resend";
import { demoRequestSchema } from "@/lib/validations";

export async function OPTIONS(request: NextRequest) {
  return emptyResponse(request, { status: 204 });
}

export async function POST(request: NextRequest) {
  try {
    let payload: unknown;
    try {
      payload = await request.json();
    } catch (parseError) {
      console.error("Demo request JSON parse error", parseError);
      return jsonResponse(
        request,
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }
    const result = demoRequestSchema.safeParse(payload);

    if (!result.success) {
      return jsonResponse(
        request,
        {
          error: "Invalid demo request submission.",
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
      `Company: ${data.company}`,
      `Industry: ${data.industry}`,
      `Timeline: ${data.timeline}`,
      "",
      "Challenge:",
      data.challenge,
    ];

    const adminPromise: Promise<SendEmailResult> = adminRecipients.length
      ? sendEmail({
          to: adminRecipients,
          subject: `New demo request from ${data.name}`,
          react: InternalNotification({
            title: "New demo request",
            items: [
              { label: "Name", value: data.name },
              { label: "Email", value: data.email },
              { label: "Company", value: data.company },
              { label: "Industry", value: data.industry },
              { label: "Timeline", value: data.timeline },
              { label: "Challenge", value: data.challenge },
            ],
            footerNote: "Respond within 24 hours to confirm the session.",
          }),
          text: summaryLines.join("\n"),
        })
      : Promise.resolve<SendEmailResult>({ id: null, skipped: true });

    const acknowledgementPromise = sendEmail({
      to: data.email,
      subject: "Your NexaWorks demo request",
      react: DemoRequestAck({
        name: data.name,
        company: data.company,
        industry: data.industry,
        timeline: data.timeline,
      }),
    });

    const [adminResult, acknowledgementResult] = await Promise.all([
      adminPromise,
      acknowledgementPromise,
    ]);

    const failedAttempts = [adminResult, acknowledgementResult].filter(
      (result) => !result.skipped && result.error
    );

    if (failedAttempts.length) {
      console.error(
        "Demo request email dispatch failures",
        failedAttempts.map((item) => item.error)
      );

      return jsonResponse(
        request,
        {
          message: "Demo request received, but confirmation emails failed to send.",
          warning: "Our specialists will reach out manually to schedule your demo.",
        },
        { status: 202 }
      );
    }

    return jsonResponse(request, {
      message: "Demo request received. We'll reach out soon to schedule your session.",
    });
  } catch (error) {
    console.error("Demo request route error", error);
    return jsonResponse(
      request,
      {
        error: "Unexpected error while submitting demo request.",
      },
      { status: 500 }
    );
  }
}
