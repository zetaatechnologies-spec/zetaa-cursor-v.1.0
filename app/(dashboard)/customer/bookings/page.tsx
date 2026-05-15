import type { Metadata } from "next";
export const metadata: Metadata = { title: "My Bookings" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">My Bookings</h1>
      <p className="mt-1 text-brand-muted">View and manage your bookings</p>
      
    </div>
  );
}