import type { Metadata } from "next";
import Link from "next/link";

const baseCta = "inline-flex items-center justify-center gap-2 font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2003] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";
const primaryCta = `${baseCta} rounded-full bg-[#FF2003] px-6 text-white shadow-lg shadow-[#FF2003]/20 hover:bg-[#FF2003]/90 active:bg-[#FF2003]/95`;
const secondaryCta = `${baseCta} rounded-full border border-[#FF2003]/60 bg-transparent px-6 text-[#FF2003] hover:bg-[#FF2003]/10 active:bg-[#FF2003]/15`;

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
    title: "Discovery & Alignment",
    duration: "3-5 days",
    items: [
      "Define outcomes, risks, and success metrics",
      "Map data sources, integrations, constraints",
      "Draft acceptance criteria and demo plan",
    ],
  },
  {
    title: "Architecture & Plan",
    duration: "3-7 days",
    items: [
      "Select stack, hosting, and observability",
      "Design data flows and security controls",
      "Sequence milestones with owner + dates",
    ],
  },
  {
    title: "Build & Demo",
    duration: "Weekly cadence",
    items: [
      "Ship vertical slices with feature flags",
      "Weekly demos with metrics and risks",
      "QA + accessibility checks each increment",
    ],
  },
  {
    title: "Hardening & Launch",
    duration: "1-2 weeks",
    items: [
      "Load, perf, and resiliency checks",
      "Runbooks, alerts, and SLOs in place",
      "Cutover plan with rollback paths",
    ],
  },
];

const guarantees = [
  "Weekly demos with agreed acceptance criteria",
  "Visibility on risks, blockers, and scope changes",
  "Security and accessibility baked into definition of done",
  "Documentation and handoff playbooks before launch",
];

export default function ProcessPage() {
  return (
    <main className="flex flex-col">
      <section className="relative isolate overflow-hidden bg-[#0D1015] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937_0%,transparent_60%)]" aria-hidden="true" />
        <div className="container relative z-10 space-y-6 text-center sm:max-w-4xl sm:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9CA3AF]">How we work</p>
          <h1 className="font-display text-3xl font-semibold text-[#CBC8BA] sm:text-4xl md:text-[3rem]">
            A predictable playbook from brief to launch
          </h1>
          <p className="text-base text-[#9CA3AF] sm:text-lg">
            We pair founder-level ownership with engineering rigor: clear acceptance criteria, weekly demos, and quality gates that keep delivery fast and auditable.
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

      <section className="border-t border-white/10 bg-[#0D1015] py-16">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#CBC8BA]">Delivery phases</h2>
            <p className="text-sm leading-relaxed text-[#9CA3AF]">
              Each phase ships artifacts and demos. We don&apos;t move forward without owner sign-off and measurable acceptance criteria.
            </p>
          </div>
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-[#111827]/70 p-6 shadow-[0_24px_50px_-24px_rgba(15,23,42,0.65)] md:grid-cols-2">
            {phases.map((phase) => (
              <article key={phase.title} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#CBC8BA]">{phase.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF]">{phase.duration}</span>
                </div>
                <ul className="space-y-2 text-sm text-[#9CA3AF]">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#FF2003]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0D1015] py-16">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#CBC8BA]">Quality and governance</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-[#9CA3AF]">
              <li>Definition of Done includes tests, accessibility, and performance budgets.</li>
              <li>Secure-by-default: secrets in env, CSP headers, no inline credentials.</li>
              <li>Observability: logs, metrics, and alerts wired before launch.</li>
              <li>Runbooks and rollback paths are prepared before cutover.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#111827]/70 p-6 shadow-[0_24px_50px_-24px_rgba(15,23,42,0.65)]">
            <h3 className="text-xl font-semibold text-[#CBC8BA]">Our guarantees</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#9CA3AF]">
              {guarantees.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#FF2003]" aria-hidden="true" />
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
