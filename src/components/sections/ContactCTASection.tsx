"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ctaButtonVariants } from "@/ui/CTAButton";

export function ContactCTASection() {
  return (
    <section className="bg-[#0D1015] py-20 sm:py-24">
      <div className="container">
        <motion.div
          className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/90 via-[#0D1015]/90 to-[#1F2937]/80 p-10 text-center shadow-[0_28px_70px_-32px_rgba(15,23,42,0.8)] sm:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#9CA3AF]">The Journey Ahead</p>
          <h2 className="font-display text-3xl font-semibold text-[#CBC8BA] sm:text-4xl">
            We&apos;re still very early—and that&apos;s the advantage.
          </h2>
          <p className="text-base text-[#9CA3AF] sm:text-lg">
            If you need production-grade software fast, let&apos;s talk. We&apos;ll show you live work, share our playbooks, and map a path to the first measurable win.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className={ctaButtonVariants({ variant: "primary", size: "lg" })}
            >
              Schedule Consultation
            </Link>
            <Link
              href="mailto:hello@nexaworks.com"
              className={ctaButtonVariants({ variant: "secondary", size: "lg" })}
            >
              Email Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
