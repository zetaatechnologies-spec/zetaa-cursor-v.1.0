import { createService, UNSPLASH } from "../shared";

export const accessControl = createService({
  slug: "access-control",
  name: "Access Control Systems",
  tagline: "Secure, trackable entry for offices and facilities",
  heroImage: UNSPLASH("photo-1563986768494-4dee2763ff3f"),
  overview:
    "Card, biometric, and mobile-based access control with door controllers, turnstiles, and centralized management for enterprises.",
  startingPrice: 24999,
  duration: "1-2 days",
  benefits: [
    {
      title: "Role-Based Access",
      description: "Different permissions for staff, visitors, and admins",
      icon: "shield-check",
    },
    {
      title: "Audit Trails",
      description: "Complete logs of who accessed which area and when",
      icon: "scroll-text",
    },
    {
      title: "Anti-Passback",
      description: "Prevent unauthorized re-entry",
      icon: "ban",
    },
    {
      title: "Integration Ready",
      description: "Works with HR, CCTV, and alarm systems",
      icon: "plug",
    },
  ],
  features: [
    "RFID card readers",
    "Biometric terminals",
    "Door controllers",
    "Turnstile integration",
    "Visitor management",
    "Real-time monitoring",
  ],
  packages: [
    {
      id: "ac-small",
      name: "Small Office",
      price: 24999,
      features: ["2 Doors", "10 cards", "Software", "Installation"],
    },
    {
      id: "ac-enterprise",
      name: "Enterprise",
      price: 99999,
      features: ["10+ Doors", "Biometric", "Turnstiles", "Dedicated support"],
      popular: true,
    },
  ],
  gallery: [],
  faqs: [],
  relatedSlugs: ["biometric-attendance", "cctv-installation"],
});
