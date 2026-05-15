"use client";

import { motion } from "framer-motion";
import { Brain, Clock, Shield } from "lucide-react";

const valueProps = [
  {
    title: "Zero Hallucinations",
    description: "Agents ground every response in your actual internal data, eliminating creative liberties and ensuring factual accuracy on every ticket.",
    icon: <Brain className="h-8 w-8 text-[#09090B]" strokeWidth={1.5} />,
  },
  {
    title: "Routing based on intent",
    description: "AI reads the issue, identifies the right team, and routes instantly — eliminating manual triage queues.",
    icon: <Clock className="h-8 w-8 text-[#09090B]" strokeWidth={1.5} />,
  },
  {
    title: "Knowledge automation",
    description: "AI finds gaps in your KB, drafts articles, and surfaces the right answer before your team has to search.",
    icon: <Shield className="h-8 w-8 text-[#09090B]" strokeWidth={1.5} />,
  },
];

export function ValuePropositionBlocks() {
  return (
    <section className="bg-white py-32 border-b border-[#E4E4E7]">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-medium tracking-tight text-[#09090B]">
            Automate resolution
          </h2>
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
