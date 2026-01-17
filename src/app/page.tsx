import { Hero } from "@/sections/Hero";
import { SocialProofSection } from "@/sections/SocialProofSection";
import { CaseStudyHighlights } from "@/sections/CaseStudyHighlights";
import { FinalCTASection } from "@/sections/FinalCTASection";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <SocialProofSection />
      <CaseStudyHighlights />
      <FinalCTASection />
    </main>
  );
}

