import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils/format";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { ServicePackage } from "@/types";

interface PricingCardProps {
  pkg: ServicePackage;
  serviceSlug: string;
  popular?: boolean;
}

export function PricingCard({ pkg, serviceSlug, popular }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border p-6 transition-all",
        popular
          ? "border-brand-blue bg-brand-blue/5 shadow-lg"
          : "border-gray-100 bg-white hover:border-brand-blue/30"
      )}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold">{pkg.name}</h3>
      <p className="mt-2 text-3xl font-bold">
        {formatCurrency(pkg.price)}
      </p>
      <ul className="mt-6 space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href={`/booking?service=${serviceSlug}&package=${pkg.id}`}
        variant={popular ? "primary" : "outline"}
        className="mt-6 w-full"
      >
        Book Now
      </Button>
    </div>
  );
}
