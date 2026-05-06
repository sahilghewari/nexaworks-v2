"use client";

import { motion } from "framer-motion";
import { Search, Bot, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Signal Ingestion",
    description:
      "We don't use generic lists. We scrape real-time buying signals (recent funding, hiring sprees, tech stack changes) to build hyper-targeted, high-intent lead lists specific to your ICP.",
  },
  {
    icon: Bot,
    title: "2. AI Orchestration",
    description:
      "Our AI engines craft personalized, multi-channel sequences (Email, LinkedIn) that sound completely human. We handle infrastructure, domain warming, and inbox rotation to guarantee deliverability.",
  },
  {
    icon: CalendarCheck,
    title: "3. Qualified Meetings",
    description:
      "We don't just generate replies; we qualify and book them. High-intent demos drop straight onto your AE's calendar. You just show up and close the deal.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-[#0A0A0B] py-20 sm:py-32">
      <div className="container max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#10B981]">How We Work</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-[#FAFAFA] sm:text-4xl">
            The Done-For-You Pipeline Engine
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#A1A1AA] sm:text-lg">
            We handle the entire outbound process end-to-end. You don't need to hire SDRs, buy data tools, or manage complex sending infrastructure.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                className="relative flex flex-col gap-6 rounded-3xl border border-[#27272A] bg-[#131316] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10B981]/10 text-[#10B981]">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#FAFAFA]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA]">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
