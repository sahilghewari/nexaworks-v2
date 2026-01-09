"use client";

import { motion } from "framer-motion";
import { Badge } from "@/ui/Badge";

const reasons = [
  {
    title: "We're Three Founders Who Code",
    description: "You work directly with the people writing code and making architectural calls, not an account team.",
  },
  {
    title: "We've Shipped 10 Products in 8 Months",
    description: "Battle-tested delivery rituals that move from brief to production with repeatable speed.",
  },
  {
    title: "We Take on the Risk",
    description: "Weekly demos, clear acceptance criteria, and founders who stay accountable for outcomes.",
  },
  {
    title: "We Understand Your Problem",
    description: "We translate messy requirements into precise scopes, then prove it with live software before scaling.",
  },
];

export function WhyChooseNexaWorks() {
  return (
    <section className="bg-[#0A0D12] py-20 sm:py-24">
      <div className="container space-y-10">
        <motion.div
          className="space-y-3 text-center sm:text-left"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Badge variant="warning" className="mx-auto w-fit sm:mx-0">Why Choose NexaWorks?</Badge>
          <h2 className="font-display text-3xl font-semibold text-[#CBC8BA] sm:text-4xl">Partners, not vendors</h2>
          <p className="text-base text-[#9CA3AF] sm:text-lg">Four reasons teams trust us with their most important launches.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="space-y-2 rounded-3xl border border-white/10 bg-[#0D1015] p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.75)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#9CA3AF]">{reason.title}</p>
              <p className="text-sm leading-relaxed text-[#CBC8BA]">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
