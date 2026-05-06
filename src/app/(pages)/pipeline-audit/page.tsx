"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ctaButtonVariants } from "@/components/ui/CTAButton";
import { submitAuditApplication } from "@/app/actions";
import { CheckCircle2, Loader2, AlertCircle, Sparkles } from "lucide-react";

export default function PipelineAuditPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await submitAuditApplication(formData);

      if (result.success) {
        setStatus("success");
        // Scroll to top to ensure success screen is visible
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Connection lost. Please check your internet and try again.");
    }
  }

  return (
    <main className="flex-1 bg-[#0A0A0B] py-20 sm:py-32 min-h-screen">
      <div className="container max-w-4xl px-6">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-20 text-center space-y-8"
            >
              <div className="relative">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200 }}
                  className="h-24 w-24 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50"
                >
                  <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-4 rounded-full bg-emerald-500/10 blur-xl"
                />
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-4xl font-bold text-[#FAFAFA]">Application Received</h1>
                <p className="text-xl text-[#A1A1AA] max-w-md mx-auto">
                  Your pipeline audit is being prioritized. Check your email (including spam) for a scheduling link from our founders.
                </p>
              </div>

              <button 
                onClick={() => setStatus("idle")}
                className={ctaButtonVariants({ variant: "secondary", size: "lg" })}
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-12 text-center">
                <Badge variant="info" className="mb-6 bg-white/5 text-[#A1A1AA] border-none px-4 py-1">
                  <Sparkles className="mr-2 h-3 w-3 text-emerald-500" />
                  Limited spots available this month
                </Badge>
                <h1 className="font-display text-4xl font-bold text-[#FAFAFA] sm:text-6xl tracking-tight">
                  Start your <span className="text-emerald-500">Pipeline Audit</span>.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A1A1AA]">
                  We&apos;ll find at least 3 ways to increase your qualified pipeline by 30% — or we pay you $500.
                </p>
              </div>

              <div className="rounded-3xl border border-[#27272A] bg-[#131316] p-8 shadow-[0_32px_65px_-32px_rgba(0,0,0,0.8)] sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-30" />
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-[#FAFAFA] flex items-center gap-2">
                        Work Email <span className="text-emerald-500">*</span>
                      </label>
                      <input 
                        name="email"
                        type="email" 
                        className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981] placeholder:text-[#3F3F46]" 
                        placeholder="name@company.com"
                        required 
                        disabled={status === "submitting"}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-[#FAFAFA] flex items-center gap-2">
                        Mobile Number <span className="text-emerald-500">*</span>
                      </label>
                      <input 
                        name="phone"
                        type="tel" 
                        className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981] placeholder:text-[#3F3F46]" 
                        placeholder="+1 (555) 000-0000"
                        required 
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="grid gap-8 sm:grid-cols-2">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-[#FAFAFA]">Full Name</label>
                      <input 
                        name="name"
                        type="text" 
                        className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981] placeholder:text-[#3F3F46]" 
                        placeholder="John Doe"
                        required 
                        disabled={status === "submitting"}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-[#FAFAFA]">Company Website</label>
                      <input 
                        name="website"
                        type="url" 
                        className="w-full rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981] placeholder:text-[#3F3F46]" 
                        placeholder="https://company.com"
                        required 
                        disabled={status === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-[#FAFAFA]">Monthly Lead Gen Spend</label>
                    <div className="relative">
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
                      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#A1A1AA]">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-[#FAFAFA]">Primary Outbound Bottleneck</label>
                    <textarea 
                      name="bottleneck"
                      className="h-32 w-full resize-none rounded-xl border-none bg-[#1A1A1F] p-4 text-[#FAFAFA] outline-none ring-1 ring-[#27272A] transition focus:ring-2 focus:ring-[#10B981] placeholder:text-[#3F3F46]" 
                      required 
                      placeholder="What's preventing you from hitting your pipeline targets right now?"
                      disabled={status === "submitting"}
                    />
                  </div>

                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-center gap-3 rounded-xl bg-red-500/10 p-4 text-sm text-red-500 border border-red-500/20"
                      >
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
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
                      className: "mt-4 w-full flex items-center justify-center gap-3 h-14 text-lg" 
                    })}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Engineering your Audit...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>

                  <p className="text-center text-xs text-[#A1A1AA]">
                    Your data is secure and never used for public AI training.
                  </p>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
