"use client";

import { motion } from "framer-motion";

import { Badge } from "@/ui/Badge";

export function ServiceOverview() {
  return (
    <section className="bg-[#CBC8BA] py-20 sm:py-24">
      <div className="container">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col gap-6 text-center sm:gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="info" className="mx-auto w-fit">Services</Badge>
          <h1 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl md:text-[3rem]">
            Custom Automation &amp; AI. Fast. Proven. Accountable.
          </h1>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            We build private, production-grade software solutions with embedded AI so your teams can scale faster than headcount. No fluff, no endless discovery—just working systems that connect to your stack and drive measurable outcomes in weeks, not quarters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
