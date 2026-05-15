export const SITE_CONFIG = {
  name: "ZETAA Technologies",
  tagline: "Premium Security & Smart Automation",
  description:
    "India's trusted partner for CCTV, smart locks, biometric systems, access control, and home security automation. Professional installation with guaranteed service.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zetaa.tech",
  phone: "+91 98765 43210",
  email: "hello@zetaa.tech",
  address: "Mumbai, Maharashtra, India",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
};

export const TRUST_BADGES = [
  { label: "5000+ Installations", icon: "shield" },
  { label: "4.9★ Rating", icon: "star" },
  { label: "24/7 Support", icon: "clock" },
  { label: "1 Year Warranty", icon: "award" },
];

export const COVERAGE_AREAS = [
  "Mumbai",
  "Thane",
  "Navi Mumbai",
  "Pune",
  "Bangalore",
  "Delhi NCR",
  "Hyderabad",
  "Chennai",
];

export const BOOKING_STATUSES = [
  "pending",
  "confirmed",
  "assigned",
  "in_progress",
  "completed",
  "cancelled",
] as const;

export const USER_ROLES = ["customer", "admin", "provider"] as const;
