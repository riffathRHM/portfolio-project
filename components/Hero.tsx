"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { useLens } from "./LensProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const { lens, setLens } = useLens();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line px-6 pb-20 pt-16 md:pb-28 md:pt-24"
    >
      <div className="mx-auto max-w-wrap">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-6 font-mono text-[12px] uppercase tracking-[0.25em] text-muted"
        >
          Portfolio — {String(new Date().getFullYear())}
        </motion.p>

        <h1 className="text-balance font-display text-[13vw] leading-[0.92] tracking-tight sm:text-[9vw] md:text-[6.4vw]">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="block font-mono text-[0.32em] font-medium uppercase tracking-[0.08em] text-muted"
          >
            Mohamed
          </motion.span>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="italic"
          >
            Riffath
          </motion.span>
        </h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => setLens("design")}
            className={`rounded-full border px-4 py-2 font-mono text-[13px] transition-colors ${
              lens === "design"
                ? "border-accent bg-accent text-accent-ink"
                : "border-line text-muted hover:text-ink"
            }`}
          >
            {profile.taglineDesign}
          </button>
          <span className="font-display text-lg text-muted">&</span>
          <button
            onClick={() => setLens("code")}
            className={`rounded-full border px-4 py-2 font-mono text-[13px] transition-colors ${
              lens === "code"
                ? "border-accent bg-accent text-accent-ink"
                : "border-line text-muted hover:text-ink"
            }`}
          >
            {profile.taglineCode}
          </button>
        </motion.div>

        <motion.p
          key={lens}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-7 max-w-2xl text-balance font-body text-lg leading-relaxed text-muted md:text-xl"
        >
          {lens === "design" ? profile.summaryDesign : profile.summaryCode}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-bg transition-transform hover:-translate-y-0.5"
          >
            See the work
            <ArrowDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-colors hover:border-accent"
          >
            Get in touch
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={lens === "design" ? "/resume-design.pdf" : "/resume-code.pdf"}
            className="font-mono text-[13px] uppercase tracking-wider text-muted underline-swipe"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl">{s.value}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
