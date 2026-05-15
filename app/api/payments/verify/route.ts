import { paymentVerifySchema } from "@/lib/api/validations";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = paymentVerifySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, booking_id } = parsed.data;
  const secret = process.env.RAZORPAY_KEY_SECRET!;
  const expected = crypto.createHmac("sha256", secret).update(`${razorpay_order_id}|${razorpay_payment_id}`).digest("hex");

  if (expected !== razorpay_signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = await createClient();
  await supabase.from("payments").update({ status: "paid", razorpay_payment_id }).eq("razorpay_order_id", razorpay_order_id);
  await supabase.from("bookings").update({ status: "confirmed" }).eq("id", booking_id);

  return NextResponse.json({ success: true });
}
