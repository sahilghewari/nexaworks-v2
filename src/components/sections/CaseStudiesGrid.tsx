"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { CASE_STUDIES } from "@/lib/case-studies";
import { ctaButtonVariants } from "@/ui/CTAButton";

export function CaseStudiesGrid() {
  return (
    <section className="bg-[#0A0D12] py-20 sm:py-24">
      <div className="container space-y-12">
        <motion.div
          className="max-w-3xl space-y-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#9CA3AF]">Case Studies &amp; Live Demos</p>
          <h2 className="font-display text-3xl font-semibold text-[#CBC8BA] sm:text-4xl">
            Live Proof. Not Promises.
          </h2>
          <p className="text-base text-[#9CA3AF] sm:text-lg">
            Ship-ready demos, measurable outcomes, and founders who show their work. Explore how NexaWorks delivers production results in weeks.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {CASE_STUDIES.map((caseStudy, index) => (
            <motion.article
              key={caseStudy.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/90 via-[#0D1015]/90 to-[#1F2937]/80 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.75)]"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
            >
              <div className="relative h-52 w-full overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937_0%,transparent_65%)]" aria-hidden="true" />
                <Image
                  src={caseStudy.coverImage}
                  alt={`${caseStudy.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover opacity-70 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/80">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#FF2003]" aria-hidden="true" />
                  Live Product Demo
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-[#CBC8BA]">{caseStudy.title}</h3>
                  <p className="text-sm leading-relaxed text-[#9CA3AF]">{caseStudy.problem}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm text-[#9CA3AF] sm:grid-cols-3">
                  {caseStudy.metrics.slice(0, 4).map((metric) => (
                    <div
                      key={`${caseStudy.id}-${metric.label}`}
                      className="rounded-2xl border border-white/10 bg-[#0D1015]/90 p-4"
                    >
                      <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#9CA3AF]">{metric.label}</p>
                      <p className="mt-2 text-xl font-semibold text-[#FF2003]">{metric.value}</p>
                      {metric.description ? (
                        <p className="mt-1 text-xs text-[#9CA3AF]">{metric.description}</p>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#9CA3AF]/80">
                  <span className="text-[#CBC8BA]">Timeline</span>
                  <span>{caseStudy.timelineSummary ?? "On demand"}</span>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <Link
                    href={caseStudy.demoLink?.href ?? caseStudy.related[0]?.href ?? "/contact"}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF2003] transition hover:text-[#FF2003]/80"
                    target={caseStudy.demoLink?.href?.startsWith("http") ? "_blank" : undefined}
                    rel={caseStudy.demoLink?.href?.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {caseStudy.demoLink?.label ?? "View Demo"}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/projects/${caseStudy.slug}`}
                    className={ctaButtonVariants({ variant: "secondary", size: "sm" })}
                  >
                    View Case Study
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
