export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-11 max-w-xl">
      <h2 className="mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle && <p className="text-ink-soft">{subtitle}</p>}
    </div>
  );
}
