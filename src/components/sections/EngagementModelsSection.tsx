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
      title: "Strategy & Pipeline Audit",
      scope: "Deep-dive funnel teardown, ICP review, and channel strategy. No free consulting circus—just a roadmap to scale.",
      timeline: "Timeline: 1-week delivery",
      price: "Pricing: $1,500–$3,500 one-time",
      bestFor: "Best For: Teams needing a high-intent growth roadmap before building.",
      stopRule: "Filter: We only take on audits we know we can turn into $100k+ revenue engines.",
    },
    {
      icon: Repeat,
      title: "Revenue Growth Engine",
      scope: "Full-stack outbound automation, CRM sync, and CRO. We build and manage your entire revenue loop.",
      timeline: "Timeline: 14-day setup + Monthly Retainer",
      price: "Pricing: $10,000 setup + $5,000/mo",
      bestFor: "Best For: Early-stage SaaS needing predictable pipeline without SDR headcount.",
      stopRule: "Hybrid Model: Performance-aligned retainer with no long-term lock-ins.",
    },
    {
      icon: Handshake,
      title: "Scale / Partner Tier",
      scope: "Multi-channel inbound + conversion systems. For funded startups requiring a premium engineering partner.",
      timeline: "Timeline: Ongoing Partnership",
      price: "Pricing: $8,500–$15,000+/mo",
      bestFor: "Best For: Funded SaaS or high-ticket firms scaling to $10M+ ARR.",
      stopRule: "Success Bonus: Optional meeting or pipeline-based bonuses for true alignment.",
    },
  ];

export function EngagementModelsSection() {
  return (
    <section className="bg-[#0A0A0B] py-20 sm:py-24">
      <div className="container space-y-12">
        <motion.div
          className="max-w-3xl space-y-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#A1A1AA]">How we work together</p>
          <h2 className="font-display text-3xl font-semibold text-[#FAFAFA] sm:text-4xl">
            Transparent Pricing & Guarantees
          </h2>
          <p className="text-base text-[#A1A1AA] sm:text-lg">
            We don&apos;t hide our pricing. Whether you need a turnkey outbound engine or a complex custom product build, our engagements are outcome-driven.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <motion.article
                key={model.title}
                className="flex h-full flex-col gap-5 rounded-3xl border border-[#27272A] bg-[#131316] p-8 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.5)]"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#10B981]/20 bg-[#10B981]/10 text-[#10B981]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#FAFAFA]">{model.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">{model.scope}</p>
                </div>
                <ul className="space-y-2 text-sm text-[#A1A1AA]">
                  <li>{model.timeline}</li>
                  <li>{model.price}</li>
                  <li>{model.bestFor}</li>
                  {model.stopRule ? <li className="text-[#FAFAFA]">{model.stopRule}</li> : null}
                  {model.example ? <li className="text-[#FAFAFA]">{model.example}</li> : null}
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
