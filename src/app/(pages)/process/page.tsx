import type { Metadata } from "next";
import Link from "next/link";

const baseCta = "inline-flex items-center justify-center gap-2 font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3542B] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";
const primaryCta = `${baseCta} rounded-full bg-[#A3542B] px-6 text-white shadow-lg shadow-[#A3542B]/20 hover:bg-[#A3542B]/90 active:bg-[#A3542B]/95`;
const secondaryCta = `${baseCta} rounded-full border border-[#A3542B]/60 bg-transparent px-6 text-[#A3542B] hover:bg-[#A3542B]/10 active:bg-[#A3542B]/15`;

export const metadata: Metadata = {
  title: "How We Work | NexaWorks",
  description: "Our delivery rituals, engagement models, and quality gates that keep launches predictable and fast.",
  openGraph: {
    title: "How We Work | NexaWorks",
    description: "Discovery to launch—our proven delivery playbook with acceptance gates and demo cadence.",
    url: "https://nexaworks.tech/process",
    siteName: "NexaWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work | NexaWorks",
    description: "Discovery to launch—our proven delivery playbook with acceptance gates and demo cadence.",
  },
};

const phases = [
  {
    title: "Gate 0: Discovery & Alignment",
    duration: "3-5 days",
    items: [
      "Lock KPI, owner, and access; no KPI, no start",
      "Map data sources, constraints, security requirements",
      "Draft acceptance criteria and week-2 demo slice",
    ],
  },
  {
    title: "Gate 1: Architecture & Plan",
    duration: "3-7 days",
    items: [
      "Select stack, observability, and controls",
      "Sequence milestones with decision dates",
      "Publish rollback paths and non-negotiables",
    ],
  },
  {
    title: "Gate 2: Build & Demo",
    duration: "Weekly cadence",
    items: [
      "Ship vertical slices behind flags",
      "Week-2 live slice; if missed, pause and fix",
      "Weekly demos with risks and deltas vs KPI",
    ],
  },
  {
    title: "Gate 3: Hardening & Launch",
    duration: "1-2 weeks",
    items: [
      "Load, perf, and resiliency checks",
      "Runbooks, alerts, and SLOs in place",
      "Cutover with rollback rehearsed; miss SLO twice → revert",
    ],
  },
];

const guarantees = [
  "Week-2 live slice or we pause and fix before proceeding",
  "Weekly demos with acceptance criteria and KPI delta",
  "Two strikes on SLOs (uptime/latency) → fix-only until green",
  "Security, accessibility, and rollback baked into definition of done",
];

export default function ProcessPage() {
  return (
    <main className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-[#CBC8BA] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A79F90_0%,transparent_60%)]" aria-hidden="true" />
        <div className="container relative z-10 space-y-6 text-center sm:max-w-4xl sm:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-[#3F3A32]">How we work</p>
          <h1 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl md:text-[3rem]">
            Governance over theater. Stop-rules baked in.
          </h1>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            Every phase has a gate. Miss it, we pause or change course. Week-2 live slice, weekly demos, rollback rehearsed, and a KPI we’re accountable to.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link href="/contact" className={`${primaryCta} h-12 text-lg`}>
              Start a project
            </Link>
            <Link href="/projects" className={`${secondaryCta} h-12 text-lg`}>
              See case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#0D1015]/10 bg-[#CBC8BA] py-16">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0D1015]">Decision gates</h2>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              Each gate has a pass/fail. If we miss a gate, we stop, fix, or pivot before spending another dollar.
            </p>
          </div>
          <div className="grid gap-4 rounded-2xl border border-[#0D1015]/10 bg-[#B7B0A0]/70 p-6 shadow-[0_24px_50px_-24px_rgba(13,16,21,0.65)] md:grid-cols-2">
            {phases.map((phase) => (
              <article key={phase.title} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#0D1015]">{phase.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#3F3A32]">{phase.duration}</span>
                </div>
                <ul className="space-y-2 text-sm text-[#3F3A32]">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#A3542B]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#0D1015]/10 bg-[#CBC8BA] py-16">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#0D1015]">Quality, risk, and escalation</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-[#3F3A32]">
              <li>Definition of Done: tests, accessibility, performance budgets enforced.</li>
              <li>Secure-by-default: CSP headers, no inline creds, secrets managed.</li>
              <li>Observability wired before launch: logs, metrics, alerts with owners.</li>
              <li>Rollback ready: rehearsed paths, not just a paragraph in a doc.</li>
              <li>Escalation: two consecutive misses on KPI/SLO triggers fix-only mode.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#0D1015]/10 bg-[#B7B0A0]/70 p-6 shadow-[0_24px_50px_-24px_rgba(13,16,21,0.65)]">
            <h3 className="text-xl font-semibold text-[#0D1015]">Our guarantees</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#3F3A32]">
              {guarantees.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#A3542B]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link href="/contact" className={`${primaryCta} h-11 text-base`}>
                Book a 30-min call
              </Link>
              <Link href="/services" className={`${secondaryCta} h-11 text-base`}>
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
