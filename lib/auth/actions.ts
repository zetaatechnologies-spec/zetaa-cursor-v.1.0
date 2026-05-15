"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createUserProfile } from "@/lib/auth/profile";
import { createClient } from "@/lib/supabase/server";

export async function signIn(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const redirectTo = (formData.get("redirect") as string) || "/";

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: profile } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .single();

    const roleRedirects: Record<string, string> = {
      admin: "/admin",
      provider: "/provider",
      customer: "/customer",
    };

    revalidatePath("/", "layout");
    redirect(roleRedirects[profile?.role || "customer"] || redirectTo);
  }

  redirect(redirectTo);
}

export async function signUp(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("full_name") as string;
  const phone = formData.get("phone") as string;

  // Step 1: Create auth user (email + password only)
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  const user = data.user;

  // Step 2: Create profile with service role (avoids RLS block on signup)
  if (user) {
    const { error: profileError } = await createUserProfile({
      id: user.id,
      email: user.email ?? email,
      full_name: fullName || null,
      phone: phone || null,
      role: "customer",
    });

    if (profileError) {
      return {
        error: `Account created but profile failed: ${profileError.message}. Check SUPABASE_SERVICE_ROLE_KEY in .env.local`,
      };
    }
  }
  revalidatePath("/", "layout");
  redirect("/login");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
