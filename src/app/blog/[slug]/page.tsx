import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Tag } from "lucide-react";

export default function BlogPostLayout({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="bg-white min-h-screen pt-36 pb-24">
      <article className="container mx-auto max-w-3xl px-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#71717A] hover:text-[#09090B] mb-12 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Intelligence Hub
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D35A3C]/10 text-[#D35A3C] text-xs font-bold uppercase tracking-wider">
              Strategy
            </span>
            <div className="flex items-center gap-4 text-sm text-[#71717A]">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> May 12, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> 6 min read
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#09090B] leading-tight mb-8">
            Why AI Support Hallucinates (And How to Fix It)
          </h1>
          
          <div className="flex items-center gap-4 py-8 border-y border-[#E4E4E7]">
            <div className="h-12 w-12 rounded-full bg-[#F4F4F5] border border-[#E4E4E7] flex items-center justify-center font-bold text-[#09090B]">
              NW
            </div>
            <div>
              <div className="font-bold text-[#09090B]">NexaWorks Editorial</div>
              <div className="text-sm text-[#71717A]">Support Operations Research</div>
            </div>
          </div>
        </header>

        <div className="prose prose-zinc max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-p:text-lg prose-p:leading-relaxed prose-p:text-[#3F3F46] prose-strong:text-[#09090B]">
          <p>
            The single biggest fear for support leaders implementing AI isn't the cost or the complexity—it's the risk of the AI making things up. In the industry, we call these <strong>hallucinations</strong>, and in a high-stakes customer support environment, they can be fatal to user trust.
          </p>
          
          <h2>The Root Cause of Hallucinations</h2>
          <p>
            Most AI support tools fail because they rely on "general knowledge" or loosely indexed documentation. When an agent doesn't have the exact answer, its probabilistic nature forces it to predict the most likely next word, often leading to confident but incorrect resolutions.
          </p>
          
          <div className="my-12 p-8 bg-[#F8FAFC] border-l-4 border-[#D35A3C] rounded-r-2xl">
            <p className="text-xl italic font-medium text-[#09090B] m-0">
              "Accuracy in support isn't about how smart the model is; it's about how deep its memory goes."
            </p>
          </div>

          <h2>How Deterministic Retrieval Changes the Game</h2>
          <p>
            CompanyBrain solves this by implementing a <strong>Deterministic Retrieval Layer</strong>. Instead of letting the AI "guess," our system first retrieves the exact context from your scattered knowledge bases—Slack history, past Jira tickets, and Notion docs.
          </p>
          
          <ul>
            <li><strong>Context Grounding:</strong> The AI is strictly bounded by the retrieved facts.</li>
            <li><strong>Human-in-the-loop:</strong> If confidence falls below 98%, the ticket is instantly routed to a human.</li>
            <li><strong>Traceable Sources:</strong> Every answer is backed by a link to the original source doc.</li>
          </ul>

          <h2>Building for High-Trust Industries</h2>
          <p>
            For sectors like Fintech, Cybersecurity, and Education, "close enough" isn't good enough. By unifying your operational memory, you ensure that every response is not just fast, but deterministic.
          </p>
        </div>

        <footer className="mt-24 pt-12 border-t border-[#E4E4E7]">
          <div className="bg-[#09090B] rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-[#D35A3C] opacity-10 blur-3xl rounded-full -mr-20 -mt-20" />
            
            <h3 className="text-3xl font-medium text-white mb-6 relative z-10">
              Ready to eliminate hallucinations in your support?
            </h3>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#09090B] px-10 py-4 rounded-full font-bold hover:bg-[#F4F4F5] transition-all relative z-10 shadow-2xl"
            >
              Request a Pilot
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
