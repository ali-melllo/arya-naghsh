import type { Metadata } from "next";
import { Statistics } from "@/components/home/statistics";
import { SectionHeading } from "@/components/shared/section-heading";
import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "آشنایی با داستان، مأموریت و ارزش‌های آریا نقش.",
};

const values = ["کیفیت", "دقت", "تعهد", "خلاقیت", "مشتری‌مداری"];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border py-16 sm:py-20">
        <div className="container max-w-2xl">
          <h1 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            ما فقط چاپ نمی‌کنیم؛ تجربه می‌سازیم.
          </h1>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading title="داستان ما" />
            <p className="text-ink-soft">
              آریا نقش از دل علاقه به کاغذ، تایپوگرافی و چاپ دقیق شکل گرفت. آنچه به‌عنوان
              یک کارگاه کوچک چاپ آغاز شد، امروز به مجموعه‌ای تبدیل شده که برندها برای
              مهم‌ترین پروژه‌های چاپی خود به آن اعتماد می‌کنند. در تمام این مسیر، اصل ثابت
              مانده است: توجه به جزئیاتی که چشم عادی نمی‌بیند اما دست حس می‌کند.
            </p>
          </div>
          <div>
            <SectionHeading title="مأموریت ما" />
            <p className="text-ink-soft">
              ارائه خدمات چاپ با کیفیت، دقت و تجربه‌ای قابل اعتماد؛ از اولین مشاوره تا
              لحظه تحویل محصول نهایی.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16">
        <div className="container">
          <SectionHeading title="ارزش‌های ما" />
          <div className="flex flex-wrap gap-3">
            {values.map((v) => (
              <span key={v} className="rounded-full border border-border px-4 py-1.5 text-sm">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Statistics />

      <section className="border-b border-border py-16">
        <div className="container">
          <SectionHeading
            title="شیوه همکاری"
            subtitle="از تماس اول تا تحویل نهایی، مسیر همکاری با آریا نقش شفاف و قابل پیش‌بینی است."
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["تماس و بررسی نیاز", "مشاوره و پیشنهاد", "اجرای پروژه", "تحویل و پشتیبانی"].map(
              (step, i) => (
                <li key={step} className="rounded-xl border border-border bg-surface p-5">
                  <div className="mb-2 text-2xl font-extrabold text-accent/30">
                    {["۱", "۲", "۳", "۴"][i]}
                  </div>
                  <p className="text-sm font-medium">{step}</p>
                </li>
              )
            )}
          </ol>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container">
          <p className="mb-6 text-xl font-bold">با ما درباره پروژه‌تان صحبت کنید.</p>
          <LinkButton href="/contact">تماس با ما</LinkButton>
        </div>
      </section>
    </div>
  );
}
