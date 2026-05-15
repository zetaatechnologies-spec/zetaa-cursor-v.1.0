import type { Metadata } from "next";
export const metadata: Metadata = { title: "Analytics" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Analytics</h1>
      <p className="mt-1 text-brand-muted">Business insights and reports</p>
      
    </div>
  );
}