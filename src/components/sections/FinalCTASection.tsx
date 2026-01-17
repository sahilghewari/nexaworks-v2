"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useModal } from "@/context/ModalContext";
import { ctaButtonVariants } from "@/ui/CTAButton";

export function FinalCTASection() {
  const { openContactModal } = useModal();

  return (
    <section className="relative isolate overflow-hidden bg-[#CBC8BA] py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 z-0 h-56 bg-gradient-to-b from-[#A3542B]/20 via-transparent to-transparent blur-3xl" aria-hidden="true" />
      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl border border-[#0D1015]/10 bg-gradient-to-br from-[#B7B0A0]/95 via-[#CBC8BA]/95 to-[#A79F90]/85 p-12 text-center shadow-[0_35px_75px_-30px_rgba(13,16,21,0.8)]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">
            Let&apos;s Talk About Your Automation Challenge
          </h2>
          <p className="mt-6 text-base text-[#3F3A32] sm:text-lg">
            Whether you&apos;re an enterprise tired of slow consultancies or a startup needing custom software, we can help. Schedule a free 30-minute consultation to see how we&apos;d approach your problem.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <button
              type="button"
              onClick={() => openContactModal({ message: "I want to schedule a demo." })}
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
            <button
              type="button"
              onClick={() => openContactModal({ message: "I would like a proposal for my project." })}
              className={ctaButtonVariants({ variant: "tertiary", size: "lg" })}
            >
              Get a Proposal
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
