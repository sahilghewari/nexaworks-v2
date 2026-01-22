"use client";

import React, { useState } from "react";

type FormState = {
  startupName: string;
  founderName: string;
  email: string;
  country: string;
  productLink: string;
  mau: number | "";
  revenue?: string;
  fundingStage: string;
  pitch: string;
  mvpDescription: string;
  techConstraints?: string;
  startDate: string;
  meetingCommit: string;
  acceptCosts: string;
  consent: boolean;
};

export default function RepublicDayForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    startupName: "",
    founderName: "",
    email: "",
    country: "",
    productLink: "",
    mau: "",
    revenue: "",
    fundingStage: "bootstrapped",
    pitch: "",
    mvpDescription: "",
    techConstraints: "",
    startDate: "",
    meetingCommit: "yes",
    acceptCosts: "yes",
    consent: false,
  });

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  function next() {
    setError(null);
    if (step === 1) {
      if (!form.startupName || !form.founderName || !form.email || !form.productLink) {
        setError("Please fill required fields.");
        return;
      }
    }
    if (step === 2) {
      if (form.mau === "" || form.pitch.length < 10) {
        setError("Please provide traction and a short pitch.");
        return;
      }
    }
    setStep((s) => s + 1);
  }

  function prev() {
    setError(null);
    setStep((s) => Math.max(1, s - 1));
  }

  async function submit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "form_submit_start", campaign: "republic_day_mvp" });

      const res = await fetch("/api/campaigns/republic-day-2026/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j?.error || "Submission failed");

      window.dataLayer.push({ event: "form_submit", campaign: "republic_day_mvp" });
      setSuccess(j.message ?? "Application submitted.");
      setStep(4);
    } catch (err: any) {
      setError(err?.message ?? "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-[#0D1015]/10 bg-[#CBC8BA] p-6">
        <h3 className="text-lg font-semibold">Application received</h3>
        <p className="mt-2 text-sm">{success}</p>
      </div>
    );
  }

  const progressWidth = `${Math.round(((step - 1) / (4 - 1)) * 100)}%`;

  return (
    <div className="rounded-2xl border border-[#0D1015]/10 bg-white p-6 shadow sm:p-8 dark:bg-neutral-900">
      <form onSubmit={submit} className="space-y-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm font-medium">Step {step} of 4</div>
          <div className="ml-4 flex-1">
            <div className="h-2 w-full rounded-full bg-[#E6E9F2] dark:bg-neutral-800">
              <div className="h-2 rounded-full bg-[#3d52a0]" style={{ width: progressWidth }} />
            </div>
          </div>
        </div>
        {step === 1 && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Startup name *</label>
              <input placeholder="Your startup name" value={form.startupName} onChange={(e) => update("startupName", e.target.value)} className="w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium">Founder name *</label>
              <input placeholder="Founder full name" value={form.founderName} onChange={(e) => update("founderName", e.target.value)} className="w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium">Work email *</label>
              <input placeholder="name@yourstartup.com" value={form.email} onChange={(e) => update("email", e.target.value)} type="email" className="w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium">Country</label>
              <input placeholder="Country" value={form.country} onChange={(e) => update("country", e.target.value)} className="w-full rounded-md border px-3 py-2" />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Website / product link (required)</label>
              <input placeholder="https://yourproduct.link" value={form.productLink} onChange={(e) => update("productLink", e.target.value)} className="w-full rounded-md border px-3 py-2" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium">Monthly active users / signups</label>
              <input placeholder="0" value={form.mau as any} onChange={(e) => update("mau", e.target.value === "" ? "" : Number(e.target.value))} type="number" className="w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium">Revenue / ARR (optional)</label>
              <input placeholder="e.g. $5k MRR" value={form.revenue} onChange={(e) => update("revenue", e.target.value)} className="w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium">Funding stage</label>
              <select value={form.fundingStage} onChange={(e) => update("fundingStage", e.target.value)} className="w-full rounded-md border px-3 py-2">
                <option value="bootstrapped">Bootstrapped</option>
                <option value="pre-seed">Pre-seed</option>
                <option value="seed">Seed</option>
                <option value="funded">Funded</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium">Short pitch (50–100 chars)</label>
              <input placeholder="One-line pitch" value={form.pitch} onChange={(e) => update("pitch", e.target.value)} maxLength={100} className="w-full rounded-md border px-3 py-2" />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <label className="block text-sm font-medium">Describe the MVP (max 300 words)</label>
            <textarea placeholder="Describe the core user flow and the single most important metric" value={form.mvpDescription} onChange={(e) => update("mvpDescription", e.target.value)} maxLength={2000} className="w-full min-h-[140px] rounded-md border px-3 py-2" />

            <label className="block text-sm font-medium">Preferred tech constraints (optional)</label>
            <input placeholder="e.g. Next.js + Node" value={form.techConstraints} onChange={(e) => update("techConstraints", e.target.value)} className="w-full rounded-md border px-3 py-2" />

            <label className="block text-sm font-medium">Available start date (must be within Jan 25–31)</label>
            <input value={form.startDate} onChange={(e) => update("startDate", e.target.value)} type="date" className="w-full rounded-md border px-3 py-2" />

            <label className="block text-sm font-medium">Links to analytics / prototype / deck (optional)</label>
            <input placeholder="Comma-separated links" value={form.mau as any} readOnly className="hidden" />
          </div>
        )}

        {step === 4 && (
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input checked={form.meetingCommit === "yes"} onChange={(e) => update("meetingCommit", e.target.checked ? "yes" : "no")} type="checkbox" />
              I can commit to weekly meetings and feedback.
            </label>
            <label className="flex items-center gap-2">
              <input checked={form.acceptCosts === "yes"} onChange={(e) => update("acceptCosts", e.target.checked ? "yes" : "no")} type="checkbox" />
              I accept domain & hosting charges if selected.
            </label>
            <label className="flex items-center gap-2">
              <input checked={form.consent} onChange={(e) => update("consent", e.target.checked)} type="checkbox" />
              I confirm this is my startup and information is accurate.
            </label>
          </div>
        )}

        <div className="flex items-center gap-3">
        {step > 1 && (
          <button type="button" onClick={prev} className="rounded-md border px-3 py-2">Back</button>
        )}
        {step < 4 && (
          <button type="button" onClick={next} className="rounded-md bg-[#3d52a0] px-4 py-2 text-white">Next</button>
        )}
        {step === 4 && (
          <button disabled={submitting || !form.consent} type="submit" className="rounded-md bg-[#ed8f5] px-4 py-2 text-white">{submitting ? "Submitting..." : "Submit application"}</button>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}
      </form>
    </div>
  );
}
