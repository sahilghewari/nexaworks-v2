import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    slug: "solving-support-hallucinations",
    title: "Why AI Support Hallucinates (And How to Fix It)",
    excerpt: "The single biggest fear for support leaders is the AI making things up. We dive into deterministic retrieval and how grounding agents in actual company memory eliminates the risk.",
    date: "May 12, 2026",
    readTime: "6 min read",
    category: "Engineering",
    bgColor: "bg-[#F8FAFC]",
  },
  {
    slug: "scaling-support-ops",
    title: "Support Ops: The Unsung Hero of Scalable B2B SaaS",
    excerpt: "Scaling a support team doesn't always mean hiring more people. It means making the knowledge they already have accessible in milliseconds.",
    date: "May 8, 2026",
    readTime: "5 min read",
    category: "Strategy",
    bgColor: "bg-white",
  },
  {
    slug: "unified-knowledge-management",
    title: "The Death of the Siloed Knowledge Base",
    excerpt: "Scattered docs across Slack, Jira, and Notion are killing your resolution times. It's time to unify your operational memory into a single source of truth.",
    date: "May 5, 2026",
    readTime: "8 min read",
    category: "Best Practices",
    bgColor: "bg-[#F8FAFC]",
  }
];

export default function BlogIndexPage() {
  return (
    <main className="bg-white min-h-screen py-36">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="max-w-2xl mb-24">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-[#09090B] mb-8">
            Intelligence <span className="text-[#D35A3C]">Hub</span>.
          </h1>
          <p className="text-xl text-[#52525B] leading-relaxed">
            Thoughts on Support Ops, AI engineering, and building the operational memory layer for high-growth teams.
          </p>
        </div>
        
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`group block p-8 md:p-12 rounded-2xl border border-[#E4E4E7] ${post.bgColor} transition-all hover:shadow-2xl hover:-translate-y-1`}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D35A3C]/10 text-[#D35A3C] text-xs font-bold uppercase tracking-wider">
                  <Tag className="h-3 w-3" /> {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-[#71717A]">
                  <Clock className="h-4 w-4" /> {post.readTime}
                </span>
                <span className="text-sm text-[#71717A]">{post.date}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#09090B] mb-6 group-hover:text-[#D35A3C] transition-colors">
                {post.title}
              </h2>
              
              <p className="text-lg text-[#52525B] leading-relaxed mb-8 max-w-3xl">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#09090B] group-hover:gap-4 transition-all">
                Read full article <ArrowRight className="h-4 w-4 text-[#D35A3C]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
