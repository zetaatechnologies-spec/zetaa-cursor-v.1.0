import type { Metadata } from "next";
export const metadata: Metadata = { title: "Invoices" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Invoices</h1>
      <p className="mt-1 text-brand-muted">Download payment invoices</p>
      
    </div>
  );
}