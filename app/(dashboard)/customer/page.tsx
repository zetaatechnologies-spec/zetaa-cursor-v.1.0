import { Button } from "@/components/ui/Button";
    import { BookingTable } from "@/components/dashboard/BookingTable";
    import { createClient } from "@/lib/supabase/server";

    export default async function CustomerDashboard() {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      const { data: bookings } = await supabase.from("bookings").select("*, service:services(name)").eq("customer_id", user!.id).order("created_at", { ascending: false }).limit(5);
      return (
        <div>
          <div className="flex items-center justify-between">
            <div><h1 className="text-2xl font-bold">My Dashboard</h1><p className="text-brand-muted">Track your bookings</p></div>
            <Button href="/booking">New Booking</Button>
          </div>
          <h2 className="mt-8 text-lg font-semibold">Recent Bookings</h2>
          <div className="mt-4"><BookingTable bookings={bookings ?? []} basePath="/customer/bookings" /></div>
        </div>
      );
    }