"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BrainCircuit, GaugeCircle, ShieldCheck } from "lucide-react";

import { ctaButtonVariants } from "@/ui/CTAButton";

const coreServices = [
  {
    icon: BrainCircuit,
    title: "AI-Native Development",
    slug: "ai-native-development",
    description:
      "We build agentic AI, Retrieval-Augmented Generation (RAG), and custom LLM integrations that don't just chat—they execute. Our systems automate high-cognitive tasks with 95%+ accuracy.",
    highlights: [
      "Custom LLM & Agent orchestration",
      "Retrieval-Augmented Generation (RAG) pipelines",
      "Semantic search & NLP scoring (ResuMind architecture)",
      "Automated prompt engineering & evaluation",
      "Secure, private AI deployment on VPC",
    ],
    timeline: "Pilot 2 weeks · Full RAG System 6-10 weeks",
    problems: [
      "Automating complex document triage",
      "Scaling technical support with AI agents",
      "Building proprietary knowledge graphs",
      "De-risking GenAI implementation",
    ],
    ctaLabel: "View AI Capabilities",
    ctaHref: "/services/ai-native-development",
  },
  {
    icon: GaugeCircle,
    title: "MVP Engineering",
    slug: "mvp-engineering",
    description:
      "Stop waiting quarters for a release. We ship production-grade MVPs in weeks, using AI-accelerated delivery and a 'Proof before Paperwork' methodology.",
    highlights: [
      "Rapid prototyping with real data",
      "Scalable Next.js & Node.js architectures",
      "Mobile-first responsive applications",
      "Database design & API orchestration",
      "Phased rollout & feature flag management",
    ],
    timeline: "Prototype 1 week · Production MVP 4-6 weeks",
    problems: [
      "Validating new product bets fast",
      "Escaping legacy vendor lock-in",
      "Building for scale from day zero",
      "Rapid market entry for startups",
    ],
    ctaLabel: "Explore MVP Framework",
    ctaHref: "/services/mvp-engineering",
  },
  {
    icon: ShieldCheck,
    title: "Cloud & Systems Integration",
    slug: "cloud-systems-integration",
    description:
      "Modern software doesn't live in a vacuum. We orchestrate resilient cloud infrastructure and seamless systems integration to ensure your data flows without friction.",
    highlights: [
      "AWS/GCP/Azure architecture & migration",
      "Serverless & microservices orchestration",
      "Data pipeline & ETL automation",
      "System-to-system API integration",
      "Observed infra with 99.9% uptime targets",
    ],
    timeline: "Integration 3-5 weeks · Full Infra 8-12 weeks",
    problems: [
      "Consolidating fragmented data streams",
      "Modernizing legacy monoliths",
      "Automating cross-platform workflows",
      "Infrastructure cost optimization",
    ],
    ctaLabel: "See Integration Patterns",
    ctaHref: "/services/cloud-systems-integration",
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
          <p className="text-sm uppercase tracking-[0.35em] text-[#3F3A32]">Pain → outcome</p>
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">
            Three ways we fix broken ops
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
                  <p className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">Failure modes we eliminate</p>
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
                  <p className="text-[#0D1015]">Outcome / timeline</p>
                  <p className="text-sm normal-case tracking-normal text-[#3F3A32]">{service.timeline}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#3F3A32]">If this is you</p>
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
