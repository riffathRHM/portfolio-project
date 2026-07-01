"use client";

import * as React from "react";

type Lens = "design" | "code";

interface LensContextValue {
  lens: Lens;
  setLens: (lens: Lens) => void;
}

const LensContext = React.createContext<LensContextValue | undefined>(undefined);

export function LensProvider({ children }: { children: React.ReactNode }) {
  const [lens, setLensState] = React.useState<Lens>("design");

  const setLens = React.useCallback((next: Lens) => {
    setLensState(next);
    if (typeof document !== "undefined") {
      document.documentElement.style.setProperty(
        "--accent",
        next === "design" ? "var(--accent-design)" : "var(--accent-code)"
      );
    }
  }, []);

  React.useEffect(() => {
    setLens("design");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LensContext.Provider value={{ lens, setLens }}>{children}</LensContext.Provider>
  );
}

export function useLens() {
  const ctx = React.useContext(LensContext);
  if (!ctx) throw new Error("useLens must be used within LensProvider");
  return ctx;
}
