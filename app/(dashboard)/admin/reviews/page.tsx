import type { Metadata } from "next";
export const metadata: Metadata = { title: "Reviews" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Reviews</h1>
      <p className="mt-1 text-brand-muted">Moderate customer reviews</p>
      
    </div>
  );
}