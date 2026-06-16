"use client";

const faqs = [
  {
    question: "Why not just use the AI built into Zendesk or Intercom?",
    answer: "Because your company's knowledge isn't just sitting in Zendesk. It's scattered across Slack, Jira, Notion, and Google Docs. Our system connects to all your tools, ensuring the AI has the full, correct context to resolve issues.",
    whyMatters: "Without cross-platform context, native helpdesk AI just fires off generic macros based on outdated articles.",
  },
  {
    question: "Will this hallucinate and give my customers the wrong answers?",
    answer: "No. Our AI is strictly grounded in your actual company data. It cannot 'make things up' or take creative liberties. If it doesn't know the exact answer, it routes the ticket to a human.",
    whyMatters: "Accuracy builds trust. We use deterministic retrieval, not creative generation.",
  },
  {
    question: "How does this improve over our existing knowledge base?",
    answer: "Traditional knowledge bases rot because nobody updates them. CompanyBrain continuously reads your operational tools to detect drift and alert you when knowledge is stale.",
    whyMatters: "Your team stops answering customers from outdated playbooks.",
  },
  {
    question: "How long does it take to deploy a pilot?",
    answer: "You can be up and running in days, not months. We handle the integration with your existing support stack so your team doesn't have to change their daily workflow at all.",
    whyMatters: "Time-to-value is critical for growing teams. No long, expensive implementation cycles.",
  },
  {
    question: "Is my company's data secure?",
    answer: "Yes. We maintain strict enterprise-grade security and never use your private data to train public AI models. Your data remains completely isolated.",
    whyMatters: "We are built for enterprise security and compliance from day one.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-32 bg-[#FAFAFA] border-t border-[#E4E4E7]">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-5xl font-medium tracking-tight text-[#09090B]">
            Common <span className="text-[#D35A3C]">Objections</span>.
          </h2>
          <p className="mt-6 text-xl text-[#52525B]">
            Everything you need to know before we start building. We believe in total transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#E4E4E7] rounded-3xl p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className={`font-medium text-[#09090B] mb-4 leading-snug ${index === 0 ? 'text-3xl tracking-tight' : 'text-2xl tracking-tight'}`}>
                  {faq.question}
                </h3>
                <p className="text-[#52525B] leading-relaxed text-[17px]">
                  {faq.answer}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[#F4F4F5]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#D35A3C] mb-2">Why this matters</div>
                <p className="text-sm font-medium text-[#09090B] leading-relaxed">
                  {faq.whyMatters}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
