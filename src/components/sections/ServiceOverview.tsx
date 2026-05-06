"use client";

import { motion } from "framer-motion";

import { Badge } from "@/ui/Badge";

export function ServiceOverview() {
  return (
    <section className="bg-[#0A0A0B] pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="container">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col gap-6 text-center sm:gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="success" className="mx-auto w-fit">Services</Badge>
          <h1 className="font-display text-4xl font-semibold text-[#FAFAFA] sm:text-5xl md:text-[3.5rem] leading-[1.1]">
            We Design & Ship <span className="text-[#10B981]">AI Revenue Systems</span> That Book Meetings.
          </h1>
          <p className="text-base text-[#A1A1AA] sm:text-xl max-w-3xl mx-auto">
            Founder-led engineering teams that enter when your outbound is leaking revenue. We build autonomous pipeline engines in your stack within 14 days—no slideware, no generic lists.
          </p>

          <div className="grid gap-4 rounded-[2.5rem] border border-[#27272A] bg-[#131316] p-8 text-left sm:grid-cols-2 mt-8 shadow-[0_32px_65px_-32px_rgba(0,0,0,0.8)]">
            <div className="space-y-4">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">Ideal Engagement</p>
              <ul className="space-y-3 text-sm text-[#A1A1AA]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" />
                  <span>B2B SaaS teams ready to scale pipeline in &lt; 3 weeks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" />
                  <span>Production CRM/Email access for immediate implementation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" />
                  <span>Direct founder/exec sponsorship for fast decisions.</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 pt-6 sm:pt-0 sm:pl-8 sm:border-l border-[#27272A]">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-[#FAFAFA]/50">What we avoid</p>
              <ul className="space-y-3 text-sm text-[#A1A1AA]/70">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#27272A]" />
                  <span>Procurement-heavy processes without direct technical owners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#27272A]" />
                  <span>“Exploratory” projects without concrete pipeline targets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#27272A]" />
                  <span>Clients seeking consulting decks instead of production systems.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

}
