import Link from "next/link";

import type { BlogPostMeta } from "@/lib/blog";

interface BlogSidebarProps {
  related?: BlogPostMeta[];
  allTags?: string[];
}

export function BlogSidebar({ related = [], allTags = [] }: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-[#0D1015] p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.75)]">
        <h4 className="text-lg font-semibold text-[#CBC8BA]">Related Posts</h4>
        <ul className="mt-4 space-y-3 text-sm text-[#9CA3AF]">
          {related.length === 0 ? <li>No related posts yet.</li> : null}
          {related.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#FF2003] transition hover:text-[#FF2003]/80"
              >
                {post.title}
              </Link>
              <p className="text-xs text-[#9CA3AF]">{post.readingTimeText}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#0D1015] p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.75)]">
        <h4 className="text-lg font-semibold text-[#CBC8BA]">Tags</h4>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#9CA3AF]">
          {allTags.length === 0 ? <span>No tags yet.</span> : null}
          {allTags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-[#111827] px-3 py-1">#{tag}</span>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/90 via-[#0D1015]/90 to-[#1F2937]/80 p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.75)]">
        <h4 className="text-lg font-semibold text-[#CBC8BA]">Stay in the loop</h4>
        <p className="mt-2 text-sm text-[#9CA3AF]">Get product, AI, and delivery lessons straight from the founders.</p>
        <form className="mt-4 space-y-3">
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-[#0A0D12] px-4 py-3 text-sm text-[#CBC8BA] focus:border-[#FF2003] focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-[#FF2003] px-4 py-3 text-sm font-semibold text-[#0D1015] transition hover:bg-[#FF2003]/90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
