import Link from "next/link";

import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-[#0D1015] p-6 shadow-[0_26px_70px_-30px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-2 hover:border-[#FF2003]/40 hover:shadow-[0_35px_75px_-32px_rgba(255,32,3,0.25)]">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#9CA3AF]">
          <span>{new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</span>
          <span className="text-[#CBC8BA]">·</span>
          <span>{post.author}</span>
          <span className="text-[#CBC8BA]">·</span>
          <span>{post.readingTimeText}</span>
        </div>
        <h3 className="text-xl font-semibold text-[#CBC8BA] group-hover:text-white">{post.title}</h3>
        <p className="text-sm leading-relaxed text-[#9CA3AF] max-h-24 overflow-hidden">{post.excerpt}</p>
      </div>

      <div className="flex flex-wrap gap-2 text-xs text-[#9CA3AF]">
        {post.tags?.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-[#111827] px-3 py-1">#{tag}</span>
        ))}
      </div>

      <div className="mt-auto">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-semibold text-[#FF2003] transition hover:text-[#FF2003]/80"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
