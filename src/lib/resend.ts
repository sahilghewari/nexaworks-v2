import { Resend } from "resend";
import type { ReactElement } from "react";

const apiKey = process.env.RESEND_API_KEY;

const client = apiKey ? new Resend(apiKey) : null;

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  react?: ReactElement;
  html?: string;
  text?: string;
  from?: string;
  replyTo?: string | string[];
  tags?: { name: string; value: string }[];
}

type SendEmailResult = {
  id: string | null;
  skipped: boolean;
  error?: unknown;
  errorMessage?: string;
};

const defaultFrom = process.env.RESEND_FROM_EMAIL ?? "notifications@nexaworks.tech";
const fallbackReplyTo = process.env.CONTACT_INBOX ?? "hello@nexaworks.tech";

export async function sendEmail(options: SendEmailOptions): Promise<SendEmailResult> {
  if (!client) {
    console.warn("Resend client is not configured. Skipping email send.");
    return { id: null, skipped: true };
  }

  try {
    const response = await client.emails.send({
      from: options.from ?? defaultFrom,
      replyTo: options.replyTo ?? fallbackReplyTo,
      to: options.to,
      subject: options.subject,
      react: options.react,
      html: options.html,
      text: options.text,
      tags: options.tags,
    });

    if (response.error) {
      return {
        id: null,
        skipped: false,
        error: response.error,
        errorMessage: response.error.message,
      };
    }

    return {
      id: response.data?.id ?? null,
      skipped: false,
    };
  } catch (error) {
    console.error("Failed to send email via Resend", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error while sending email.";

    return {
      id: null,
      skipped: false,
      error,
      errorMessage,
    };
  }
}

export { client as resendClient };
export type { SendEmailResult };
