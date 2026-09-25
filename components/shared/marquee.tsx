export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden flex items-center relative py-6">
      <div className="absolute left-0 h-36 w-3/4 bg-gradient-to-r dark:from-black from-white z-20 to-transparent"></div>
      <div className="absolute right-0 h-36 w-3/4 bg-gradient-to-l dark:from-black from-white z-20 to-transparent"></div>

      <div className="flex w-max animate-marquee gap-10 rtl:[animation-direction:reverse]">
        {doubled.map((item, i) => (
          <span key={i} className="whitespace-nowrap text-lg font-bold text-ink-soft">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
