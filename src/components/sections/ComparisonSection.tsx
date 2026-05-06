"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  {
    name: "Cost per qualified meeting",
    nexa: "$85 - $150",
    others: "$450 - $1,200",
    description: "AI automation slashes the cost of research and initial outreach by 80%.",
  },
  {
    name: "Ramp time to first meeting",
    nexa: "7 Days",
    others: "3 - 6 Months",
    description: "No hiring cycles or 3-month training periods. We demo week 1.",
  },
  {
    name: "Personalization quality",
    nexa: "Deep Intent-based",
    others: "Generic / Volume",
    description: "Our engines scrape real-time signals (LinkedIn, News, PR) for every message.",
  },
  {
    name: "Scalability",
    nexa: "Infinite / Instant",
    others: "Linear / Slow",
    description: "Scale from 100 to 10,000 prospects overnight without hiring more SDRs.",
  },
  {
    name: "Outreach Fatigue",
    nexa: "None (24/7)",
    others: "High (Burnout)",
    description: "AI doesn't get tired, frustrated, or miss follow-ups.",
  },
];

export function ComparisonSection() {
  return (
    <section className="py-24 bg-[#0A0A0B] border-t border-[#27272A]">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl">
            NexaWorks vs. <span className="text-emerald-500">Traditional SDRs</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#A1A1AA] max-w-2xl mx-auto">
            The math is simple. AI doesn't just improve your outbound — it fundamentally resets the unit economics of your sales team.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#27272A]">
                <th className="py-6 px-4 text-sm font-semibold uppercase tracking-wider text-[#A1A1AA]">Comparison Factor</th>
                <th className="py-6 px-4 text-lg font-bold text-emerald-500 bg-emerald-500/5 rounded-t-2xl">NexaWorks Engine</th>
                <th className="py-6 px-4 text-sm font-semibold text-[#A1A1AA]">Typical SDR Team</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#27272A]">
              {features.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <td className="py-8 px-4">
                    <p className="font-bold text-[#FAFAFA]">{feature.name}</p>
                    <p className="mt-1 text-xs text-[#A1A1AA]">{feature.description}</p>
                  </td>
                  <td className="py-8 px-4 bg-emerald-500/5">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-emerald-500" />
                      <span className="text-xl font-bold text-[#FAFAFA]">{feature.nexa}</span>
                    </div>
                  </td>
                  <td className="py-8 px-4">
                    <div className="flex items-center gap-2">
                      <X className="h-5 w-5 text-[#A1A1AA]/50" />
                      <span className="text-lg text-[#A1A1AA]">{feature.others}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#A1A1AA]">
            * Based on 2026 industry benchmarks for Series A/B B2B SaaS companies.
          </p>
        </div>
      </div>
    </section>
  );
}
