"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Expand } from "lucide-react";

import { MetricCard } from "@/ui/MetricCard";
import { cn } from "@/lib/utils";

interface DemoPreviewProps {
  className?: string;
}

export function DemoPreview({ className }: DemoPreviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <motion.div
        layout
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur shadow-[0_20px_45px_-20px_rgba(15,23,42,0.6)]",
          isExpanded ? "fixed inset-6 z-50" : ""
        )}
        transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1F2937_0%,transparent_60%)]" />
        <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#CBC8BA]">
            ResuMind • AI Analyzer
          </h3>
          <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
            <span>Real-time Processing</span>
            <span>Secure Workspace</span>
          </div>
        </div>
        <div className="relative h-[240px] w-full overflow-hidden rounded-b-2xl bg-[#05070B] md:h-[280px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937_0%,transparent_70%)]" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#111827]/60 via-[#0D1015]/60 to-[#030712]" aria-hidden="true" />
          <div className="relative z-10 flex h-full flex-col justify-between p-5 text-xs text-[#E5E7EB]/85">
            <div className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.4em] text-[#9CA3AF]">
              <span className="h-2 w-2 rounded-full bg-[#FF2003]" aria-hidden="true" />
              Live Queue Snapshot
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[#FF2003]">Top Match</p>
                <p className="mt-2 text-sm font-semibold text-[#F9FAFB]">Avery Lane</p>
                <p className="text-[0.7rem] text-[#9CA3AF]">Product Lead • 95% fit</p>
                <p className="mt-3 text-[0.7rem] text-[#D1D5DB]">
                  Action: Outreach intro ready. AI explains skills match in 3 bullet points.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                <p className="text-[0.6rem] uppercase tracking-[0.35em] text-[#FF2003]">Queue</p>
                <ul className="mt-3 space-y-2 text-[0.72rem] text-[#E5E7EB]">
                  <li className="flex items-center justify-between">
                    <span>Operations Strategist</span>
                    <span className="text-[#9CA3AF]">92%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Data Analyst</span>
                    <span className="text-[#9CA3AF]">88%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Implementation PM</span>
                    <span className="text-[#9CA3AF]">87%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white transition hover:bg-white/10"
            aria-label={isExpanded ? "Collapse demo preview" : "Expand demo preview"}
          >
            <Expand className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-4 px-6 py-6 md:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            value={4.2}
            prefix=""
            suffix="s"
            label="AVG PROCESSING TIME"
            animate
            className="bg-[#0F172A]"
          />
          <MetricCard
            value={95}
            prefix=""
            suffix="%"
            label="ACCURACY BENCHMARK"
            animate
            className="bg-[#0F172A]"
          />
          <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-[#0D1015] p-4 text-sm text-[#9CA3AF] lg:justify-between">
            <p className="text-xs uppercase tracking-[0.25em] text-[#FF2003]">Why It Matters</p>
            <ul className="space-y-2 text-[0.85rem] leading-relaxed">
              <li>AI surfaces priority resumes instantly with explanations.</li>
              <li>Recruiters move from review to outreach in under 5 minutes.</li>
              <li>Audit trail keeps compliance teams confident.</li>
            </ul>
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-semibold text-[#FF2003] transition hover:text-[#FF2003]/80"
            >
              Explore Project Details →
            </Link>
          </div>
        </div>
      </motion.div>

      {isExpanded ? (
        <button
          type="button"
          onClick={() => setIsExpanded(false)}
          className="fixed inset-0 z-40 cursor-default bg-black/60 backdrop-blur-sm"
          aria-label="Close expanded demo preview"
        />
      ) : null}
    </div>
  );
}
