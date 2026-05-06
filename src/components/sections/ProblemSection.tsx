"use client";

import { motion } from "framer-motion";

import { Badge } from "@/ui/Badge";
import { cn } from "@/lib/utils";

const comparisonData = [
  {
    metric: "Time to MVP",
    traditional: "12-16 weeks",
    nexaworks: "2-4 weeks",
  },
  {
    metric: "Time to Full Solution",
    traditional: "20 weeks",
    nexaworks: "5-12 weeks",
  },
  {
    metric: "Cost Model",
    traditional: "Hourly / Headcount (Expensive)",
    nexaworks: "Outcome-based (Risk-Shared)",
  },
  {
    metric: "Decision-Making",
    traditional: "Slow, Layers of Approval",
    nexaworks: "Fast, Founder-Led",
  },
  {
    metric: "Proven Results",
    traditional: "Upfront Roadmap, Not Demo",
    nexaworks: "Working Product, Live Demo",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0B] py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 z-0 h-40 bg-gradient-to-b from-[#10B981]/10 via-transparent to-transparent blur-3xl" aria-hidden="true" />
      <div className="container relative z-10 space-y-12">
        <motion.div
          className="flex flex-col gap-6 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="success" className="mx-auto w-fit sm:mx-0">
            Why teams switch to NexaWorks
          </Badge>
          <h2 className="font-display text-3xl font-semibold text-[#FAFAFA] sm:text-4xl md:text-[2.75rem]">
            SDR Teams Are Slow. You&apos;re Losing 60% of Your Potential Pipeline.
          </h2>
          <p className="max-w-3xl text-base text-[#A1A1AA] sm:text-lg">
            Traditional outbound burns your runway with manual prospecting and low-intent lists. NexaWorks ships autonomous AI engines that book meetings while your competitors are still drafting emails.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-[#27272A] bg-[#131316] shadow-[0_32px_65px_-32px_rgba(0,0,0,0.8)]">
          <div className="hidden md:block">
            <table className="w-full border-collapse text-left text-sm text-[#A1A1AA]">
              <thead className="bg-[#1A1A1F] text-[0.7rem] uppercase tracking-[0.3em] text-[#FAFAFA]/60">
                <tr>
                  <th scope="col" className="px-8 py-6">Comparison Metric</th>
                  <th scope="col" className="px-8 py-6">Traditional SDR Teams</th>
                  <th scope="col" className="px-8 py-6 text-[#10B981]">NexaWorks AI Engine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27272A]">
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.metric}
                    className="transition-colors duration-200 hover:bg-[#1A1A1F]"
                  >
                    <th scope="row" className="px-8 py-6 text-sm font-semibold text-[#FAFAFA]">
                      {row.metric}
                    </th>
                    <td className="px-8 py-6">{row.traditional}</td>
                    <td className="px-8 py-6 font-semibold text-[#10B981]">{row.nexaworks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-6 p-6 md:hidden">
            {comparisonData.map((row) => (
              <motion.div
                key={row.metric}
                className="space-y-4 rounded-2xl border border-[#27272A] bg-[#1A1A1F] p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[#A1A1AA]">Metric</span>
                  <span className="text-sm font-semibold text-[#FAFAFA]">{row.metric}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#FAFAFA]/40">
                    Traditional
                  </span>
                  <p className="text-sm text-[#A1A1AA]">{row.traditional}</p>
                </div>
                <div className="space-y-1 rounded-xl border border-[#10B981]/20 bg-[#10B981]/5 p-4">
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#10B981]">
                    NexaWorks
                  </span>
                  <p className="text-sm font-semibold text-[#10B981]">{row.nexaworks}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

}
