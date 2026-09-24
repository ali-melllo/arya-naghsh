import { siteInfo } from "@/lib/data/nav";

export function ContactInfo() {
  const rows = [
    { label: "تلفن", value: siteInfo.phone },
    { label: "ایمیل", value: siteInfo.email },
    { label: "آدرس", value: siteInfo.address },
    { label: "ساعات کاری", value: siteInfo.hours },
  ];
  return (
    <div className="space-y-6">
      {rows.map((r) => (
        <div key={r.label} className="border-b border-border pb-4 last:border-none">
          <div className="mb-1 text-xs font-bold text-accent">{r.label}</div>
          <div className="text-sm text-ink-soft">{r.value}</div>
        </div>
      ))}
      <p className="text-xs text-ink-soft">
        این اطلاعات تماس نمونه است و پیش از انتشار باید با اطلاعات واقعی مجموعه جایگزین شود.
      </p>
    </div>
  );
}
