"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrainCircuit, GaugeCircle, ShieldCheck } from "lucide-react";

import { ctaButtonVariants } from "@/ui/CTAButton";

const coreServices = [
  {
    icon: BrainCircuit,
    title: "AI Revenue Systems",
    slug: "ai-revenue-systems",
    description:
      "Full-stack outbound orchestration. We build the data scrapers, personalized sequences, and AI booking agents that own your top-of-funnel.",
    highlights: [
      "Custom Signal-Based Prospecting",
      "AI-Agent LinkedIn & Email Outreach",
      "Deliverability & Inbox Management",
      "Automated Meeting Qualification",
      "Real-time Pipeline Dashboards",
    ],
    timeline: "Live in 14 Days",
    problems: [
      "Low reply rates on generic lists",
      "SDRs wasting time on data entry",
      "High CAC on paid channels",
      "Scaling pipeline without headcount",
    ],
    ctaLabel: "View Revenue Systems",
    ctaHref: "/solutions/b2b-saas-outbound",
  },
  {
    icon: GaugeCircle,
    title: "Ops & Workflow Automation",
    slug: "ops-automation",
    description:
      "Eliminate manual triage and brittle handoffs. We build custom internal platforms that automate your core business loops.",
    highlights: [
      "Automated Customer Onboarding",
      "Intelligent Lead Routing",
      "Post-Sale Handover Workflows",
      "Self-Serve Internal Dashboards",
      "System-to-System API Syncing",
    ],
    timeline: "MVP in 3-5 Weeks",
    problems: [
      "Data silos between Sales & Success",
      "Manual triage of support/leads",
      "Fragile spreadsheet-based ops",
      "Scaling backend ops during growth",
    ],
    ctaLabel: "Explore Ops Automation",
    ctaHref: "/solutions/ecommerce-automation",
  },
  {
    icon: ShieldCheck,
    title: "Custom AI Product Builds",
    slug: "ai-product-engineering",
    description:
      "For funded SaaS teams needing bespoke AI features or complex product engineering that off-the-shelf tools can't handle.",
    highlights: [
      "Proprietary AI Feature Development",
      "RAG & Large-Scale NLP Pipelines",
      "Agentic Infrastructure (Bespoke)",
      "High-Performance SaaS Architectures",
      "Scale-Ready Cloud Orchestration",
    ],
    timeline: "8-12 Weeks to Production",
    problems: [
      "Building unique AI moats",
      "Modernizing legacy product stacks",
      "Rapid feature validation/MVPs",
      "Complex integration requirements",
    ],
    ctaLabel: "See Product Engineering",
    ctaHref: "/solutions/ai-agents",
  },
] as const;

export function CoreServicesSection() {
  return (
    <section className="bg-[#0A0A0B] py-24 sm:py-32">
      <div className="container space-y-16">
        <motion.div
          className="max-w-3xl space-y-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#A1A1AA]">Core Capabilities</p>
          <h2 className="font-display text-3xl font-semibold text-[#FAFAFA] sm:text-4xl md:text-5xl">
            Engineered to Solve Your <br className="hidden md:block" /> Most Complex Revenue Leaks.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="group flex h-full flex-col gap-8 rounded-[2.5rem] border border-[#27272A] bg-[#131316] p-10 shadow-[0_32px_65px_-32px_rgba(0,0,0,0.8)] transition duration-300 hover:-translate-y-2 hover:border-[#10B981]/40"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#10B981]/10 text-[#10B981]">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#FAFAFA]">{service.title}</h3>
                  <p className="text-base leading-relaxed text-[#A1A1AA]">{service.description}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">Included in the build</p>
                  <ul className="space-y-3 text-sm text-[#A1A1AA]">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">Typical Timeline</p>
                  <p className="text-lg font-semibold text-[#10B981]">{service.timeline}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">If this is you</p>
                  <div className="flex flex-wrap gap-2">
                    {service.problems.map((problem) => (
                      <span
                        key={problem}
                        className="rounded-full border border-[#27272A] bg-[#1A1A1F] px-4 py-1.5 text-xs text-[#A1A1AA]"
                      >
                        {problem}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={service.ctaHref}
                  className={ctaButtonVariants({ variant: "secondary", size: "lg", className: "mt-auto w-full justify-center group-hover:bg-[#10B981]/5 transition-colors" })}
                >
                  {service.ctaLabel}
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

