"use client";

import { motion } from "framer-motion";

import { Badge } from "@/ui/Badge";

export function CompanyStorySection() {
  return (
    <section className="bg-[#E7E2D6] py-20 sm:py-24">
      <div className="container space-y-10">
        <motion.div
          className="space-y-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="info" className="mx-auto w-fit sm:mx-0">Our Origin</Badge>
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">
            We Started Because We Saw a Gap Nobody Was Filling
          </h2>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            Founder-led engineering, production-grade delivery, and accountable partnerships—those three ingredients were missing for teams racing to ship automation and AI. So we built the studio we always wished existed.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          <motion.div
            className="space-y-6 rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] p-8 shadow-[0_26px_70px_-30px_rgba(13,16,21,0.8)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          >
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              May 2025: three founders were leading delivery for venture-backed teams and enterprise innovation pods. Projects kept stalling—not because ideas were weak, but because vendors moved slowly, shipped slideware, and avoided owning outcomes. We decided to change that.
            </p>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              July 2025, NexaWorks was born. We set out to prove that founder-level accountability plus senior engineers who code every day could compress delivery from quarters to weeks. We skipped the sales theater and led with live demos, measurable KPIs, and transparent architecture.
            </p>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              In the first eight months we shipped ten production-grade products—AI resume screening, automated reporting, real-time analytics, and legal research copilots—earning trust with speed, reliability, and honest communication.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] p-8 shadow-[0_26px_70px_-30px_rgba(13,16,21,0.8)]"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-[#0D1015]">The Biggest Challenge</h3>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              The market had plenty of vendors and plenty of hype, but not enough partners willing to own risk. We heard the same founder complaint: “our last vendor delivered pretty decks, not working code.” NexaWorks exists to reverse that experience—shipping auditable, reliable systems with founders who stay on the hook.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
