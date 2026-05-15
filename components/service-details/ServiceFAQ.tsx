"use client";
import type { ServicePageContent } from "@/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

export function ServiceFAQ({ service }: { service: ServicePageContent }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {service.faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-gray-100">
              <button type="button" className="flex w-full items-center justify-between p-4 text-left font-medium" onClick={() => setOpen(open === i ? null : i)}>
                {faq.question}
                <ChevronDown className={cn("h-5 w-5 transition-transform", open === i && "rotate-180")} />
              </button>
              {open === i && <div className="border-t border-gray-100 px-4 pb-4 text-sm text-brand-muted">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
