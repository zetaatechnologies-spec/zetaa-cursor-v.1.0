import { bookingSchema } from "@/lib/api/validations";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");

  const { data: profile } = await supabase.from("users").select("role").eq("id", user.id).single();

  let query = supabase.from("bookings").select("*, service:services(*)").order("created_at", { ascending: false });

  if (profile?.role === "customer") query = query.eq("customer_id", user.id);
  else if (profile?.role === "provider") query = query.eq("provider_id", user.id);
  if (status) query = query.eq("status", status);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ bookings: data });
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const { service_slug, ...rest } = parsed.data;
  const { data: service } = await supabase.from("services").select("id, starting_price").eq("slug", service_slug).single();
  if (!service) return NextResponse.json({ error: "Service not found" }, { status: 404 });

  const { data: booking, error } = await supabase.from("bookings").insert({
    customer_id: user.id,
    service_id: service.id,
    status: "pending",
    total_amount: service.starting_price,
    ...rest,
  }).select().single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ booking }, { status: 201 });
}
