import Script from "next/script";
import Image from "next/image";
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

  const url = `https://nexaworks.com/blog/${post.slug}`;
  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = publishedTime; // Update this if you track modifications

  return {
    title: `${post.title} | NexaWorks`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "NexaWorks",
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [post.author],
      tags: post.tags,
      images: post.image
        ? [
            {
              url: post.image.startsWith('http') ? post.image : `https://nexaworks.com${post.image}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [
            {
              url: "https://nexaworks.com/og.png",
              width: 1200,
              height: 630,
              alt: "NexaWorks",
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image
        ? [post.image.startsWith('http') ? post.image : `https://nexaworks.com${post.image}`]
        : ["https://nexaworks.com/og.png"],
    },
    other: {
      'article:author': post.author,
      'article:published_time': publishedTime,
      'article:section': 'Blog',
      'article:tag': post.tags.join(','),
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

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? (post.image.startsWith('http') ? post.image : `https://nexaworks.com${post.image}`) : "https://nexaworks.com/og.png",
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Founder",
      "worksFor": {
        "@type": "Organization",
        "name": "NexaWorks"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "NexaWorks",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nexaworks.com/nexaworks-logo-icon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://nexaworks.com/blog/${post.slug}`
    },
    "keywords": post.tags.join(", "),
    "articleSection": "Blog",
    "timeRequired": `PT${Math.ceil(post.readingTimeMinutes)}M`
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
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
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="h-80 w-full object-cover"
                priority
              />
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
    </>
  );
}
