import type { Metadata } from "next";

import { CaseStudiesGrid } from "@/sections/CaseStudiesGrid";

export const metadata: Metadata = {
  title: "Projects | NexaWorks",
  description:
    "See how NexaWorks delivers results: AI automation, analytics dashboards, and outcome-based engagements with measurable impact.",
  openGraph: {
    title: "NexaWorks Projects",
    description:
      "Explore production-ready case studies—ResuMind AI-Analyzer, Automated Reports Platform, Analytics Dashboard, and NyayMind Legal AI research.",
    url: "https://nexaworks.tech/projects",
    siteName: "NexaWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaWorks Projects",
    description:
      "Live demos and case studies showing how NexaWorks ships automation and AI in weeks.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-[#0D1015] py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937_0%,transparent_60%)]" aria-hidden="true" />
        <div className="container relative z-10 space-y-6 text-center sm:max-w-3xl sm:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9CA3AF]">Case Studies</p>
          <h1 className="font-display text-3xl font-semibold text-[#CBC8BA] sm:text-4xl md:text-[3rem]">
            Live Proof. Not Promises.
          </h1>
          <p className="text-base text-[#9CA3AF] sm:text-lg">
            Production systems shipping in weeks, not quarters. Dive into our case studies to see the metrics, architecture, and demos behind the outcomes.
          </p>
        </div>
      </section>
      <CaseStudiesGrid />
    </main>
  );
}
