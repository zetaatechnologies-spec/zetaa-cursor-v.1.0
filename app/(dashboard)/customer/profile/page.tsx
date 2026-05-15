import type { Metadata } from "next";
export const metadata: Metadata = { title: "Profile" };
export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="mt-1 text-brand-muted">Update your account details</p>
      
    </div>
  );
}