"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    range: "Months 1-2",
    title: "Prove the Model",
    what: "Built two production pilots (AI resume screening, automated reporting) with transparent demos.",
    outcome: "Closed first enterprise pilots and validated 5x faster delivery cadence.",
  },
  {
    range: "Months 3-4",
    title: "Scale Delivery",
    what: "Hired core engineers, hardened infra, added QA automation and observability defaults.",
    outcome: "Shipped three additional products with 99%+ reliability and repeatable playbooks.",
  },
  {
    range: "Months 5-6",
    title: "Expand AI Surface",
    what: "Built analytics dashboard, added LLM copilots, standardized data pipelines for new verticals.",
    outcome: "Demonstrated revenue tracking to $179K and real-time insights across clients.",
  },
  {
    range: "Months 7-8",
    title: "Institutionalize Craft",
    what: "Documented delivery rituals, partner onboarding, and risk reviews; launched legal AI research track.",
    outcome: "Operational maturity to handle concurrent builds with founder-level oversight on every sprint.",
  },
];

export function TimelineSection() {
  return (
    <section className="bg-[#0D1015] py-20 sm:py-24">
      <div className="container space-y-10">
        <motion.div
          className="space-y-3 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#9CA3AF]">First 8 Months</p>
          <h2 className="font-display text-3xl font-semibold text-[#CBC8BA] sm:text-4xl">Trajectory, Not Hype</h2>
          <p className="text-base text-[#9CA3AF] sm:text-lg">Four phases that took us from day one to a portfolio of ten shipped products.</p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#FF2003] via-[#9CA3AF]/40 to-transparent sm:left-1/2" aria-hidden="true" />
          <div className="space-y-8 sm:space-y-10">
            {milestones.map((item, index) => (
              <motion.div
                key={item.range}
                className="grid gap-4 rounded-3xl border border-white/10 bg-[#0A0D12] p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.75)] sm:grid-cols-[1fr,2fr] sm:items-start sm:gap-6"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
              >
                <div className="relative space-y-2">
                  <div className="absolute -left-[19px] top-2 h-3 w-3 rounded-full bg-[#FF2003] ring-4 ring-[#FF2003]/20 sm:-left-[7px]" aria-hidden="true" />
                  <p className="text-xs uppercase tracking-[0.3em] text-[#9CA3AF]">{item.range}</p>
                  <h3 className="text-xl font-semibold text-[#CBC8BA]">{item.title}</h3>
                </div>
                <div className="space-y-3 text-sm leading-relaxed text-[#9CA3AF]">
                  <p>
                    <span className="text-[#CBC8BA]">What we did: </span>
                    {item.what}
                  </p>
                  <p>
                    <span className="text-[#CBC8BA]">Outcome: </span>
                    {item.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
