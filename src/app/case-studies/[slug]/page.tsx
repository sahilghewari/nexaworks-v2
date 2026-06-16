import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, Zap, Users } from "lucide-react";

export default function CaseStudyLayout({
  params,
}: {
  params: { slug: string };
}) {
  // This is a template-style layout for individual case studies
  // In a real app, this would fetch data based on the slug
  
  const studyData: Record<string, any> = {
    sutrahr: {
      company: "SutraHR",
      title: "Scaling Technical Support for India's Leading HR Tech Firm",
      metric: "Reduced FRT",
      metricLabel: "Performance Lift",
      challenge: "With thousands of active recruiters using their platform, SutraHR's support team was overwhelmed by repetitive technical queries that required digging through legacy documentation and Slack history.",
      solution: "CompanyBrain indexed their entire knowledge base, internal Slack channels, and past ticket resolutions to provide agents with instant, grounded context for every new inquiry.",
      results: [
        "First Response Time dropped significantly across all technical tiers.",
        "A large portion of tier-1 queries are now resolved instantly with verified memory.",
        "Agent onboarding time reduced remarkably using CompanyBrain as a learning layer."
      ]
    },
    epischoler: {
      company: "Epischoler",
      title: "Eliminating Hallucinations in Educational Support",
      metric: "Faster Resolution",
      metricLabel: "Operational Impact",
      challenge: "In the educational sector, accuracy is non-negotiable. Epischoler needed a system that could handle complex student queries about course materials without ever providing false information.",
      solution: "We implemented CompanyBrain's deterministic retrieval layer, ensuring that AI agents only respond when they have absolute confidence based on verified academic documentation.",
      results: [
        "Zero reported hallucinations since implementation.",
        "Noticeable increase in student satisfaction scores (CSAT).",
        "Unified support context across WhatsApp, Email, and Web Portal."
      ]
    },
    "magic-ai": {
      company: "Magic AI",
      title: "Handling Massive Support Volume During Viral Growth",
      metric: "Scaled Capacity",
      metricLabel: "Growth Management",
      challenge: "As Magic AI's user base exploded, their support volume grew exponentially, threatening to bury their small team in a backlog of tickets.",
      solution: "CompanyBrain acted as an automated first-responder, handling the initial surge of high-volume, repetitive queries while maintaining high accuracy.",
      results: [
        "Maintained fast response times during massive volume spikes.",
        "Saved hundreds of human-hours per month on repetitive troubleshooting.",
        "Scaled support capacity without needing to double the headcount."
      ]
    },
    zeroday: {
      company: "Zeroday",
      title: "Securing Knowledge for High-Stakes Cybersecurity Support",
      metric: "Strict Compliance",
      metricLabel: "Security Standards",
      challenge: "Zeroday provides high-stakes security services where knowledge is siloed across highly secure databases. Agents spent excessive time just trying to find the right security protocol.",
      solution: "CompanyBrain's secure indexing allowed Zeroday to create a unified, encrypted memory layer that provided agents with instant access to security protocols while maintaining strict data isolation.",
      results: [
        "Eliminated manual searching across siloed security databases.",
        "Significantly reduced mean-time-to-resolution (MTTR).",
        "Total compliance with strict enterprise data security standards."
      ]
    }
  };

  const data = studyData[params.slug] || studyData.sutrahr;

  return (
    <main className="bg-white min-h-screen pt-36 pb-24">
      <div className="container mx-auto max-w-4xl px-6">
        <Link 
          href="/case-studies" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#71717A] hover:text-[#09090B] mb-12 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Case Studies
        </Link>

        <div className="mb-16">
          <div className="text-sm font-bold uppercase tracking-widest text-[#D35A3C] mb-4">Case Study: {data.company}</div>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#09090B] leading-tight mb-8">
            {data.title}
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[#E4E4E7]">
            <div>
              <div className="text-3xl font-bold text-[#09090B]">{data.metric}</div>
              <div className="text-sm text-[#71717A]">{data.metricLabel}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#09090B]">24/7</div>
              <div className="text-sm text-[#71717A]">Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#09090B]">Days</div>
              <div className="text-sm text-[#71717A]">Setup Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#09090B]">ROI</div>
              <div className="text-sm text-[#71717A]">Proven Impact</div>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-[#09090B] mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-[#D35A3C]" /> The Challenge
            </h2>
            <p className="text-lg text-[#52525B] leading-relaxed">
              {data.challenge}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#09090B] mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#D35A3C]" /> The Solution
            </h2>
            <p className="text-lg text-[#52525B] leading-relaxed">
              {data.solution}
            </p>
          </section>

          <section className="bg-[#F8FAFC] rounded-2xl p-10 border border-[#E4E4E7]">
            <h2 className="text-2xl font-bold text-[#09090B] mb-8">Key Results</h2>
            <ul className="space-y-6">
              {data.results.map((result: string, i: number) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="h-6 w-6 rounded-full bg-[#D35A3C]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="h-2 w-2 rounded-full bg-[#D35A3C]" />
                  </div>
                  <span className="text-lg text-[#3F3F46] font-medium">{result}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-24 pt-12 border-t border-[#E4E4E7] text-center">
          <h3 className="text-2xl font-bold text-[#09090B] mb-6">Want to see similar results?</h3>
          <Link 
            href="/contact" 
            className="inline-block bg-[#09090B] !text-white px-8 py-4 rounded-full font-medium hover:bg-[#27272A] transition-all shadow-xl"
          >
            Request a Pilot
          </Link>
        </div>
      </div>
    </main>
  );
}
