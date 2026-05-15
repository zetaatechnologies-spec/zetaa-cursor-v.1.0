import { LoginForm } from "@/components/forms/LoginForm";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <h1 className="mb-2 text-center text-2xl font-bold">Welcome Back</h1>
        <p className="mb-8 text-center text-sm text-brand-muted">Sign in to your ZETAA account</p>
        <div className="card-premium">
          <Suspense><LoginForm /></Suspense>
        </div>
        <p className="mt-4 text-center text-sm">
          <Link href="/" className="text-brand-blue hover:underline">Back to home</Link>
        </p>
      </div>
    </div>
  );
}
