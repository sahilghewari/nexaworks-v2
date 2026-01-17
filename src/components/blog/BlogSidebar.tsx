import Link from "next/link";

import type { BlogPostMeta } from "@/lib/blog";

interface BlogSidebarProps {
  related?: BlogPostMeta[];
  allTags?: string[];
}

export function BlogSidebar({ related = [], allTags = [] }: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      <div className="rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] p-6 shadow-[0_24px_60px_-32px_rgba(13,16,21,0.75)]">
        <h4 className="text-lg font-semibold text-[#0D1015]">Related Posts</h4>
        <ul className="mt-4 space-y-3 text-sm text-[#3F3A32]">
          {related.length === 0 ? <li>No related posts yet.</li> : null}
          {related.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#A3542B] transition hover:text-[#A3542B]/80"
              >
                {post.title}
              </Link>
              <p className="text-xs text-[#3F3A32]">{post.readingTimeText}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] p-6 shadow-[0_24px_60px_-32px_rgba(13,16,21,0.75)]">
        <h4 className="text-lg font-semibold text-[#0D1015]">Tags</h4>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#3F3A32]">
          {allTags.length === 0 ? <span>No tags yet.</span> : null}
          {allTags.map((tag) => (
            <span key={tag} className="rounded-full border border-[#0D1015]/10 bg-[#B7B0A0] px-3 py-1">#{tag}</span>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-[#0D1015]/10 bg-gradient-to-br from-[#B7B0A0]/90 via-[#CBC8BA]/90 to-[#A79F90]/80 p-6 shadow-[0_24px_60px_-32px_rgba(13,16,21,0.75)]">
        <h4 className="text-lg font-semibold text-[#0D1015]">Stay in the loop</h4>
        <p className="mt-2 text-sm text-[#3F3A32]">Get product, AI, and delivery lessons straight from the founders.</p>
        <form className="mt-4 space-y-3">
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-[#0D1015]/10 bg-[#E7E2D6] px-4 py-3 text-sm text-[#0D1015] focus:border-[#A3542B] focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-[#A3542B] px-4 py-3 text-sm font-semibold text-[#CBC8BA] transition hover:bg-[#A3542B]/90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
