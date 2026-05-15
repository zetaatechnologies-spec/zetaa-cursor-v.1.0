import { createService, UNSPLASH } from "../shared";

export const cctvMaintenance = createService({
  slug: "cctv-maintenance",
  name: "CCTV Service & Maintenance",
  tagline: "Keep your surveillance system running flawlessly",
  heroImage: UNSPLASH("photo-1563986768609-322da13575f3"),
  overview:
    "Annual maintenance contracts and on-demand repair for all CCTV brands. Camera cleaning, firmware updates, storage health checks, and 24/7 emergency support.",
  startingPrice: 1999,
  duration: "2-4 hours",
  benefits: [
    {
      title: "Preventive Care",
      description: "Regular checks prevent costly failures",
      icon: "wrench",
    },
    {
      title: "Quick Repairs",
      description: "Same-day service for critical issues",
      icon: "zap",
    },
    {
      title: "Firmware Updates",
      description: "Latest security patches and features",
      icon: "download",
    },
    {
      title: "AMC Plans",
      description: "Affordable annual maintenance contracts",
      icon: "calendar",
    },
  ],
  features: [
    "Camera lens cleaning",
    "DVR/NVR health check",
    "Cable inspection",
    "Storage optimization",
    "Remote access troubleshooting",
    "Replacement parts sourcing",
  ],
  packages: [
    {
      id: "maint-basic",
      name: "One-Time Service",
      price: 1999,
      features: ["Up to 4 cameras", "Health check", "Cleaning", "Report"],
    },
    {
      id: "maint-amc",
      name: "Annual AMC",
      price: 4999,
      features: [
        "2 visits/year",
        "Priority support",
        "10% parts discount",
        "Remote assistance",
      ],
      popular: true,
    },
  ],
  gallery: [],
  faqs: [],
  relatedSlugs: ["cctv-installation", "office-security-solutions"],
});
