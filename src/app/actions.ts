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
      from: "NexaWorks <onboarding@resend.dev>",
      to: ["founders@nexaworks.tech"], // In production, replace with your verified email
      subject: `New Pipeline Audit Application: ${name}`,
      html: `
        <h1>New Pipeline Audit Application</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Monthly Spend:</strong> ${spend}</p>
        <p><strong>Primary Bottleneck:</strong></p>
        <p>${bottleneck}</p>
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
