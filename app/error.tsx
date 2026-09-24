"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <h1 className="mb-3 text-2xl font-extrabold">مشکلی پیش آمده است.</h1>
      <p className="mb-8 max-w-sm text-ink-soft">
        لطفاً دوباره تلاش کنید. در صورت تکرار مشکل، با پشتیبانی آریا نقش تماس بگیرید.
      </p>
      <button
        onClick={reset}
        className="rounded-xl bg-accent px-6 py-2.5 text-sm font-semibold text-white"
      >
        تلاش مجدد
      </button>
    </div>
  );
}
