import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Unauthorized" };

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-brand-blue">403</h1>
      <p className="mt-4 text-xl font-semibold">Access Denied</p>
      <p className="mt-2 text-brand-muted">You don&apos;t have permission to view this page.</p>
      <Button href="/" className="mt-8">Go Home</Button>
    </div>
  );
}
