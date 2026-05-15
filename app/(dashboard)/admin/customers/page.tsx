import type { Metadata } from "next";
export const metadata: Metadata = { title: "Customers" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Customers</h1>
      <p className="mt-1 text-brand-muted">View registered customers</p>
      
    </div>
  );
}