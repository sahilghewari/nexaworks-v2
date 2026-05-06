import { Hero } from "@/sections/Hero";
import { SocialProofSection } from "@/sections/SocialProofSection";
import { ResumindDemo } from "@/sections/ResumindDemo";
import { CaseStudyHighlights } from "@/sections/CaseStudyHighlights";
import { FinalCTASection } from "@/sections/FinalCTASection";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <SocialProofSection />
      <ResumindDemo />
      <CaseStudyHighlights />
      <FinalCTASection />
    </main>
  );
}
