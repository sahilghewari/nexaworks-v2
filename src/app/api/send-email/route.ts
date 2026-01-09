import type { NextRequest } from "next/server";
import { createElement, type ReactElement } from "react";
import { z } from "zod";
import { ContactConfirmation } from "@/components/emails/ContactConfirmation";
import { DemoRequestAck } from "@/components/emails/DemoRequestAck";
import { NewsletterWelcome } from "@/components/emails/NewsletterWelcome";
import { jsonResponse, emptyResponse } from "@/lib/http";
import { sendEmail, type SendEmailResult } from "@/lib/resend";

const sendEmailSchema = z
  .object({
    to: z.union([z.string().email(), z.array(z.string().email())]),
    subject: z.string().trim().min(1, "Subject is required."),
    template: z.enum(["contactConfirmation", "demoRequestAck", "newsletterWelcome"]).optional(),
    data: z.record(z.any()).optional(),
    html: z.string().optional(),
    text: z.string().optional(),
    from: z.string().optional(),
    replyTo: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z
      .array(
        z.object({
          name: z.string(),
          value: z.string(),
        })
      )
      .optional(),
  })
  .refine(
    (value) => {
      if (value.template) {
        return value.data !== undefined;
      }
      return value.html !== undefined || value.text !== undefined;
    },
    {
      message: "Provide template data or HTML/text content.",
      path: ["data"],
    }
  );

const templateMap = {
  contactConfirmation: ContactConfirmation,
  demoRequestAck: DemoRequestAck,
  newsletterWelcome: NewsletterWelcome,
} as const;

type TemplateKey = keyof typeof templateMap;

export async function OPTIONS(request: NextRequest) {
  return emptyResponse(request, { status: 204 });
}

export async function POST(request: NextRequest) {
  try {
    let payload: unknown;
    try {
      payload = await request.json();
    } catch (parseError) {
      console.error("Send-email JSON parse error", parseError);
      return jsonResponse(
        request,
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }
    const result = sendEmailSchema.safeParse(payload);

    if (!result.success) {
      return jsonResponse(
        request,
        {
          error: "Invalid email payload.",
          details: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = result.data;
    let reactEmail: ReactElement | undefined;

    if (data.template) {
      const Template = templateMap[data.template as TemplateKey];
      if (!Template) {
        return jsonResponse(
          request,
          { error: `Unsupported template: ${data.template}` },
          { status: 400 }
        );
      }
      reactEmail = createElement(Template, data.data ?? {});
    }

    const result: SendEmailResult = await sendEmail({
      to: data.to,
      subject: data.subject,
      react: reactEmail,
      html: data.html,
      text: data.text,
      from: data.from,
      replyTo: data.replyTo,
      tags: data.tags,
    });

    if (result.skipped) {
      return jsonResponse(
        request,
        {
          message: "Email service not configured; request accepted without delivery.",
          warning: "Configure RESEND_API_KEY to enable transactional email delivery.",
        },
        { status: 202 }
      );
    }

    if (result.error) {
      console.error("Send-email dispatch failure", result.error);
      return jsonResponse(
        request,
        {
          error: "Email delivery failed.",
          details: result.errorMessage,
        },
        { status: 502 }
      );
    }

    return jsonResponse(request, {
      message: "Email sent successfully",
      id: result.id,
    });
  } catch (error) {
    console.error("Send-email route error", error);
    return jsonResponse(
      request,
      {
        error: "Unexpected error while sending email.",
      },
      { status: 500 }
    );
  }
}
