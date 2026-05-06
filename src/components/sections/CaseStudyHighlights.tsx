"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/ui/Badge";

interface CaseStudyHighlight {
  name: string;
  broken: string;
  whyOthersFailed: string;
  whatWeDid: string;
  killerResult: string;
  href: string;
}

const highlights: CaseStudyHighlight[] = [
  {
    name: "ResuMind AI-Analyzer",
    broken: "Recruiters drowning in 10k+ resumes/week; manual triage took days and eroded candidate quality.",
    whyOthersFailed: "Off-the-shelf parsers broke on real-world formats; vendors shipped decks, not live scoring; accuracy plateaued sub-80%.",
    whatWeDid: "Built ingestion + NLP scoring pipeline with audit trails, wired into ATS/CRM, and demoed live in week 2.",
    killerResult: "95% parsing accuracy, responses in hours not days.",
    href: "https://resumind.nexaworks.tech/",
  },
];

export function CaseStudyHighlights() {
  return (
    <section className="bg-[#0A0A0B] py-18 sm:py-22">
      <div className="container space-y-8">
        <motion.div
          className="flex flex-col gap-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Badge variant="warning" className="mx-auto w-fit sm:mx-0">
            Flagship case
          </Badge>
          <h2 className="font-display text-3xl font-semibold text-[#FAFAFA] sm:text-4xl">
            One undeniable result
          </h2>
          <p className="max-w-2xl text-sm text-[#A1A1AA] sm:text-base">
            The same structure we apply to every build: what was broken, why others failed, what we did differently, and the single metric that matters.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          {highlights.map((highlight) => (
            <motion.article
              key={highlight.name}
              className="flex h-full flex-col gap-6 rounded-3xl border border-[#27272A] bg-[#131316] p-8 shadow-[0_24px_55px_-28px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="space-y-2">
                <h3 className="text-sm uppercase tracking-[0.3em] text-[#A1A1AA]">{highlight.name}</h3>
                <p className="text-base text-[#A1A1AA]">{highlight.broken}</p>
              </div>

              <div className="grid gap-3 text-sm text-[#A1A1AA] sm:grid-cols-2">
                <div className="rounded-2xl border border-[#27272A] bg-[#1A1A1F] p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#A1A1AA]">Why others failed</p>
                  <p className="mt-2 leading-relaxed">{highlight.whyOthersFailed}</p>
                </div>
                <div className="rounded-2xl border border-[#27272A] bg-[#1A1A1F] p-4">
                  <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#A1A1AA]">What we did differently</p>
                  <p className="mt-2 leading-relaxed">{highlight.whatWeDid}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#10B981]">
                <span className="inline-flex h-2 w-2 rounded-full bg-[#10B981]" aria-hidden="true" />
                <span>{highlight.killerResult}</span>
              </div>

              <Link
                href={highlight.href}
                className="inline-flex items-center text-sm font-semibold text-[#10B981] transition hover:text-[#10B981]/80"
              >
                View full breakdown →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
