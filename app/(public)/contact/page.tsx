import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-custom grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-brand-muted">We typically respond within 2 hours during business hours.</p>
          <div className="mt-8 space-y-4">
            <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-3"><Phone className="h-5 w-5 text-brand-blue" />{SITE_CONFIG.phone}</a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3"><Mail className="h-5 w-5 text-brand-blue" />{SITE_CONFIG.email}</a>
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-brand-blue" />{SITE_CONFIG.address}</p>
          </div>
        </div>
        <form className="card-premium space-y-4">
          <Input label="Name" name="name" required />
          <Input label="Email" type="email" name="email" required />
          <Input label="Phone" type="tel" name="phone" required />
          <Textarea label="Message" name="message" rows={4} required />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
