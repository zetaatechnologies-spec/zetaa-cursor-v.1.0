import type { ServicePageContent } from "@/types";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&q=80`;

export const DEFAULT_PROCESS = [
  {
    step: 1,
    title: "Book Free Site Visit",
    description:
      "Schedule a convenient time. Our expert visits your location for assessment.",
  },
  {
    step: 2,
    title: "Custom Quote & Plan",
    description:
      "We analyze your space and recommend the best solution with transparent pricing.",
  },
  {
    step: 3,
    title: "Professional Installation",
    description:
      "Certified technicians install with minimal disruption and clean cable management.",
  },
  {
    step: 4,
    title: "Testing & Handover",
    description:
      "Full system demo, app setup, and 1-year warranty activation.",
  },
];

export const DEFAULT_FAQS = [
  {
    question: "How long does installation take?",
    answer:
      "Most residential installations are completed in 4-8 hours. Commercial projects may take 1-3 days depending on scale.",
  },
  {
    question: "Do you provide warranty?",
    answer:
      "Yes! All installations come with 1-year service warranty. Equipment warranty varies by brand (1-3 years).",
  },
  {
    question: "Can I monitor remotely?",
    answer:
      "Absolutely. We set up mobile apps so you can view live feeds and receive alerts from anywhere.",
  },
];

type ServiceInput = Omit<ServicePageContent, "process" | "faqs"> & {
  process?: ServicePageContent["process"];
  faqs?: ServicePageContent["faqs"];
};

export function createService(partial: ServiceInput): ServicePageContent {
  return {
    ...partial,
    process: partial.process ?? DEFAULT_PROCESS,
    faqs: partial.faqs ?? DEFAULT_FAQS,
  };
}

export { UNSPLASH };
