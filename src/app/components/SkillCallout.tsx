import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

type ScrambleChar = { ch: string; resolved: boolean };

type ScrambleOptions = {
  durationMs?: number;
  charset?: string;
};

export function useScrambleText(targetText: string, options: ScrambleOptions = {}) {
  const durationMs = options.durationMs ?? 800;
  const charset =
    options.charset ??
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$@!%&*+-_=<>?/\\[]{}()';

  const target = useMemo(() => targetText ?? '', [targetText]);
  const [chars, setChars] = useState<ScrambleChar[]>(() =>
    Array.from(target).map((ch) => ({ ch, resolved: true })),
  );

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const targetChars = Array.from(target);
    const len = targetChars.length;

    if (len === 0) {
      setChars([]);
      return;
    }

    const start = performance.now();

    const randomChar = () => charset[Math.floor(Math.random() * charset.length)] ?? 'X';

    const tick = (now: number) => {
      const t = now - start;
      const progress = clamp(t / durationMs, 0, 1);
      const revealCount = Math.floor(progress * len);

      setChars(
        targetChars.map((real, i) => {
          if (real === ' ') return { ch: ' ', resolved: true };
          if (i < revealCount) return { ch: real, resolved: true };
          return { ch: randomChar(), resolved: false };
        }),
      );

      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
      else setChars(targetChars.map((ch) => ({ ch, resolved: true })));
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, durationMs, charset]);

  return { chars };
}

type SkillCalloutProps = {
  view: number;
  center: { x: number; y: number };
  chartRadius: number;
  anchor: { x: number; y: number };
  skillId: string;
  skillName: string;
  summary: string;
};

function SmartConnector({
  view,
  start,
  end,
  isRightSide,
}: {
  view: number;
  start: { x: number; y: number };
  end: { x: number; y: number };
  isRightSide: boolean;
}) {
  const margin = 10;
  const dir = isRightSide ? 1 : -1;
  const stepOut = 110;

  let elbowX = clamp(start.x + dir * stepOut, margin, view - margin);

  // Ensure elbow stays between start and end so routing stays tidy.
  if (isRightSide) elbowX = Math.min(elbowX, end.x - 18);
  else elbowX = Math.max(elbowX, end.x + 18);

  const d = `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} L ${elbowX.toFixed(2)} ${start.y.toFixed(2)} L ${elbowX.toFixed(2)} ${end.y.toFixed(2)} L ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${view} ${view}`} className="absolute inset-0 block">
      <motion.path
        d={d}
        fill="none"
        stroke="rgb(134 239 172)"
        strokeWidth={1}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.12 } }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ filter: 'drop-shadow(0 0 10px rgba(134,239,172,0.30))' }}
      />

      <motion.circle
        cx={elbowX}
        cy={start.y}
        r={2.5}
        fill="rgb(134 239 172)"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.12 } }}
        transition={{ delay: 0.18, duration: 0.18 }}
        style={{ filter: 'drop-shadow(0 0 12px rgba(134,239,172,0.45))' }}
      />
    </svg>
  );
}

function computeLayout(
  view: number,
  center: { x: number; y: number },
  chartRadius: number,
  anchor: { x: number; y: number },
) {
  const cardW = 210;
  const cardH = 120;
  const margin = 10;

  const dx = anchor.x - center.x;
  const isRightSide = dx >= 0;

  // Fixed columns outside the chart radius; keeps callouts neatly aligned.
  const columnPad = 70;
  const rightColumnX = center.x + chartRadius + columnPad;
  const leftColumnX = center.x - chartRadius - columnPad - cardW;

  const cardX = clamp(isRightSide ? rightColumnX : leftColumnX, margin, view - cardW - margin);

  // Align card vertically with the point (anchor y), but clamp to view.
  const cardY = clamp(anchor.y - 22, margin, view - cardH - margin);

  // Connector attaches to the nearest card edge.
  const endX = isRightSide ? cardX : cardX + cardW;
  const endY = clamp(anchor.y, cardY + 18, cardY + cardH - 18);

  return {
    card: { x: cardX, y: cardY, w: cardW, h: cardH },
    connector: {
      start: { x: anchor.x, y: anchor.y },
      end: { x: endX, y: endY },
    },
    isRightSide,
  };
}

export function SkillCallout({ view, center, chartRadius, anchor, skillId, skillName, summary }: SkillCalloutProps) {
  const layout = useMemo(
    () => computeLayout(view, center, chartRadius, anchor),
    [view, center.x, center.y, chartRadius, anchor.x, anchor.y],
  );
  const { chars } = useScrambleText(summary, { durationMs: 800 });

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{ transformStyle: 'preserve-3d' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.12 } }}
      aria-hidden="true"
    >
      {/* Connector line behind labels */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(35px)', transformStyle: 'preserve-3d' }}>
        <SmartConnector
          view={view}
          start={layout.connector.start}
          end={layout.connector.end}
          isRightSide={layout.isRightSide}
        />
      </div>

      {/* Intel card in front */}
      <motion.div
        className="absolute holo-panel callout-card pointer-events-none rounded-md"
        style={{
          transform: 'translateZ(85px)',
          left: `${(layout.card.x / view) * 100}%`,
          top: `${(layout.card.y / view) * 100}%`,
          width: `${(layout.card.w / view) * 100}%`,
          height: `${(layout.card.h / view) * 100}%`,
          boxShadow: '0 0 28px rgba(134,239,172,0.10)',
        }}
        initial={{ opacity: 0, scale: 0.985, y: 4 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 2, transition: { duration: 0.12 } }}
        transition={{ delay: 0.18, duration: 0.18, ease: 'easeOut' }}
      >
        {/* Corner brackets */}
        <span className="callout-corner callout-tl" />
        <span className="callout-corner callout-tr" />
        <span className="callout-corner callout-bl" />
        <span className="callout-corner callout-br" />

        <div className="px-3 py-2">
          <motion.div
            className="dvd-body text-white/85"
            style={{ fontSize: 11, letterSpacing: '0.10em' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.35, 1] }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.26 }}
          >
            {`>> SKILL_ID: ${skillId} (${skillName.toUpperCase()})`}
            <span className="terminal-cursor" aria-hidden="true" />
          </motion.div>

          <div
            className="mt-2 dvd-body whitespace-pre-wrap"
            style={{ fontSize: 11, lineHeight: 1.55, letterSpacing: '0.02em' }}
          >
            {chars.length ? (
              chars.map((c, i) => (
                <span key={i} className={c.resolved ? 'text-white/90' : 'text-green-200/40'}>
                  {c.ch}
                </span>
              ))
            ) : (
              <span className="text-white/70"> </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
