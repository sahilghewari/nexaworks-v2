"use client";

import { motion } from "framer-motion";

const logos = [
  "SutraHR",
  "Epischoler",
  "Magic AI",
  "Zeroday",
  "SutraHR",
  "Epischoler",
  "Magic AI",
  "Zeroday",
];

export function SocialProofBanner() {
  return (
    <div className="bg-[#FAFAFA] py-12 border-b border-[#E4E4E7] overflow-hidden flex flex-col items-center">
      <p className="text-sm font-semibold text-[#52525B] uppercase tracking-widest mb-8">Trusted by Fast-Growing Teams</p>
      
      <div className="relative w-full max-w-6xl mx-auto flex overflow-hidden mask-image-linear-gradient">
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap px-8"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {logos.map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="text-2xl font-sans font-bold tracking-tight text-[#09090B] opacity-40 hover:opacity-100 transition-opacity cursor-default"
            >
              {logo}
            </span>
          ))}
          {logos.map((logo, index) => (
            <span
              key={`${logo}-${index}-dup`}
              className="text-2xl font-sans font-bold tracking-tight text-[#09090B] opacity-40 hover:opacity-100 transition-opacity cursor-default"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
