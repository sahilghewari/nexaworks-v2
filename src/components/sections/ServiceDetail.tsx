"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

import { type ServiceDetail, SERVICE_ICONS } from "@/lib/services";
import { useModal } from "@/context/ModalContext";
import { ctaButtonVariants } from "@/ui/CTAButton";
import { Badge } from "@/ui/Badge";

interface ServiceDetailProps {
  service: ServiceDetail;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  const { openContactModal } = useModal();
  const Icon = SERVICE_ICONS[service.iconName];

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
            <Badge variant="success" className="w-fit">Service Architecture</Badge>
            <div className="flex items-center gap-6">
               <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#10B981]/10 text-[#10B981]">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h1 className="font-display text-4xl font-semibold text-[#FAFAFA] sm:text-5xl md:text-[3.5rem] leading-[1.1]">
                  {service.title}
                </h1>
            </div>
            <p className="text-xl text-[#A1A1AA] sm:text-2xl font-light">{service.subtitle}</p>
            <p className="text-base text-[#A1A1AA] sm:text-lg max-w-xl">{service.heroDescription}</p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                type="button"
                onClick={() => openContactModal({ message: `Interested in ${service.title}. Let's discuss our project.` })}
                className={ctaButtonVariants({ variant: "primary", size: "lg" })}
              >
                {service.ctaLabel}
              </button>
              <Link
                href="/case-studies"
                className={ctaButtonVariants({ variant: "secondary", size: "lg" })}
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative h-80 lg:h-[450px] overflow-hidden rounded-[3rem] border border-[#27272A] bg-[#131316] shadow-[0_32px_65px_-32px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#10B981/5_0%,transparent_70%)]" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center p-20 text-[#10B981]/10">
               <Icon className="h-64 w-64" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breakdown Section */}
      <section className="bg-[#131316] py-24 sm:py-32 border-y border-[#27272A]">
        <div className="container grid gap-16 lg:grid-cols-[0.8fr_1fr] lg:gap-24">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="space-y-4">
               <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">The Tension</p>
               <h2 className="text-3xl font-semibold text-[#FAFAFA]">The Problem</h2>
               <p className="text-base leading-relaxed text-[#A1A1AA]">{service.problem}</p>
            </div>
            
            <div className="space-y-4">
               <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#10B981]/50">The Shift</p>
               <h2 className="text-3xl font-semibold text-[#FAFAFA]">Our Systemic Solution</h2>
               <p className="text-base leading-relaxed text-[#A1A1AA]">{service.solution}</p>
            </div>

            <div className="space-y-4">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">Core Engineering Stack</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
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
            className="space-y-12"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            <div className="grid gap-4">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50 mb-4">Target Outcomes</p>
                {service.metrics.map((metric) => (
                  <div
                    key={`${service.id}-${metric.label}`}
                    className="flex items-center justify-between rounded-3xl border border-[#27272A] bg-[#1A1A1F] p-8 transition hover:border-[#10B981]/30"
                  >
                    <div className="space-y-1">
                        <p className="text-sm font-semibold text-[#FAFAFA]">{metric.label}</p>
                        <p className="text-xs text-[#A1A1AA]">{metric.description}</p>
                    </div>
                    <p className="text-3xl font-bold text-[#10B981]">{metric.value}</p>
                  </div>
                ))}
            </div>

            <div className="space-y-6">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">Key Deliverables</p>
                <div className="grid gap-4">
                    {service.highlights.map((item) => (
                        <div key={item.title} className="flex gap-5 rounded-3xl border border-[#27272A] bg-[#1A1A1F] p-8">
                            <CheckCircle2 className="h-6 w-6 shrink-0 text-[#10B981]" />
                            <div className="space-y-2">
                                <h4 className="text-base font-semibold text-[#FAFAFA]">{item.title}</h4>
                                <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded-[2.5rem] border border-[#10B981]/20 bg-[#10B981]/5 p-10 text-sm text-[#A1A1AA] shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]">
                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-[#10B981]">Typical Timeline</p>
                <p className="mt-4 text-2xl font-semibold text-[#FAFAFA]">{service.timeline}</p>
                <p className="mt-6 leading-relaxed">
                    Every build includes direct founder accountability, weekly live demos, and a production-grade infrastructure setup from Day 1.
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0A0A0B] py-24 sm:py-32 text-center">
         <div className="container max-w-3xl space-y-10">
            <h2 className="text-4xl font-semibold text-[#FAFAFA] sm:text-5xl">Ready to design your <span className="text-[#10B981]">Revenue System</span>?</h2>
            <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
                We don&apos;t do 6-month discovery phases. We audit your stack, identify the leak, and ship the fix. Book a 15-minute pipeline audit to start.
            </p>
            <div className="flex justify-center gap-4">
                <button
                    onClick={() => openContactModal({ message: `Book discovery for ${service.title}` })}
                    className={ctaButtonVariants({ variant: "primary", size: "lg" })}
                >
                    Book 15-Min Pipeline Audit
                </button>
            </div>
         </div>
      </section>
    </article>
  );
}

