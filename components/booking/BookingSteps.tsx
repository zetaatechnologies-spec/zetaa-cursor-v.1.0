"use client";

import { cn } from "@/lib/utils/cn";
import { Check } from "lucide-react";

const STEPS = ["Schedule", "Location", "Confirm"];

export function BookingSteps({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-between">
      {STEPS.map((label, i) => {
        const step = i + 1;
        const done = step < currentStep;
        const active = step === currentStep;
        return (
          <div key={label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold",
                  done && "bg-brand-blue text-white",
                  active && "bg-brand-blue text-white ring-4 ring-brand-blue/20",
                  !done && !active && "bg-gray-100 text-brand-muted"
                )}
              >
                {done ? <Check className="h-4 w-4" /> : step}
              </div>
              <span className={cn("text-xs font-medium", active && "text-brand-blue")}>
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "mx-2 h-0.5 flex-1",
                  done ? "bg-brand-blue" : "bg-gray-200"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
