import { NumberTicker } from "@/components/shared/number-ticker";

export function Statistics() {
  return (
    <section className="border-b-2 border-dashed border-border py-16">
      <div className="container grid grid-cols-2 gap-8 sm:grid-cols-4">
        <NumberTicker value={10} suffix="+" label="سال تجربه" />
        <NumberTicker value={500} suffix="+" label="پروژه اجراشده" />
        <NumberTicker value={120} suffix="+" label="مشتری" />
        <NumberTicker value={98} suffix="٪" label="رضایت مشتری" />
      </div>
    </section>
  );
}
