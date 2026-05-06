import type { Metadata } from "next";

import { ServiceOverview } from "@/sections/ServiceOverview";
import { CoreServicesSection } from "@/sections/CoreServicesSection";
import { EngagementModelsSection } from "@/sections/EngagementModelsSection";
import { ServiceCTASection } from "@/sections/ServiceCTASection";

export const metadata: Metadata = {
  title: "AI Revenue Systems & Automation Services | NexaWorks",
  description:
    "We build autonomous pipeline engines, revenue ops automation, and custom AI products for high-growth SaaS teams. Live in 14 days.",
  openGraph: {
    title: "AI Revenue Systems & Automation Services | NexaWorks",
    description:
      "We design and ship autonomous AI engines that book meetings and scale pipeline for high-growth SaaS founders.",
    url: "https://nexaworks.com/services",
    siteName: "NexaWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Revenue Systems | NexaWorks",
    description:
      "Autonomous outbound and revenue ops automation for B2B SaaS teams.",
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
