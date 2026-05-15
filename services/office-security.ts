import { createService, UNSPLASH } from "./shared";

export const officeSecurity = createService({
  slug: "office-security-solutions",
  name: "Office Security Solutions",
  tagline: "End-to-end security for modern workplaces",
  heroImage: UNSPLASH("photo-1497366216548-37526070297c"),
  overview:
    "Comprehensive office security packages combining CCTV, access control, biometrics, and alarm systems with centralized monitoring.",
  startingPrice: 49999,
  duration: "3-7 days",
  benefits: [
    {
      title: "Custom Design",
      description: "Security audit and tailored solution design",
      icon: "pen-tool",
    },
    {
      title: "Compliance Ready",
      description: "Meet industry security standards",
      icon: "badge-check",
    },
    {
      title: "Scalable",
      description: "Grow your system as your office expands",
      icon: "trending-up",
    },
    {
      title: "Dedicated Support",
      description: "Priority SLA and account manager",
      icon: "headphones",
    },
  ],
  features: [
    "Security audit",
    "Multi-system integration",
    "Central monitoring",
    "Employee training",
    "AMC included",
    "Compliance documentation",
  ],
  packages: [
    {
      id: "office-standard",
      name: "Standard Office",
      price: 49999,
      features: ["CCTV", "Access control", "Installation", "1yr AMC"],
    },
    {
      id: "office-enterprise",
      name: "Enterprise",
      price: 149999,
      features: ["Full stack", "24/7 monitoring", "Dedicated support"],
      popular: true,
    },
  ],
  gallery: [],
  faqs: [],
  relatedSlugs: ["cctv-installation", "access-control", "biometric-attendance"],
});
