import { education, languages, certifications } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-b border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-wrap">
        <SectionHeading
          eyebrow="About"
          title="Two crafts, one attention to detail."
          description="Design work is where I learned to read a brief closely and deliver something a client didn't have to fix. Engineering is where I learned to ship things that hold up in production. Both come from the same habit: care about the details nobody asked you to care about."
        />

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-mono text-[12px] uppercase tracking-wider text-muted">
              Education
            </h3>
            <p className="font-display text-xl">{education.degree}</p>
            <p className="mt-1 text-muted">{education.school}</p>
            <p className="mt-1 text-sm text-muted">{education.period}</p>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-[12px] uppercase tracking-wider text-muted">
              Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="text-muted">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-mono text-[12px] uppercase tracking-wider text-muted">
              Languages
            </h3>
            <ul className="space-y-2">
              {languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-3">
                  <span>{l.name}</span>
                  <span className="text-right text-sm text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
