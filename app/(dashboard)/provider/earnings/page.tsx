import type { Metadata } from "next";
export const metadata: Metadata = { title: "Earnings" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Earnings</h1>
      <p className="mt-1 text-brand-muted">Payment history and payouts</p>
      
    </div>
  );
}