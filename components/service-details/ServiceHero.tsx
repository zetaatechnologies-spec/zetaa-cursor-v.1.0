import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils/format";
import { getServiceInquiryMessage, getWhatsAppLink } from "@/lib/utils/whatsapp";
import type { ServicePageContent } from "@/types";
import { Clock } from "lucide-react";
import Image from "next/image";

export function ServiceHero({ service }: { service: ServicePageContent }) {
  const waLink = getWhatsAppLink(getServiceInquiryMessage(service.name));
  return (
    <section className="dark-section bg-brand-black text-white">
      <div className="container-custom grid gap-10 py-16 md:grid-cols-2 md:py-24 md:items-center">
        <div>
          <p className="mb-2 text-sm font-medium text-brand-blue">{service.tagline}</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{service.name}</h1>
          <p className="mt-4 text-lg text-gray-400">{service.overview}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-2xl font-bold text-brand-blue">
              From {formatCurrency(service.startingPrice)}
            </span>
            <span className="flex items-center gap-1 text-sm text-gray-400">
              <Clock className="h-4 w-4" /> {service.duration}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={`/booking?service=${service.slug}`}>Book Site Visit</Button>
            <Button variant="outline" href={waLink} className="border-white text-white hover:bg-white hover:text-brand-black">
              WhatsApp Us
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image src={service.heroImage} alt={service.name} fill className="object-cover" priority sizes="(max-width:768px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
