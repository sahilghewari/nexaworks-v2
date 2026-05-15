"use client";

import { useState } from "react";
import { Check, ShieldCheck, Zap, Globe, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: "Pilot Request",
      message: `Primary Pain Point: ${formData.get("painPoint")}`,
      role: "Pilot Lead",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Request sent successfully! Our team will reach out shortly.");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again or email us directly.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Failed to connect to the server. Please check your connection.");
    }
  }

  return (
    <main className="bg-white min-h-screen py-36">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left: Value Prop */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-[#09090B] mb-8 leading-[1.05]">
                Start your free <br /> <span className="text-[#D35A3C]">Support Ops Pilot.</span>
              </h1>
              <p className="text-xl text-[#52525B] leading-relaxed max-w-lg mb-12">
                Join the next generation of support teams using operational memory to deliver perfect, automated resolutions.
              </p>
              
              <div className="space-y-10 mt-12">
                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-[#D35A3C]/10 p-2 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-[#D35A3C]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#09090B]">Enterprise-Grade Security</h3>
                    <p className="text-[#71717A] mt-1">Your data is isolated, encrypted, and never used to train public models.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-[#D35A3C]/10 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-[#D35A3C]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#09090B]">Zero-Configuration Setup</h3>
                    <p className="text-[#71717A] mt-1">Index your existing Slack, Jira, and Notion docs in under 10 minutes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="mt-1 bg-[#D35A3C]/10 p-2 rounded-lg">
                    <Globe className="h-6 w-6 text-[#D35A3C]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#09090B]">Omnichannel Ready</h3>
                    <p className="text-[#71717A] mt-1">Deploy deterministic agents across Email, WhatsApp, and Web Portal.</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-[#E4E4E7]">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-[#F4F4F5] flex items-center justify-center font-bold text-[10px] text-[#09090B]">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-[#71717A]">
                    Trusted by <span className="text-[#09090B] font-bold">50+ enterprise teams</span> <br /> across India and beyond.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-[#E4E4E7] rounded-3xl p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 h-32 w-32 bg-[#D35A3C] opacity-[0.03] blur-3xl rounded-full" />
            
            <h2 className="text-2xl font-bold text-[#09090B] mb-8">Request Pilot Access</h2>
            
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#09090B] mb-2">Request Sent!</h3>
                <p className="text-[#52525B]">{message}</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-sm font-bold text-[#D35A3C] hover:underline"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#71717A]">First name</label>
                    <input 
                      required
                      name="firstName"
                      type="text" 
                      placeholder="Jane"
                      className="px-5 py-4 rounded-xl border border-[#E4E4E7] bg-[#F9FAFB] outline-none focus:border-[#09090B] focus:ring-1 focus:ring-[#09090B] transition-all" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#71717A]">Last name</label>
                    <input 
                      required
                      name="lastName"
                      type="text" 
                      placeholder="Doe"
                      className="px-5 py-4 rounded-xl border border-[#E4E4E7] bg-[#F9FAFB] outline-none focus:border-[#09090B] focus:ring-1 focus:ring-[#09090B] transition-all" 
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#71717A]">Work email</label>
                  <input 
                    required
                    name="email"
                    type="email" 
                    placeholder="jane@company.com"
                    className="px-5 py-4 rounded-xl border border-[#E4E4E7] bg-[#F9FAFB] outline-none focus:border-[#09090B] focus:ring-1 focus:ring-[#09090B] transition-all" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#71717A]">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="px-5 py-4 rounded-xl border border-[#E4E4E7] bg-[#F9FAFB] outline-none focus:border-[#09090B] focus:ring-1 focus:ring-[#09090B] transition-all" 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#71717A]">What is your primary support pain point?</label>
                  <select name="painPoint" className="px-5 py-4 rounded-xl border border-[#E4E4E7] bg-[#F9FAFB] outline-none focus:border-[#09090B] focus:ring-1 focus:ring-[#09090B] transition-all appearance-none cursor-pointer">
                    <option>Knowledge Silos (Slack/Notion/Jira)</option>
                    <option>High Support Volume / Ticket Backlog</option>
                    <option>AI Hallucinations / Accuracy Issues</option>
                    <option>Agent Onboarding Speed</option>
                  </select>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600 font-medium">{message}</p>
                )}

                <button 
                  disabled={status === "loading"}
                  type="submit"
                  className="bg-[#09090B] !text-white px-8 py-5 rounded-xl font-bold hover:bg-[#27272A] transition-all shadow-xl active:scale-[0.98] mt-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>Sending... <Loader2 className="h-4 w-4 animate-spin" /></>
                  ) : (
                    <>Send Request <Zap className="h-4 w-4 fill-white" /></>
                  )}
                </button>
                
                <p className="text-center text-sm text-[#A1A1AA] mt-2">
                  No credit card required. 14-day free pilot.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </main>
  );
}
