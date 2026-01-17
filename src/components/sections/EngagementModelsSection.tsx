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
  example?: string;
}> = [
  {
    icon: CalendarClock,
    title: "Fixed-Price Project",
    scope: "Defined problem, clear deliverables",
    timeline: "Timeline: 5-10 weeks",
    price: "Pricing: Fixed, shared risk",
    bestFor: "Best For: Enterprises with a specific automation challenge",
  },
  {
    icon: Handshake,
    title: "Outcome-Based Risk-Sharing",
    scope: "We build your MVP at-risk. If it delivers measurable value, we proceed to full development.",
    timeline: "Timeline: MVP 2-4 weeks, Full Solution 5-10 weeks",
    price: "Pricing: Pay when the value is proven",
    bestFor: "Best For: Startups or teams exploring uncertain requirements",
    example: "Example: We'll build a prototype in 2 weeks, on us. If it works, let's build the full solution.",
  },
  {
    icon: Repeat,
    title: "Retainer / Ongoing Support",
    scope: "Maintenance, optimization, and new feature delivery",
    timeline: "Timeline: Monthly or per-deployment cadence",
    price: "Pricing: Monthly retainer or per-release",
    bestFor: "Best For: Long-term partnerships that need velocity",
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
            Flexible Engagement Models. Transparent Outcomes.
          </h2>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            Choose the collaboration style that matches your risk tolerance and internal bandwidth. We stay accountable across every model.
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
                  {model.example ? <li className="text-[#0D1015]">{model.example}</li> : null}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className={ctaButtonVariants({ variant: "primary", size: "lg" })}
          >
            Get a Custom Proposal
          </Link>
        </div>
      </div>
    </section>
  );
}
