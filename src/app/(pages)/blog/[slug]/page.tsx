import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { extractToc, getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { useMDXComponents } from "@/mdx-components";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Blog | NexaWorks",
      description: "Founder-led perspectives on automation, AI delivery, and building reliable products fast.",
    };
  }

  return {
    title: `${post.title} | NexaWorks`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://nexaworks.tech/blog/${post.slug}`,
      siteName: "NexaWorks",
      type: "article",
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const components = useMDXComponents({});
  const mdx = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }], rehypePrism],
      },
    },
    components,
  });

  const toc = extractToc(post.content);
  const related = getRelatedPosts(post.slug, post.tags);
  const published = new Date(post.date).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="flex flex-col bg-[#E7E2D6] text-[#0D1015]">
      <section className="relative isolate overflow-hidden bg-[#CBC8BA] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A79F90_0%,transparent_55%)]" aria-hidden="true" />
        <div className="container relative z-10 space-y-4 text-center sm:max-w-4xl sm:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-[#3F3A32]">{post.author}</p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-[3rem]">{post.title}</h1>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-[#3F3A32] sm:justify-start">
            <span>{published}</span>
            <span className="text-[#0D1015]">·</span>
            <span>{post.readingTimeText}</span>
            <span className="text-[#0D1015]">·</span>
            <span>{post.tags.join(" / ")}</span>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 py-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,0.8fr)]">
        <article className="space-y-10">
          {post.image ? (
            <div className="overflow-hidden rounded-3xl border border-[#0D1015]/10 shadow-[0_28px_70px_-32px_rgba(13,16,21,0.8)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt={post.title} className="h-80 w-full object-cover" />
            </div>
          ) : null}

          {toc.length > 0 ? (
            <div className="rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] p-6 shadow-[0_24px_60px_-32px_rgba(13,16,21,0.75)]">
              <p className="text-sm font-semibold text-[#0D1015]">Table of Contents</p>
              <ul className="mt-3 space-y-2 text-sm text-[#3F3A32]">
                {toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
                    <a
                      href={`#${item.id}`}
                      className="text-[#A3542B] transition hover:text-[#A3542B]/80"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="prose prose-invert max-w-none">
            {mdx.content}
          </div>

          <div className="rounded-3xl border border-[#0D1015]/10 bg-[#CBC8BA] p-6 shadow-[0_24px_60px_-32px_rgba(13,16,21,0.75)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#3F3A32]">About the author</p>
            <h3 className="mt-2 text-lg font-semibold text-[#0D1015]">{post.author}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#3F3A32]">
              Founder at NexaWorks. Shipping automation, AI, and production software with a bias for live demos and measurable outcomes.
            </p>
          </div>
        </article>

        <BlogSidebar related={related} allTags={Array.from(new Set(getAllPosts().flatMap((p) => p.tags)))} />
      </section>
    </main>
  );
}
