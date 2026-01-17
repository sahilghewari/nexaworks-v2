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
    <section className="relative isolate overflow-hidden bg-[#CBC8BA] py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-[#A3542B]/15 via-transparent to-transparent blur-3xl" aria-hidden="true" />
      <div className="container relative z-10 space-y-10">
        <motion.div
          className="flex flex-col gap-6 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="warning" className="mx-auto w-fit sm:mx-0">
            Why teams switch to NexaWorks
          </Badge>
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl md:text-[2.75rem]">
            Big Consultancies Are Slow. You&apos;re Losing Time &amp; Money.
          </h2>
          <p className="max-w-3xl text-base text-[#3F3A32] sm:text-lg">
            Traditional vendors burn your runway with decks and discovery. NexaWorks ships working software while others are still staffing the project.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-[#0D1015]/10 bg-[#B7B0A0]/60 shadow-[0_24px_60px_-24px_rgba(13,16,21,0.65)]">
          <div className="hidden md:block">
            <table className="w-full border-collapse text-left text-sm text-[#0D1015]">
              <thead className="bg-[#CBC8BA]/80 text-xs uppercase tracking-[0.3em] text-[#3F3A32]">
                <tr>
                  <th scope="col" className="px-6 py-4">Metric</th>
                  <th scope="col" className="px-6 py-4">Traditional Vendors</th>
                  <th scope="col" className="px-6 py-4 text-[#A3542B]">NexaWorks</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.metric}
                    className={cn(
                      "transition-colors duration-200",
                      index % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent",
                      "hover:bg-[#151C27]"
                    )}
                  >
                    <th scope="row" className="px-6 py-4 text-sm font-semibold text-[#0D1015]">
                      {row.metric}
                    </th>
                    <td className="px-6 py-4 text-[#3F3A32]">{row.traditional}</td>
                    <td className="px-6 py-4 font-semibold text-[#A3542B]">{row.nexaworks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-6 p-6 md:hidden">
            {comparisonData.map((row) => (
              <motion.div
                key={row.metric}
                className="space-y-3 rounded-xl border border-[#0D1015]/10 bg-[#CBC8BA]/90 p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">Metric</span>
                  <span className="text-sm font-semibold text-[#0D1015]">{row.metric}</span>
                </div>
                <div className="rounded-lg bg-[#B7B0A0] p-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#3F3A32]">
                    Traditional Vendors
                  </span>
                  <p className="mt-2 text-sm text-[#3F3A32]">{row.traditional}</p>
                </div>
                <div className="rounded-lg border border-[#A3542B]/40 bg-[#A3542B]/10 p-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A3542B]">
                    NexaWorks
                  </span>
                  <p className="mt-2 text-sm font-semibold text-[#A3542B]">{row.nexaworks}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
