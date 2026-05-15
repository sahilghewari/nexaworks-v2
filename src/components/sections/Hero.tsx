"use client";

import { motion } from "framer-motion";

export function Hero() {
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
            Your support team is wasting hours <br className="hidden sm:block" /> <span className="text-[#D35A3C]">searching for answers.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-[#52525B]">
            CompanyBrain connects your scattered docs, past tickets, and chat history into one system. Instantly resolve customer issues with perfect accuracy—no more guessing or digging for context.
          </p>

          <div className="mt-12 flex w-full max-w-lg items-center p-1.5 shadow-2xl border border-[#E4E4E7] rounded-full bg-white">
            <input 
              type="email" 
              placeholder="Enter Work Email" 
              className="flex-1 px-6 py-3 text-[#09090B] placeholder-[#A1A1AA] outline-none bg-transparent"
            />
            <button className="bg-[#09090B] text-white px-8 py-3.5 rounded-full font-medium tracking-wide hover:bg-[#27272A] transition-all shadow-md active:scale-95">
              Request Pilot
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
