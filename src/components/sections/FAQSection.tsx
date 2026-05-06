"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do you ensure the AI doesn't hallucinate or spam my leads?",
    answer: "We don't use 'Black Box' AI. Our engines use a Human-in-the-Loop validation layer. Every sequence is constrained by your brand voice guidelines, and we use proprietary 'Grounding' techniques to ensure the AI only speaks from verified facts about your company and the prospect's data.",
  },
  {
    question: "What is the typical technical stack you implement?",
    answer: "We are stack-agnostic but usually implement a combination of specialized scraping agents, vector databases (Pinecone/Milvus), and LLM orchestration (LangChain/AutoGPT) integrated directly with your CRM (HubSpot/Salesforce/Apollo) through custom webhooks.",
  },
  {
    question: "Why should I hire NexaWorks instead of a standard SDR team?",
    answer: "Scale and Consistency. A human SDR team costs $250k+/year, has 14-month churn cycles, and gets 'outreach fatigue'. Our AI engine costs 70% less, works 24/7, and personalizes every single message based on real-time intent data. Use humans for closing, use AI for the grind.",
  },
  {
    question: "How does the $500 guarantee work?",
    answer: "Simple. If we perform our 45-minute Strategy & Pipeline Audit and we can't identify at least 3 actionable areas where an AI engine would add $100,000+ in annual pipeline value, we will PayPal you $500 for your time. No questions asked.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We build in isolated environments and never use your proprietary client data to train public models. We are compliant with SOC2/GDPR standards and can deploy entirely within your own cloud infrastructure (AWS/Azure/GCP) if required.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0A0A0B]">
      <div className="container">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#FAFAFA] sm:text-5xl">
            Common <span className="text-emerald-500">Objections</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#A1A1AA]">
            Everything you need to know before we start building. We believe in total transparency.
          </p>
        </div>

        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#27272A] bg-[#131316] transition-colors hover:border-emerald-500/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-[#FAFAFA]">{faq.question}</span>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <Plus className="h-5 w-5 text-[#A1A1AA]" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="border-t border-[#27272A] p-6 text-[#A1A1AA] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
