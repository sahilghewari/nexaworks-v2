import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetail } from "@/sections/ServiceDetail";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/constants";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service | NexaWorks",
      description: "Explore NexaWorks specialized software services.",
    };
  }

  return {
    title: `${service.title} | NexaWorks`,
    description: service.heroDescription,
    openGraph: {
      title: service.title,
      description: service.heroDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: "NexaWorks",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.heroDescription,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    notFound();
  }

  return (
    <main className="flex flex-col">
      <ServiceDetail service={service} key={service.id} />
    </main>
  );
}
