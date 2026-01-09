import type { Metadata } from "next";

import { ServiceOverview } from "@/sections/ServiceOverview";
import { CoreServicesSection } from "@/sections/CoreServicesSection";
import { EngagementModelsSection } from "@/sections/EngagementModelsSection";
import { ServiceCTASection } from "@/sections/ServiceCTASection";

export const metadata: Metadata = {
  title: "Services | NexaWorks",
  description:
    "Explore NexaWorks services: custom automation software, AI-driven dashboards, and outcome-based engagements delivered in weeks with founder-level accountability.",
  openGraph: {
    title: "NexaWorks Services",
    description:
      "Custom automation, AI dashboards, and risk-sharing engagements that deliver measurable outcomes in weeks, not quarters.",
    url: "https://nexaworks.tech/services",
    siteName: "NexaWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaWorks Services",
    description:
      "See how NexaWorks ships production-grade automation, AI dashboards, and outcome-based engagements with accountability.",
  },
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <ServiceOverview />
      <CoreServicesSection />
      <EngagementModelsSection />
      <ServiceCTASection />
    </main>
  );
}
