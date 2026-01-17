"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ctaButtonVariants } from "@/ui/CTAButton";

export function ContactCTASection() {
  return (
    <section className="bg-[#CBC8BA] py-20 sm:py-24">
      <div className="container">
        <motion.div
          className="flex flex-col gap-6 rounded-3xl border border-[#0D1015]/10 bg-gradient-to-br from-[#B7B0A0]/90 via-[#CBC8BA]/90 to-[#A79F90]/80 p-10 text-center shadow-[0_28px_70px_-32px_rgba(13,16,21,0.8)] sm:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#3F3A32]">The Journey Ahead</p>
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">
            We&apos;re still very early—and that&apos;s the advantage.
          </h2>
          <p className="text-base text-[#3F3A32] sm:text-lg">
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
