import { Hero } from "@/components/sections/Hero";
import { SocialProofBanner } from "@/components/sections/SocialProofBanner";
import { ValuePropositionBlocks } from "@/components/sections/ValuePropositionBlocks";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <main className="flex flex-col bg-white">
      <Hero />
      <SocialProofBanner />
      <ValuePropositionBlocks />
      <ArchitectureSection />
      {/* Keeping FAQ and FinalCTA as they generally fit the prompt requirement or can be adapted later */}
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
