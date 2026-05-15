import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils/format";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  startingPrice: number;
}

export function ServiceCard({
  slug,
  name,
  shortDescription,
  image,
  startingPrice,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="card-premium group block">
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="mb-2 text-lg font-semibold group-hover:text-brand-blue">
        {name}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm text-brand-muted">
        {shortDescription}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-brand-blue">
          From {formatCurrency(startingPrice)}
        </span>
        <ArrowRight className="h-4 w-4 text-brand-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-blue" />
      </div>
    </Link>
  );
}
