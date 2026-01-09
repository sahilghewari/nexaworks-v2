import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyDetail } from "@/sections/CaseStudyDetail";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return CASE_STUDIES.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return {
      title: "Case Study | NexaWorks",
      description: "Explore NexaWorks automation and AI case studies.",
    };
  }

  return {
    title: `${caseStudy.title} | NexaWorks`,
    description: caseStudy.heroDescription,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.heroDescription,
      url: `https://nexaworks.tech/projects/${caseStudy.slug}`,
      siteName: "NexaWorks",
      type: "article",
      images: [
        {
          url: caseStudy.coverImage,
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} cover`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: caseStudy.title,
      description: caseStudy.heroDescription,
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <CaseStudyDetail caseStudy={caseStudy} key={caseStudy.id} />
    </main>
  );
}
