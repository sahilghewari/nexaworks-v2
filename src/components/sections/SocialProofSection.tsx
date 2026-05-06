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
    title: "Series B SaaS",
    tagline: "Scaled to 15 Demos/Week",
    stat: "$1.2M Pipeline Generated in 60 Days",
    ctaLabel: "Read Case Study",
    ctaHref: "/pipeline-audit",
    external: false,
  },
  {
    title: "Fintech Platform",
    tagline: "Automated Compliance-Safe Outbound",
    stat: "347 Qualified Meetings in 90 Days",
    ctaLabel: "Get the Blueprint",
    ctaHref: "/pipeline-audit",
    external: false,
  },
  {
    title: "B2B Consulting",
    tagline: "Automated Partner Acquisition",
    stat: "412 Meetings in 120 Days",
    ctaLabel: "See the Architecture",
    ctaHref: "/pipeline-audit",
    external: false,
  },
];

export function SocialProofSection() {
  return (
    <section id="demo-preview" className="bg-[#CBC8BA] py-16 sm:py-18">
      <div className="container space-y-8">
        <motion.div
          className="flex flex-col gap-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Badge variant="success" className="mx-auto w-fit sm:mx-0">
            Real Pipeline Numbers
          </Badge>
          <h2 className="font-display text-2xl font-semibold text-[#0D1015] sm:text-3xl md:text-[2.4rem]">
            Proof in your pipeline.
          </h2>
          <p className="max-w-2xl text-sm text-[#3F3A32] sm:text-base">
            While others sell chatbots, we engineer predictable revenue. Here is what happened when B2B teams deployed our Outbound Engine.
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
                <div className="flex h-40 flex-col items-center justify-center rounded-xl border border-dashed border-[#A3542B]/30 bg-[#A3542B]/5 px-4 text-center">
                  <span className="font-display text-3xl font-bold text-[#A3542B]">{demo.stat.split(' ')[0]}</span>
                  <span className="text-sm font-medium text-[#3F3A32] mt-2">{demo.stat.substring(demo.stat.indexOf(' ') + 1)}</span>
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
