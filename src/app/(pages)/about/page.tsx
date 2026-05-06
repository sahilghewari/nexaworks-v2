import type { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";

export const metadata: Metadata = {
  title: "About NexaWorks | Built by Founders, Not Account Teams",
  description: "Learn about the mission behind NexaWorks: Engineering the next generation of AI-native revenue systems for B2B SaaS.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-[#0A0A0B]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-bold tracking-tight text-[#FAFAFA] sm:text-7xl">
              Built by <span className="text-emerald-500">Founders</span>, not account teams.
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-[#A1A1AA]">
              We started NexaWorks because we were tired of slow agencies shipping PDFs instead of working software. We engineer the systems we wish we had when we were scaling our own products.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 border-y border-[#27272A] bg-[#131316]">
        <div className="container grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-bold text-[#FAFAFA]">Our Engineering Philosophy</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-[#27272A] bg-[#0A0A0B]">
                <h3 className="font-bold text-[#FAFAFA]">Proof before Paperwork</h3>
                <p className="mt-2 text-sm text-[#A1A1AA]">We demo working code in Week 1. If we can't prove the technical viability of a solution fast, we don't proceed.</p>
              </div>
              <div className="p-6 rounded-2xl border border-[#27272A] bg-[#0A0A0B]">
                <h3 className="font-bold text-[#FAFAFA]">Skin in the Game</h3>
                <p className="mt-2 text-sm text-[#A1A1AA]">Our $500 audit guarantee isn't marketing fluff. It's our commitment to only taking on projects where we can deliver 10x ROI.</p>
              </div>
              <div className="p-6 rounded-2xl border border-[#27272A] bg-[#0A0A0B]">
                <h3 className="font-bold text-[#FAFAFA]">AI-Native, Not AI-Added</h3>
                <p className="mt-2 text-sm text-[#A1A1AA]">We don't just wrap ChatGPT. We build proprietary agents, intent-scrapers, and RAG pipelines designed for production scale.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-[#27272A] bg-[#0A0A0B]">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center">
                <p className="text-[#FAFAFA] font-mono text-xs opacity-50">IMAGE_PLACEHOLDER: FOUNDER_WORKING_ON_CODE</p>
             </div>
          </div>
        </div>
      </section>

      <ServiceCTASection />
    </main>
  );
}
