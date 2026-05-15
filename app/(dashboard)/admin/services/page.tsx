import type { Metadata } from "next";
export const metadata: Metadata = { title: "Services" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Services</h1>
      <p className="mt-1 text-brand-muted">Manage service catalog</p>
      
    </div>
  );
}