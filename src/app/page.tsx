import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { EngagementModelsSection } from "@/components/sections/EngagementModelsSection";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <LogoCloud />
      <SocialProofSection />
      <ProcessSection />
      <EngagementModelsSection />
      <ROICalculator />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
