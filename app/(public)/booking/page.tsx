import { BookingForm } from "@/components/forms/BookingForm";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = { title: "Book a Visit" };

export default function BookingPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="mb-2 text-center text-4xl font-bold">Book a Site Visit</h1>
        <p className="mb-8 text-center text-brand-muted">Free consultation. No obligation.</p>
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}
