"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { CASE_STUDIES } from "@/lib/case-studies";
import { ctaButtonVariants } from "@/ui/CTAButton";

export function CaseStudiesGrid() {
  return (
    <section id="case-studies" className="bg-[#0A0A0B] py-24 sm:py-32">
      <div className="container space-y-16">
        <motion.div
          className="max-w-3xl space-y-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#A1A1AA]">Case Studies & Proof</p>
          <h2 className="font-display text-4xl font-semibold text-[#FAFAFA] sm:text-5xl">
            What was broken → <span className="text-[#10B981]">How we fixed it.</span>
          </h2>
          <p className="text-base text-[#A1A1AA] sm:text-xl">
            Each breakdown focuses on the tension: the failure of traditional methods, the AI-native shift, and the undeniable revenue metric that followed.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {CASE_STUDIES.map((caseStudy, index) => (
            <motion.article
              key={caseStudy.id}
              className="group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-[#27272A] bg-[#131316] shadow-[0_32px_65px_-32px_rgba(0,0,0,0.8)] transition-all hover:border-[#10B981]/30"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
            >
              <div className="relative h-64 w-full overflow-hidden border-b border-[#27272A]">
                <Image
                  src={caseStudy.coverImage}
                  alt={`${caseStudy.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-8 flex items-center gap-3">
                   <div className="flex items-center gap-2 rounded-full bg-[#10B981] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      Live Result
                   </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-8 p-10">
                <div className="space-y-4">
                  <h3 className="text-3xl font-semibold text-[#FAFAFA] leading-tight group-hover:text-[#10B981] transition-colors">{caseStudy.title}</h3>
                  <div className="flex items-center gap-2">
                     <span className="text-sm font-medium text-[#10B981]">{caseStudy.metrics[0]?.value}</span>
                     <span className="text-sm text-[#A1A1AA]">{caseStudy.metrics[0]?.label}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">The Challenge</p>
                    <p className="text-sm leading-relaxed text-[#A1A1AA] line-clamp-2">{caseStudy.problem}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">Our System</p>
                    <p className="text-sm leading-relaxed text-[#FAFAFA] line-clamp-3">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between pt-8 border-t border-[#27272A]">
                  <Link
                    href={`/case-studies/${caseStudy.slug}`}
                    className="text-sm font-semibold text-[#FAFAFA] hover:text-[#10B981] transition-colors"
                  >
                    View Breakdown →
                  </Link>
                  <Link
                    href={caseStudy.demoLink?.href ?? "/pipeline-audit"}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#10B981] transition hover:text-[#10B981]/80"
                    target={caseStudy.demoLink?.href?.startsWith("http") ? "_blank" : undefined}
                    rel={caseStudy.demoLink?.href?.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {caseStudy.demoLink?.label ?? "See System"}
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
