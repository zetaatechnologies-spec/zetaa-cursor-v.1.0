import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

export function ReviewCard({
  name,
  rating,
  comment,
  service,
  date,
}: ReviewCardProps) {
  return (
    <div className="card-premium">
      <div className="mb-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "fill-amber-400 text-amber-400" : "text-gray-200"
            }`}
          />
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-brand-muted">
        &ldquo;{comment}&rdquo;
      </p>
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-brand-muted">{service}</p>
        </div>
        <span className="text-xs text-brand-muted">{date}</span>
      </div>
    </div>
  );
}
