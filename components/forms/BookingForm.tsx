"use client";

import { BookingSteps } from "@/components/booking/BookingSteps";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { bookingSchema } from "@/lib/api/validations";
import { useBookingStore } from "@/store/useBookingStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { BookingInput } from "@/lib/api/validations";
import { toast } from "sonner";

const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "12:00",
  "14:00", "15:00", "16:00", "17:00", "18:00",
];

export function BookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const store = useBookingStore();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service_slug: store.serviceSlug || searchParams.get("service") || "",
      scheduled_date: store.scheduledDate,
      scheduled_time: store.scheduledTime,
      address: store.address,
      city: store.city,
      pincode: store.pincode,
      notes: store.notes,
      package_id: store.packageId || searchParams.get("package") || undefined,
    },
  });

  useEffect(() => {
    const slug = searchParams.get("service");
    if (slug) setValue("service_slug", slug);
  }, [searchParams, setValue]);

  const onSubmit = async (data: BookingInput) => {
    setLoading(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Booking failed");
      }
      const { booking } = await res.json();
      store.reset();
      toast.success("Booking created successfully!");
      router.push(`/customer/bookings?id=${booking.id}`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="mx-auto max-w-2xl">
      <BookingSteps currentStep={step} />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <input type="hidden" {...register("service_slug")} />
        <input type="hidden" {...register("package_id")} />

        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Schedule</h2>
            <Input
              label="Preferred Date"
              type="date"
              {...register("scheduled_date")}
              error={errors.scheduled_date?.message}
            />
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">Preferred Time</label>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <label
                    key={slot}
                    className={`cursor-pointer rounded-xl border px-3 py-2 text-center text-sm transition-colors ${
                      watch("scheduled_time") === slot
                        ? "border-brand-blue bg-brand-blue/10 text-brand-blue"
                        : "border-gray-200 hover:border-brand-blue/50"
                    }`}
                  >
                    <input
                      type="radio"
                      value={slot}
                      {...register("scheduled_time")}
                      className="sr-only"
                    />
                    {slot}
                  </label>
                ))}
              </div>
              {errors.scheduled_time && (
                <p className="text-xs text-red-500">{errors.scheduled_time.message}</p>
              )}
            </div>
            <Button type="button" onClick={nextStep} className="w-full">
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Location</h2>
            <Textarea
              label="Full Address"
              {...register("address")}
              error={errors.address?.message}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="City"
                {...register("city")}
                error={errors.city?.message}
              />
              <Input
                label="Pincode"
                {...register("pincode")}
                error={errors.pincode?.message}
              />
            </div>
            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button type="button" onClick={nextStep} className="flex-1">
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Additional Notes</h2>
            <Textarea
              label="Notes (optional)"
              placeholder="Any specific requirements..."
              {...register("notes")}
            />
            <div className="rounded-xl bg-gray-50 p-4 text-sm">
              <p className="font-medium">Booking Summary</p>
              <p className="mt-1 text-brand-muted">
                Service: {store.serviceName || watch("service_slug")}
              </p>
              <p className="text-brand-muted">
                Date: {watch("scheduled_date")} at {watch("scheduled_time")}
              </p>
            </div>
            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button type="submit" loading={loading} className="flex-1">
                Confirm Booking
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
