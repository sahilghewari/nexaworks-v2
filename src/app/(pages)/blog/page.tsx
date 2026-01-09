import type { Metadata } from "next";

import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | NexaWorks",
  description: "Founder-led perspectives on automation, AI delivery, and building reliable products fast.",
  openGraph: {
    title: "NexaWorks Blog",
    description: "Read how we ship production-grade automation and AI with speed and accountability.",
    url: "https://nexaworks.tech/blog",
    siteName: "NexaWorks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaWorks Blog",
    description: "Delivery playbooks, architecture deep-dives, and founder lessons from NexaWorks.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  return (
    <main className="flex flex-col bg-[#0A0D12] text-[#CBC8BA]">
      <section className="relative isolate overflow-hidden bg-[#0D1015] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1F2937_0%,transparent_55%)]" aria-hidden="true" />
        <div className="container relative z-10 space-y-4 text-center sm:max-w-4xl sm:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9CA3AF]">Blog</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[3rem]">
            Founder perspectives on shipping automation and AI—fast, reliable, accountable.
          </h1>
          <p className="text-base text-[#9CA3AF] sm:text-lg">
            Deep dives, battle-tested playbooks, and lessons from building ten products in eight months.
          </p>
        </div>
      </section>

      <section className="container grid gap-10 py-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,0.8fr)]">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <BlogSidebar related={posts.slice(0, 3)} allTags={allTags} />
      </section>
    </main>
  );
}
