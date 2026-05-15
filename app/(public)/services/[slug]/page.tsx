import { ServiceBenefits } from "@/components/service-details/ServiceBenefits";
import { ServiceFAQ } from "@/components/service-details/ServiceFAQ";
import { ServiceGallery } from "@/components/service-details/ServiceGallery";
import { ServiceHero } from "@/components/service-details/ServiceHero";
import { ServicePackages } from "@/components/service-details/ServicePackages";
import { ServiceProcess } from "@/components/service-details/ServiceProcess";
import { RelatedServices } from "@/components/service-details/RelatedServices";
import { getServiceBySlug } from "@/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const { ALL_SERVICES } = await import("@/services");
  return ALL_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return { title: service?.name ?? "Service" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return (
    <>
      <ServiceHero service={service} />
      <ServiceBenefits service={service} />
      <ServiceProcess service={service} />
      <ServicePackages service={service} />
      <ServiceGallery service={service} />
      <ServiceFAQ service={service} />
      <RelatedServices slugs={service.relatedSlugs} />
    </>
  );
}
