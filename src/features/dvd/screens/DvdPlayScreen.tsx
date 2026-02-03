"use client";

import dvd from "@/content/dvd.json";

export function DvdPlayScreen() {
  return (
    <div className="h-full">
      <div className="grid gap-3 text-sm text-white/75">
        {(dvd.about?.subtitleLines ?? []).map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-4">
        <div className="text-[10px] tracking-[0.25em] text-white/60">TIP</div>
        <div className="mt-2 text-[12px] text-white/70">
          Update your content in <span className="font-mono">src/content/dvd.json</span>.
        </div>
      </div>
    </div>
  );
}
