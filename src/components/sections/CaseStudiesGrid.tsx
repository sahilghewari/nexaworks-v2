"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { CASE_STUDIES } from "@/lib/case-studies";
import { ctaButtonVariants } from "@/ui/CTAButton";

export function CaseStudiesGrid() {
  return (
    <section className="bg-[#E7E2D6] py-20 sm:py-24">
      <div className="container space-y-12">
        <motion.div
          className="max-w-3xl space-y-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#3F3A32]">Case Studies &amp; Live Demos</p>
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">
            What was broken → how we fixed it
          </h2>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            Each card leads with the tension: what failed, what we did differently, and one killer metric. Deep metrics stay behind the breakdown.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {CASE_STUDIES.map((caseStudy, index) => (
            <motion.article
              key={caseStudy.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#0D1015]/10 bg-gradient-to-br from-[#B7B0A0]/90 via-[#CBC8BA]/90 to-[#A79F90]/80 shadow-[0_30px_70px_-35px_rgba(13,16,21,0.75)]"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
            >
              <div className="relative h-52 w-full overflow-hidden border-b border-[#0D1015]/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A79F90_0%,transparent_65%)]" aria-hidden="true" />
                <Image
                  src={caseStudy.coverImage}
                  alt={`${caseStudy.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover opacity-70 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/80">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#A3542B]" aria-hidden="true" />
                  Live Product Demo
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-[#0D1015]">{caseStudy.title}</h3>
                  <p className="text-sm leading-relaxed text-[#3F3A32]">{caseStudy.problem}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#3F3A32]">
                    <span className="text-[#0D1015]">Killer result</span>
                    <span className="rounded-full border border-[#A3542B]/40 bg-[#A3542B]/10 px-3 py-1 text-xs font-semibold text-[#A3542B]">
                      {caseStudy.metrics[0]?.value ?? "Live"} · {caseStudy.metrics[0]?.label ?? "Result"}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-[#3F3A32]">
                    <p className="font-semibold text-[#0D1015]">What was broken</p>
                    <p className="leading-relaxed">{caseStudy.problem}</p>
                    <p className="font-semibold text-[#0D1015]">What we did differently</p>
                    <p className="leading-relaxed line-clamp-3">{caseStudy.solution}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#3F3A32]/80">
                    <span className="text-[#0D1015]">Timeline</span>
                    <span>{caseStudy.timelineSummary ?? "On demand"}</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <Link
                    href={`/projects/${caseStudy.slug}`}
                    className={ctaButtonVariants({ variant: "secondary", size: "sm" })}
                  >
                    View full breakdown
                  </Link>
                  <Link
                    href={caseStudy.demoLink?.href ?? caseStudy.related[0]?.href ?? "/contact"}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#A3542B] transition hover:text-[#A3542B]/80"
                    target={caseStudy.demoLink?.href?.startsWith("http") ? "_blank" : undefined}
                    rel={caseStudy.demoLink?.href?.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {caseStudy.demoLink?.label ?? "See live demo"}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
