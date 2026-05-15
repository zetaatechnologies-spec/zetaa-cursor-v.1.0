import { StatsCard } from "@/components/dashboard/StatsCard";
    import { BookingTable } from "@/components/dashboard/BookingTable";
    import { createAdminClient } from "@/lib/supabase/server";
    import { Calendar, CreditCard, Users, Package } from "lucide-react";

    export default async function AdminDashboard() {
      const supabase = await createAdminClient();
      const [{ count: bookings }, { count: customers }, { count: services }] = await Promise.all([
        supabase.from("bookings").select("*", { count: "exact", head: true }),
        supabase.from("users").select("*", { count: "exact", head: true }).eq("role", "customer"),
        supabase.from("services").select("*", { count: "exact", head: true }),
      ]);
      const { data: recentBookings } = await supabase.from("bookings").select("*, service:services(name)").order("created_at", { ascending: false }).limit(5);
      return (
        <div>
          <h1 className="text-2xl font-bold">Admin Overview</h1>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Total Bookings" value={bookings ?? 0} icon={Calendar} />
            <StatsCard title="Customers" value={customers ?? 0} icon={Users} />
            <StatsCard title="Services" value={services ?? 0} icon={Package} />
            <StatsCard title="Revenue" value="—" icon={CreditCard} />
          </div>
          <h2 className="mt-8 text-lg font-semibold">Recent Bookings</h2>
          <div className="mt-4"><BookingTable bookings={recentBookings ?? []} /></div>
        </div>
      );
    }