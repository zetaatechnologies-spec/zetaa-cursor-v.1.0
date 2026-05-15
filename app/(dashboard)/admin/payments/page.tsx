import type { Metadata } from "next";
export const metadata: Metadata = { title: "Payments" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Payments</h1>
      <p className="mt-1 text-brand-muted">Track payment transactions</p>
      
    </div>
  );
}