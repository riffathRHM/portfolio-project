export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
