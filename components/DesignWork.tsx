import Image from "next/image";
import { designWork, profile } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function DesignWork() {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {designWork.map((item, i) => (
          <div
            key={item.title}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface2"
          >
            {/* Design Image */}
            <Image
              src={`/images/design-${i + 1}.jpg`}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 50vw,
                     33vw"
              priority={i < 3}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-display text-lg text-bg">
                {item.title}
              </p>

              <p className="font-mono text-[11px] uppercase tracking-wider text-bg/70">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-8 flex items-center gap-6">
  <a
    href={profile.fiverr}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-muted transition-colors hover:text-ink"
  >
    See more on Fiverr
    <ExternalLink
      size={14}
      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </a>

  <a
    href={profile.miloAnimates}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-muted transition-colors hover:text-ink"
  >
    Milo Animates
    <ExternalLink
      size={14}
      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </a>
</div>
    </div>
  );
}