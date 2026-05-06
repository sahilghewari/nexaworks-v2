"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useModal } from "@/context/ModalContext";
import { ctaButtonVariants } from "@/ui/CTAButton";

export function FinalCTASection() {
  const { openContactModal } = useModal();

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0A0B] py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 z-0 h-56 bg-gradient-to-b from-[#10B981]/20 via-transparent to-transparent blur-3xl" aria-hidden="true" />
      <div className="container relative z-10">
        <motion.div
          className="mx-auto max-w-3xl rounded-3xl border border-[#27272A] bg-[#131316] p-12 text-center shadow-[0_35px_75px_-30px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl font-semibold text-[#FAFAFA] sm:text-4xl">
            Ready to generate $1M+ in pipeline?
          </h2>
          <p className="mt-6 text-base text-[#A1A1AA] sm:text-lg">
            Stop guessing with your outbound. Let our AI Revenue Engine do the heavy lifting while your team focuses on closing.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center">
            <Link
              href="/pipeline-audit"
              className={ctaButtonVariants({ variant: "primary", size: "lg" })}
            >
              Apply for a Pipeline Audit
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
