"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLens } from "./LensProvider";
import SectionHeading from "./SectionHeading";
import DesignWork from "./DesignWork";
import VideoEdits from "./VideoEdits";
import Projects from "./Projects";

export default function Work() {
  const { lens } = useLens();

  return (
    <section id="work" className="border-b border-line px-6 py-20 md:py-28">
      <div className="mx-auto max-w-wrap">
        <SectionHeading
          eyebrow="Selected work"
          title={lens === "design" ? "Brand & print design" : "Shipped apps & side projects"}
          description={
            lens === "design"
              ? "A sample of brochures, brand identities, and campaign material — swap in real project shots whenever you're ready."
              : "Production apps live on the App Store, plus full-stack projects built end to end."
          }
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={lens}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {lens === "design" ? (
              <>
                <DesignWork />
                <VideoEdits />
              </>
            ) : (
              <Projects />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
