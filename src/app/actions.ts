"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitAuditApplication(formData: FormData) {
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const name = formData.get("name") as string;
  const website = formData.get("website") as string;
  const spend = formData.get("spend") as string;
  const bottleneck = formData.get("bottleneck") as string;

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.CONTACT_EMAIL || "nexaworks28@gmail.com"],
      subject: `New Pipeline Audit Application: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
          <h1 style="color: #10B981;">New Pipeline Audit Application</h1>
          <p>You have received a new application from the NexaWorks website.</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Website:</strong> <a href="${website}">${website}</a></p>
          <p><strong>Monthly Lead Gen Spend:</strong> ${spend}</p>
          <p><strong>Primary Bottleneck:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
            ${bottleneck}
          </div>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">Sent via NexaWorks AI Revenue Engine Platform</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Submission Error:", error);
    return { success: false, error: "Internal Server Error" };
  }
}
