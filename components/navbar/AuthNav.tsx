"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export function AuthNav() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const supabase = createClient();

      await supabase.auth.signOut();

      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (loading) {
    return <div className="text-sm">Checking...</div>;
  }

  // Logged in
  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/customer"
          className="text-sm font-medium hover:text-blue-600"
        >
          Dashboard
        </Link>

        <button
          onClick={handleLogout}
          className="text-sm font-medium text-red-600 hover:text-red-700"
        >
          Logout
        </button>
      </div>
    );
  }

  // Logged out
  return (
    <div className="flex items-center gap-4">
      <Link
        href="/login"
        className="text-sm font-medium hover:text-blue-600"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
      >
        Register
      </Link>
    </div>
  );
}