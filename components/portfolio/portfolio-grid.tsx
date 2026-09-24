"use client";

import { useMemo, useState } from "react";
import { portfolio } from "@/lib/data/portfolio";
import { PortfolioFilter } from "./portfolio-filter";
import { PortfolioCard } from "./portfolio-card";

export function PortfolioGrid() {
  const [active, setActive] = useState("همه");

  const filtered = useMemo(
    () => (active === "همه" ? portfolio : portfolio.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div>
      <PortfolioFilter active={active} onChange={setActive} />
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border py-20 text-center">
          <p className="mb-1 font-bold">نتیجه‌ای پیدا نشد</p>
          <p className="text-sm text-ink-soft">در این دسته‌بندی هنوز پروژه‌ای ثبت نشده است.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PortfolioCard key={p.slug} item={p} />
          ))}
        </div>
      )}
    </div>
  );
}
