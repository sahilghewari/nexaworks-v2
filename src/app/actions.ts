"use server";

import { Resend } from "resend";

export async function submitAuditApplication(formData: FormData) {
  // Initialize Resend inside the function to ensure ENV vars are loaded
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("CRITICAL: RESEND_API_KEY is missing from environment variables.");
    return { success: false, error: "Email service not configured. Please check Vercel ENV variables." };
  }

  const resend = new Resend(apiKey);

  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const name = formData.get("name") as string;
  const website = formData.get("website") as string;
  const spend = formData.get("spend") as string;
  const bottleneck = formData.get("bottleneck") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: "NexaWorks <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "nexaworks28@gmail.com"],
      subject: `[LEAD] New Pipeline Audit: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; color: #0A0A0B;">
          <h1 style="color: #10B981; font-size: 24px;">New High-Intent Lead</h1>
          <p>A new pipeline audit application has been submitted.</p>
          <div style="background: #f4f4f5; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Website:</strong> <a href="${website}" style="color: #10B981;">${website}</a></p>
            <p><strong>Monthly Spend:</strong> ${spend}</p>
          </div>
          <div style="border-left: 4px solid #10B981; padding-left: 15px; margin: 20px 0;">
            <p><strong>Bottleneck:</strong></p>
            <p>${bottleneck}</p>
          </div>
          <p style="font-size: 10px; color: #A1A1AA; margin-top: 40px;">
            Sent from NexaWorks Production Engine. Ref ID: ${Date.now()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Sending Error:", error);
      return { success: false, error: `Email Error: ${error.message}` };
    }

    console.log("Email sent successfully:", data?.id);
    return { success: true };
  } catch (error: any) {
    console.error("Server Action Crash:", error);
    return { success: false, error: error?.message || "Internal Server Error" };
  }
}
