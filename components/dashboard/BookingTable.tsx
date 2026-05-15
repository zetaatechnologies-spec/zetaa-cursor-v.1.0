"use client";
import { StatusBadge } from "@/components/booking/StatusBadge";
import { DataTable } from "@/components/dashboard/DataTable";
import { formatDate, formatCurrency } from "@/lib/utils/format";
import type { Booking } from "@/types";
import Link from "next/link";

export function BookingTable({ bookings, loading, basePath = "/admin/bookings" }: {
  bookings: Booking[]; loading?: boolean; basePath?: string;
}) {
  return (
    <DataTable
      loading={loading}
      data={bookings}
      columns={[
        { key: "id", header: "ID", render: (r) => <Link href={`${basePath}?id=${r.id}`} className="font-mono text-brand-blue">#{r.id.slice(0, 8)}</Link> },
        { key: "service", header: "Service", render: (r) => r.service?.name ?? "—" },
        { key: "scheduled_date", header: "Date", render: (r) => formatDate(r.scheduled_date) },
        { key: "city", header: "City" },
        { key: "total_amount", header: "Amount", render: (r) => r.total_amount ? formatCurrency(r.total_amount) : "—" },
        { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
      ]}
    />
  );
}
