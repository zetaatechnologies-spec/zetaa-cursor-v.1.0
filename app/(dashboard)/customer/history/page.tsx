import type { Metadata } from "next";
export const metadata: Metadata = { title: "History" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">History</h1>
      <p className="mt-1 text-brand-muted">Completed service history</p>
      
    </div>
  );
}