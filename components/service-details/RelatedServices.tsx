import { ServiceCard } from "@/components/cards/ServiceCard";
import { getRelatedServices } from "@/services";

export function RelatedServices({ slugs }: { slugs: string[] }) {
  const related = getRelatedServices(slugs);
  if (!related.length) return null;
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="mb-8 text-2xl font-bold">Related Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.slug} slug={s.slug} name={s.name} shortDescription={s.overview.slice(0, 120) + "..."} image={s.heroImage} startingPrice={s.startingPrice} />
          ))}
        </div>
      </div>
    </section>
  );
}
