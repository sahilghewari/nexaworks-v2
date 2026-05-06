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
            <Badge variant="info" className="w-fit">Service</Badge>
            <div className="flex items-center gap-4">
               <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#A3542B]/20 bg-[#A3542B]/10 text-[#A3542B]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h1 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl md:text-[3rem]">
                  {service.title}
                </h1>
            </div>
            <p className="text-lg text-[#3F3A32] sm:text-xl font-medium">{service.subtitle}</p>
            <p className="text-base text-[#3F3A32] sm:text-lg">{service.heroDescription}</p>
            
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openContactModal({ message: `Interested in ${service.title}. Let's discuss our project.` })}
                className={ctaButtonVariants({ variant: "primary", size: "lg" })}
              >
                {service.ctaLabel}
              </button>
              <Link
                href="/projects"
                className={ctaButtonVariants({ variant: "secondary", size: "lg" })}
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative h-72 overflow-hidden rounded-3xl border border-[#0D1015]/10 bg-[#E7E2D6] shadow-[0_28px_80px_-40px_rgba(13,16,21,0.8)]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#B7B0A0]/90 via-[#CBC8BA]/70 to-[#A79F90]/80" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center p-10 text-[#A3542B]/20">
               <Icon className="h-40 w-40" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#E7E2D6] py-16 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#0D1015]">The Problem</h2>
                <p className="text-sm leading-relaxed text-[#3F3A32]">{service.problem}</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#0D1015]">Our Solution</h2>
                <p className="text-sm leading-relaxed text-[#3F3A32]">{service.solution}</p>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
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
            className="space-y-8"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            <div className="grid gap-4 sm:grid-cols-1">
                {service.metrics.map((metric) => (
                  <div
                    key={`${service.id}-${metric.label}`}
                    className="flex items-center justify-between rounded-2xl border border-[#0D1015]/10 bg-[#B7B0A0]/70 p-6 shadow-[0_22px_60px_-38px_rgba(13,16,21,0.8)]"
                  >
                    <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">{metric.label}</p>
                        <p className="text-sm text-[#3F3A32]">{metric.description}</p>
                    </div>
                    <p className="text-3xl font-semibold text-[#A3542B]">{metric.value}</p>
                  </div>
                ))}
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#0D1015]">Service Highlights</h3>
                <div className="grid gap-4">
                    {service.highlights.map((item) => (
                        <div key={item.title} className="flex gap-4 rounded-2xl border border-[#0D1015]/5 bg-[#CBC8BA]/50 p-6">
                            <CheckCircle2 className="h-6 w-6 shrink-0 text-[#A3542B]" />
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold text-[#0D1015]">{item.title}</h4>
                                <p className="text-sm text-[#3F3A32]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded-2xl border border-[#0D1015]/10 bg-[#B7B0A0] p-6 text-sm text-[#3F3A32]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#0D1015]">Typical Engagement</p>
                <p className="mt-2 text-lg font-medium">{service.timeline}</p>
                <p className="mt-4 leading-relaxed">
                    Every engagement includes direct founder accountability, weekly demos, and an automated risk-reporting dashboard.
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#CBC8BA] py-16 sm:py-20 text-center">
         <div className="container max-w-2xl space-y-8">
            <h2 className="text-3xl font-semibold text-[#0D1015]">Ready to start your build?</h2>
            <p className="text-[#3F3A32]">
                Grab a 20-minute slot with our founders. We&apos;ll audit your current stack and map a path to your first working prototype in week one.
            </p>
            <div className="flex justify-center gap-4">
                <button
                    onClick={() => openContactModal({ message: `Book discovery for ${service.title}` })}
                    className={ctaButtonVariants({ variant: "primary", size: "lg" })}
                >
                    Book Discovery Call
                </button>
            </div>
         </div>
      </section>
    </article>
  );
}
