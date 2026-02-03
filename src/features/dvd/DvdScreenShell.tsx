"use client";

import { playBeep } from "@/lib/sfx";

export function DvdScreenShell({
  label,
  title,
  onBack,
  footerLeft,
  footerRight,
  children,
}: {
  label: string;
  title?: string;
  onBack: () => void;
  footerLeft?: string;
  footerRight?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full w-full p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] tracking-[0.35em] text-white/70">
            {label}
          </div>
          {title ? (
            <div className="mt-2 text-lg font-semibold text-white/90">
              {title}
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => {
            playBeep({ frequencyHz: 760, durationMs: 34, volume: 0.14 });
            onBack();
          }}
          className="shrink-0 rounded-md border border-white/15 bg-white/0 px-3 py-2 text-[10px] tracking-[0.22em] text-white/75 hover:border-white/30 hover:bg-white/5"
        >
          BACK
        </button>
      </div>

      <div className="mt-6 h-[calc(100%-96px)] rounded-xl border border-white/10 bg-black/30 p-5">
        {children}
      </div>

      <div className="pointer-events-none absolute bottom-6 left-8 right-8 flex items-center justify-between text-[10px] text-white/55">
        <div>{footerLeft ?? "Esc Back"}</div>
        <div>{footerRight ?? ""}</div>
      </div>
    </div>
  );
}
