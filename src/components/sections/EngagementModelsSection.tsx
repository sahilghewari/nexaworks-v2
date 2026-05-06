"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarClock, Handshake, Repeat } from "lucide-react";

import { ctaButtonVariants } from "@/ui/CTAButton";

const models: Array<{
  icon: typeof CalendarClock;
  title: string;
  scope: string;
  timeline: string;
  price: string;
  bestFor: string;
  stopRule?: string;
  example?: string;
}> = [
    {
      icon: CalendarClock,
      title: "The AI Revenue Engine",
      scope: "Done-for-you pipeline generation. We build the data scrapers, sequences, and AI booking agent.",
      timeline: "Timeline: Live in 14 days",
      price: "Pricing: $15k–$30k setup fee",
      bestFor: "Best For: B2B SaaS teams needing immediate pipeline scale",
      stopRule: "Guarantee: If we don't identify 30% pipeline growth opportunities during our audit, we pay you $500.",
    },
    {
      icon: Repeat,
      title: "Managed Pipeline Retainer",
      scope: "We run the engine. Monthly optimization, A/B testing, and deliverability management.",
      timeline: "Timeline: Ongoing monthly partnership",
      price: "Pricing: $5k–$10k/mo (Performance-tiered options)",
      bestFor: "Best For: Teams that want hands-off meeting generation",
      stopRule: "Stop rule: No long-term lock-in. Pause anytime if meeting KPIs drop.",
    },
    {
      icon: Handshake,
      title: "Custom AI Product Build",
      scope: "For funded startups needing a bespoke AI tool or complex internal workflow automation.",
      timeline: "Timeline: 8-12 weeks to production",
      price: "Pricing: $50k–$150k project-based",
      bestFor: "Best For: Startups seeking a premium dev partner",
      stopRule: "Stop rule: Milestone-driven. If week 2 demo misses the mark, we pause and fix before proceeding.",
    },
  ];

export function EngagementModelsSection() {
  return (
    <section className="bg-[#CBC8BA] py-20 sm:py-24">
      <div className="container space-y-12">
        <motion.div
          className="max-w-3xl space-y-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#3F3A32]">How we work together</p>
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">
            Transparent Pricing & Guarantees
          </h2>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            We don&apos;t hide our pricing. Whether you need a turnkey outbound engine or a complex custom product build, our engagements are outcome-driven.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <motion.article
                key={model.title}
                className="flex h-full flex-col gap-5 rounded-3xl border border-[#0D1015]/10 bg-gradient-to-br from-[#B7B0A0]/90 via-[#CBC8BA]/90 to-[#A79F90]/80 p-8 shadow-[0_28px_60px_-30px_rgba(13,16,21,0.7)]"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#A3542B]/20 bg-[#A3542B]/10 text-[#A3542B]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0D1015]">{model.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#3F3A32]">{model.scope}</p>
                </div>
                <ul className="space-y-2 text-sm text-[#3F3A32]">
                  <li>{model.timeline}</li>
                  <li>{model.price}</li>
                  <li>{model.bestFor}</li>
                  {model.stopRule ? <li className="text-[#0D1015]">{model.stopRule}</li> : null}
                  {model.example ? <li className="text-[#0D1015]">{model.example}</li> : null}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/pipeline-audit"
            className={ctaButtonVariants({ variant: "primary", size: "lg" })}
          >
            Apply for a Pipeline Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
