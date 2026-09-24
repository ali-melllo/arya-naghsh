import { Marquee } from "@/components/shared/marquee";
import { SectionHeading } from "@/components/shared/section-heading";
import { trustedCompanies } from "@/lib/data/nav";

export function TrustedCompanies() {
  return (
    <section className="border-b-2 border-dashed border-border py-16">
      <div className="container flex justify-center items-center mb-2">
        <SectionHeading
          title="اعتماد برندها، سرمایه ماست"
          subtitle="در مسیر رشد برندهای مختلف، همراه آن‌ها بوده‌ایم."
        />
      </div>
      <Marquee items={trustedCompanies} />
    </section>
  );
}
