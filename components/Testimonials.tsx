import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="reviews" className="border-b border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-wrap">
        <SectionHeading
          eyebrow="Client reviews"
          title="5.0 stars, 20+ Fiverr reviews"
          description="A few notes from clients across the UK, US, India, Germany, and the UAE."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-line p-6"
            >
              <div>
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="text-balance leading-relaxed text-ink">
                  “{t.text}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-[12px] uppercase tracking-wider text-muted">
                  {t.name} · {t.location}
                </span>
                <span className="font-mono text-[11px] text-muted">{t.gig}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
