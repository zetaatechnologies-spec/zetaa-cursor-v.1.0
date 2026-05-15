import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Button } from "@/components/ui/Button";
import { TRUST_BADGES, SITE_CONFIG } from "@/lib/constants/site";
import { SERVICE_CARDS } from "@/services";
import { Award, Clock, Shield, Star, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const badgeIcons = { shield: Shield, star: Star, clock: Clock, award: Award };
const reviews = [{"name":"Rajesh K.","rating":5,"comment":"Excellent CCTV installation. Clean work and professional team.","service":"CCTV Installation","date":"2 weeks ago"},{"name":"Priya M.","rating":5,"comment":"Smart lock works flawlessly. Highly recommend ZETAA!","service":"Smart Door Locks","date":"1 month ago"},{"name":"Amit S.","rating":5,"comment":"Biometric system installed at our office. Great support.","service":"Biometric Systems","date":"3 weeks ago"}];
const faqs = [{"q":"How do I book a service?","a":"Click Book Site Visit, choose your service, pick a date and time, and confirm. Our team will call you within 2 hours."},{"q":"What areas do you serve?","a":"We currently serve Mumbai, Thane, Navi Mumbai, Pune, Bangalore, Delhi NCR, Hyderabad, and Chennai."},{"q":"Do you provide warranty?","a":"Yes, all installations come with a 1-year service warranty on workmanship."},{"q":"Can I pay online?","a":"Yes, we accept online payments via Razorpay after your site visit is confirmed."}];

export default function HomePage() {
  return (
    <>
      <section className="dark-section relative overflow-hidden bg-brand-black text-white">
        <div className="container-custom grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-32">
          <SlideUp>
            <p className="mb-4 text-sm font-medium text-brand-blue">{SITE_CONFIG.tagline}</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl text-balance">
              Secure Your Home & Office with <span className="gradient-text">Expert Installation</span>
            </h1>
            <p className="mt-6 text-lg text-gray-400">{SITE_CONFIG.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/booking">Book Free Site Visit</Button>
              <Button variant="outline" href="/services" className="border-white text-white hover:bg-white hover:text-brand-black">Browse Services</Button>
            </div>
          </SlideUp>
          <FadeIn delay={200}>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image src="https://images.unsplash.com/photo-1558002038-105d7a3c9a12?w=800" alt="Security installation" fill className="object-cover" priority sizes="(max-width:768px) 100vw, 50vw" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-gray-100 py-8">
        <div className="container-custom grid grid-cols-2 gap-6 md:grid-cols-4">
          {TRUST_BADGES.map((badge) => {
            const Icon = badgeIcons[badge.icon as keyof typeof badgeIcons] || Shield;
            return (
              <div key={badge.label} className="flex items-center gap-3">
                <Icon className="h-8 w-8 text-brand-blue" />
                <span className="text-sm font-semibold">{badge.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="mt-2 text-brand-muted">Professional security solutions for every need</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CARDS.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} slug={s.slug} name={s.name} shortDescription={s.shortDescription} image={s.image} startingPrice={s.startingPrice} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="secondary" href="/services">View All Services</Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Customers Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => <ReviewCard key={r.name} {...r} />)}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-gray-100 p-4">
                <summary className="flex cursor-pointer items-center justify-between font-medium">
                  {faq.q} <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm text-brand-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section bg-brand-blue py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-2 text-blue-100">Book a free site visit today. No obligation.</p>
          <Button href="/booking" className="mt-6 bg-white text-brand-blue hover:bg-gray-100">Book Now</Button>
        </div>
      </section>
    </>
  );
}
