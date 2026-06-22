export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-zinc-400">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-12 bg-rose-400/40" />
    </div>
  );
}
