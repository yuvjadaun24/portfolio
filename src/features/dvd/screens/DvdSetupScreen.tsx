"use client";

import { useEffect, useMemo, useState } from "react";

import dvd from "@/content/dvd.json";
import { playBeep } from "@/lib/sfx";

type ActionItem =
  | { id: "COPY_EMAIL"; label: string; subtitle: string }
  | { id: "OPEN_RESUME"; label: string; subtitle: string; href: string }
  | { id: "OPEN_LINK"; label: string; subtitle: string; href: string };

function safeUrl(url: string | undefined) {
  if (!url) return null;
  try {
    const parsed = new URL(url, window.location.origin);
    if (parsed.protocol === "http:" || parsed.protocol === "https:" || parsed.protocol === "mailto:") {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(ta);
  return ok;
}

export function DvdSetupScreen() {
  const email = dvd.contact?.email ?? "";

  const items = useMemo<ActionItem[]>(() => {
    const base: ActionItem[] = [];

    base.push({
      id: "COPY_EMAIL",
      label: "COPY EMAIL",
      subtitle: email ? email : "(add your email in src/content/dvd.json)",
    });

    const resumeHref = dvd.contact?.resume?.href;
    if (resumeHref) {
      base.push({
        id: "OPEN_RESUME",
        label: dvd.contact?.resume?.label ?? "RESUME",
        subtitle: "Open resume PDF",
        href: resumeHref,
      });
    }

    for (const link of dvd.contact?.links ?? []) {
      if (!link?.href) continue;
      base.push({
        id: "OPEN_LINK",
        label: link.label,
        subtitle: link.href,
        href: link.href,
      });
    }

    return base;
  }, [email]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const onKeyDown = (e: KeyboardEvent) => {
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
        void runAction(items[selectedIndex]);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [items, selectedIndex]);

  async function runAction(item: ActionItem | undefined) {
    if (!item) return;

    if (item.id === "COPY_EMAIL") {
      if (!email) {
        playBeep({ frequencyHz: 360, durationMs: 40, volume: 0.14 });
        setStatus("Set your email in src/content/dvd.json first.");
        return;
      }

      playBeep({ frequencyHz: 980, durationMs: 55, volume: 0.22 });
      const ok = await copyToClipboard(email);
      setStatus(ok ? "Email copied." : "Copy failed.");
      return;
    }

    if (item.id === "OPEN_RESUME" || item.id === "OPEN_LINK") {
      const target = safeUrl(item.href);
      if (!target) {
        playBeep({ frequencyHz: 360, durationMs: 40, volume: 0.14 });
        setStatus("Add a valid link (https:// or mailto:)." );
        return;
      }

      playBeep({ frequencyHz: 980, durationMs: 55, volume: 0.22 });
      window.open(target.toString(), "_blank", "noopener,noreferrer");
      setStatus("Opened link." );
    }
  }

  if (items.length === 0) {
    return (
      <div className="text-sm text-white/70">
        Add contact fields in <span className="font-mono">src/content/dvd.json</span>.
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="grid gap-2">
        {items.map((item, idx) => {
          const active = idx === selectedIndex;
          return (
            <button
              key={item.label + idx}
              type="button"
              onClick={() => {
                playBeep({ frequencyHz: 620, durationMs: 28, volume: 0.12 });
                setSelectedIndex(idx);
              }}
              onDoubleClick={() => void runAction(item)}
              className={
                "flex w-full items-center justify-between gap-4 rounded-lg border px-4 py-3 text-left transition " +
                (active
                  ? "border-white/40 bg-white/10"
                  : "border-white/10 bg-white/0 hover:border-white/20 hover:bg-white/5")
              }
            >
              <div>
                <div className="text-[12px] tracking-[0.22em] text-white/80">
                  {item.label}
                </div>
                <div className="mt-1 text-[11px] text-white/55">
                  {item.subtitle}
                </div>
              </div>
              <div className="text-xs text-white/60">▶</div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg border border-white/10 bg-black/20 p-3">
        <div className="text-[10px] tracking-[0.25em] text-white/60">STATUS</div>
        <div className="mt-2 text-[12px] text-white/70">
          {status || "↑ ↓ Select • Enter Run"}
        </div>
      </div>
    </div>
  );
}
