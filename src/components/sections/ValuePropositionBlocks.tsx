"use client";

import { motion } from "framer-motion";
import { Brain, Clock, Shield } from "lucide-react";

const valueProps = [
  {
    title: "Fewer manager interruptions",
    description: "Senior people stop being the fallback knowledge base.",
    icon: <Brain className="h-8 w-8 text-[#09090B]" strokeWidth={1.5} />,
  },
  {
    title: "Faster onboarding",
    description: "New hires ramp with current context instead of interrupting the team.",
    icon: <Clock className="h-8 w-8 text-[#09090B]" strokeWidth={1.5} />,
  },
  {
    title: "Better support consistency",
    description: "Teams answer customers from the same trusted source.",
    icon: <Shield className="h-8 w-8 text-[#09090B]" strokeWidth={1.5} />,
  },
];

export function ValuePropositionBlocks() {
  return (
    <section className="bg-white py-32 border-b border-[#E4E4E7]">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-5xl font-medium tracking-tight text-[#09090B]">
            The value is simple
          </h2>
          <p className="mt-6 text-xl text-[#52525B]">
            In practice, this means less wasted senior time, fewer repeated questions, and more consistent decisions across the team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="relative flex flex-col bg-white border border-[#E4E4E7] p-10 h-full cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-10 right-10 text-[#09090B] font-light text-2xl">+</div>
              <div className="mb-24">
                {prop.icon}
              </div>
              <h3 className="text-2xl font-medium text-[#09090B] mb-4">
                {prop.title}
              </h3>
              <p className="text-[15px] text-[#52525B] leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
