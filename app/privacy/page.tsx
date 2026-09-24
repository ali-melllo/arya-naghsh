import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حریم خصوصی",
  description: "سیاست حریم خصوصی آریا نقش.",
};

const sections = [
  {
    title: "مقدمه",
    body: "آریا نقش به حریم خصوصی کاربران و مشتریان خود احترام می‌گذارد و این سند نحوه جمع‌آوری و استفاده از اطلاعات را توضیح می‌دهد.",
  },
  {
    title: "اطلاعاتی که دریافت می‌کنیم",
    body: "اطلاعاتی مانند نام، شماره تماس و ایمیل که از طریق فرم تماس یا سفارش پروژه در اختیار ما قرار می‌گیرد.",
  },
  {
    title: "نحوه استفاده از اطلاعات",
    body: "این اطلاعات صرفاً برای پاسخ‌گویی به درخواست‌ها، ارائه مشاوره و پیگیری پروژه‌های چاپی استفاده می‌شود.",
  },
  {
    title: "امنیت اطلاعات",
    body: "اطلاعات دریافتی با رعایت استانداردهای امنیتی ذخیره‌سازی می‌شوند و در اختیار اشخاص ثالث قرار نمی‌گیرند.",
  },
  {
    title: "ارتباط با ما",
    body: "برای هرگونه سؤال درباره این سیاست، می‌توانید از طریق صفحه تماس با ما در ارتباط باشید.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-[720px] py-14">
      <h1 className="mb-3 text-3xl font-extrabold tracking-tight">حریم خصوصی</h1>
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
