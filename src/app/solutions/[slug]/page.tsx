import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Target, RefreshCw, ShieldCheck, Swords, Lock, CircleDollarSign, FileText, Rocket, Shield } from "lucide-react";
import { getSolutionBySlug, getAllSolutions } from "@/lib/solutions";

const IconMap = {
  Target: Target,
  RefreshCw: RefreshCw,
  ShieldCheck: ShieldCheck,
  Swords: Swords,
  Lock: Lock,
  CircleDollarSign: CircleDollarSign,
  FileText: FileText,
  Rocket: Rocket,
  Shield: Shield,
};

export async function generateStaticParams() {
  const solutions = getAllSolutions();
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return { title: "Solution Not Found" };
  }

  return {
    title: solution.title,
    description: solution.description,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Premium Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden border-b border-[#E4E4E7]">
        <div className="absolute inset-0 bg-[#FAFAFA] -z-10" />
        {/* Abstract Glow */}
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-[#D35A3C] opacity-[0.03] blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto max-w-5xl px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E4E4E7] text-sm font-semibold tracking-wide text-[#09090B] mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D35A3C] animate-pulse"></span> {solution.title.split('|')[0].trim()}
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-[#09090B] mb-8 leading-[1.05]">
            {solution.heroHeading}
          </h1>
          <p className="text-xl md:text-2xl text-[#52525B] max-w-3xl mx-auto leading-relaxed font-light mb-12">
            {solution.heroSubheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="text-[17px] font-semibold !text-white bg-[#09090B] px-8 py-4 rounded-full hover:bg-[#27272A] transition-all shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              Start 30-Day Pilot <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ROI Metrics Strip */}
      <section className="py-16 border-b border-[#E4E4E7] bg-white">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-[#E4E4E7]">
            {solution.metrics.map((metric, idx) => (
              <div key={idx} className="pt-8 md:pt-0 first:pt-0">
                <div className="text-5xl md:text-6xl font-medium text-[#09090B] mb-3 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm uppercase tracking-wider font-bold text-[#71717A]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Old Way vs The New Way */}
      <section className="py-32 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-medium tracking-tight text-[#09090B] mb-6">
                {solution.painPoint.title}
              </h2>
              <p className="text-lg text-[#52525B] leading-relaxed mb-8">
                {solution.painPoint.description}
              </p>
              <ul className="space-y-4">
                {solution.painPoint.stats.map((stat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D35A3C]/10 flex items-center justify-center mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#D35A3C]" />
                    </span>
                    <span className="text-[#09090B] font-medium">{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#09090B] rounded-[2rem] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#D35A3C]/20 to-transparent pointer-events-none" />
               <h3 className="text-3xl font-medium mb-6 relative z-10">The NexaWorks Brain</h3>
               <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8 relative z-10">
                 Instead of static articles, we build an operational memory layer that reads your actual company data in real-time. It doesn't guess. It resolves.
               </p>
               <div className="space-y-4 relative z-10">
                 <div className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-md">
                   <div className="text-sm text-[#A1A1AA] mb-1">Incoming Query</div>
                   <div className="font-medium">"What is the API rate limit?"</div>
                 </div>
                 <div className="flex justify-center text-[#A1A1AA]">
                   <ArrowRight className="w-5 h-5 rotate-90" />
                 </div>
                 <div className="bg-white border border-white rounded-xl p-4 text-[#09090B]">
                   <div className="flex items-center gap-2 text-sm text-[#71717A] mb-1">
                     <CheckCircle2 className="w-4 h-4 text-[#D35A3C]" /> Resolved instantly via Slack sync
                   </div>
                   <div className="font-medium">"The Enterprise tier limit is 10,000 req/min."</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deep Dive Features */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#09090B] mb-6">
              Purpose-built for operational reality.
            </h2>
            <p className="text-xl text-[#52525B] leading-relaxed">
              We didn't just build a chatbot. We built a deterministic engine designed specifically to handle complex B2B workflows without hallucinating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.keyFeatures.map((feature, idx) => {
              const Icon = IconMap[feature.iconName as keyof typeof IconMap] || CheckCircle2;
              return (
                <div key={idx} className="group p-10 rounded-[2rem] border border-[#E4E4E7] bg-[#FAFAFA] transition-all hover:bg-white hover:shadow-xl hover:border-[#D35A3C]/20">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#E4E4E7] flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#D35A3C] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#09090B] mb-4">{feature.title}</h3>
                  <p className="text-[#52525B] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Testimonial & Final CTA */}
      <section className="py-32 bg-[#09090B] text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <div className="mb-20">
            <div className="text-[#D35A3C] text-6xl font-serif leading-none mb-6">"</div>
            <p className="text-2xl md:text-4xl font-medium leading-snug mb-8">
              {solution.testimonial.quote}
            </p>
            <div>
              <div className="font-bold text-lg">{solution.testimonial.author}</div>
              <div className="text-[#A1A1AA]">{solution.testimonial.role}</div>
            </div>
          </div>
          
          <div className="pt-20 border-t border-[#27272A]">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
              Ready to automate your {solution.title.split('for ')[1].split('|')[0].trim()}?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[17px] font-semibold !text-[#09090B] bg-white px-10 py-5 rounded-full hover:bg-[#F4F4F5] transition-all shadow-xl hover:-translate-y-1"
            >
              Request a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
