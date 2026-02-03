"use client";

import { useEffect, useMemo, useState } from "react";

import dvd from "@/content/dvd.json";
import type { MenuId } from "@/features/dvd/types";
import { playBeep } from "@/lib/sfx";

type MenuItem = {
  id: MenuId;
  label: string;
  subtitle: string;
};

export function DvdMainMenu({
  onSelect,
}: {
  onSelect?: (id: MenuId) => void;
}) {
  const items = useMemo<MenuItem[]>(() => {
    const menu = dvd.menu?.[0];
    const raw = menu?.items ?? [];
    return raw
      .filter((x): x is MenuItem =>
        Boolean(x && (x as any).id && (x as any).label && (x as any).subtitle)
      )
      .map((x) => ({
        id: x.id as MenuId,
        label: x.label,
        subtitle: x.subtitle,
      }));
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (items.length === 0) return;

      if (e.key === "ArrowUp") {
        e.preventDefault();
        playBeep({ frequencyHz: 620, durationMs: 28, volume: 0.12 });
        setSelectedIndex((i) => (i - 1 + items.length) % items.length);
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        playBeep({ frequencyHz: 620, durationMs: 28, volume: 0.12 });
        setSelectedIndex((i) => (i + 1) % items.length);
      }

      if (e.key === "Enter") {
        e.preventDefault();
        playBeep({ frequencyHz: 980, durationMs: 55, volume: 0.22 });
        const selected = items[selectedIndex];
        if (selected) onSelect?.(selected.id);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [items, onSelect, selectedIndex]);

  const selected = items[selectedIndex];

  return (
    <div className="relative h-full w-full p-8">
      <div className="text-[10px] tracking-[0.35em] text-white/70">MAIN MENU</div>

      <div className="mt-6 grid gap-2">
        {items.map((item, i) => {
          const active = i === selectedIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                playBeep({ frequencyHz: 980, durationMs: 55, volume: 0.22 });
                setSelectedIndex(i);
                onSelect?.(item.id);
              }}
              className={
                "group flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left transition " +
                (active
                  ? "border-white/50 bg-white/10"
                  : "border-white/15 bg-white/0 hover:border-white/30 hover:bg-white/5")
              }
            >
              <div>
                <div className="text-sm text-white/90">{item.label}</div>
                <div className="mt-1 text-[11px] text-white/60">{item.subtitle}</div>
              </div>

              <div className={"text-xs text-white/70 " + (active ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>
                ▶
              </div>
            </button>
          );
        })}
      </div>

      <div className="pointer-events-none absolute bottom-6 left-8 right-8 flex items-center justify-between text-[10px] text-white/55">
        <div>↑ ↓ Navigate</div>
        <div>Enter Select</div>
      </div>

      {selected ? (
        <div className="mt-6 rounded-lg border border-white/10 bg-black/30 p-3">
          <div className="text-[10px] tracking-[0.25em] text-white/60">HIGHLIGHT</div>
          <div className="mt-1 font-mono text-[11px] text-white/75">{selected.label} — {selected.subtitle}</div>
        </div>
      ) : null}
    </div>
  );
}
