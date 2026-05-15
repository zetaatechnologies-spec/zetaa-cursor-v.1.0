import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BookingDraft {
  serviceSlug: string | null;
  serviceName: string | null;
  scheduledDate: string;
  scheduledTime: string;
  address: string;
  city: string;
  pincode: string;
  notes: string;
  packageId: string | null;
}

interface BookingStore extends BookingDraft {
  setService: (slug: string, name: string) => void;
  setSchedule: (date: string, time: string) => void;
  setAddress: (address: string, city: string, pincode: string) => void;
  setNotes: (notes: string) => void;
  setPackage: (packageId: string) => void;
  reset: () => void;
}

const initialState: BookingDraft = {
  serviceSlug: null,
  serviceName: null,
  scheduledDate: "",
  scheduledTime: "",
  address: "",
  city: "",
  pincode: "",
  notes: "",
  packageId: null,
};

export const useBookingStore = create<BookingStore>()(
  persist(
    (set) => ({
      ...initialState,
      setService: (slug, name) => set({ serviceSlug: slug, serviceName: name }),
      setSchedule: (date, time) =>
        set({ scheduledDate: date, scheduledTime: time }),
      setAddress: (address, city, pincode) => set({ address, city, pincode }),
      setNotes: (notes) => set({ notes }),
      setPackage: (packageId) => set({ packageId }),
      reset: () => set(initialState),
    }),
    { name: "zetaa-booking-draft" }
  )
);
