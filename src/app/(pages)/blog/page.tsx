import type { Metadata } from "next";

import { BlogCard } from "@/components/blog/BlogCard";
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
  const topPosts = posts.slice(0, 3);
  const rest = posts.slice(3);

  return (
    <main className="flex flex-col bg-[#E7E2D6] text-[#0D1015]">
      <section className="relative isolate overflow-hidden bg-[#CBC8BA] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A79F90_0%,transparent_55%)]" aria-hidden="true" />
        <div className="container relative z-10 space-y-4 text-center sm:max-w-4xl sm:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-[#3F3A32]">Blog</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[3rem]">
            Founder briefs: what we ship, what broke, what we learned.
          </h1>
          <p className="text-base text-[#3F3A32] sm:text-lg">
            Only the sharp takes and playbooks we use. No filler. If it doesn&apos;t have a stance and a proof, it&apos;s not here.
          </p>
        </div>
      </section>

      <section className="container space-y-10 py-14">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.28em] text-[#3F3A32]">Featured briefs</p>
          <div className="grid gap-6 md:grid-cols-3">
            {topPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        {rest.length ? (
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[#3F3A32]">Archive</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
