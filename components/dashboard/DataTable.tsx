"use client";
import { Skeleton } from "@/components/ui/Skeleton";

interface Column<T> { key: keyof T | string; header: string; render?: (row: T) => React.ReactNode }

export function DataTable<T extends { id: string }>({ columns, data, loading }: {
  columns: Column<T>[]; data: T[]; loading?: boolean;
}) {
  if (loading) return <div className="space-y-2">{Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}</div>;
  if (!data.length) return <p className="py-8 text-center text-sm text-brand-muted">No data found</p>;
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>{columns.map((c) => <th key={String(c.key)} className="px-4 py-3 text-left font-medium text-brand-muted">{c.header}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t border-gray-100 hover:bg-gray-50/50">
              {columns.map((c) => (
                <td key={String(c.key)} className="px-4 py-3">
                  {c.render ? c.render(row) : String((row as Record<string, unknown>)[c.key as string] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
