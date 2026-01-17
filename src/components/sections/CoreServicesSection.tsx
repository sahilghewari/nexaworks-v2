"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrainCircuit, GaugeCircle, ShieldCheck } from "lucide-react";

import { ctaButtonVariants } from "@/ui/CTAButton";

const coreServices = [
  {
    icon: BrainCircuit,
    title: "Custom Automation Software",
    description:
      "Every business has unique operational challenges. We design and ship automation systems that plug into your stack, eliminate manual handoffs, and scale with your roadmap.",
    highlights: [
      "Custom software architecture (microservices, APIs, real-time dashboards)",
      "Embedded AI/NLP where it adds measurable value",
      "Cloud deployment on AWS, Render, or your infrastructure",
      "Monitoring, logging, and operational dashboards",
      "Ongoing support and iteration cycles",
    ],
    timeline: "MVP 2-4 weeks · Full Solution 5-10 weeks",
    problems: [
      "Returns & reverse logistics automation",
      "Resume screening & candidate routing",
      "Demand forecasting & planning",
      "Quality inspection automation",
      "Executive report generation",
      "Customer data integration",
    ],
    ctaLabel: "See How We've Solved This Before",
    ctaHref: "/projects",
  },
  {
    icon: GaugeCircle,
    title: "AI-Driven Dashboards",
    description:
      "Automation without visibility is blindfolded execution. We deliver live dashboards that illuminate performance, surface anomalies, and keep leadership aligned.",
    highlights: [
      "Live KPI tracking and health scoring",
      "Real-time alerts for failures and anomalies",
      "Custom data visualizations tuned to your workflows",
      "Role-based access control and audit trails",
      "Exports and scheduled reporting",
    ],
    timeline: "Implementation 3-6 weeks depending on data sources",
    problems: [
      "Revenue & pipeline visibility",
      "Operations and fulfillment tracking",
      "Support & SLA monitoring",
      "Manufacturing throughput analytics",
      "Marketplace trust & safety",
    ],
    ctaLabel: "See Our Analytics Dashboard Demo",
    ctaHref: "/projects",
  },
  {
    icon: ShieldCheck,
    title: "Outcome-Based Engagement",
    description:
      "Want proof before you commit? We share delivery risk by piloting your automation or AI initiative in weeks, then scale the solution once value is proven.",
    highlights: [
      "Risk-reversal pilot with shared success metrics",
      "Founders hands-on every sprint",
      "Technical roadmap & ROI model before build",
      "Knowledge transfer to your internal teams",
      "Optional co-delivery with your engineers",
    ],
    timeline: "Pilot 2-4 weeks · Scale Up 5-10 weeks",
    problems: [
      "Validating new automation ideas",
      "Refactoring brittle vendor solutions",
      "Standing up AI prototypes safely",
      "De-risking executive transformation bets",
    ],
    ctaLabel: "Talk About Risk-Sharing",
    ctaHref: "/contact",
  },
] as const;

export function CoreServicesSection() {
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
          <p className="text-sm uppercase tracking-[0.35em] text-[#3F3A32]">What we deliver</p>
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">
            Three ways we unlock operational leverage
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="group flex h-full flex-col gap-6 rounded-3xl border border-[#0D1015]/10 bg-gradient-to-br from-[#B7B0A0]/90 via-[#CBC8BA]/90 to-[#A79F90]/80 p-8 shadow-[0_28px_65px_-32px_rgba(13,16,21,0.75)] transition duration-300 hover:-translate-y-2 hover:border-[#A3542B]/50 hover:shadow-[0_35px_70px_-30px_rgba(163,84,43,0.25)]"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#A3542B]/20 bg-[#A3542B]/10 text-[#A3542B]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#0D1015]">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-[#3F3A32]">{service.description}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">What's Included</p>
                  <ul className="space-y-2 text-sm text-[#3F3A32]">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#A3542B]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1 text-xs uppercase tracking-[0.25em] text-[#3F3A32]">
                  <p className="text-[#0D1015]">Timeline</p>
                  <p className="text-sm normal-case tracking-normal text-[#3F3A32]">{service.timeline}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">Typical Problems We Solve</p>
                  <div className="flex flex-wrap gap-2">
                    {service.problems.map((problem) => (
                      <span
                        key={problem}
                        className="rounded-full border border-[#0D1015]/10 bg-[#B7B0A0] px-3 py-1 text-xs text-[#3F3A32]"
                      >
                        {problem}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={service.ctaHref}
                  className={ctaButtonVariants({ variant: "secondary", size: "md", className: "mt-auto w-full justify-center sm:w-auto" })}
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
