"use client";
import { cn } from "@/lib/utils/cn";
import { signOut } from "@/lib/auth/actions";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Calendar, Package, Users, HardHat, Star,
  CreditCard, BarChart3, Briefcase, Wallet, User, History, FileText,
} from "lucide-react";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "layout-dashboard": LayoutDashboard, calendar: Calendar, package: Package,
  users: Users, "hard-hat": HardHat, star: Star, "credit-card": CreditCard,
  "bar-chart": BarChart3, briefcase: Briefcase, wallet: Wallet, user: User,
  history: History, "file-text": FileText,
};

interface NavItem { label: string; href: string; icon: string }

export function Sidebar({ items, title }: { items: NavItem[]; title: string }) {
  const pathname = usePathname();
  return (
    <aside className="flex w-64 flex-col border-r border-gray-100 bg-white">
      <div className="border-b border-gray-100 p-6">
        <span className="text-lg font-bold">{title}</span>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {items.map((item) => {
          const Icon = icons[item.icon] || LayoutDashboard;
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              active ? "bg-brand-blue/10 text-brand-blue" : "text-brand-muted hover:bg-gray-50"
            )}>
              <Icon className="h-4 w-4" /> {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-gray-100 p-4">
        <form action={signOut}>
          <button type="submit" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-brand-muted hover:bg-gray-50">
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
