import { Button } from "@/components/ui/Button";
import { SITE_CONFIG, TRUST_BADGES } from "@/lib/constants/site";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl font-bold">About {SITE_CONFIG.name}</h1>
        <p className="mt-6 text-lg text-brand-muted leading-relaxed">
          Founded with a mission to make premium security accessible, ZETAA Technologies delivers
          professional CCTV, smart locks, biometric systems, and home automation across India.
          Our certified technicians ensure clean installations with guaranteed service.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TRUST_BADGES.map((b) => (
            <div key={b.label} className="card-premium"><p className="font-semibold">{b.label}</p></div>
          ))}
        </div>
        <Button href="/booking" className="mt-8">Book a Site Visit</Button>
      </div>
    </div>
  );
}
