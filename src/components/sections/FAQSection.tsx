"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you guarantee results?",
    answer:
      "Yes. Our Pipeline Guarantee states that if we cannot identify at least 3 actionable ways to increase your qualified pipeline by 30% during our initial audit, we will pay you $500 for wasting your time.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Our AI Revenue Engine is typically live and generating meetings within 14 days of kickoff. This includes infrastructure setup, domain warming, signal scraping, and sequence creation.",
  },
  {
    question: "Do I need to hire SDRs to manage this?",
    answer:
      "No. Our service is completely 'done-for-you'. We act as your entire outbound SDR team, utilizing AI to scale personalization. Your team only needs to show up to the qualified demos we book on your calendar.",
  },
  {
    question: "What tools and stack do you use?",
    answer:
      "We use a custom proprietary stack involving advanced web scrapers for signal ingestion, multiple specialized LLMs for personalization, and enterprise-grade sending infrastructure to ensure 99% inbox deliverability.",
  },
  {
    question: "How do you price your services?",
    answer:
      "We offer a transparent pricing model. For the AI Revenue Engine, there is a setup fee (typically $15k-$30k) followed by a performance-tiered monthly retainer. We also do custom project builds for specific workflow automation.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0A0A0B] py-20 sm:py-32">
      <div className="container max-w-3xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl font-semibold text-[#FAFAFA] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] sm:text-lg">
            Everything you need to know about our AI outbound engines.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                  isOpen ? "border-[#10B981]/30 bg-[#131316]" : "border-[#27272A] bg-transparent hover:bg-[#131316]/50"
                }`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-[#FAFAFA]">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#A1A1AA] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#10B981]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm leading-relaxed text-[#A1A1AA]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
