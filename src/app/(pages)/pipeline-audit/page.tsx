"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ctaButtonVariants } from "@/components/ui/CTAButton";
import { submitAuditApplication } from "@/app/actions";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function PipelineAuditPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await submitAuditApplication(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#0A0A0B] py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 max-w-md px-6"
        >
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-emerald-500" />
          </div>
          <h1 className="font-display text-3xl font-bold text-[#FAFAFA]">Application Received</h1>
          <p className="text-[#A1A1AA]">
            Thank you for applying. Our technical team will review your funnel and reach out via email within 24 hours to schedule your audit.
          </p>
          <button 
            onClick={() => setStatus("idle")}
            className={ctaButtonVariants({ variant: "secondary", size: "lg", className: "w-full" })}
          >
            Back to Form
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-[#0A0A0B] py-20 sm:py-32">
      <div className="container max-w-4xl px-6">
        <div className="mb-12 text-center">
          <Badge variant="info" className="mb-6 bg-white/5 text-[#A1A1AA] border-none">
            Limited spots available this month
          </Badge>
          <h1 className="font-display text-4xl font-bold text-[#FAFAFA] sm:text-5xl">
            Apply for a Pipeline Acceleration Audit
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A1A1AA]">
            If we can&apos;t identify at least 3 actionable ways to increase your qualified pipeline by 30% using AI automation, we&apos;ll pay you $500 for your time.
          </p>
        </div>

        <div className="rounded-3xl border border-[#27272A] bg-[#131316] p-8 shadow-[0_32px_65px_-32px_rgba(0,0,0,0.5)] sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#FAFAFA]">Work Email</label>
                <input 
                  name="email"
                  type="email" 
                  className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" 
                  placeholder="name@company.com"
                  required 
                  disabled={status === "submitting"}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#FAFAFA]">Mobile Number</label>
                <input 
                  name="phone"
                  type="tel" 
                  className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" 
                  placeholder="+1 (555) 000-0000"
                  required 
                  disabled={status === "submitting"}
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#FAFAFA]">Full Name</label>
                <input 
                  name="name"
                  type="text" 
                  className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" 
                  placeholder="John Doe"
                  required 
                  disabled={status === "submitting"}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#FAFAFA]">Company Website</label>
                <input 
                  name="website"
                  type="url" 
                  className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" 
                  placeholder="https://company.com"
                  required 
                  disabled={status === "submitting"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#FAFAFA]">What is your current monthly lead generation spend?</label>
              <select 
                name="spend"
                className="w-full appearance-none rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" 
                required
                disabled={status === "submitting"}
              >
                <option value="">Select a range...</option>
                <option value="under5k">Under $5k / month</option>
                <option value="5k_15k">$5k - $15k / month</option>
                <option value="over15k">Over $15k / month</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#FAFAFA]">What is your primary outbound bottleneck right now?</label>
              <textarea 
                name="bottleneck"
                className="h-32 w-full resize-none rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981]" 
                required 
                placeholder="E.g., SDRs are too slow, open rates are dead, data scraping is manual..."
                disabled={status === "submitting"}
              />
            </div>

            <AnimatePresence>
              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-red-500/10 p-4 text-sm text-red-500"
                >
                  <AlertCircle className="h-4 w-4" />
                  {errorMessage}
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit" 
              disabled={status === "submitting"}
              className={ctaButtonVariants({ 
                variant: "primary", 
                size: "lg", 
                className: "mt-4 w-full flex items-center justify-center gap-2" 
              })}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
