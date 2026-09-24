import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شرایط استفاده",
  description: "شرایط و ضوابط استفاده از خدمات آریا نقش.",
};

const sections = [
  { title: "کلیات", body: "استفاده از خدمات آریا نقش به‌منزله پذیرش این شرایط و ضوابط است." },
  { title: "استفاده از خدمات", body: "خدمات چاپ صرفاً برای اهداف قانونی و طبق سفارش ثبت‌شده ارائه می‌شوند." },
  { title: "سفارش و پرداخت", body: "جزئیات سفارش، هزینه و زمان تحویل پیش از شروع پروژه با مشتری هماهنگ می‌شود." },
  { title: "مسئولیت کاربران", body: "صحت فایل‌ها و محتوای ارسالی برای چاپ بر عهده مشتری است." },
  { title: "مالکیت محتوا", body: "حقوق مالکیت معنوی طرح‌های ارسالی متعلق به مشتری باقی می‌ماند." },
  { title: "تغییر شرایط", body: "آریا نقش می‌تواند این شرایط را در آینده به‌روزرسانی کند." },
];

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-[720px] py-14">
      <h1 className="mb-3 text-3xl font-extrabold tracking-tight">شرایط استفاده</h1>
      <p className="mb-10 text-sm text-ink-soft">
        این متن نمونه است و پیش از انتشار باید توسط واحد حقوقی مجموعه بازبینی شود.
      </p>
      <div className="space-y-8">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="mb-2 text-lg font-bold">{s.title}</h2>
            <p className="text-ink-soft leading-8">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
