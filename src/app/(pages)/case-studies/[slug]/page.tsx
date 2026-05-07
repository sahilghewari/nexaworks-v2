import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CASE_STUDIES } from "@/lib/case-studies";
import { CaseStudyDetail } from "@/sections/CaseStudyDetail";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | NexaWorks",
    };
  }

  return {
    title: `${caseStudy.title} | NexaWorks Case Study`,
    description: caseStudy.heroDescription,
    openGraph: {
      title: `${caseStudy.title} | NexaWorks`,
      description: caseStudy.heroDescription,
      images: [{ url: caseStudy.coverImage }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <CaseStudyDetail caseStudy={caseStudy} />
    </main>
  );
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    slug: cs.slug,
  }));
}
