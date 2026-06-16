"use client";

import { motion } from "framer-motion";

const partners = [
  "SutraHR",
  "Epischoler",
  "Magic AI",
  "Zeroday",
];

export function SocialProofBanner() {
  return (
    <div className="bg-[#FAFAFA] py-16 border-b border-[#E4E4E7] flex flex-col items-center">
      <p className="text-sm font-semibold text-[#52525B] uppercase tracking-widest mb-8">Built with early-stage design partners</p>
      
      <div className="w-full max-w-4xl mx-auto flex flex-wrap justify-center gap-12 md:gap-24 px-6">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-[#09090B] opacity-60 hover:opacity-100 transition-opacity cursor-default"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
}
