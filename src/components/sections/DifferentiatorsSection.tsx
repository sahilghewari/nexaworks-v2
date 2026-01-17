"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Handshake, Rocket } from "lucide-react";

import { Badge } from "@/ui/Badge";

const differentiators = [
  {
    icon: Rocket,
    title: "Speed",
    headline: "5x Faster Delivery",
    body: "Most vendors take 20 weeks for production-ready software. We compact that timeline to 5, shipping validated MVPs in weeks so you can test with real customers before doubling down.",
    example: "Talent marketplace launched in 5 weeks, unlocking paid pilot hires while competitors were still scoping.",
    cta: { label: "Learn More", href: "/process" },
  },
  {
    icon: Brain,
    title: "Practical AI",
    headline: "AI That Works, Not AI That Talks",
    body: "We embed NLP, ML, and automation exactly where it moves the needle. No buzzwords, no fragile demos—just dependable intelligence that scales.",
    example: "Resume analyzer hit 95% parsing accuracy, processing thousands of submissions in minutes without manual QA.",
    cta: { label: "See AI Capabilities", href: "/services" },
  },
  {
    icon: Handshake,
    title: "Accountability",
    headline: "Direct Access, Direct Results",
    body: "You work with founders who own outcomes. No sales layers, just senior engineers guiding every sprint and unblocking decisions with you.",
    example: "“They shipped in 8 weeks what our last vendor couldn’t in 6 months.” — Fortune 100 Talent Lead",
    cta: { label: "Read Client Stories", href: "/projects" },
  },
] as const;

export function DifferentiatorsSection() {
  return (
    <section className="bg-[#CBC8BA] py-16 sm:py-24">
      <div className="container space-y-10 sm:space-y-12">
        <motion.div
          className="flex flex-col gap-6 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="info" className="mx-auto w-fit sm:mx-0">
            How we deliver outcomes
          </Badge>
          <h2 className="font-display text-2xl font-semibold text-[#0D1015] sm:text-4xl md:text-[2.75rem]">
            We Don&apos;t Build Solutions. We Build Products.
          </h2>
          <p className="max-w-3xl text-sm text-[#3F3A32] sm:text-base md:text-lg">
            Every engagement is treated like an in-house product launch—fast iteration cycles, force-multiplying AI, and founder-level ownership.
          </p>
        </motion.div>

        <div className="grid justify-items-center gap-4 sm:gap-5 md:grid-cols-2 md:justify-items-stretch lg:grid-cols-3">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="group flex h-full w-full max-w-[520px] flex-col gap-4 rounded-3xl border border-[#0D1015]/10 bg-gradient-to-br from-[#B7B0A0]/90 via-[#CBC8BA]/90 to-[#A79F90]/80 p-5 shadow-[0_20px_45px_-20px_rgba(13,16,21,0.65)] transition duration-300 hover:-translate-y-2 hover:border-[#A3542B]/40 hover:shadow-[0_28px_60px_-28px_rgba(163,84,43,0.24)] sm:p-6 md:p-7"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#A3542B]/20 bg-[#A3542B]/10 text-[#A3542B]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">{item.title}</span>
                </div>
                <div className="min-w-0 space-y-1">
                  <h3 className="text-xs uppercase tracking-[0.22em] text-[#3F3A32] sm:text-sm">{item.title}</h3>
                  <p className="text-lg font-semibold text-[#0D1015] sm:text-xl">{item.headline}</p>
                </div>
                <p className="text-sm leading-relaxed text-[#3F3A32] sm:text-base max-w-[46ch]">{item.body}</p>
                <div className="rounded-2xl border border-[#0D1015]/10 bg-[#CBC8BA]/80 p-3 text-sm text-[#3F3A32] sm:p-4 sm:text-base max-w-[46ch]">
                  <span className="text-[#0D1015]">Example</span>
                  <p className="mt-2 text-sm text-[#3F3A32] group-hover:text-[#0D1015]/90 sm:text-base">
                    {item.example}
                  </p>
                </div>
                <Link
                  href={item.cta.href}
                  className="mt-auto inline-flex items-center text-sm font-semibold text-[#A3542B] transition hover:text-[#A3542B]/80 sm:text-base"
                >
                  {item.cta.label} →
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
