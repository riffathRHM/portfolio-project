"use client";

import { motion, AnimatePresence } from "framer-motion";
import { experienceDesign, experienceCode } from "@/lib/data";
import { useLens } from "./LensProvider";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { lens } = useLens();
  const items = lens === "design" ? experienceDesign : experienceCode;

  return (
    <section id="experience" className="border-b border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-wrap">
        <SectionHeading eyebrow="Experience" title="Where the work happened" />

        <AnimatePresence mode="wait">
          <motion.div
            key={lens}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="space-y-0"
          >
            {items.map((item) => (
              <div
                key={item.role + item.org}
                className="grid gap-4 border-t border-line py-8 md:grid-cols-[220px_1fr]"
              >
                <div>
                  <p className="font-display text-xl">{item.role}</p>
                  <p className="mt-1 text-muted">{item.org}</p>
                  <p className="mt-2 font-mono text-[12px] uppercase tracking-wider text-accent">
                    {item.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3 text-muted">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
