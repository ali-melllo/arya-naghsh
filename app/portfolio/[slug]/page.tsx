import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolio } from "@/lib/data/portfolio";
import { PortfolioCard } from "@/components/portfolio/portfolio-card";
import { LinkButton } from "@/components/ui/button";

export function generateStaticParams() {
  return portfolio.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = portfolio.find((p) => p.slug === params.slug);
  if (!item) return {};
  return { title: item.title, description: item.description };
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const item = portfolio.find((p) => p.slug === params.slug);
  if (!item) notFound();

  const related = portfolio.filter((p) => p.slug !== item.slug && p.category === item.category).slice(0, 3);

  return (
    <article className="py-14">
      <div className="container mb-10 max-w-3xl">
        <div className="mb-3 text-xs font-bold text-accent">{item.category}</div>
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{item.title}</h1>
        <p className="text-ink-soft">{item.description}</p>
      </div>

      <div className="container mb-14 aspect-[16/8] rounded-xl border border-border bg-gradient-to-br from-accent/10 to-surface" />

      <div className="container grid gap-12 lg:grid-cols-[1fr_260px]">
        <div className="space-y-10">
          <section>
            <h2 className="mb-2 text-lg font-bold">چالش پروژه</h2>
            <p className="text-ink-soft">{item.challenge}</p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold">راهکار</h2>
            <p className="text-ink-soft">{item.solution}</p>
          </section>
          <section>
            <h2 className="mb-4 text-lg font-bold">گالری تصاویر</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {Array.from({ length: item.gallery }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl border border-border bg-surface" />
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit space-y-5 rounded-xl border border-border bg-surface p-6 text-sm">
          <div><b className="block text-ink-soft">سال</b>{item.year}</div>
          <div><b className="block text-ink-soft">متریال</b>{item.materials}</div>
          <div><b className="block text-ink-soft">روش چاپ</b>{item.printingMethod}</div>
        </aside>
      </div>

      {related.length > 0 && (
        <div className="container mt-16 border-t border-border pt-14">
          <h2 className="mb-6 text-xl font-extrabold">پروژه‌های مرتبط</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <PortfolioCard key={r.slug} item={r} />
            ))}
          </div>
        </div>
      )}

      <div className="container mt-16 text-center">
        <LinkButton href="/contact">پروژه چاپی خودتان را شروع کنید</LinkButton>
      </div>
    </article>
  );
}
