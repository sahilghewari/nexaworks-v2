"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

import type { CaseStudy } from "@/lib/case-studies";
import { useModal } from "@/context/ModalContext";
import { ctaButtonVariants } from "@/ui/CTAButton";
import { Badge } from "@/ui/Badge";

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const { openContactModal } = useModal();

  return (
    <article className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-[#CBC8BA] py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A79F90_0%,transparent_60%)]" aria-hidden="true" />
        <div className="container relative z-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] md:items-center md:gap-14">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Badge variant="info" className="w-fit">Case Study</Badge>
            <h1 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl md:text-[3rem]">
              {caseStudy.title}
            </h1>
            {caseStudy.subtitle ? (
              <p className="text-lg text-[#3F3A32] sm:text-xl">{caseStudy.subtitle}</p>
            ) : null}
            <p className="text-base text-[#3F3A32] sm:text-lg">{caseStudy.heroDescription}</p>
            <div className="flex flex-wrap gap-3">
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
            className="relative h-72 overflow-hidden rounded-3xl border border-[#0D1015]/10 bg-[#E7E2D6] shadow-[0_28px_80px_-40px_rgba(13,16,21,0.8)]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#B7B0A0]/90 via-[#CBC8BA]/70 to-[#A79F90]/80" aria-hidden="true" />
            <Image
              src={caseStudy.coverImage}
              alt={`${caseStudy.title} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover opacity-80"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#E7E2D6] py-16 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-[#0D1015]">Problem</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">{caseStudy.problem}</p>
            <h2 className="text-2xl font-semibold text-[#0D1015]">Solution</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">{caseStudy.solution}</p>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#0D1015]/10 bg-[#B7B0A0] px-3 py-1 text-xs text-[#3F3A32]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            {caseStudy.metrics.map((metric) => (
              <div
                key={`${caseStudy.id}-${metric.label}`}
                className="flex h-full flex-col justify-between rounded-2xl border border-[#0D1015]/10 bg-[#B7B0A0]/70 p-6 shadow-[0_22px_60px_-38px_rgba(13,16,21,0.8)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">{metric.label}</p>
                <p className="mt-4 text-3xl font-semibold text-[#A3542B]">{metric.value}</p>
                {metric.description ? (
                  <p className="mt-3 text-sm text-[#3F3A32]">{metric.description}</p>
                ) : null}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#CBC8BA] py-16 sm:py-20">
        <div className="container space-y-10">
          <motion.div
            className="grid gap-6 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:gap-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">Timeline</p>
              {caseStudy.timelineSummary ? (
                <p className="text-lg font-semibold text-[#0D1015]">{caseStudy.timelineSummary}</p>
              ) : null}
            </div>
            <div className="grid gap-4">
              {caseStudy.timeline.map((phase) => (
                <div
                  key={`${caseStudy.id}-${phase.title}`}
                  className="rounded-2xl border border-[#0D1015]/10 bg-[#B7B0A0]/80 p-6"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#3F3A32]">
                    <span className="text-[#0D1015]">{phase.title}</span>
                    <span>{phase.duration}</span>
                  </div>
                  <p className="mt-3 text-sm text-[#3F3A32]">{phase.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {caseStudy.testimonial ? (
            <motion.blockquote
              className="relative overflow-hidden rounded-3xl border border-[#0D1015]/10 bg-[#B7B0A0]/70 p-10 text-center text-lg text-[#0D1015]"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Quote className="absolute left-6 top-6 h-10 w-10 text-[#A3542B]/30" aria-hidden="true" />
              <p className="relative z-10 leading-relaxed">“{caseStudy.testimonial.quote}”</p>
              <footer className="relative z-10 mt-4 text-sm text-[#3F3A32]">
                {caseStudy.testimonial.author} · {caseStudy.testimonial.role}
              </footer>
            </motion.blockquote>
          ) : null}

          <div className="grid gap-4 rounded-3xl border border-[#0D1015]/10 bg-[#E7E2D6] p-8 text-sm text-[#3F3A32] sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">Next Steps</p>
              <p>
                Ready to explore a similar build? Grab time with us and we&apos;ll map the fastest path to your automation or AI win.
              </p>
              <button
                type="button"
                onClick={() => openContactModal({ message: `Interested in ${caseStudy.title}. Schedule a demo.` })}
                className={ctaButtonVariants({ variant: "primary", size: "md", className: "w-fit" })}
              >
                Schedule Demo
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">Related Case Studies</p>
              <ul className="space-y-2">
                {caseStudy.related.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#A3542B] transition hover:text-[#A3542B]/80"
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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
