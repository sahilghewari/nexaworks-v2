"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useModal } from "@/context/ModalContext";
import { ctaButtonVariants } from "@/ui/CTAButton";

export function FinalCTASection() {
  return (
    <section className="bg-white py-32 border-t border-[#E4E4E7]">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-5xl font-medium tracking-tight text-[#09090B]">
          Ready to automate your support?
        </h2>
        <p className="mt-6 text-xl text-[#52525B] max-w-2xl mx-auto">
          Stop wasting time on repetitive tickets. Let our AI handle the volume while your team focuses on solving complex customer problems.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/contact"
            className="text-[17px] font-semibold text-white bg-[#6366F1] px-8 py-4 hover:bg-[#4F46E5] transition-colors"
          >
            Book a demo
          </Link>
          <Link
            href="/case-studies"
            className="text-[17px] font-semibold text-[#09090B] bg-[#F4F4F5] px-8 py-4 hover:bg-[#E4E4E7] transition-colors"
          >
            Read Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
