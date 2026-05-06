"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useModal } from "@/context/ModalContext";
import { ctaButtonVariants } from "@/ui/CTAButton";

export function ServiceCTASection() {
  const { openContactModal } = useModal();

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0B] py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 z-0 h-64 bg-gradient-to-b from-[#10B981]/15 via-transparent to-transparent blur-3xl" aria-hidden="true" />
      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-4xl space-y-8 rounded-[3rem] border border-[#27272A] bg-[#131316] p-12 sm:p-20 text-center shadow-[0_45px_100px_-30px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-display text-4xl font-semibold text-[#FAFAFA] sm:text-5xl leading-tight">
            Design your <span className="text-[#10B981]">Revenue System</span> today.
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
            Stop guessing why your pipeline is dry. We&apos;ll audit your current outbound stack, identify the leaks, and show you exactly how an AI Engine can fix them in 14 days.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center pt-4">
            <button
              type="button"
              onClick={() => openContactModal({ message: "I want to schedule a 15-min pipeline audit." })}
              className={ctaButtonVariants({ variant: "primary", size: "lg" })}
            >
              Book 15-Min Pipeline Audit
            </button>
            <Link
              href="/case-studies"
              className={ctaButtonVariants({ variant: "secondary", size: "lg" })}
            >
              See Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

