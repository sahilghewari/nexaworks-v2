"use client";

import { motion } from "framer-motion";

import { Badge } from "@/ui/Badge";

export function ServiceOverview() {
  return (
    <section className="bg-[#CBC8BA] py-20 sm:py-24">
      <div className="container">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col gap-6 text-center sm:gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Badge variant="info" className="mx-auto w-fit">Services</Badge>
          <h1 className="font-display text-3xl font-semibold text-[#0D1015] sm:text-4xl md:text-[3rem]">
            Ops hurting? We fix the bottleneck and prove it live.
          </h1>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            Founder-led teams that enter when revenue is leaking from manual ops, brittle handoffs, or dashboards no one trusts. We ship a running slice in your stack within days—no slideware, no endless discovery.
          </p>

          <div className="grid gap-3 rounded-2xl border border-[#0D1015]/10 bg-[#B7B0A0]/70 p-5 text-left sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#3F3A32]">Who should engage</p>
              <ul className="space-y-2 text-sm text-[#3F3A32]">
                <li>Founder/exec sponsor ready to ship a v1 in &lt; 4 weeks.</li>
                <li>Production data access and a clear KPI to move now.</li>
                <li>Comfort with weekly live demos and fast decisions.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#3F3A32]">Who we won&apos;t</p>
              <ul className="space-y-2 text-sm text-[#3F3A32]">
                <li>Procurement-first, no direct owner or access.</li>
                <li>“Exploratory” with no success metric or budget.</li>
                <li>Requests for decks instead of working software.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
