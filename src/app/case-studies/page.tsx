import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Real ROI and Impact",
  description: "See how forward-thinking teams are using CompanyBrain to turn scattered knowledge into deterministic resolutions and eliminate support hallucinations.",
};

const caseStudies = [
  {
    slug: "sutrahr",
    company: "SutraHR",
    metric: "Reduced FRT",
    description: "by instantly surfacing answers from legacy docs and Slack history.",
    bgColor: "bg-[#F8FAFC]",
    textColor: "text-[#09090B]",
    borderColor: "border-[#E4E4E7]",
    accentColor: "text-[#D35A3C]"
  },
  {
    slug: "epischoler",
    company: "Epischoler",
    metric: "Faster Resolution",
    description: "across all support channels using a unified, deterministic memory layer.",
    bgColor: "bg-[#09090B]",
    textColor: "text-white",
    borderColor: "border-transparent",
    accentColor: "text-[#D35A3C]"
  },
  {
    slug: "magic-ai",
    company: "Magic AI",
    metric: "Scaled Capacity",
    description: "handling major volume spikes without needing to double the support headcount.",
    bgColor: "bg-[#F8FAFC]",
    textColor: "text-[#09090B]",
    borderColor: "border-[#E4E4E7]",
    accentColor: "text-[#D35A3C]"
  },
  {
    slug: "zeroday",
    company: "Zeroday",
    metric: "Strict Compliance",
    description: "maintained while securely indexing highly isolated, encrypted data.",
    bgColor: "bg-[#F8FAFC]",
    textColor: "text-[#09090B]",
    borderColor: "border-[#E4E4E7]",
    accentColor: "text-[#D35A3C]"
  }
];

export default function CaseStudiesIndexPage() {
  return (
    <main className="bg-white min-h-screen py-36">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-[#09090B] mb-8">
            Real impact, <br /> <span className="text-[#A1A1AA]">real results.</span>
          </h1>
          <p className="text-xl text-[#52525B] leading-relaxed">
            See how forward-thinking support teams are using CompanyBrain to turn scattered knowledge into deterministic resolutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link 
              key={study.slug}
              href={`/case-studies/${study.slug}`} 
              className={`group relative overflow-hidden rounded-2xl border ${study.borderColor} ${study.bgColor} p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col min-h-[480px]`}
            >
              <div className="flex justify-between items-start mb-auto">
                <div className={`text-2xl font-bold tracking-tight ${study.textColor}`}>
                  {study.company}
                </div>
                <Plus className={`h-6 w-6 ${study.textColor} opacity-20 group-hover:opacity-100 transition-opacity`} />
              </div>
              
              <div className="mt-12">
                <div className={`text-4xl md:text-5xl font-medium tracking-tight ${study.accentColor} mb-6`}>
                  {study.metric}
                </div>
                <div className={`text-xl font-medium leading-relaxed mb-8 ${study.textColor === 'text-white' ? 'text-white/90' : 'text-[#52525B]'}`}>
                  {study.description}
                </div>
                <div className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${study.textColor} group-hover:gap-4 transition-all`}>
                  View full case study <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              {/* Subtle background decoration for the dark card */}
              {study.slug === 'epischoler' && (
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#D35A3C] opacity-10 blur-3xl rounded-full" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
