import { createService, UNSPLASH } from "../shared";

export const cctvInstallation = createService({
  slug: "cctv-installation",
  name: "CCTV Installation",
  tagline: "24/7 surveillance with crystal-clear HD footage",
  heroImage: UNSPLASH("photo-1557597774-9d207bfaaacb"),
  overview:
    "Professional CCTV installation for homes, offices, and retail spaces. We use premium brands like Hikvision, CP Plus, and Dahua with expert cable routing and mobile app setup.",
  startingPrice: 8999,
  duration: "4-8 hours",
  benefits: [
    {
      title: "HD Night Vision",
      description: "Crystal clear footage even in complete darkness",
      icon: "eye",
    },
    {
      title: "Mobile Monitoring",
      description: "Watch live feeds from anywhere on your phone",
      icon: "smartphone",
    },
    {
      title: "Cloud Backup",
      description: "Optional cloud storage for critical footage",
      icon: "cloud",
    },
    {
      title: "Motion Alerts",
      description: "Instant notifications when movement is detected",
      icon: "bell",
    },
  ],
  features: [
    "2-16 camera setups",
    "DVR/NVR configuration",
    "Hidden cable management",
    "Mobile app setup",
    "Remote viewing",
    "Motion detection zones",
  ],
  process: [
    {
      step: 1,
      title: "Site Survey",
      description: "We map blind spots and optimal camera positions.",
    },
    {
      step: 2,
      title: "Equipment Selection",
      description: "Choose cameras, storage, and features for your budget.",
    },
    {
      step: 3,
      title: "Installation",
      description: "Clean mounting, cabling, and network configuration.",
    },
    {
      step: 4,
      title: "Demo & Training",
      description: "Learn to use the app and access recordings.",
    },
  ],
  packages: [
    {
      id: "cctv-basic",
      name: "Basic Home",
      price: 8999,
      features: ["2 HD Cameras", "1TB DVR", "Mobile App", "1 Year Warranty"],
    },
    {
      id: "cctv-standard",
      name: "Standard Home",
      price: 14999,
      features: [
        "4 HD Cameras",
        "2TB NVR",
        "Night Vision",
        "Remote Access",
        "1 Year Warranty",
      ],
      popular: true,
    },
    {
      id: "cctv-premium",
      name: "Premium Office",
      price: 29999,
      features: [
        "8 4K Cameras",
        "4TB NVR",
        "Cloud Backup",
        "AI Motion Detection",
        "2 Year Warranty",
      ],
    },
  ],
  gallery: [
    {
      before: UNSPLASH("photo-1586023492125-27b2c045efd7"),
      after: UNSPLASH("photo-1557597774-9d207bfaaacb"),
      caption: "Living room coverage upgrade",
    },
  ],
  faqs: [
    {
      question: "Which brands do you install?",
      answer: "Hikvision, CP Plus, Dahua, and Honeywell based on your budget and requirements.",
    },
    {
      question: "Can I add more cameras later?",
      answer: "Yes, our NVR systems support expansion. We can add cameras anytime.",
    },
  ],
  relatedSlugs: ["cctv-maintenance", "home-security-automation", "access-control"],
});
