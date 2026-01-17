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
            We built the studio we wished existed.
          </h2>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            Founder-led engineering, production delivery, and partners who own risk. No sales relay races. No pitch decks without code.
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
              May 2025: three founders were leading delivery for venture-backed teams. Projects kept stalling—not because ideas were weak, but because vendors hid behind decks and headcount. We decided to change that.
            </p>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              July 2025: NexaWorks. Founder-level accountability, senior engineers who code daily, delivery compressed from quarters to weeks. No sales theater—just live demos, KPIs, and transparent architecture.
            </p>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              First eight months: 10 production products shipped—AI resume screening, automated reporting, real-time analytics, legal research copilots. Trust earned by shipping, not by pitching.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4 rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] p-8 shadow-[0_26px_70px_-30px_rgba(13,16,21,0.8)]"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-[#0D1015]">What we refuse</h3>
            <ul className="space-y-2 text-sm leading-relaxed text-[#3F3A32]">
              <li>No staff-aug masquerading as product teams.</li>
              <li>No endless discovery without a KPI and owner.</li>
              <li>No “trust us” slides—only working software and rollback plans.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
