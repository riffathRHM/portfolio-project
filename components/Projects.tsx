import { appProjects, sideProjects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2">
        {appProjects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between rounded-2xl border border-line p-6 transition-colors hover:border-accent"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl">{p.name}</h3>
                <ExternalLink
                  size={16}
                  className="mt-1 flex-none text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <p className="mt-2 text-muted">{p.description}</p>
              <ul className="mt-4 space-y-1.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px]"
                >
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <h3 className="mb-6 mt-14 font-mono text-[12px] uppercase tracking-wider text-muted">
        Side projects
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        {sideProjects.map((p) => (
          <div key={p.name} className="rounded-2xl border border-line p-6">
            <h4 className="font-display text-xl">{p.name}</h4>
            <ul className="mt-3 space-y-1.5">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px]"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-wider text-muted transition-colors hover:text-accent"
                >
                  <Github size={13} />
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
