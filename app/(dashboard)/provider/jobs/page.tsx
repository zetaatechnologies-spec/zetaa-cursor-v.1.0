import type { Metadata } from "next";
export const metadata: Metadata = { title: "My Jobs" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">My Jobs</h1>
      <p className="mt-1 text-brand-muted">Assigned and upcoming jobs</p>
      
    </div>
  );
}