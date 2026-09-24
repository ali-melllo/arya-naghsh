"use client";

import { cn } from "@/lib/utils";
import { portfolioCategories } from "@/lib/data/portfolio";

export function PortfolioFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (value: string) => void;
}) {
  const options = ["همه", ...portfolioCategories];
  return (
    <div role="tablist" aria-label="فیلتر دسته‌بندی نمونه‌کارها" className="mb-9 flex flex-wrap gap-2.5">
      {options.map((opt) => (
        <button
          key={opt}
          role="tab"
          aria-selected={active === opt}
          onClick={() => onChange(opt)}
          className={cn(
            "rounded-full border border-border px-4 py-1.5 text-sm transition-colors",
            active === opt ? "bg-accent text-white border-accent" : "hover:bg-surface"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
