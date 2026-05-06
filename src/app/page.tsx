import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { EngagementModelsSection } from "@/components/sections/EngagementModelsSection";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function HomePage() {
  return (
    <main className="flex flex-col bg-[#0A0A0B]">
      <Hero />
      <LogoCloud />
      <SocialProofSection />
      <ProcessSection />
      <ComparisonSection />
      <EngagementModelsSection />
      <ROICalculator />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
