import { createService, UNSPLASH } from "./shared";

export const homeAutomation = createService({
  slug: "home-security-automation",
  name: "Home Security Automation",
  tagline: "One app to control your entire smart home security",
  heroImage: UNSPLASH("photo-1558002038-1055907df827"),
  overview:
    "Integrate CCTV, smart locks, sensors, and alarms into a unified home automation system. Voice control, scenes, and geofencing included.",
  startingPrice: 34999,
  duration: "1-3 days",
  benefits: [
    {
      title: "Unified Control",
      description: "One app for cameras, locks, lights, and alarms",
      icon: "layout-grid",
    },
    {
      title: "Smart Scenes",
      description: "Away mode, night mode, and custom automations",
      icon: "sparkles",
    },
    {
      title: "Voice Control",
      description: "Works with Alexa and Google Home",
      icon: "mic",
    },
    {
      title: "Energy Savings",
      description: "Automate lights and AC based on occupancy",
      icon: "leaf",
    },
  ],
  features: [
    "Smart hub setup",
    "Sensor integration",
    "Mobile app",
    "Voice assistants",
    "Geofencing",
    "Professional wiring",
  ],
  packages: [
    {
      id: "home-starter",
      name: "Starter Kit",
      price: 34999,
      features: ["Hub", "2 sensors", "App setup", "Basic automation"],
    },
    {
      id: "home-complete",
      name: "Complete Home",
      price: 79999,
      features: ["Full integration", "Voice control", "Custom scenes"],
      popular: true,
    },
  ],
  gallery: [],
  faqs: [],
  relatedSlugs: ["cctv-installation", "smart-door-locks"],
});
