"use client";

import { useEffect, useMemo, useState } from "react";

import dvd from "@/content/dvd.json";
import { playBeep } from "@/lib/sfx";

type Chapter = {
  id: string;
  title: string;
  tagline?: string;
  year?: string;
  tech?: string[];
  highlights?: string[];
  links?: { demo?: string; repo?: string };
};

function safeUrl(url: string | undefined) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") return parsed;
    return null;
  } catch {
    return null;
  }
}

export function DvdScenesScreen() {
  const chapters = useMemo<Chapter[]>(() => {
    const raw = dvd.projects?.chapters ?? [];
    return raw
      .filter((c): c is Chapter => Boolean(c && (c as any).id && (c as any).title))
      .map((c) => ({
        id: String((c as any).id),
        title: String((c as any).title),
        tagline: (c as any).tagline ? String((c as any).tagline) : undefined,
        year: (c as any).year ? String((c as any).year) : undefined,
        tech: Array.isArray((c as any).tech) ? ((c as any).tech as any[]).map(String) : undefined,
        highlights: Array.isArray((c as any).highlights)
          ? ((c as any).highlights as any[]).map(String)
          : undefined,
        links: (c as any).links as any,
      }));
  }, []);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = chapters[selectedIndex];

  useEffect(() => {
    if (chapters.length === 0) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        playBeep({ frequencyHz: 620, durationMs: 28, volume: 0.12 });
        setSelectedIndex((i) => (i - 1 + chapters.length) % chapters.length);
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        playBeep({ frequencyHz: 620, durationMs: 28, volume: 0.12 });
        setSelectedIndex((i) => (i + 1) % chapters.length);
      }

      if (e.key === "Enter") {
        e.preventDefault();
        const demo = safeUrl(selected?.links?.demo);
        const repo = safeUrl(selected?.links?.repo);
        const target = demo ?? repo;

        if (!target) {
          playBeep({ frequencyHz: 360, durationMs: 40, volume: 0.14 });
          return;
        }

        playBeep({ frequencyHz: 980, durationMs: 55, volume: 0.22 });
        window.open(target.toString(), "_blank", "noopener,noreferrer");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [chapters.length, selected?.links?.demo, selected?.links?.repo]);

  if (chapters.length === 0) {
    return (
      <div className="text-sm text-white/70">
        Add projects under <span className="font-mono">projects.chapters</span> in{
        " "}
        <span className="font-mono">src/content/dvd.json</span>.
      </div>
    );
  }

  return (
    <div className="grid h-full grid-cols-2 gap-4">
      <div className="rounded-lg border border-white/10 bg-black/20 p-3">
        <div className="text-[10px] tracking-[0.25em] text-white/60">CHAPTERS</div>
        <div className="mt-3 grid gap-2">
          {chapters.map((c, i) => {
            const active = i === selectedIndex;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  playBeep({ frequencyHz: 620, durationMs: 28, volume: 0.12 });
                  setSelectedIndex(i);
                }}
                className={
                  "w-full rounded-md border px-3 py-2 text-left transition " +
                  (active
                    ? "border-white/40 bg-white/10"
                    : "border-white/10 bg-white/0 hover:border-white/20 hover:bg-white/5")
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[12px] text-white/85">{c.title}</div>
                    {c.tagline ? (
                      <div className="mt-1 text-[11px] text-white/60">
                        {c.tagline}
                      </div>
                    ) : null}
                  </div>
                  {c.year ? (
                    <div className="text-[11px] text-white/50">{c.year}</div>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-black/20 p-4">
        <div className="text-[10px] tracking-[0.25em] text-white/60">DETAILS</div>

        <div className="mt-3">
          <div className="text-base font-semibold text-white/90">
            {selected?.title}
          </div>
          {selected?.tagline ? (
            <div className="mt-1 text-[12px] text-white/65">{selected.tagline}</div>
          ) : null}
        </div>

        {selected?.tech?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {selected.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {selected?.highlights?.length ? (
          <div className="mt-4">
            <div className="text-[10px] tracking-[0.22em] text-white/55">
              HIGHLIGHTS
            </div>
            <ul className="mt-2 grid gap-2 text-[12px] text-white/70">
              {selected.highlights.map((h, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-white/40">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          <LinkPill label="DEMO" href={selected?.links?.demo} />
          <LinkPill label="REPO" href={selected?.links?.repo} />
        </div>

        <div className="mt-4 text-[10px] text-white/55">
          Tip: Press Enter to open Demo (or Repo).
        </div>
      </div>
    </div>
  );
}

function LinkPill({ label, href }: { label: string; href?: string }) {
  const parsed = safeUrl(href);
  const enabled = Boolean(parsed);

  return (
    <div
      className={
        "rounded-full border px-3 py-1 text-[11px] tracking-[0.18em] " +
        (enabled
          ? "border-white/20 bg-white/5 text-white/75"
          : "border-white/10 bg-white/0 text-white/35")
      }
      title={enabled ? parsed!.toString() : "Add a valid https:// link"}
    >
      {label}
    </div>
  );
}
