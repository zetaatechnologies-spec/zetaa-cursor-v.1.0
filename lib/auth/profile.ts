import { createAdminClient } from "@/lib/supabase/server";

/** Create user profile with service role (bypasses RLS — server only) */
export async function createUserProfile(input: {
  id: string;
  email: string;
  full_name?: string | null;
  phone?: string | null;
  role?: "customer" | "admin" | "provider";
}) {
  const admin = await createAdminClient();

  const { error } = await admin.from("users").upsert(
    {
      id: input.id,
      email: input.email,
      full_name: input.full_name ?? null,
      phone: input.phone ?? null,
      role: input.role ?? "customer",
    },
    { onConflict: "id" }
  );

  return { error };
}
