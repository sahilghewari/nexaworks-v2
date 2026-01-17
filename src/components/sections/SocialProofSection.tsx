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
    <section className="bg-[#CBC8BA] py-16 sm:py-18">
      <div className="container space-y-8">
        <motion.div
          className="flex flex-col gap-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Badge variant="success" className="mx-auto w-fit sm:mx-0">
            Live builds you can open now
          </Badge>
          <h2 className="font-display text-2xl font-semibold text-[#0D1015] sm:text-3xl md:text-[2.4rem]">
            Proof before paperwork
          </h2>
          <p className="max-w-2xl text-sm text-[#3F3A32] sm:text-base">
            Three production systems in the wild. Open, click, and see for yourself.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {demos.map((demo, index) => (
            <motion.article
              key={demo.title}
              className="group flex h-full flex-col justify-between gap-4 rounded-2xl border border-[#0D1015]/10 bg-gradient-to-br from-[#B7B0A0]/90 via-[#CBC8BA]/90 to-[#A79F90]/80 p-6 shadow-[0_20px_50px_-28px_rgba(13,16,21,0.7)] transition duration-200 hover:-translate-y-1.5 hover:border-[#A3542B]/50"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
            >
              <div className="space-y-3">
                <div>
                  <h3 className="text-[0.72rem] uppercase tracking-[0.28em] text-[#3F3A32]">{demo.title}</h3>
                  <p className="mt-1 text-xl font-semibold text-[#0D1015]">{demo.tagline}</p>
                </div>
                <p className="text-sm font-semibold text-[#A3542B]">{demo.stat}</p>
              </div>
              {demo.previewUrl ? (
                <div className="relative overflow-hidden rounded-xl border border-[#0D1015]/10 bg-black/40">
                  <iframe
                    src={demo.previewUrl}
                    title={`${demo.title} preview`}
                    className="h-40 w-full"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-[#0D1015]/10 bg-[#CBC8BA]/80 text-sm text-[#3F3A32]">
                  Preview on request
                </div>
              )}
              <Link
                href={demo.ctaHref}
                className="mt-auto inline-flex items-center text-sm font-semibold text-[#A3542B] transition hover:text-[#A3542B]/80"
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
