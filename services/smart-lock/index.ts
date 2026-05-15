import { createService, UNSPLASH } from "../shared";

export const smartLock = createService({
  slug: "smart-door-locks",
  name: "Smart Door Locks",
  tagline: "Keyless entry with fingerprint, PIN, and app control",
  heroImage: UNSPLASH("photo-1558002038-1055907df827"),
  overview:
    "Upgrade to smart door locks from Yale, Godrej, and Samsung. Fingerprint, RFID, PIN, and smartphone unlock with activity logs and temporary access codes.",
  startingPrice: 12999,
  duration: "1-2 hours",
  benefits: [
    {
      title: "Keyless Freedom",
      description: "Never worry about lost keys again",
      icon: "key",
    },
    {
      title: "Access Logs",
      description: "See who entered and when",
      icon: "list",
    },
    {
      title: "Guest Codes",
      description: "Temporary PINs for visitors and staff",
      icon: "users",
    },
    {
      title: "Auto Lock",
      description: "Door locks automatically when you leave",
      icon: "lock",
    },
  ],
  features: [
    "Fingerprint unlock",
    "PIN & RFID access",
    "Smartphone control",
    "Activity history",
    "Low battery alerts",
    "Mechanical key backup",
  ],
  packages: [
    {
      id: "lock-basic",
      name: "Single Door",
      price: 12999,
      features: ["1 Smart Lock", "Installation", "App Setup", "1 Year Warranty"],
    },
    {
      id: "lock-multi",
      name: "Multi Door",
      price: 34999,
      features: ["3 Smart Locks", "Central app", "Guest management", "2 Year Warranty"],
      popular: true,
    },
  ],
  gallery: [],
  faqs: [],
  relatedSlugs: ["video-door-phones", "home-security-automation", "access-control"],
});
