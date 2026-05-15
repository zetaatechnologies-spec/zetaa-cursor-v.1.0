import { ServiceCard } from "@/components/cards/ServiceCard";
import { SERVICE_CARDS } from "@/services";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="mb-2 text-4xl font-bold">Our Services</h1>
        <p className="mb-12 text-brand-muted">Choose from our range of security & automation services</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} name={s.name} shortDescription={s.shortDescription} image={s.image} startingPrice={s.startingPrice} />
          ))}
        </div>
      </div>
    </div>
  );
}
