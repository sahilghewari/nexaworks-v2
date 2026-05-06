"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export function ROICalculator() {
  const [sdrCount, setSdrCount] = useState<number>(3);
  const [sdrSalary, setSdrSalary] = useState<number>(85000);

  // Basic calculation logic
  const currentAnnualCost = sdrCount * sdrSalary;
  // Assuming AI Engine costs $20k setup + $6k/month retainer = $92k/year
  const aiAnnualCost = 20000 + (6000 * 12);
  const annualSavings = Math.max(0, currentAnnualCost - aiAnnualCost);
  
  return (
    <section id="roi-calculator" className="bg-[#B7B0A0]/30 py-20 sm:py-24">
      <div className="container">
        <motion.div
          className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] shadow-[0_32px_65px_-32px_rgba(13,16,21,0.5)]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-10">
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#A3542B]/10 text-[#A3542B]">
                <Calculator className="h-6 w-6" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0D1015] sm:text-3xl">
                SaaS Pipeline ROI Calculator
              </h2>
              <p className="mt-4 text-[#3F3A32]">
                See how much you could save (and scale) by replacing manual outbound with an AI Revenue Engine.
              </p>

              <div className="mt-10 space-y-8">
                <div className="space-y-4">
                  <label className="flex items-center justify-between text-sm font-semibold text-[#0D1015]">
                    Number of SDRs
                    <span className="rounded-md bg-[#B7B0A0] px-3 py-1 text-[#A3542B]">{sdrCount}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={sdrCount}
                    onChange={(e) => setSdrCount(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#A79F90] accent-[#A3542B]"
                  />
                </div>

                <div className="space-y-4">
                  <label className="flex items-center justify-between text-sm font-semibold text-[#0D1015]">
                    Average SDR Salary (Fully Loaded)
                    <span className="rounded-md bg-[#B7B0A0] px-3 py-1 text-[#A3542B]">
                      ${sdrSalary.toLocaleString()}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="40000"
                    max="150000"
                    step="5000"
                    value={sdrSalary}
                    onChange={(e) => setSdrSalary(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#A79F90] accent-[#A3542B]"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#0D1015] p-8 text-white sm:p-10">
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/60">Annual Impact</h3>
              
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm text-white/60">Current Manual Cost</p>
                  <p className="font-display text-3xl font-semibold opacity-50 line-through">
                    ${currentAnnualCost.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-white/60">NexaWorks AI Engine Cost</p>
                  <p className="font-display text-3xl font-semibold text-[#A3542B]">
                    ${aiAnnualCost.toLocaleString()}
                  </p>
                  <p className="mt-1 text-xs text-white/40">*Includes setup + managed retainer</p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-white/60">Projected Annual Savings</p>
                  <p className="font-display text-5xl font-bold text-emerald-400">
                    ${annualSavings.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
