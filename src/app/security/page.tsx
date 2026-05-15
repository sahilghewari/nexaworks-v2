import { ShieldCheck, Lock, EyeOff, Server, HardDrive, FileCheck } from "lucide-react";
import Link from "next/link";

export default function SecurityPage() {
  const features = [
    {
      icon: <Lock className="h-6 w-6 text-[#D35A3C]" />,
      title: "Data Isolation",
      description: "Each enterprise pilot operates in a logically isolated environment. Your data is never commingled with other customers' data."
    },
    {
      icon: <EyeOff className="h-6 w-6 text-[#D35A3C]" />,
      title: "No Training on Your Data",
      description: "We strictly do not use your proprietary documents, tickets, or Slack history to train our base models or any public AI models."
    },
    {
      icon: <Server className="h-6 w-6 text-[#D35A3C]" />,
      title: "SOC 2 Type II Compliant",
      description: "Our infrastructure and processes are built to meet the most rigorous security standards for data availability and confidentiality."
    },
    {
      icon: <HardDrive className="h-6 w-6 text-[#D35A3C]" />,
      title: "Encryption at Rest & Transit",
      description: "All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Your operational memory is protected by the strongest industry standards."
    }
  ];

  return (
    <main className="bg-white min-h-screen py-36">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D35A3C]/10 text-[#D35A3C] text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="h-3 w-3" /> Enterprise Grade
          </div>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-[#09090B] mb-8">
            Security at <span className="text-[#A1A1AA]">NexaWorks.</span>
          </h1>
          <p className="text-xl text-[#52525B] leading-relaxed max-w-2xl mx-auto">
            Trust is the foundation of CompanyBrain. We implement rigorous security measures to ensure your data stays private, secure, and under your control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {features.map((f, i) => (
            <div key={i} className="p-10 rounded-2xl border border-[#E4E4E7] bg-[#F8FAFC]">
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-[#09090B] mb-3">{f.title}</h3>
              <p className="text-[#52525B] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <section className="prose prose-zinc max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-p:text-lg prose-p:leading-relaxed prose-p:text-[#3F3F46] border-t border-[#E4E4E7] pt-24">
          <h2 className="text-3xl text-[#09090B] mb-8">Infrastructure Security</h2>
          <p>
            CompanyBrain is hosted on world-class, SOC 2-compliant cloud infrastructure (AWS/Vercel). We leverage multi-region redundancy and continuous monitoring to ensure 99.9% uptime and immediate threat detection.
          </p>

          <h2 className="text-3xl text-[#09090B] mb-8 mt-16">Deterministic Privacy</h2>
          <p>
            Unlike general-purpose AI tools, CompanyBrain's retrieval layer is deterministic. We do not "guess" where your data is; we provide a secure, indexed map of your internal knowledge that remains strictly bounded by your organizational permissions.
          </p>

          <div className="mt-24 p-12 bg-[#09090B] rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#D35A3C] opacity-10 blur-3xl rounded-full -mr-20 -mt-20" />
            <h3 className="text-2xl font-bold !text-white mb-6 relative z-10">Need a full security audit?</h3>
            <p className="!text-white/70 mb-8 max-w-md mx-auto relative z-10">
              Our team can provide detailed documentation, penetration test results, and compliance certificates for your internal security review.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white !text-[#09090B] px-10 py-4 rounded-full font-bold hover:bg-[#F4F4F5] transition-all relative z-10"
            >
              Contact Security Team
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
