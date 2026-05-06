import type { Metadata } from "next";
import { CaseStudiesGrid } from "@/sections/CaseStudiesGrid";
import { ServiceCTASection } from "@/sections/ServiceCTASection";

export const metadata: Metadata = {
  title: "Revenue & Pipeline Results | NexaWorks Case Studies",
  description:
    "See the real revenue and pipeline results generated for high-growth B2B SaaS teams using our AI Revenue Engines.",
  openGraph: {
    title: "Revenue & Pipeline Results | NexaWorks Case Studies",
    description:
      "What was broken, how we fixed it, and the metrics that matter. Explore our flagship AI Revenue Systems in action.",
    url: "https://nexaworks.tech/case-studies",
    siteName: "NexaWorks",
    type: "website",
  },
};


export default function CaseStudiesPage() {
  return (
    <main className="flex flex-col bg-[#0A0A0B]">
      {/* Spacer for sticky header */}
      <div className="h-20" />
      <CaseStudiesGrid />
      <ServiceCTASection />
    </main>
  );
}
