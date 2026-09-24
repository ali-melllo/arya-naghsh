import Link from "next/link";
import type { PortfolioItem } from "@/types";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-accent/10 to-surface">
        <div className="absolute start-4 top-4 h-1/3 w-1/3 border border-ink-soft/40 transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="mb-1.5 text-xs font-bold text-accent">{item.category}</div>
        <h3 className="mb-1 text-base font-bold">{item.title}</h3>
        <p className="text-sm text-ink-soft">{item.description}</p>
      </div>
    </Link>
  );
}
