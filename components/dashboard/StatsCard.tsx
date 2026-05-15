import { cn } from "@/lib/utils/cn";
import type { LucideIcon } from "lucide-react";

export function StatsCard({ title, value, change, icon: Icon, trend }: {
  title: string; value: string | number; change?: string; icon: LucideIcon; trend?: "up" | "down";
}) {
  return (
    <div className="card-premium">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-brand-muted">{title}</p>
          <p className="mt-1 text-2xl font-bold">{value}</p>
          {change && <p className={cn("mt-1 text-xs", trend === "up" ? "text-green-600" : "text-red-500")}>{change}</p>}
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10">
          <Icon className="h-5 w-5 text-brand-blue" />
        </div>
      </div>
    </div>
  );
}
