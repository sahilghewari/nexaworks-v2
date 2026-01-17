"use client";

import { motion } from "framer-motion";
import { Badge } from "@/ui/Badge";

const reasons = [
  {
    title: "Three founders, no hand-offs",
    description: "You work with the founders writing code. No account managers, no sales relay races.",
  },
  {
    title: "Proven velocity",
    description: "10 production builds in 8 months. Week-2 live slices, weekly demos, and rollback rehearsals by default.",
  },
  {
    title: "Risk on us, not you",
    description: "Stop-rules in every engagement. If we miss the gate, we pause, fix, or you don’t pay to proceed.",
  },
  {
    title: "We say no often",
    description: "We reject staff-aug asks, endless discovery, and “just a deck.” We only engage with a KPI and an owner.",
  },
];

export function WhyChooseNexaWorks() {
  return (
    <section className="bg-[#E7E2D6] py-20 sm:py-24">
      <div className="container space-y-10">
        <motion.div
          className="space-y-3 text-center sm:text-left"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Badge variant="warning" className="mx-auto w-fit sm:mx-0">Why Choose NexaWorks?</Badge>
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">Partners who stay on the hook</h2>
          <p className="text-base text-[#3F3A32] sm:text-lg">How we differ from vendors who sell decks and staff headcount.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="space-y-2 rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] p-6 shadow-[0_24px_60px_-32px_rgba(13,16,21,0.75)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#3F3A32]">{reason.title}</p>
              <p className="text-sm leading-relaxed text-[#0D1015]">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
