import { Hero } from "@/sections/Hero";
import { ProblemSection } from "@/sections/ProblemSection";
import { SocialProofSection } from "@/sections/SocialProofSection";
import { CaseStudyHighlights } from "@/sections/CaseStudyHighlights";
import { DifferentiatorsSection } from "@/sections/DifferentiatorsSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { IndustriesSection } from "@/sections/IndustriesSection";
import { FinalCTASection } from "@/sections/FinalCTASection";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <ProblemSection />
      <SocialProofSection />
      <CaseStudyHighlights />
      <DifferentiatorsSection />
      <TestimonialsSection />
      <IndustriesSection />
      <FinalCTASection />
    </main>
  );
}

