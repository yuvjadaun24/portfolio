"use client";

import { useEffect, useMemo, useState } from "react";

import dvd from "@/content/dvd.json";
import { playBeep } from "@/lib/sfx";

type TrackGroup = {
  group: string;
  items: string[];
};

export function DvdAudioScreen() {
  const groups = useMemo<TrackGroup[]>(() => {
    const raw = dvd.skills?.tracks ?? [];
    return raw
      .filter((t): t is TrackGroup => Boolean(t && (t as any).group))
      .map((t) => ({
        group: String((t as any).group),
        items: Array.isArray((t as any).items)
          ? ((t as any).items as any[]).map(String)
          : [],
      }));
  }, []);

  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [playingGroupIndex, setPlayingGroupIndex] = useState<number | null>(null);

  const selected = groups[selectedGroupIndex];

  useEffect(() => {
    if (groups.length === 0) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        playBeep({ frequencyHz: 620, durationMs: 28, volume: 0.12 });
        setSelectedGroupIndex((i) => (i - 1 + groups.length) % groups.length);
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        playBeep({ frequencyHz: 620, durationMs: 28, volume: 0.12 });
        setSelectedGroupIndex((i) => (i + 1) % groups.length);
      }

      if (e.key === "Enter") {
        e.preventDefault();
        playBeep({ frequencyHz: 980, durationMs: 55, volume: 0.22 });
        setPlayingGroupIndex((curr) => (curr === selectedGroupIndex ? null : selectedGroupIndex));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [groups.length, selectedGroupIndex]);

  if (groups.length === 0) {
    return (
      <div className="text-sm text-white/70">
        Add skills under <span className="font-mono">skills.tracks</span> in{" "}
        <span className="font-mono">src/content/dvd.json</span>.
      </div>
    );
  }

  return (
    <div className="grid h-full grid-cols-2 gap-4">
      <div className="rounded-lg border border-white/10 bg-black/20 p-3">
        <div className="text-[10px] tracking-[0.25em] text-white/60">TRACKS</div>
        <div className="mt-3 grid gap-2">
          {groups.map((g, i) => {
            const active = i === selectedGroupIndex;
            const playing = i === playingGroupIndex;
            return (
              <button
                key={g.group}
                type="button"
                onClick={() => {
                  playBeep({ frequencyHz: 620, durationMs: 28, volume: 0.12 });
                  setSelectedGroupIndex(i);
                }}
                className={
                  "flex w-full items-center justify-between rounded-md border px-3 py-2 text-left transition " +
                  (active
                    ? "border-white/40 bg-white/10"
                    : "border-white/10 bg-white/0 hover:border-white/20 hover:bg-white/5")
                }
              >
                <div>
                  <div className="text-[12px] text-white/85">{g.group}</div>
                  <div className="mt-1 text-[11px] text-white/55">
                    {g.items.length} items
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-white/55">
                  {playing ? <EqMini /> : null}
                  <span className={active ? "opacity-100" : "opacity-0"}>▶</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 text-[10px] text-white/55">Enter: Play/Pause</div>
      </div>

      <div className="rounded-lg border border-white/10 bg-black/20 p-4">
        <div className="text-[10px] tracking-[0.25em] text-white/60">NOW</div>
        <div className="mt-3 flex items-center justify-between gap-4">
          <div>
            <div className="text-base font-semibold text-white/90">
              {selected?.group}
            </div>
            <div className="mt-1 text-[12px] text-white/60">
              {playingGroupIndex === selectedGroupIndex ? "PLAYING" : "STOPPED"}
            </div>
          </div>
          {playingGroupIndex === selectedGroupIndex ? (
            <div className="rounded-md border border-white/15 bg-white/5 px-3 py-2 text-[11px] text-white/75">
              EQ
            </div>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {(selected?.items ?? []).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-white/10 bg-black/30 p-3 text-[11px] text-white/60">
          Later we can attach real audio clips per track group.
        </div>
      </div>
    </div>
  );
}

function EqMini() {
  return (
    <div className="flex h-3 items-end gap-[2px]">
      <div className="h-2 w-[3px] bg-white/45 animate-[eq_650ms_ease-in-out_infinite]" />
      <div className="h-3 w-[3px] bg-white/45 animate-[eq_520ms_ease-in-out_infinite]" />
      <div className="h-1 w-[3px] bg-white/45 animate-[eq_430ms_ease-in-out_infinite]" />
    </div>
  );
}
