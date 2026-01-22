import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/resend";

type Payload = any;

const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_PER_WINDOW = 6;
const ipMap = new Map<string, { count: number; first: number }>();

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get("x-forwarded-for") || "") || "unknown";

    const now = Date.now();
    const entry = ipMap.get(ip) ?? { count: 0, first: now };
    if (now - entry.first < RATE_LIMIT_WINDOW_MS) {
      entry.count += 1;
    } else {
      entry.count = 1;
      entry.first = now;
    }
    ipMap.set(ip, entry);
    if (entry.count > MAX_PER_WINDOW) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body: Payload = await req.json();
    // Basic validation
    if (!body.startupName || !body.founderName || !body.email || !body.productLink) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Simple traction-based tag
    const mau = Number(body.mau || 0);
    const hot = mau >= 1000 || (body.fundingStage && body.fundingStage !== "bootstrapped");

    // Store application in a simple DB placeholder (TODO: persist)
    // For now, send an email to the team including all submitted fields
    const subject = `Republic Day MVP application — ${body.startupName}`;

    const escapeHtml = (s: unknown) => {
      const str = String(s ?? "");
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#39;");
    };

    const textLines = [
      `Startup: ${body.startupName}`,
      `Founder: ${body.founderName}`,
      `Email: ${body.email}`,
      `Country: ${body.country || ""}`,
      `Website / Product Link: ${body.productLink}`,
      `Monthly active users / signups: ${body.mau ?? ""}`,
      `Revenue / ARR: ${body.revenue ?? ""}`,
      `Funding stage: ${body.fundingStage ?? ""}`,
      `Pitch: ${body.pitch ?? ""}`,
      `MVP description: ${body.mvpDescription ?? ""}`,
      `Tech constraints: ${body.techConstraints ?? ""}`,
      `Available start date: ${body.startDate ?? ""}`,
      `Can commit to meetings: ${body.meetingCommit ?? ""}`,
      `Accept domain & hosting charges: ${body.acceptCosts ?? ""}`,
      `Consent: ${body.consent ? "yes" : "no"}`,
      `IP: ${ip}`,
      `Received at: ${new Date().toISOString()}`,
    ];

    const text = textLines.join("\n");

    const html = `
      <div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #0d1015;">
        <h2>Republic Day MVP application — ${escapeHtml(body.startupName)}</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
          <tbody>
            ${textLines
              .map((line) => {
                const [k, ...rest] = line.split(": ");
                const v = rest.join(": ");
                return `<tr><td style="font-weight:600; vertical-align:top; width:200px;">${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    `;

    const sendResult = await sendEmail({
      to: process.env.CONTACT_INBOX ?? "hello@nexaworks.com",
      subject,
      text,
      html,
      tags: [
        { name: "campaign", value: "republic_day_2026" },
        { name: "hot", value: hot ? "1" : "0" },
      ],
    });

    // Send confirmation to applicant including submitted details summary
    const confirmText = `Thanks — we received your application for the Republic Day MVP program. We'll review and contact shortlisted startups for a 30-minute screening call within 48 hours.\n\nSummary:\n${text}`;

    const confirmHtml = `
      <div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #0d1015;">
        <p>Thanks — we received your application for the Republic Day MVP program. We'll review and contact shortlisted startups for a 30-minute screening call within 48 hours.</p>
        <h3>Application summary</h3>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
          <tbody>
            ${textLines
              .map((line) => {
                const [k, ...rest] = line.split(": ");
                const v = rest.join(": ");
                return `<tr><td style="font-weight:600; vertical-align:top; width:200px;">${escapeHtml(k)}</td><td>${escapeHtml(v)}</td></tr>`;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    `;

    await sendEmail({
      to: body.email,
      subject: "NexaWorks — Application Received (Republic Day MVP)",
      text: confirmText,
      html: confirmHtml,
    });

    return NextResponse.json({ ok: true, message: "Application received. We'll contact shortlisted startups." });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
