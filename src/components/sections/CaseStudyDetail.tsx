"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

import { useState } from "react";
import type { CaseStudy } from "@/lib/case-studies";
import { useModal } from "@/context/ModalContext";
import { ctaButtonVariants } from "@/ui/CTAButton";
import { Badge } from "@/ui/Badge";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const { openContactModal } = useModal();
  const [showBreakdown, setShowBreakdown] = useState(false);

  const killerMetric = caseStudy.metrics[0];

  return (
    <article className="flex flex-col bg-[#0A0A0B]">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-48 sm:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#10B981/10_0%,transparent_60%)]" aria-hidden="true" />
        <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Badge variant="success" className="w-fit">Case Study</Badge>
            <h1 className="font-display text-4xl font-semibold text-[#FAFAFA] sm:text-5xl md:text-[4rem] leading-[1.1]">
              {caseStudy.title}
            </h1>
            {caseStudy.subtitle ? (
              <p className="text-xl text-[#A1A1AA] sm:text-2xl font-light">{caseStudy.subtitle}</p>
            ) : null}
            <p className="text-base text-[#A1A1AA] sm:text-lg max-w-xl">{caseStudy.heroDescription}</p>
            
            {killerMetric ? (
              <div className="inline-flex flex-col gap-1 rounded-3xl border border-[#10B981]/20 bg-[#10B981]/5 px-8 py-4 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]">
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-[#10B981]">Killer result</span>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-[#FAFAFA]">{killerMetric.value}</span>
                  <span className="text-sm text-[#A1A1AA]">{killerMetric.label}</span>
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="button"
                onClick={() => openContactModal({ message: `Interested in ${caseStudy.title}. Let's schedule a demo.` })}
                className={ctaButtonVariants({ variant: "primary", size: "lg" })}
              >
                Schedule Demo
              </button>
              {caseStudy.demoLink ? (
                <Link
                  href={caseStudy.demoLink.href}
                  target={caseStudy.demoLink.href.startsWith("http") ? "_blank" : undefined}
                  rel={caseStudy.demoLink.href.startsWith("http") ? "noreferrer" : undefined}
                  className={ctaButtonVariants({ variant: "secondary", size: "lg" })}
                >
                  {caseStudy.demoLink.label}
                </Link>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            className="relative aspect-video lg:aspect-square overflow-hidden rounded-[3rem] border border-[#27272A] bg-[#131316] shadow-[0_32px_65px_-32px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <Image
              src={caseStudy.coverImage}
              alt={`${caseStudy.title} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="bg-[#131316] py-24 sm:py-32 border-y border-[#27272A]">
        <div className="container grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="space-y-4">
               <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">The Challenge</p>
               <h2 className="text-3xl font-semibold text-[#FAFAFA]">What was broken</h2>
               <p className="text-base leading-relaxed text-[#A1A1AA]">{caseStudy.problem}</p>
            </div>
            
            <div className="space-y-4">
               <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#10B981]/50">Our System</p>
               <h2 className="text-3xl font-semibold text-[#FAFAFA]">What we did differently</h2>
               <p className="text-base leading-relaxed text-[#A1A1AA]">{caseStudy.solution}</p>
            </div>

            <div className="space-y-4">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">AI-Native Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#27272A] bg-[#1A1A1F] px-4 py-1.5 text-xs text-[#FAFAFA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">Performance Metrics</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {caseStudy.metrics.map((metric, idx) => (
                <div
                  key={`${caseStudy.id}-${metric.label}`}
                  className="flex flex-col justify-between rounded-3xl border border-[#27272A] bg-[#1A1A1F] p-8 transition hover:border-[#10B981]/30"
                >
                  <p className="text-3xl font-bold text-[#10B981]">{metric.value}</p>
                  <div className="mt-4 space-y-1">
                    <p className="text-sm font-semibold text-[#FAFAFA]">{metric.label}</p>
                    {metric.description ? (
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">{metric.description}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline & Testimonial */}
      <section className="bg-[#0A0A0B] py-24 sm:py-32">
        <div className="container space-y-20">
          <motion.div
            className="grid gap-12 lg:grid-cols-[0.4fr_1fr] lg:gap-24"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">Timeline to Live</p>
              {caseStudy.timelineSummary ? (
                <p className="text-2xl font-semibold text-[#FAFAFA]">{caseStudy.timelineSummary}</p>
              ) : null}
            </div>
            <div className="grid gap-4">
              {caseStudy.timeline.map((phase) => (
                <div
                  key={`${caseStudy.id}-${phase.title}`}
                  className="rounded-3xl border border-[#27272A] bg-[#131316] p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#10B981]">{phase.title}</p>
                    <p className="text-base text-[#FAFAFA]">{phase.description}</p>
                  </div>
                  <span className="text-sm font-medium text-[#A1A1AA] shrink-0">{phase.duration}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {caseStudy.testimonial ? (
            <motion.blockquote
              className="relative overflow-hidden rounded-[3rem] border border-[#27272A] bg-[#131316] p-12 sm:p-16 text-center shadow-[0_32px_65px_-32px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Quote className="absolute left-10 top-10 h-12 w-12 text-[#10B981]/10" aria-hidden="true" />
              <p className="relative z-10 text-xl sm:text-2xl font-medium text-[#FAFAFA] leading-relaxed italic">
                “{caseStudy.testimonial.quote}”
              </p>
              <footer className="relative z-10 mt-8 space-y-1">
                <p className="text-base font-semibold text-[#FAFAFA]">{caseStudy.testimonial.author}</p>
                <p className="text-sm text-[#A1A1AA]">{caseStudy.testimonial.role}</p>
              </footer>
            </motion.blockquote>
          ) : null}

          {/* Related/Footer */}
          <div className="grid gap-8 rounded-[3rem] border border-[#27272A] bg-[#131316] p-12 sm:grid-cols-2">
            <div className="space-y-6">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">Next Steps</p>
              <h3 className="text-2xl font-semibold text-[#FAFAFA]">Ready for a similar win?</h3>
              <p className="text-[#A1A1AA] max-w-sm">
                We can map your fastest path to an AI Revenue System in a 15-minute pipeline audit.
              </p>
              <button
                type="button"
                onClick={() => openContactModal({ message: `Interested in ${caseStudy.title}. Schedule a demo.` })}
                className={ctaButtonVariants({ variant: "primary", size: "lg" })}
              >
                Schedule Pipeline Audit
              </button>
            </div>
            <div className="space-y-6 sm:pl-12 sm:border-l border-[#27272A]">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">Related Breakthroughs</p>
              <ul className="space-y-4">
                {caseStudy.related.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between text-base font-semibold text-[#FAFAFA] hover:text-[#10B981] transition-colors"
                    >
                      {item.label}
                      <ArrowUpRight className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

