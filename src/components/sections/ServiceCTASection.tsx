"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useModal } from "@/context/ModalContext";
import { ctaButtonVariants } from "@/ui/CTAButton";

export function ServiceCTASection() {
  const { openContactModal } = useModal();

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0D12] py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 z-0 h-56 bg-gradient-to-b from-[#FF2003]/20 via-transparent to-transparent blur-3xl" aria-hidden="true" />
      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/95 via-[#0D1015]/95 to-[#1F2937]/85 p-12 text-center shadow-[0_35px_75px_-30px_rgba(15,23,42,0.8)]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl font-semibold text-[#CBC8BA] sm:text-4xl">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-base text-[#9CA3AF] sm:text-lg">
            Schedule a free 30-minute consultation. We&apos;ll map the opportunity, outline the quickest automation win, and show you the exact milestones to production.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <button
              type="button"
              onClick={() => openContactModal({ message: "I want to schedule an automation demo." })}
              className={ctaButtonVariants({ variant: "primary", size: "lg" })}
            >
              Schedule Demo
            </button>
            <Link
              href="/projects"
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
