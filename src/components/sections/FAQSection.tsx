"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Why not just use the AI built into Zendesk or Intercom?",
    answer: "Because your company's knowledge isn't just sitting in Zendesk. It's scattered across Slack, Jira, Notion, and Google Docs. Our system connects to all your tools, ensuring the AI has the full, correct context to resolve issues, rather than just firing off basic macros.",
  },
  {
    question: "Will this hallucinate and give my customers the wrong answers?",
    answer: "No. Our AI is strictly grounded in your actual company data. It cannot 'make things up' or take creative liberties. If it doesn't know the exact answer based on your approved documentation, it instantly routes the ticket to a human agent.",
  },
  {
    question: "How much time will my team actually save?",
    answer: "Support agents typically spend 30-40% of their day just searching for information across different tabs and tools. By instantly retrieving the right context and automating repetitive tier-1 tickets, teams usually see a 60% reduction in resolution time.",
  },
  {
    question: "How long does it take to set up?",
    answer: "You can be up and running in days, not months. We handle the integration with your existing support stack (like Zendesk or Salesforce) so your team doesn't have to change their daily workflow at all.",
  },
  {
    question: "Is my customer data secure?",
    answer: "Yes. We maintain strict enterprise-grade security and never use your private data to train public AI models. Your data remains completely isolated and secure.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-medium tracking-tight text-[#09090B]">
            Common <span className="text-[#D35A3C]">Objections</span>.
          </h2>
          <p className="mt-6 text-lg text-[#52525B]">
            Everything you need to know before we start building. We believe in total transparency.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl border transition-all duration-200 shadow-sm ${openIndex === index ? 'border-[#09090B] bg-[#FAFAFA]' : 'border-[#E4E4E7] bg-white hover:border-[#A1A1AA]'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-[17px] font-semibold text-[#09090B]">{faq.question}</span>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-[#09090B]" />
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
                    <div className="border-t border-[#E4E4E7] p-6 text-[15px] text-[#52525B] leading-relaxed bg-[#FAFAFA]">
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
