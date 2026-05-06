"use client";

import { motion } from "framer-motion";

const segments = [
  "B2B SaaS",
  "FinTech",
  "HR Tech",
  "DevTools",
  "Revenue Ops",
  "Growth Equity",
];

export function LogoCloud() {
  return (
    <div className="bg-[#0A0A0B] py-10 border-y border-[#27272A]/50">
      <div className="container">
        <p className="text-center text-[0.6rem] uppercase tracking-[0.4em] text-[#A1A1AA] mb-8">
          Trusted by high-growth teams across
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
          {segments.map((segment) => (
            <span
              key={segment}
              className="text-lg font-display font-semibold tracking-tight text-[#FAFAFA]"
            >
              {segment}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
