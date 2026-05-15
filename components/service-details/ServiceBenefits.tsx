import type { ServicePageContent } from "@/types";
import { Bell, Cloud, Eye, Lock, Shield, Smartphone, Wifi, Zap } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  eye: Eye, smartphone: Smartphone, cloud: Cloud, bell: Bell,
  shield: Shield, lock: Lock, wifi: Wifi, zap: Zap,
};

export function ServiceBenefits({ service }: { service: ServicePageContent }) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Us</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((b) => {
            const Icon = iconMap[b.icon] || Shield;
            return (
              <div key={b.title} className="card-premium text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                  <Icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="mb-2 font-semibold">{b.title}</h3>
                <p className="text-sm text-brand-muted">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
