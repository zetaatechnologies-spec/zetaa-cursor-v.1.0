import { paymentOrderSchema } from "@/lib/api/validations";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const parsed = paymentOrderSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const { booking_id, amount } = parsed.data;
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return NextResponse.json({ error: "Payment not configured" }, { status: 503 });

  const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });
  const order = await razorpay.orders.create({ amount: amount * 100, currency: "INR", receipt: booking_id });

  await supabase.from("payments").insert({
    booking_id,
    customer_id: user.id,
    amount,
    currency: "INR",
    status: "pending",
    razorpay_order_id: order.id,
  });

  return NextResponse.json({ orderId: order.id, amount, currency: "INR", keyId });
}
