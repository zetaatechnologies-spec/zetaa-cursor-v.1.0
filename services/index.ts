import type { ServicePageContent } from "@/types";
import { cctvInstallation } from "./cctv/installation";
import { cctvMaintenance } from "./cctv/maintenance";
import { smartLock } from "./smart-lock";
import { biometric } from "./biometric";
import { intercom, videoDoorPhone } from "./intercom";
import { accessControl } from "./access-control";
import { homeAutomation } from "./home-automation";
import { officeSecurity } from "./office-security";

export const ALL_SERVICES: ServicePageContent[] = [
  cctvInstallation,
  cctvMaintenance,
  smartLock,
  biometric,
  videoDoorPhone,
  intercom,
  accessControl,
  homeAutomation,
  officeSecurity,
];

export function getServiceBySlug(slug: string): ServicePageContent | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServicePageContent[] {
  return ALL_SERVICES.filter((s) => slugs.includes(s.slug));
}

// Service cards for listing page
export const SERVICE_CARDS = ALL_SERVICES.map((s) => ({
  slug: s.slug,
  name: s.name,
  shortDescription: s.overview.slice(0, 120) + "...",
  image: s.heroImage,
  startingPrice: s.startingPrice,
  category: s.slug.split("-")[0],
}));
