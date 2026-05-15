import { createService, UNSPLASH } from "../shared";

export const videoDoorPhone = createService({
  slug: "video-door-phones",
  name: "Video Door Phones",
  tagline: "See and speak with visitors before opening the door",
  heroImage: UNSPLASH("photo-1558618666-fcd25c85cd64"),
  overview:
    "Video door phones with indoor monitors, mobile app integration, and recording. Perfect for apartments, villas, and gated communities.",
  startingPrice: 9999,
  duration: "2-4 hours",
  benefits: [
    {
      title: "Visual Verification",
      description: "See visitors clearly before granting access",
      icon: "video",
    },
    {
      title: "Two-Way Audio",
      description: "Speak with delivery persons and guests",
      icon: "mic",
    },
    {
      title: "Mobile Integration",
      description: "Answer doorbell from your phone anywhere",
      icon: "smartphone",
    },
    {
      title: "Night Vision",
      description: "Clear visitor view even at night",
      icon: "moon",
    },
  ],
  features: [
    "HD outdoor panel",
    "Indoor monitor(s)",
    "Mobile app",
    "Snapshot recording",
    "Multiple indoor units",
    "Gate lock integration",
  ],
  packages: [
    {
      id: "vdp-basic",
      name: "Apartment Kit",
      price: 9999,
      features: ["1 Outdoor + 1 Indoor", "Installation", "App setup"],
    },
    {
      id: "vdp-villa",
      name: "Villa Kit",
      price: 18999,
      features: ["1 Outdoor + 3 Indoor", "Mobile app", "Recording"],
      popular: true,
    },
  ],
  gallery: [],
  faqs: [],
  relatedSlugs: ["intercom-systems", "smart-door-locks"],
});

export const intercom = createService({
  slug: "intercom-systems",
  name: "Intercom Systems",
  tagline: "Seamless communication across your property",
  heroImage: UNSPLASH("photo-1560518883-ce09059eeffa"),
  overview:
    "Audio and video intercom systems for societies, offices, and commercial buildings. Multi-unit support with centralized management.",
  startingPrice: 7999,
  duration: "4-8 hours",
  benefits: [
    {
      title: "Multi-Unit Support",
      description: "Connect dozens of flats or offices",
      icon: "network",
    },
    {
      title: "Clear Audio",
      description: "Noise-cancellation for busy environments",
      icon: "volume-2",
    },
    {
      title: "Easy Expansion",
      description: "Add units as your building grows",
      icon: "plus-circle",
    },
    {
      title: "Durable Hardware",
      description: "Weather-resistant outdoor panels",
      icon: "shield",
    },
  ],
  features: [
    "Audio/video intercom",
    "Multi-flat wiring",
    "Guard room console",
    "Gate automation link",
    "Society management",
    "Maintenance support",
  ],
  packages: [
    {
      id: "intercom-basic",
      name: "Basic Audio",
      price: 7999,
      features: ["2-way audio", "2 units", "Installation"],
    },
  ],
  gallery: [],
  faqs: [],
  relatedSlugs: ["video-door-phones", "access-control"],
});
