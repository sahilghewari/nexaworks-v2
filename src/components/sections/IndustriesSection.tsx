"use client";

import { motion } from "framer-motion";

import { Badge } from "@/ui/Badge";

const industries = [
  "HR Tech",
  "Operations Automation",
  "Legal Tech",
  "E-commerce",
  "Finance",
  "SaaS",
] as const;

export function IndustriesSection() {
  return (
    <section className="bg-[#E7E2D6] py-24 sm:py-28">
      <div className="container space-y-12">
        <motion.div
          className="flex flex-col gap-6 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge className="mx-auto w-fit sm:mx-0">Industries</Badge>
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl md:text-[2.75rem]">
            We Work Across Industries. One Problem at a Time.
          </h2>
          <p className="max-w-2xl text-base text-[#3F3A32] sm:text-lg">
            We don&apos;t specialize in one industry. We specialize in solving ONE operational problem across industries—and solving it well.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {industries.map((industry) => (
            <motion.span
              key={industry}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            >
              <Badge className="border-[#A3542B]/40 bg-[#A3542B]/10 text-[#A3542B]">
                {industry}
              </Badge>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
