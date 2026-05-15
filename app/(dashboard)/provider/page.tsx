import type { Metadata } from "next";
export const metadata: Metadata = { title: "Provider Dashboard" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Provider Dashboard</h1>
      <p className="mt-1 text-brand-muted">Your jobs and earnings overview</p>
      
    </div>
  );
}