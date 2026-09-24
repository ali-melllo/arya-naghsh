import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="mb-8 flex gap-2 opacity-40" aria-hidden="true">
        <span className="h-14 w-10 rounded-xl border border-ink-soft" />
        <span className="h-14 w-10 rounded-xl border border-ink-soft" />
        <span className="h-14 w-10 rounded-xl border-2 border-accent" />
      </div>
      <h1 className="mb-3 text-2xl font-extrabold">این صفحه پیدا نشد.</h1>
      <p className="mb-8 max-w-sm text-ink-soft">
        به نظر می‌رسد مسیری که دنبال آن هستید وجود ندارد.
      </p>
      <Link href="/" className="rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-white">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
