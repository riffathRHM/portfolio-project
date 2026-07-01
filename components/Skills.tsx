"use client";

import { motion, AnimatePresence } from "framer-motion";
import { skillsDesign, skillsCode } from "@/lib/data";
import { useLens } from "./LensProvider";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const { lens } = useLens();

  return (
    <section id="skills" className="border-b border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-wrap">
        <SectionHeading
          eyebrow="Skills"
          title={lens === "design" ? "The design toolkit" : "The engineering toolkit"}
          description={
            lens === "design"
              ? "Everything that goes into taking a brand from a client's brief to something print-ready."
              : "Languages, frameworks, and tools used to ship production mobile and full-stack apps."
          }
        />

        <AnimatePresence mode="wait">
          {lens === "design" ? (
            <motion.ul
              key="design"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid gap-x-8 gap-y-4 sm:grid-cols-2"
            >
              {skillsDesign.map((s, i) => (
                <li key={s} className="flex items-start gap-3 border-t border-line pt-4">
                  <span className="mt-1 font-mono text-[11px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </motion.ul>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {Object.entries(skillsCode).map(([category, items]) => (
                <div key={category} className="border-t border-line pt-4">
                  <h3 className="mb-3 font-mono text-[12px] uppercase tracking-wider text-muted">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[12px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
