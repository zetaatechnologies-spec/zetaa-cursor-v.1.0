import type { Metadata } from "next";
export const metadata: Metadata = { title: "Bookings" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Bookings</h1>
      <p className="mt-1 text-brand-muted">Manage all customer bookings</p>
      
    </div>
  );
}