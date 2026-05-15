import type { Metadata } from "next";
export const metadata: Metadata = { title: "Providers" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Providers</h1>
      <p className="mt-1 text-brand-muted">Manage service providers</p>
      
    </div>
  );
}