import type { Metadata } from "next";

import { CompanyStorySection } from "@/sections/CompanyStorySection";
import { TimelineSection } from "@/sections/TimelineSection";
import { TeamSection } from "@/sections/TeamSection";
import { MissionVisionSection } from "@/sections/MissionVisionSection";
import { WhyChooseNexaWorks } from "@/sections/WhyChooseNexaWorks";
import { ContactCTASection } from "@/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "About NexaWorks",
  description:
    "Meet the founders, our story, and the values driving NexaWorks to ship reliable automation, AI products, and outcomes in record time.",
  openGraph: {
    title: "About NexaWorks",
    description:
      "How three founder-engineers built NexaWorks to deliver production-grade automation and AI with speed, accountability, and measurable outcomes.",
    url: "https://nexaworks.tech/about",
    siteName: "NexaWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About NexaWorks",
    description:
      "Learn the NexaWorks story, meet the founders, and see the principles guiding every build.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-[#E7E2D6] text-[#0D1015]">
      <section className="relative isolate overflow-hidden bg-[#CBC8BA] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A79F90_0%,transparent_55%)]" aria-hidden="true" />
        <div className="container relative z-10 space-y-6 text-center sm:max-w-4xl sm:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-[#3F3A32]">About NexaWorks</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[3rem]">
            Three founders. No sales layer. Only working software.
          </h1>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            We stay on the hook for outcomes, write the code ourselves, and refuse staff-aug theater or endless discovery decks. This page is the why, the team, and what we won&apos;t do.
          </p>
        </div>
      </section>

      <CompanyStorySection />
      <TimelineSection />
      <TeamSection />
      <MissionVisionSection />
      <WhyChooseNexaWorks />
      <ContactCTASection />
    </main>
  );
}
