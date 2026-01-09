"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/ui/Badge";

interface CaseStudyHighlight {
  name: string;
  problem: string;
  metrics: string[];
  impact: string;
  href: string;
}

const highlights: CaseStudyHighlight[] = [
  {
    name: "ResuMind",
    problem: "Manual resume screening couldn’t keep up with surge in enterprise hiring requests.",
    metrics: ["95% accuracy", "85% manual effort reduction", "4.2s per resume"],
    impact:
      "NexaWorks delivered an AI analyzer that auto-classifies talent pipelines, shortening recruiter response times from days to hours while improving candidate quality.",
    href: "/projects/resumind",
  },
  {
    name: "Reports Platform",
    problem: "Leadership teams lacked timely analytics due to hand-built spreadsheets and manual QA.",
    metrics: ["98.5% success rate", "90% automation", "2.4s per report"],
    impact:
      "We orchestrated full-stack automations that generate hundreds of exec-ready reports daily, unlocking faster decision cycles without expanding headcount.",
    href: "/projects/reports",
  },
  {
    name: "Analytics Dashboard",
    problem: "Operations leadership could not see real-time performance across distributed facilities.",
    metrics: ["8 weeks deployment", "90% satisfaction", "Real-time visibility"],
    impact:
      "Our team shipped a unified dashboard in half the industry timeline, giving stakeholders instant alerts and scenario forecasting from a single control center.",
    href: "/projects/analytics",
  },
];

export function CaseStudyHighlights() {
  return (
    <section className="bg-[#0A0D12] py-24 sm:py-28">
      <div className="container space-y-12">
        <motion.div
          className="flex flex-col gap-6 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="warning" className="mx-auto w-fit sm:mx-0">
            Case Study Highlights
          </Badge>
          <h2 className="font-display text-3xl font-semibold text-[#CBC8BA] sm:text-4xl md:text-[2.75rem]">
            Results That Compound
          </h2>
          <p className="max-w-3xl text-base text-[#9CA3AF] sm:text-lg">
            Three real-world builds where NexaWorks shipped measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight, index) => (
            <motion.article
              key={highlight.name}
              className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/90 via-[#0D1015]/90 to-[#1F2937]/80 p-8 shadow-[0_26px_60px_-30px_rgba(15,23,42,0.75)]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
            >
              <div className="space-y-2">
                <h3 className="text-sm uppercase tracking-[0.3em] text-[#9CA3AF]">{highlight.name}</h3>
                <p className="text-base text-[#9CA3AF]">{highlight.problem}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                {highlight.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-[#FF2003]/40 bg-[#FF2003]/10 px-4 py-1 text-sm font-semibold text-[#FF2003]"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-[#9CA3AF]">{highlight.impact}</p>

              <Link
                href={highlight.href}
                className="inline-flex items-center text-sm font-semibold text-[#FF2003] transition hover:text-[#FF2003]/80"
              >
                Read Full Case Study →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
