"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

import { CrtFrame } from "@/components/crt/CrtFrame";
import { DvdLoader } from "@/features/dvd/DvdLoader";
import { DvdMainMenu } from "@/features/dvd/DvdMainMenu";
import { DvdSectionView } from "@/features/dvd/DvdSectionView";
import type { MenuId } from "@/features/dvd/types";

type Phase = "LOADING" | "READY";

type View = { kind: "MENU" } | { kind: "SECTION"; id: MenuId };

export function HomeClient() {
  const [phase, setPhase] = useState<Phase>("LOADING");
  const [view, setView] = useState<View>({ kind: "MENU" });
  const [flickerPulse, setFlickerPulse] = useState(0);

  const onCornerHit = useCallback(() => {
    setFlickerPulse((n) => n + 1);
  }, []);

  const onBackToMenu = useCallback(() => {
    setView({ kind: "MENU" });
  }, []);

  useEffect(() => {
    if (phase !== "READY") return;
    if (view.kind !== "SECTION") return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onBackToMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onBackToMenu, phase, view.kind]);

  return (
    <main className="min-h-dvh w-full bg-black text-white grid place-items-center p-6">
      <CrtFrame flickerPulse={flickerPulse} isLoading={phase === "LOADING"}>
        <AnimatePresence mode="wait">
          {phase === "LOADING" ? (
            <motion.div
              key="loader"
              className="h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <DvdLoader
                onCornerHit={onCornerHit}
                onDone={() => {
                  setPhase("READY");
                  setView({ kind: "MENU" });
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key={view.kind === "MENU" ? "menu" : `section:${view.id}`}
              className="h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {view.kind === "MENU" ? (
                <DvdMainMenu
                  onSelect={(id) => {
                    setView({ kind: "SECTION", id });
                  }}
                />
              ) : (
                <DvdSectionView section={view.id} onBack={onBackToMenu} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </CrtFrame>
    </main>
  );
}
