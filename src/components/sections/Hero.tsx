"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Check } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Direct Pilot Request",
          email: email,
          company: "Unknown (Hero Lead)",
          message: "Lead requested a pilot directly from the hero section email input.",
          role: "Pilot Prospect",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-white pt-[120px] pb-24 border-b border-[#E4E4E7]">
      {/* Subtle Geometric Background Grid (Pylon Style) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="black" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Decorative Brand Blurs */}
      <div className="absolute top-20 left-0 h-64 w-64 bg-[#D35A3C] opacity-[0.03] blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-[#D35A3C] opacity-[0.05] blur-3xl z-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="font-sans text-5xl font-medium tracking-tight text-[#09090B] sm:text-6xl md:text-[4.5rem] leading-[1.1]">
            The operational memory layer <br className="hidden sm:block" /> <span className="text-[#D35A3C]">for modern companies.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-[#52525B]">
            NexaWorks turns scattered company knowledge across Slack, Notion, SOPs, tickets, meetings, and internal tools into one trusted, AI-ready source of truth.
          </p>
          <p className="mt-4 max-w-2xl text-lg font-medium text-[#09090B]">
            Start with support operations, where stale answers, conflicting guidance, and repeated interruptions create the most immediate pain.
          </p>

          <form onSubmit={handleSubmit} className="mt-12 w-full max-w-lg relative">
            <div className={`flex flex-col sm:flex-row w-full items-stretch sm:items-center p-1.5 gap-3 sm:gap-0 shadow-2xl border ${status === 'success' ? 'border-green-500 bg-green-50' : 'border-[#E4E4E7] bg-white'} rounded-3xl sm:rounded-full transition-all`}>
              <input 
                required
                disabled={status === "loading" || status === "success"}
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={status === "success" ? "Success! We'll reach out." : "Enter Work Email"} 
                className="flex-1 px-6 py-4 sm:py-3 text-[#09090B] placeholder-[#A1A1AA] outline-none bg-transparent disabled:opacity-50 text-center sm:text-left"
              />
              <button 
                disabled={status === "loading" || status === "success"}
                type="submit"
                className={`flex items-center justify-center gap-2 px-8 py-4 sm:py-3.5 rounded-2xl sm:rounded-full font-medium tracking-wide transition-all shadow-md active:scale-95 min-w-full sm:min-w-[160px] ${
                  status === "success" 
                    ? "bg-green-600 text-white cursor-default" 
                    : "bg-[#09090B] text-white hover:bg-[#27272A]"
                }`}
              >
                {status === "loading" ? (
                  <>Sending... <Loader2 className="h-4 w-4 animate-spin" /></>
                ) : status === "success" ? (
                  <>Sent! <Check className="h-4 w-4" /></>
                ) : (
                  "Request Pilot"
                )}
              </button>
            </div>
            {status === "error" && (
              <p className="absolute top-full mt-2 left-0 right-0 text-center text-xs text-red-600 font-medium">Something went wrong. Please try again.</p>
            )}
            <p className="absolute top-full mt-6 left-0 right-0 text-center text-sm text-[#52525B] font-medium tracking-wide mb-16">
              Built for growing B2B SaaS and AI teams
            </p>
          </form>

          {/* Product Proof Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-5xl mx-auto mt-24 rounded-2xl border border-[#E4E4E7] shadow-2xl overflow-hidden bg-white/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#FAFAFA] border-b border-[#E4E4E7]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E4E4E7]" />
            </div>
            <Image
              src="/images/hero-dashboard.png"
              alt="Knowledge Drift Alerts Dashboard"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
