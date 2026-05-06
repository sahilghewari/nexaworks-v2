"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { ctaButtonVariants } from "@/ui/CTAButton";
import { Badge } from "@/ui/Badge";
import { MetricCard } from "@/ui/MetricCard";

const metrics: Array<{ value: number; decimals: number; label: string; prefix?: string; suffix?: string }> = [
  { value: 30, decimals: 0, label: "PROJECTS SHIPPED" },
  { value: 99.7, decimals: 1, suffix: "%", label: "PLATFORM UPTIME" },
];

function mulberry32(seed: number) {
  return function random() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function createParticles(count = 20, seed = 42) {
  const rng = mulberry32(seed);
  return Array.from({ length: count }).map((_, index) => ({
    id: index,
    x: rng() * 100,
    y: rng() * 100,
    delay: rng() * 4,
    duration: 6 + rng() * 6,
  }));
}

export function Hero() {
  const particles = useMemo(() => createParticles(), []);

  return (
    <section className="relative isolate overflow-hidden bg-[#CBC8BA]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A79F90_0%,transparent_55%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-[-15%] z-0 h-[420px] bg-gradient-to-b from-[#A3542B]/10 via-transparent to-transparent blur-3xl" aria-hidden="true" />

      <motion.div
        className="absolute inset-0 z-0"
        initial="initial"
        animate="animate"
      >
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#A3542B]/40"
            style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 0.4, 0], y: [0, -14, 0] }}
            transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        ))}
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-center md:gap-10 md:py-18">
        <motion.div
          className="flex flex-1 flex-col gap-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge variant="info" className="w-fit border-none bg-[#0D1015]/5 text-[#3F3A32]">
            The AI Revenue Engine for B2B SaaS
          </Badge>

          <h1 className="font-display text-4xl font-bold leading-[1.1] text-[#0D1015] md:text-6xl md:leading-[1.1]">
            We Build AI Systems That Generate $1M+ in Pipeline
          </h1>
          <p className="max-w-xl text-lg text-[#3F3A32] md:text-xl">
            NexaWorks engineers done-for-you AI outbound engines for B2B SaaS companies. Scale your qualified meetings without hiring a single SDR.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="/pipeline-audit"
              className={ctaButtonVariants({ variant: "primary", size: "lg" })}
            >
              Apply for a Pipeline Audit
            </Link>
            <Link
              href="#roi-calculator"
              className={ctaButtonVariants({ variant: "secondary", size: "lg" })}
            >
              Calculate Your AI ROI
            </Link>
          </div>

          <div className="grid w-full max-w-lg gap-3 rounded-2xl border border-[#0D1015]/10 bg-[#B7B0A0]/60 p-5 backdrop-blur sm:grid-cols-2">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix ?? ""}
                prefix={metric.prefix ?? ""}
                label={metric.label}
                decimals={metric.decimals}
                animate
                className="border-[#0D1015]/5 bg-[#CBC8BA]/80"
              />
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="w-full rounded-3xl border border-[#0D1015]/10 bg-[#B7B0A0]/70 p-8 shadow-[0_32px_65px_-32px_rgba(13,16,21,0.75)]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#3F3A32]">
                <span className="inline-flex h-2 w-2 items-center justify-center rounded-full bg-[#A3542B]" aria-hidden="true" />
                Done-For-You Execution
              </div>
              <h3 className="text-2xl font-semibold text-[#0D1015]">
                Our 3-Step Outbound Engine
              </h3>
              <ul className="space-y-3 text-sm text-[#3F3A32]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#A3542B]" aria-hidden="true" />
                  <strong>Signal Ingestion:</strong> We scrape high-intent buying signals specific to your ICP.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#A3542B]" aria-hidden="true" />
                  <strong>AI Orchestration:</strong> Hyper-personalized, multi-channel sequences that sound human.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#A3542B]" aria-hidden="true" />
                  <strong>Qualified Meetings:</strong> Demos land on your calendar. You just show up and close.
                </li>
              </ul>
              <div className="rounded-2xl border border-[#0D1015]/10 bg-[#CBC8BA] p-5 text-sm text-[#3F3A32]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#A3542B]">Pipeline Guarantee</p>
                <p className="mt-2 leading-relaxed">
                  If we can&apos;t identify at least 3 actionable ways to increase your qualified pipeline by 30%, we&apos;ll pay you $500 for your time.
                </p>
              </div>
            </div>
        </motion.aside>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <motion.div
          className="flex flex-col items-center text-[#3F3A32]"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <span className="text-xs uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}
