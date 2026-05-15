import { PricingCard } from "@/components/cards/PricingCard";
import type { ServicePageContent } from "@/types";

export function ServicePackages({ service }: { service: ServicePageContent }) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="mb-4 text-center text-3xl font-bold">Packages & Pricing</h2>
        <p className="mb-12 text-center text-brand-muted">Transparent pricing with no hidden charges</p>
        <div className="grid gap-6 md:grid-cols-3">
          {service.packages.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} serviceSlug={service.slug} popular={pkg.popular} />
          ))}
        </div>
      </div>
    </section>
  );
}
