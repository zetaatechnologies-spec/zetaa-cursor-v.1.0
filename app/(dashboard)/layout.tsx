import { Sidebar } from "@/components/dashboard/Sidebar";
import { ADMIN_NAV, CUSTOMER_NAV, PROVIDER_NAV } from "@/lib/constants/navigation";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase.from("users").select("role, full_name").eq("id", user.id).single();
  const role = profile?.role ?? "customer";

  const navMap = { admin: ADMIN_NAV, provider: PROVIDER_NAV, customer: CUSTOMER_NAV };
  const items = navMap[role as keyof typeof navMap] ?? CUSTOMER_NAV;
  const title = profile?.full_name ? `Hi, ${profile.full_name.split(" ")[0]}` : "Dashboard";

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar items={items} title={title} />
      <main className="flex-1 overflow-auto p-6 md:p-8">{children}</main>
    </div>
  );
}
