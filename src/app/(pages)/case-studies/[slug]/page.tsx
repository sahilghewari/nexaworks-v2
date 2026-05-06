import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CASE_STUDIES } from "@/lib/case-studies";
import { CaseStudyDetail } from "@/sections/CaseStudyDetail";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === params.slug);

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

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === params.slug);

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
