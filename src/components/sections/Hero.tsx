"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { ctaButtonVariants } from "@/ui/CTAButton";
import { Badge } from "@/ui/Badge";
import { MetricCard } from "@/ui/MetricCard";

const metrics = [
  { value: 30, decimals: 0, label: "PROJECTS SHIPPED" },
  { value: 99.7, decimals: 1, suffix: "%", label: "PLATFORM UPTIME" },
];

const floatingParticles = Array.from({ length: 20 }).map((_, index) => ({
  id: index,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 6 + Math.random() * 6,
}));

export function Hero() {
  const particles = useMemo(() => floatingParticles, []);

  return (
    <section className="relative isolate overflow-hidden bg-[#0D1015]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937_0%,transparent_55%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-[-15%] z-0 h-[420px] bg-gradient-to-b from-[#FF2003]/10 via-transparent to-transparent blur-3xl" aria-hidden="true" />

      <motion.div
        className="absolute inset-0 z-0"
        initial="initial"
        animate="animate"
      >
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#FF2003]/40"
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
          <Badge variant="info" className="w-fit border-none bg-white/5 text-[#9CA3AF]">
            Trusted by scale-ups shipping weekly
          </Badge>

          <h1 className="font-display text-4xl font-bold leading-[1.1] text-[#CBC8BA] md:text-6xl">
            Automation That Actually Works. Faster Than You Think.
          </h1>
          <p className="max-w-xl text-lg text-[#9CA3AF] md:text-xl">
            Enterprise-grade custom software and AI, delivered 3-4x faster than traditional consultancies. See it working, then decide.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <Link
              href="#demo-preview"
              className={ctaButtonVariants({ variant: "primary", size: "lg" })}
            >
              See It In Action
            </Link>
            <Link
              href="/contact"
              className={ctaButtonVariants({ variant: "secondary", size: "lg" })}
            >
              Schedule 30-Min Consultation
            </Link>
          </div>

          <div className="grid w-full max-w-lg gap-3 rounded-2xl border border-white/10 bg-[#111827]/60 p-5 backdrop-blur sm:grid-cols-2">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix ?? ""}
                prefix={metric.prefix ?? ""}
                label={metric.label}
                decimals={metric.decimals}
                animate
                className="border-white/5 bg-[#0D1015]/80"
              />
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="w-full rounded-3xl border border-white/10 bg-[#111827]/70 p-8 shadow-[0_32px_65px_-32px_rgba(15,23,42,0.75)]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[#9CA3AF]">
              <span className="inline-flex h-2 w-2 items-center justify-center rounded-full bg-[#FF2003]" aria-hidden="true" />
              Key Deliverables
            </div>
            <h3 className="text-2xl font-semibold text-[#CBC8BA]">
              What You See In Week One
            </h3>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#FF2003]" aria-hidden="true" />
                Live automation walkthrough tailored to your operations stack.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#FF2003]" aria-hidden="true" />
                Metrics dashboard preview highlighting time-to-value and accuracy.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#FF2003]" aria-hidden="true" />
                Founder-to-founder roadmap outlining launch milestones and risks.
              </li>
            </ul>
            <div className="rounded-2xl border border-white/10 bg-[#0D1015] p-5 text-sm text-[#9CA3AF]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#FF2003]">Why This Matters</p>
              <p className="mt-2 leading-relaxed">
                Every pitch comes with working software, not wireframes. You get clarity on impact, effort, and the first automation win before we ever send a proposal.
              </p>
            </div>
          </div>
        </motion.aside>
      </div>

      <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <motion.div
          className="flex flex-col items-center text-[#9CA3AF]"
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
