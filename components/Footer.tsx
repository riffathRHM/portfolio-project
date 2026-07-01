import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-wrap flex-col items-center justify-between gap-4 font-mono text-[12px] uppercase tracking-wider text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="underline-swipe">
          Back to top
        </a>
      </div>
    </footer>
  );
}
