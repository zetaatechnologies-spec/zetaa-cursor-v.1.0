import { createService, UNSPLASH } from "../shared";

export const biometric = createService({
  slug: "biometric-attendance",
  name: "Biometric Attendance Systems",
  tagline: "Accurate attendance tracking for offices and factories",
  heroImage: UNSPLASH("photo-1454165804606-c3d57bc86b40"),
  overview:
    "Fingerprint and face recognition attendance systems with cloud sync, payroll integration, and real-time reports for HR teams.",
  startingPrice: 14999,
  duration: "3-5 hours",
  benefits: [
    {
      title: "Zero Buddy Punching",
      description: "Biometric verification eliminates proxy attendance",
      icon: "fingerprint",
    },
    {
      title: "Cloud Reports",
      description: "Export attendance to Excel and payroll systems",
      icon: "file-spreadsheet",
    },
    {
      title: "Multi-Location",
      description: "Manage multiple branches from one dashboard",
      icon: "building",
    },
    {
      title: "Shift Management",
      description: "Configure shifts, overtime, and leave policies",
      icon: "clock",
    },
  ],
  features: [
    "Fingerprint & face ID",
    "Cloud dashboard",
    "Shift scheduling",
    "Leave management",
    "SMS/email alerts",
    "API integration",
  ],
  packages: [
    {
      id: "bio-small",
      name: "Small Office",
      price: 14999,
      features: ["1 Device", "50 users", "Cloud sync", "Monthly reports"],
    },
    {
      id: "bio-enterprise",
      name: "Enterprise",
      price: 49999,
      features: ["5 Devices", "Unlimited users", "API access", "Dedicated support"],
      popular: true,
    },
  ],
  gallery: [],
  faqs: [],
  relatedSlugs: ["access-control", "office-security-solutions"],
});
