"use client";

import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

const Why = () => (
  <div>
    <h3 className="font-display text-lg font-semibold text-[#0D1015]">Why this exists</h3>
    <p className="mt-2 text-sm text-[#3F3A32]">We believe founders should be judged on product, not slide decks. This week we remove dev cost as a barrier for a handful of promising Indian startups.</p>
  </div>
);

const Included = () => (
  <div>
    <h3 className="font-display text-lg font-semibold text-[#0D1015]">What's included</h3>
    <ul className="mt-2 text-sm list-disc pl-5 text-[#3F3A32]">
      <li>Production-ready Next.js frontend + Express/Node backend (or Python microservice where required).</li>
      <li>Deployment to your preferred host (winner covers hosting costs).</li>
      <li>2-week build sprint, 2 rounds of bug-fix tweaks.</li>
      <li>Simple admin panel and basic analytics integration.</li>
      <li>Handoff: Git repo, deployment scripts, documentation.</li>
    </ul>
  </div>
);

const Eligibility = () => (
  <div>
    <h3 className="font-display text-lg font-semibold text-[#0D1015]">Eligibility</h3>
    <div className="mt-2 text-sm text-[#3F3A32] grid gap-2">
      <div>
        <div className="font-semibold">Who we want</div>
        <ul className="list-disc pl-5 mt-1">
          <li>Early-stage Indian startups with real users or measurable traction.</li>
          <li>Teams who can commit product decisions and weekly calls.</li>
          <li>Fundable ideas (pre-seed & seed stage).</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold">Who we reject</div>
        <ul className="list-disc pl-5 mt-1">
          <li>Pure idea-stage with zero users.</li>
          <li>Non-technical unlimited-scope projects or enterprise platforms &gt;2-week MVP.</li>
          <li>Projects that require heavy regulation or complex legal approval before demo.</li>
        </ul>
      </div>
    </div>
  </div>
);

const Process = () => (
  <div>
    <h3 className="font-display text-lg font-semibold text-[#0D1015]">Process & timeline</h3>
    <ol className="mt-2 text-sm list-decimal pl-5 text-[#3F3A32]">
      <li>Apply (form) — you share product links and traction data.</li>
      <li>Quick screening call (30 mins).</li>
      <li>Contract signing and kickoff.</li>
      <li>2-week sprint: day 1 planning; week 1 dev; week 2 polish + deploy.</li>
      <li>Delivery and handoff.</li>
    </ol>
  </div>
);

const Pricing = () => (
  <div>
    <h3 className="font-display text-lg font-semibold text-[#0D1015]">Pricing clarifier</h3>
    <p className="mt-2 text-sm text-[#3F3A32]">Development is free for the deliverables listed. Winners pay domain and deployment fees directly to the hosting provider — NexaWorks will not bill for hosting unless you ask us to manage it.</p>
  </div>
);

const cards = [
  { id: 1, content: <Why />, className: "md:col-span-2", thumbnail: undefined },
  { id: 2, content: <Included />, className: "md:col-span-2", thumbnail: undefined },
  { id: 3, content: <Eligibility />, className: "md:col-span-2", thumbnail: undefined },
  { id: 4, content: <Process />, className: "md:col-span-3", thumbnail: undefined },
  { id: 5, content: <Pricing />, className: "md:col-span-3", thumbnail: undefined },
];

export default function LayoutGridDemo() {
  return (
    <div className="py-12">
      <LayoutGrid cards={cards} />
    </div>
  );
}
