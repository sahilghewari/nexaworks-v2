"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Speed",
    description: "Short cycles, weekly demos, production in weeks—not quarters.",
  },
  {
    title: "Outcomes Over Output",
    description: "We measure success in business impact, not ticket velocity.",
  },
  {
    title: "Practical AI",
    description: "Models only where they matter; reliable automation everywhere else.",
  },
  {
    title: "Accountability",
    description: "Founders stay on the hook for quality, timelines, and results.",
  },
  {
    title: "Engineering Excellence",
    description: "Secure defaults, observability, testing, and resilient architectures baked in.",
  },
  {
    title: "Learning",
    description: "Retros, docs, and playbooks that improve every engagement.",
  },
];

export function MissionVisionSection() {
  return (
    <section className="bg-[#CBC8BA] py-20 sm:py-24">
      <div className="container space-y-10">
        <motion.div
          className="grid gap-8 rounded-3xl border border-[#0D1015]/10 bg-[#E7E2D6] p-8 shadow-[0_26px_70px_-30px_rgba(13,16,21,0.8)] sm:grid-cols-2 sm:gap-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-[#3F3A32]">Mission</p>
            <h3 className="text-2xl font-semibold text-[#0D1015]">Ship reliable automation and AI faster than anyone else.</h3>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              We exist to turn ambitious ideas into production software with transparent ownership, measurable KPIs, and the craft to keep systems running smoothly after launch.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-[#3F3A32]">Vision</p>
            <h3 className="text-2xl font-semibold text-[#0D1015]">Be the most trusted builder for founders who need working software yesterday.</h3>
            <p className="text-sm leading-relaxed text-[#3F3A32]">
              A studio where every engagement is led by founders who code, every deliverable is demoable, and every client feels confident in the path from idea to impact.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <h3 className="text-lg font-semibold text-[#0D1015]">Values we operate by</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="space-y-2 rounded-2xl border border-[#0D1015]/10 bg-[#E7E2D6] p-5"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[#3F3A32]">{value.title}</p>
                <p className="text-sm leading-relaxed text-[#0D1015]">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
