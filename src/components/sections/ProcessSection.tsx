"use client";

import { motion } from "framer-motion";
import { Search, Rocket, RefreshCw, ChevronRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "The Revenue Audit",
    description: "A 45-minute technical teardown of your current funnel. We find the leaks and identify exactly where an AI engine adds $100k+ in value.",
    icon: Search,
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    number: "02",
    title: "Live Slice in Week 1",
    description: "No mockups or 60-page PDFs. We demo working software in your environment by day 7. You see the engine running before you commit.",
    icon: Rocket,
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    number: "03",
    title: "Weekly Iteration",
    description: "Friday is Demo Day. You see progress every week and course-correct in real-time. We iterate until the conversion metrics hit the target.",
    icon: RefreshCw,
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    number: "04",
    title: "Scale & Handoff",
    description: "Production-ready deployment. We scale the volume, optimize the model, and hand over a fully documented revenue engine.",
    icon: CheckCircle2,
    color: "from-amber-500/20 to-amber-500/5",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#0A0A0B]">
      <div className="container relative z-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl">
            How we build your <span className="text-emerald-500">Revenue Engine</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#A1A1AA]">
            Traditional agencies sell theater. We sell outcomes. Our 4-step process is engineered to reduce your risk and maximize speed to pipeline.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="h-full rounded-3xl border border-[#27272A] bg-[#131316] p-8 transition-colors hover:border-emerald-500/50">
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} border border-white/10`}>
                  <step.icon className="h-6 w-6 text-[#FAFAFA]" />
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-emerald-500/50">{step.number}</span>
                  <h3 className="font-display text-xl font-bold text-[#FAFAFA]">{step.title}</h3>
                </div>
                
                <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA]">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden lg:block -translate-y-1/2 z-20">
                    <ChevronRight className="h-6 w-6 text-emerald-500/20" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
          <p className="text-sm font-semibold text-[#FAFAFA]">
            "If we don't find at least $100k in hidden pipeline opportunities during our audit, we pay you $500."
          </p>
          <p className="mt-1 text-xs text-[#A1A1AA]">Our Skin-in-the-game Guarantee.</p>
        </div>
      </div>
    </section>
  );
}
