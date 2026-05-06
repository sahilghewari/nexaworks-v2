import { Metadata } from "next";
import Link from "next/link";
import { ctaButtonVariants } from "@/ui/CTAButton";
import { Badge } from "@/ui/Badge";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Lead Generation Agency for B2B SaaS | NexaWorks",
  description: "Stop hiring SDRs. We engineer done-for-you AI outbound engines that generate $1M+ in qualified pipeline for B2B SaaS companies.",
};

export default function B2BSaaSOutboundPage() {
  return (
    <main className="flex-1 bg-[#0A0A0B]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#131316_0%,transparent_55%)]" aria-hidden="true" />
        <div className="container relative z-10 max-w-4xl text-center">
          <Badge variant="info" className="mb-6 bg-white/5 text-[#A1A1AA] border-none">
            The AI Revenue Engine
          </Badge>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-[#FAFAFA] sm:text-6xl">
            AI Lead Generation for B2B SaaS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A1A1AA] sm:text-xl">
            Scaling outbound with humans is broken. SDRs cost $85k, take months to ramp, and churn fast. We build done-for-you AI outbound engines that generate $1M+ in pipeline without adding headcount.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/pipeline-audit"
              className={ctaButtonVariants({ variant: "primary", size: "lg" })}
            >
              Apply for a Pipeline Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-[#131316] py-20">
        <div className="container max-w-5xl">
          <h2 className="mb-12 text-center font-display text-3xl font-bold text-[#FAFAFA]">
            NexaWorks vs. Traditional SDRs
          </h2>
          <div className="grid overflow-hidden rounded-3xl border border-[#27272A] bg-[#1A1A1F] shadow-xl md:grid-cols-2">
            <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-[#27272A]">
              <h3 className="text-xl font-bold text-[#FAFAFA]">Traditional SDR Team</h3>
              <ul className="mt-6 space-y-4">
                {["$85k+ fully loaded cost per rep", "3-6 month ramp time", "Manual list building & scraping", "Generic, templated emails", "High churn rate (14 months)"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-900/20 text-red-900">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#10B981]/5 p-8 sm:p-12">
              <h3 className="text-xl font-bold text-[#10B981]">NexaWorks AI Engine</h3>
              <ul className="mt-6 space-y-4">
                {["Fraction of the cost of one SDR", "Live and booking meetings in 14 days", "Automated high-intent signal scraping", "Hyper-personalized, human-like sequences", "Never sleeps, never churns"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-[#FAFAFA]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Final CTA */}
      <section className="py-20 sm:py-32">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-[#FAFAFA] sm:text-4xl">
            Ready to scale your pipeline?
          </h2>
          <p className="mt-4 text-lg text-[#A1A1AA]">
            Stop losing deals to competitors using AI. Get a custom architecture blueprint for your SaaS.
          </p>
          <div className="mt-10">
            <Link
              href="/pipeline-audit"
              className={ctaButtonVariants({ variant: "primary", size: "lg" })}
            >
              Get Your Blueprint
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
