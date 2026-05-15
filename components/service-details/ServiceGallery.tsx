import type { ServicePageContent } from "@/types";
import Image from "next/image";

export function ServiceGallery({ service }: { service: ServicePageContent }) {
  if (!service.gallery.length) return null;
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="mb-12 text-center text-3xl font-bold">Before & After</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {service.gallery.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <div className="grid grid-cols-2 gap-1">
                <div className="relative aspect-square"><Image src={item.before} alt="Before" fill className="object-cover" sizes="200px" /></div>
                <div className="relative aspect-square"><Image src={item.after} alt="After" fill className="object-cover" sizes="200px" /></div>
              </div>
              <p className="bg-white p-3 text-center text-sm text-brand-muted">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
