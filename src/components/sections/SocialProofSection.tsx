"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/ui/Badge";

interface DemoItem {
  title: string;
  tagline: string;
  stat: string;
  ctaLabel: string;
  ctaHref: string;
  previewUrl?: string;
  external?: boolean;
}

const demos: DemoItem[] = [
  {
    title: "ResuMind AI-Analyzer",
    tagline: "Analyze 1000s of resumes in minutes",
    stat: "95% parsing accuracy, 150 concurrent uploads",
    ctaLabel: "Try ResuMind",
    ctaHref: "https://resumind.nexaworks.tech",
    previewUrl: "https://resumind.nexaworks.tech",
    external: true,
  },
  {
    title: "Reports Platform",
    tagline: "Automated report generation at scale",
    stat: "98.5% success rate, 2.4s per report",
    ctaLabel: "See Reports Demo",
    ctaHref: "/projects/reports",
  },
  {
    title: "Analytics Dashboard",
    tagline: "Real-time operational visibility",
    stat: "Deployed in 8 weeks (vs. industry 16 weeks)",
    ctaLabel: "View Dashboard",
    ctaHref: "/projects/analytics",
  },
];

export function SocialProofSection() {
  return (
    <section className="bg-[#0D1015] py-24 sm:py-28">
      <div className="container space-y-12">
        <motion.div
          className="flex flex-col gap-6 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="success" className="mx-auto w-fit sm:mx-0">
            Live Product Demos
          </Badge>
          <h2 className="font-display text-3xl font-semibold text-[#CBC8BA] sm:text-4xl md:text-[2.75rem]">
            Proven Track Record
          </h2>
          <p className="max-w-3xl text-base text-[#9CA3AF] sm:text-lg">
            Live products, not promises.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {demos.map((demo, index) => (
            <motion.article
              key={demo.title}
              className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/90 via-[#0D1015]/90 to-[#1F2937]/80 p-8 shadow-[0_26px_60px_-30px_rgba(15,23,42,0.75)] transition duration-300 hover:-translate-y-2 hover:border-[#FF2003]/50 hover:shadow-[0_35px_65px_-25px_rgba(255,32,3,0.28)]"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-[#9CA3AF]">{demo.title}</h3>
                  <p className="mt-2 text-2xl font-semibold text-[#CBC8BA]">{demo.tagline}</p>
                </div>
                <p className="text-sm font-semibold text-[#FF2003]">{demo.stat}</p>
              </div>
              {demo.previewUrl ? (
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <iframe
                    src={demo.previewUrl}
                    title={`${demo.title} preview`}
                    className="h-48 w-full"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#0D1015]/80 text-sm text-[#9CA3AF]">
                  Preview available on request
                </div>
              )}
              <Link
                href={demo.ctaHref}
                className="mt-auto inline-flex items-center text-sm font-semibold text-[#FF2003] transition hover:text-[#FF2003]/80"
                target={demo.external ? "_blank" : undefined}
                rel={demo.external ? "noreferrer" : undefined}
              >
                {demo.ctaLabel} →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
