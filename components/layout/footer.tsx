import Link from "next/link";
import { mainNav, siteInfo } from "@/lib/data/nav";
import { services } from "@/lib/data/services";

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="container grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-3 text-sm font-bold">آریا نقش</h4>
          <p className="text-sm text-ink-soft">
            چاپ حرفه‌ای، با نقش ماندگار. ارائه‌دهنده خدمات چاپ افست، دیجیتال، بسته‌بندی و اقلام
            تبلیغاتی برای برندهای مختلف.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold">دسترسی سریع</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-ink-soft">
            <li><Link href="/">صفحه اصلی</Link></li>
            {mainNav.map((i) => (
              <li key={i.href}><Link href={i.href}>{i.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold">خدمات</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-ink-soft">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>{s.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold">ارتباط با ما</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-ink-soft">
            <li>{siteInfo.phone}</li>
            <li>{siteInfo.email}</li>
            <li>{siteInfo.address}</li>
            <li>{siteInfo.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-ink-soft">
        <span>© ۱۴۰۵ آریا نقش. تمامی حقوق محفوظ است.</span>
        <span className="flex gap-4">
          <Link href="/privacy">حریم خصوصی</Link>
          <Link href="/terms">شرایط استفاده</Link>
        </span>
      </div>
    </footer>
  );
}
