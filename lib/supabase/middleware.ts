import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );

          supabaseResponse = NextResponse.next({ request });

          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Get authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;

  // Protected routes
  const protectedPrefixes = ["/admin", "/provider", "/customer"];

  const isProtected = protectedPrefixes.some((p) =>
    path.startsWith(p)
  );

  // Redirect unauthenticated users to login
  if (isProtected && !user) {
    const url = request.nextUrl.clone();

    url.pathname = "/login";
    url.searchParams.set("redirect", path);

    return NextResponse.redirect(url);
  }

  // Role-based protection
  if (user && isProtected) {
    const { data: profile, error } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .single();

    console.log("PROFILE:", profile);
    console.log("PROFILE ERROR:", error);

    const role = profile?.role;

    // Only block if role exists AND is incorrect
    if (path.startsWith("/admin") && role && role !== "admin") {
      return NextResponse.redirect(
        new URL("/unauthorized", request.url)
      );
    }

    if (path.startsWith("/provider") && role && role !== "provider") {
      return NextResponse.redirect(
        new URL("/unauthorized", request.url)
      );
    }

    if (path.startsWith("/customer") && role && role !== "customer") {
      return NextResponse.redirect(
        new URL("/unauthorized", request.url)
      );
    }
  }

  return supabaseResponse;
}