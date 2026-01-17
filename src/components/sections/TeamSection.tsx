"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const founders = [
  {
    name: "Sahil Ghewari",
    role: "Co-founder & CEO",
    avatar: "SG",
    bio:
      "Sahil grew up in Pune, studied computer engineering, and built internal tools for fast-moving product teams before founding NexaWorks. He leads product strategy and delivery rituals, spending as much time pairing with engineers as he does with clients. Sahil obsesses over turning ambiguous business goals into crisp roadmaps, removing blockers daily, and ensuring every sprint ships something demoable. Before NexaWorks he led automation initiatives across fintech and retail, proving that disciplined execution and honest communication beat bloated programs every time.",
    superpower: "Translate business ambiguity into a technical plan the team can ship in weeks.",
    proudOf: "Keeping founders in the loop with real demos instead of slideware.",
    links: {
      linkedin: "https://www.linkedin.com/in/sahil-ghewari/",
      github: "https://github.com/sahilghewari",
    },
  },
  {
    name: "Pavan Baber",
    role: "Co-founder & CTO",
    avatar: "PB",
    bio:
      "Pavan is a systems engineer from Bengaluru who has shipped distributed services, data pipelines, and AI infrastructure for high-volume platforms. At NexaWorks he designs the architecture runway, codifies engineering standards, and leads deep dives on reliability and security. Pavan cares about measurable performance: telemetry by default, latency budgets, and guardrails that keep shipping fast without sacrificing safety. He previously led backend and ML platform teams, where he learned that the fastest way to earn trust is to make systems observable and resilient from day one.",
    superpower: "Builds resilient systems with clear SLAs, tracing, and rollback paths baked in.",
    proudOf: "Standing up infra that let us handle 150 concurrent uploads in week four of a build.",
    links: {
      linkedin: "https://www.linkedin.com/in/pavanbabar/",
      github: "https://github.com/pavanofficiall",
    },
  },
  {
    name: "Mangala Sawant",
    role: "Co-founder & COO",
    avatar: "MS",
    bio:
      "Mangala is an operator from Mumbai with a background in product delivery and customer success. She keeps NexaWorks running on time—owning client onboarding, risk reviews, and the communication rhythm that keeps founders confident. Before NexaWorks she scaled delivery teams across SaaS implementations, learning how to translate technical progress into business language and unblock decisions quickly. Mangala ensures every engagement has clear success criteria, proactive updates, and a smooth path from pilot to production.",
    superpower: "Designs processes that keep velocity high while stakeholders stay fully informed.",
    proudOf: "Our reputation for transparency—weekly readouts, clear risks, and no surprises.",
    links: {
      linkedin: "https://www.linkedin.com/in/mangala-sawant-34a3a92a6/",
      github: "https://github.com/MangalaSawant",
    },
  },
];

export function TeamSection() {
  return (
    <section className="bg-[#E7E2D6] py-20 sm:py-24">
      <div className="container space-y-10">
        <motion.div
          className="space-y-3 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#3F3A32]">Team</p>
          <h2 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl">Three founders who code</h2>
          <p className="text-base text-[#3F3A32] sm:text-lg">Hands-on leaders accountable for every sprint, release, and customer outcome.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] p-8 shadow-[0_26px_70px_-30px_rgba(13,16,21,0.8)]"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#A3542B] to-[#3F3A32] text-lg font-semibold text-[#CBC8BA]">
                  {founder.avatar}
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-[#0D1015]">{founder.name}</h3>
                  <p className="text-sm text-[#3F3A32]">{founder.role}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[#3F3A32]">{founder.bio}</p>

              <div className="space-y-2 text-sm text-[#3F3A32]">
                <p><span className="text-[#0D1015]">Superpower: </span>{founder.superpower}</p>
                <p><span className="text-[#0D1015]">Proud of: </span>{founder.proudOf}</p>
              </div>

              <div className="mt-auto flex gap-3 text-sm font-semibold text-[#A3542B]">
                {founder.links.linkedin ? (
                  <Link
                    href={founder.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#0D1015]/10 px-3 py-2 transition hover:border-[#A3542B]/50 hover:text-[#A3542B]/80"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </Link>
                ) : null}
                {founder.links.github ? (
                  <Link
                    href={founder.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#0D1015]/10 px-3 py-2 transition hover:border-[#A3542B]/50 hover:text-[#A3542B]/80"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </Link>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
