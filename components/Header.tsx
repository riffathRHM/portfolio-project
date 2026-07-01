"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLens } from "./LensProvider";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const { theme, setTheme, systemTheme } = useTheme();
  const { lens, setLens } = useLens();
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight"
        >
          M. Riffath
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="underline-swipe font-mono text-[13px] uppercase tracking-wider text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Lens toggle */}
          <div className="hidden items-center rounded-full border border-line p-1 text-[11px] font-mono uppercase tracking-wider sm:flex">
            <button
              onClick={() => setLens("design")}
              className={`rounded-full px-3 py-1 transition-colors ${
                lens === "design" ? "bg-accent text-accent-ink" : "text-muted"
              }`}
              aria-pressed={lens === "design"}
            >
              Design
            </button>
            <button
              onClick={() => setLens("code")}
              className={`rounded-full px-3 py-1 transition-colors ${
                lens === "code" ? "bg-accent text-accent-ink" : "text-muted"
              }`}
              aria-pressed={lens === "code"}
            >
              Code
            </button>
          </div>

          {/* Theme toggle */}
          <button
            aria-label="Toggle dark mode"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent"
          >
            {mounted && currentTheme === "dark" ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm uppercase tracking-wider text-muted"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => setLens("design")}
              className={`flex-1 rounded-full border border-line py-2 text-[11px] font-mono uppercase tracking-wider ${
                lens === "design" ? "bg-accent text-accent-ink" : "text-muted"
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setLens("code")}
              className={`flex-1 rounded-full border border-line py-2 text-[11px] font-mono uppercase tracking-wider ${
                lens === "code" ? "bg-accent text-accent-ink" : "text-muted"
              }`}
            >
              Code
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
