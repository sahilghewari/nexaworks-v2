import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { XCircle, CheckCircle2, ArrowRight, Zap, ShieldAlert, Coins } from "lucide-react";
import { getComparisonBySlug, getAllComparisons } from "@/lib/comparisons";

export async function generateStaticParams() {
  const comparisons = getAllComparisons();
  return comparisons.map((comparison) => ({
    slug: comparison.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    return { title: "Comparison Not Found" };
  }

  return {
    title: comparison.title,
    description: comparison.description,
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Aggressive Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden border-b border-[#27272A] bg-[#09090B]">
        {/* Dark Mode Glow */}
        <div className="absolute top-0 right-0 h-[800px] w-[800px] bg-[#D35A3C] opacity-[0.1] blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold tracking-wide text-white mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D35A3C] animate-pulse"></span> NexaWorks vs {comparison.competitorName}
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.05]">
            {comparison.heroHeading}
          </h1>
          <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed font-light mb-12">
            {comparison.heroSubheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="text-[17px] font-semibold !text-[#09090B] bg-white px-8 py-4 rounded-full hover:bg-[#F4F4F5] transition-all shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              Start 30-Day Pilot <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. The Architectural Difference */}
      <section className="py-32 bg-[#FAFAFA] border-b border-[#E4E4E7]">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#09090B] mb-6">
              Why We Win: The Architecture
            </h2>
            <p className="text-xl text-[#52525B] leading-relaxed">
              We didn't just build a better LLM prompt. We built a completely different architecture designed to solve the exact things {comparison.competitorName} struggles with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Their Approach */}
             <div className="bg-white border border-[#E4E4E7] p-10 rounded-[2rem] opacity-70">
                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[#E4E4E7]">
                  <div className="w-12 h-12 rounded-full bg-[#F4F4F5] flex items-center justify-center">
                     <ShieldAlert className="w-6 h-6 text-[#71717A]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#71717A]">{comparison.competitorName}'s Approach</h3>
                  </div>
                </div>
                <p className="text-lg text-[#52525B] leading-relaxed mb-6 font-medium">
                  {comparison.architecturalDifference.theirApproach}
                </p>
                <p className="text-[#71717A] leading-relaxed">
                  {comparison.competitorFlaw}
                </p>
             </div>

             {/* Our Approach */}
             <div className="bg-[#09090B] border border-[#27272A] p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#D35A3C]/10 to-transparent pointer-events-none" />
                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[#27272A] relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#D35A3C]/20 flex items-center justify-center">
                     <Zap className="w-6 h-6 text-[#D35A3C]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">NexaWorks' Approach</h3>
                  </div>
                </div>
                <p className="text-lg text-white leading-relaxed mb-6 font-medium relative z-10">
                  {comparison.architecturalDifference.ourApproach}
                </p>
                <p className="text-[#A1A1AA] leading-relaxed relative z-10">
                  {comparison.ourAdvantage}
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. The Pricing Truth */}
      <section className="py-24 bg-white border-b border-[#E4E4E7]">
        <div className="container mx-auto max-w-5xl px-6">
           <div className="bg-[#FAFAFA] border border-[#E4E4E7] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/3">
                <div className="w-16 h-16 rounded-2xl bg-[#09090B] flex items-center justify-center mb-6 shadow-xl">
                   <Coins className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#09090B] mb-4">The Pricing Truth</h2>
                <p className="text-[#52525B] leading-relaxed">
                  Don't get penalized for scaling your support operations.
                </p>
             </div>
             <div className="md:w-2/3 space-y-8">
                <div>
                   <div className="text-sm font-bold uppercase tracking-wider text-[#71717A] mb-2">{comparison.competitorName}</div>
                   <p className="text-lg text-[#09090B] font-medium leading-relaxed">{comparison.pricingDifference.theirPricing}</p>
                </div>
                <div className="h-px w-full bg-[#E4E4E7]" />
                <div>
                   <div className="text-sm font-bold uppercase tracking-wider text-[#D35A3C] mb-2">NexaWorks</div>
                   <p className="text-lg text-[#09090B] font-medium leading-relaxed">{comparison.pricingDifference.ourPricing}</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 4. Feature Comparison Matrix */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium tracking-tight text-[#09090B]">Feature Comparison</h2>
          </div>
          
          <div className="bg-white border border-[#E4E4E7] rounded-3xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-[#FAFAFA] border-b border-[#E4E4E7] p-6 text-sm font-bold uppercase tracking-wider text-[#09090B]">
               <div className="col-span-6">Capability</div>
               <div className="col-span-3 text-center">{comparison.competitorName}</div>
               <div className="col-span-3 text-center text-[#D35A3C]">NexaWorks</div>
            </div>
            
            <div className="divide-y divide-[#E4E4E7]">
              {comparison.featureMatrix.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-6 items-center hover:bg-[#FAFAFA] transition-colors">
                   <div className="col-span-6">
                     <div className="font-semibold text-[#09090B] text-lg mb-1">{row.feature}</div>
                     <div className="text-sm text-[#71717A] leading-relaxed pr-8">{row.explanation}</div>
                   </div>
                   <div className="col-span-3 flex justify-center">
                     {row.them ? (
                       <CheckCircle2 className="w-6 h-6 text-[#A1A1AA]" />
                     ) : (
                       <XCircle className="w-6 h-6 text-[#E4E4E7]" />
                     )}
                   </div>
                   <div className="col-span-3 flex justify-center">
                     {row.us ? (
                       <CheckCircle2 className="w-6 h-6 text-[#D35A3C]" />
                     ) : (
                       <XCircle className="w-6 h-6 text-[#E4E4E7]" />
                     )}
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonial & Final CTA */}
      <section className="py-32 bg-[#09090B] text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <div className="mb-20">
            <div className="text-[#D35A3C] text-6xl font-serif leading-none mb-6">"</div>
            <p className="text-2xl md:text-4xl font-medium leading-snug mb-8">
              {comparison.testimonial.quote}
            </p>
            <div>
              <div className="font-bold text-lg">{comparison.testimonial.author}</div>
              <div className="text-[#A1A1AA]">{comparison.testimonial.company}</div>
            </div>
          </div>
          
          <div className="pt-20 border-t border-[#27272A]">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
              Ready for a real alternative to {comparison.competitorName}?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[17px] font-semibold !text-[#09090B] bg-white px-10 py-5 rounded-full hover:bg-[#F4F4F5] transition-all shadow-xl hover:-translate-y-1"
            >
              Request a Pilot <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
