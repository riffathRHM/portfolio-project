import { Mail, Phone, Github, ExternalLink } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: ExternalLink, label: "Fiverr — qwerty_works", href: profile.fiverr },
  { icon: Github, label: "GitHub — riffathRHM", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-wrap">
        <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.25em] text-accent">
          Contact
        </p>
        <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          Have a brief, or a build?
          <br />
          <span className="italic">Let&apos;s talk.</span>
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-line p-5 transition-colors hover:border-accent"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                <l.icon size={16} />
              </span>
              <span className="font-mono text-sm">{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
