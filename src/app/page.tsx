import { Hero } from "@/sections/Hero";
import { SocialProofSection } from "@/sections/SocialProofSection";
import { ResumindDemo } from "@/sections/ResumindDemo";
import { CaseStudyHighlights } from "@/sections/CaseStudyHighlights";
import { FinalCTASection } from "@/sections/FinalCTASection";
import HomeCampaignModal from "@/components/modals/HomeCampaignModal";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HomeCampaignModal />
      <Hero />
      <SocialProofSection />
      <ResumindDemo />
      <CaseStudyHighlights />
      <FinalCTASection />
    </main>
  );
}

