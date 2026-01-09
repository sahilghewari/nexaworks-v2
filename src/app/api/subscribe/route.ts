import type { NextRequest } from "next/server";
import { z } from "zod";
import { NewsletterWelcome } from "@/components/emails/NewsletterWelcome";
import { CONTACT_EMAIL } from "@/lib/constants";
import { jsonResponse, emptyResponse } from "@/lib/http";
import { sendEmail, type SendEmailResult } from "@/lib/resend";
import { newsletterSchema } from "@/lib/validations";

const subscribeSchema = newsletterSchema.extend({
  name: z.string().trim().min(2).max(120).optional(),
});

export async function OPTIONS(request: NextRequest) {
  return emptyResponse(request, { status: 204 });
}

export async function POST(request: NextRequest) {
  try {
    let payload: unknown;
    try {
      payload = await request.json();
    } catch (parseError) {
      console.error("Subscribe JSON parse error", parseError);
      return jsonResponse(
        request,
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }
    const result = subscribeSchema.safeParse(payload);

    if (!result.success) {
      return jsonResponse(
        request,
        {
          error: "Invalid subscription payload.",
          details: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = result.data;

    const adminPromise: Promise<SendEmailResult> = CONTACT_EMAIL
      ? sendEmail({
          to: CONTACT_EMAIL,
          subject: "New newsletter subscription",
          text: `Subscriber: ${data.email}${data.name ? `\nName: ${data.name}` : ""}`,
        })
      : Promise.resolve<SendEmailResult>({ id: null, skipped: true });

    const welcomePromise = sendEmail({
      to: data.email,
      subject: "Welcome to the NexaWorks newsletter",
      react: NewsletterWelcome({ email: data.email }),
    });

    const [adminResult, welcomeResult] = await Promise.all([adminPromise, welcomePromise]);

    const failedAttempts = [adminResult, welcomeResult].filter(
      (result) => !result.skipped && result.error
    );

    if (failedAttempts.length) {
      console.error(
        "Newsletter subscription email failures",
        failedAttempts.map((item) => item.error)
      );

      return jsonResponse(
        request,
        {
          message: "Subscription recorded, but emails failed to send.",
          warning: "Check back soon; we will confirm your subscription manually.",
        },
        { status: 202 }
      );
    }

    return jsonResponse(request, {
      message: "Subscription confirmed. Welcome aboard!",
    });
  } catch (error) {
    console.error("Subscribe route error", error);
    return jsonResponse(
      request,
      {
        error: "Unexpected error while subscribing.",
      },
      { status: 500 }
    );
  }
}
