import type { Metadata } from "next";

import { CaseStudiesGrid } from "@/sections/CaseStudiesGrid";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects | NexaWorks",
  description:
    "See how NexaWorks delivers results: AI automation, analytics dashboards, and outcome-based engagements with measurable impact.",
  openGraph: {
    title: "NexaWorks Projects",
    description:
      "Explore production-ready case studies—ResuMind AI-Analyzer, Automated Reports Platform, Analytics Dashboard, and NyayMind Legal AI research.",
    url: `${siteConfig.url}/projects`,
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
      <section className="relative isolate overflow-hidden bg-[#CBC8BA] py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A79F90_0%,transparent_60%)]" aria-hidden="true" />
        <div className="container relative z-10 space-y-6 text-center sm:max-w-3xl sm:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-[#3F3A32]">Case Studies</p>
          <h1 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl md:text-[3rem]">
            Live Proof. Not Promises.
          </h1>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            Production systems shipping in weeks, not quarters. Dive into our case studies to see the metrics, architecture, and demos behind the outcomes.
          </p>
        </div>
      </section>
      <CaseStudiesGrid />
    </main>
  );
}
