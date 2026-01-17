"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useModal } from "@/context/ModalContext";
import { ctaButtonVariants } from "@/ui/CTAButton";

export function ServiceCTASection() {
  const { openContactModal } = useModal();

  return (
    <section className="relative isolate overflow-hidden bg-[#E7E2D6] py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 z-0 h-56 bg-gradient-to-b from-[#A3542B]/20 via-transparent to-transparent blur-3xl" aria-hidden="true" />
      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-[#0D1015]/10 bg-gradient-to-br from-[#B7B0A0]/95 via-[#CBC8BA]/95 to-[#A79F90]/85 p-12 text-center shadow-[0_35px_75px_-30px_rgba(13,16,21,0.8)]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">
            See it running in your stack.
          </h2>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            Bring one workflow and the metric that hurts. We&apos;ll demo a live slice, share the cutover plan, and set the stop-rule. No slides, just software.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <button
              type="button"
              onClick={() => openContactModal({ message: "I want to schedule an automation demo." })}
              className={ctaButtonVariants({ variant: "primary", size: "lg" })}
            >
              See a live slice
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
