import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description: "نمونه‌ای از پروژه‌هایی که آریا نقش برای برندها و کسب‌وکارهای مختلف اجرا کرده است.",
};

export default function PortfolioPage() {
  return (
    <div className="container py-14">
      <div className="mb-11 max-w-xl">
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight">نمونه‌کارهای آریا نقش</h1>
        <p className="text-ink-soft">
          نمونه‌ای از پروژه‌هایی که برای برندها و کسب‌وکارهای مختلف اجرا کرده‌ایم.
        </p>
      </div>
      <PortfolioGrid />
    </div>
  );
}
