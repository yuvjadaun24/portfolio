import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { projects, caseStudies } from '../../data/portfolio-data';
import { useSound } from '../../hooks/useSound';

/* ================================================================
   MISSION SELECT — "The Tactical Stream"
   A full-screen horizontal 3D carousel with data-slate cards,
   X-ray wireframe reveal, and declassified case-study deep-dive.
   ================================================================ */

// ---- helpers ----
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// Responsive card sizing
function useCardSize() {
  const [size, setSize] = useState(() => computeCardSize());
  useEffect(() => {
    const onResize = () => setSize(computeCardSize());
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return size;
}

function computeCardSize() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isMobile = vw < 768;

  if (isMobile) {
    const w = Math.min(vw * 0.85, 400);
    return { activeW: w, activeH: w * 0.62, inactiveW: w * 0.7, inactiveH: w * 0.62 * 0.7, gap: w * 0.55, isMobile: true };
  }

  // Desktop / tablet — scale with viewport but cap at sensible ranges
  const w = clamp(vw * 0.32, 320, 560);
  const h = clamp(vh * 0.42, 200, 360);
  const smallW = w * 0.72;
  const smallH = h * 0.72;
  const gap = clamp(vw * 0.28, 260, 440);

  return { activeW: w, activeH: h, inactiveW: smallW, inactiveH: smallH, gap, isMobile: false };
}

// Typewriter-style text reveal
function useTypewriter(text: string, active: boolean, charMs = 28) {
  const [out, setOut] = useState('');
  useEffect(() => {
    if (!active) { setOut(''); return; }
    let i = 0;
    setOut('');
    const t = window.setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) window.clearInterval(t);
    }, charMs);
    return () => window.clearInterval(t);
  }, [text, active, charMs]);
  return out;
}

// Redacted text that un-redacts on reveal
function RedactedText({ text, revealed, className, style }: {
  text: string; revealed: boolean; className?: string; style?: React.CSSProperties;
}) {
  const typed = useTypewriter(text, revealed, 18);
  return (
    <span className={className} style={style}>
      {revealed ? typed : (
        <span style={{ background: 'rgba(0,224,255,0.12)', color: 'transparent', userSelect: 'none' }}>
          {text.replace(/[^\s]/g, '█')}
        </span>
      )}
    </span>
  );
}

// Slide-projector "thock" sound
function useSlideSound() {
  const ctxRef = useRef<AudioContext | null>(null);
  return useCallback(() => {
    try {
      if (!ctxRef.current) ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const ctx = ctxRef.current;
      const now = ctx.currentTime;
      // noise burst + low resonant thump
      const bufSize = ctx.sampleRate * 0.06;
      const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufSize);
      const noise = ctx.createBufferSource();
      noise.buffer = buf;
      const nGain = ctx.createGain();
      nGain.gain.setValueAtTime(0.12, now);
      nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      noise.connect(nGain);
      nGain.connect(ctx.destination);
      noise.start(now);
      noise.stop(now + 0.07);

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 120;
      const oGain = ctx.createGain();
      oGain.gain.setValueAtTime(0.15, now);
      oGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(oGain);
      oGain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.14);
    } catch { /* audio unavailable */ }
  }, []);
}

// ---- Merged mission data ----
interface Mission {
  id: string;
  codename: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  status: string;
  clearance: string;
  // Case study phases (optional – some missions may not have a linked study)
  intel?: { challenge: string; description: string };
  schematics?: { solution: string };
  execution?: { result: string };
}

function buildMissions(): Mission[] {
  return projects.map((p, i) => {
    const cs = caseStudies[i]; // link by index; may be undefined
    return {
      id: p.id,
      codename: `MISSION-${p.id}`,
      title: p.title,
      description: p.description,
      tech: p.tech,
      year: p.year,
      status: p.year.includes('PRESENT') ? 'ACTIVE' : 'DEPLOYED',
      clearance: i === 0 ? 'TOP SECRET' : i === 1 ? 'SECRET' : 'CLASSIFIED',
      intel: cs ? { challenge: cs.challenge, description: cs.description } : undefined,
      schematics: cs ? { solution: cs.solution } : undefined,
      execution: cs ? { result: cs.result } : undefined,
    };
  });
}

// ---- Ambient ticker overlay (background flavour) ----
function TickerBackground({ seed }: { seed: number }) {
  const lines = useMemo(() => {
    let s = seed * 1337;
    const next = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0xffffffff; };
    return Array.from({ length: 18 }, () => {
      const chars = Array.from({ length: 40 }, () =>
        next() > 0.6
          ? String.fromCharCode(48 + Math.floor(next() * 10))
          : next() > 0.3
            ? String.fromCharCode(65 + Math.floor(next() * 26))
            : ' '
      ).join('');
      return { text: chars, y: Math.floor(next() * 100), speed: 12 + next() * 20, delay: next() * 8 };
    });
  }, [seed]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {lines.map((l, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 dvd-body whitespace-nowrap"
          style={{
            top: `${l.y}%`,
            fontSize: 10,
            color: 'rgba(0,224,255,0.04)',
            letterSpacing: '0.2em',
            animation: `ticker-scroll ${l.speed}s linear ${l.delay}s infinite`,
          }}
        >
          {l.text}
        </div>
      ))}
    </div>
  );
}

// ===============================================================
//  DATA SLATE CARD — the 3D holographic project card
// ===============================================================
function DataSlate({
  mission,
  position,
  onClick,
  onHoverStart,
  cardSize,
}: {
  mission: Mission;
  position: number;
  onClick: () => void;
  onHoverStart: () => void;
  cardSize: ReturnType<typeof useCardSize>;
}) {
  const [hovered, setHovered] = useState(false);
  const scanY = useMotionValue(0);

  // Scan-bar animation while hovered
  useEffect(() => {
    if (!hovered) { scanY.set(0); return; }
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = ((now - start) / 2200) % 1; // 2.2s loop
      scanY.set(t * 100);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hovered, scanY]);

  const scanTop = useTransform(scanY, (v) => `${v}%`);

  const isCenter = Math.abs(position) < 0.4;
  const absPos = Math.abs(position);
  const { activeW, activeH, inactiveW, inactiveH, gap, isMobile } = cardSize;

  return (
    <motion.div
      className="absolute flex-shrink-0 cursor-pointer"
      style={{
        width: isCenter ? activeW : inactiveW,
        height: isCenter ? activeH : inactiveH,
        transformStyle: 'preserve-3d',
      }}
      animate={
        isMobile
          ? {
              y: position * (activeH * 0.55),
              x: 0,
              z: isCenter ? 0 : -100,
              rotateX: position * 8,
              rotateY: 0,
              scale: isCenter ? 1 : 0.82,
              opacity: absPos > 1.6 ? 0 : isCenter ? 1 : 0.45,
            }
          : {
              x: position * gap,
              z: isCenter ? 0 : -180,
              rotateY: position * -12,
              scale: isCenter ? 1 : 0.82,
              opacity: absPos > 1.6 ? 0 : isCenter ? 1 : 0.55,
            }
      }
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      onClick={onClick}
      onHoverStart={() => { setHovered(true); onHoverStart(); }}
      onHoverEnd={() => setHovered(false)}
      whileHover={isCenter ? { scale: 1.03 } : {}}
    >
      {/* Glass card */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(0,20,40,0.75) 0%, rgba(0,12,24,0.82) 100%)',
          border: `1px solid ${isCenter ? 'rgba(0,224,255,0.35)' : 'rgba(0,224,255,0.12)'}`,
          boxShadow: isCenter
            ? '0 0 40px rgba(0,224,255,0.08), inset 0 0 30px rgba(0,224,255,0.03)'
            : 'inset 0 0 20px rgba(0,0,0,0.4)',
          backdropFilter: 'blur(6px)',
        }}
      >
        {/* Wireframe layer (bottom — revealed by X-ray) */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(rgba(0,224,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,224,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            opacity: 0.7,
          }}
        >
          {/* Simulated wireframe boxes */}
          <div className="absolute" style={{ top: '15%', left: '8%', width: '40%', height: '18%', border: '1px dashed rgba(0,224,255,0.18)' }} />
          <div className="absolute" style={{ top: '15%', right: '8%', width: '35%', height: '55%', border: '1px dashed rgba(0,224,255,0.18)' }} />
          <div className="absolute" style={{ top: '40%', left: '8%', width: '40%', height: '10%', border: '1px dashed rgba(0,224,255,0.14)' }} />
          <div className="absolute" style={{ top: '55%', left: '8%', width: '28%', height: '10%', border: '1px dashed rgba(0,224,255,0.14)' }} />
          <div className="absolute" style={{ top: '75%', left: '8%', width: '84%', height: '6%', border: '1px dashed rgba(0,224,255,0.10)' }} />
          <div className="dvd-body absolute" style={{ top: '18%', left: '12%', fontSize: 'clamp(6px, 1.3vw, 8px)', color: 'rgba(0,224,255,0.22)', letterSpacing: '0.12em' }}>
            HEADER BLOCK
          </div>
          <div className="dvd-body absolute" style={{ top: '43%', left: '12%', fontSize: 'clamp(6px, 1.3vw, 8px)', color: 'rgba(0,224,255,0.22)', letterSpacing: '0.12em' }}>
            BODY TEXT
          </div>
          <div className="dvd-body absolute" style={{ top: '58%', left: '12%', fontSize: 'clamp(5px, 1.1vw, 7px)', color: 'rgba(0,224,255,0.18)', letterSpacing: '0.12em' }}>
            CTA ZONE
          </div>
        </div>

        {/* Final UI layer (top — clipped away by scan) */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(145deg, rgba(0,18,36,0.85) 0%, rgba(0,10,22,0.90) 100%)',
            clipPath: hovered ? undefined : 'inset(0 0 0 0)',
          }}
          animate={{
            clipPath: hovered
              ? 'inset(0 0 100% 0)'
              : 'inset(0 0 0% 0)',
          }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        >
          {/* Content on the "final" layer */}
          <div className="absolute inset-0 p-5">
            {/* Codename badge */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className="dvd-body px-2 py-0.5"
                style={{
                  fontSize: 'clamp(7px, 1.4vw, 9px)',
                  letterSpacing: '0.16em',
                  color: 'rgba(0,224,255,0.85)',
                  border: '1px solid rgba(0,224,255,0.25)',
                  background: 'rgba(0,224,255,0.05)',
                }}
              >
                {mission.codename}
              </div>
              <div
                className="dvd-body"
                style={{ fontSize: 'clamp(6px, 1.3vw, 8px)', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)' }}
              >
                {mission.year}
              </div>
            </div>

            {/* Title */}
            <div
              className="dvd-header text-white/90 leading-tight"
              style={{ fontSize: 'clamp(10px, 1.8vw, 13px)', letterSpacing: '0.14em' }}
            >
              {mission.title.toUpperCase()}
            </div>

            {/* Description */}
            <div
              className="mt-2 dvd-body text-white/55 leading-relaxed"
              style={{ fontSize: 'clamp(8px, 1.5vw, 10px)', letterSpacing: '0.08em' }}
            >
              {mission.description}
            </div>

            {/* Bottom stats */}
            <div className="absolute left-5 right-5 bottom-4 flex items-end justify-between">
              <div className="flex flex-wrap gap-1.5">
                {mission.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="dvd-body px-1.5 py-0.5"
                    style={{
                      fontSize: 'clamp(5px, 1.1vw, 7px)',
                      letterSpacing: '0.10em',
                      color: 'rgba(0,224,255,0.65)',
                      border: '1px solid rgba(0,224,255,0.12)',
                      background: 'rgba(0,224,255,0.04)',
                    }}
                  >
                    {t.toUpperCase()}
                  </span>
                ))}
              </div>
              <div className="text-right">
                <div className="dvd-body" style={{ fontSize: 'clamp(6px, 1.3vw, 8px)', letterSpacing: '0.14em', color: mission.status === 'ACTIVE' ? 'rgba(10,255,0,0.75)' : 'rgba(255,200,50,0.7)' }}>
                  STATUS: {mission.status}
                </div>
                <div className="dvd-body mt-0.5" style={{ fontSize: 'clamp(5px, 1.1vw, 7px)', letterSpacing: '0.12em', color: 'rgba(255,70,70,0.6)' }}>
                  CLEARANCE: {mission.clearance}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* X-Ray scan bar (visible on hover) */}
        {hovered && (
          <motion.div
            className="absolute left-0 right-0 z-30 pointer-events-none"
            style={{
              top: scanTop,
              height: 2,
              background: 'linear-gradient(90deg, transparent, rgba(0,224,255,0.7) 20%, rgba(0,224,255,0.9) 50%, rgba(0,224,255,0.7) 80%, transparent)',
              boxShadow: '0 0 18px rgba(0,224,255,0.5), 0 0 40px rgba(0,224,255,0.2)',
            }}
          />
        )}

        {/* Corner accents */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 300" fill="none" aria-hidden="true">
          <path d="M4 20 L4 4 L20 4" stroke="rgba(0,224,255,0.35)" strokeWidth={1} />
          <path d="M460 4 L476 4 L476 20" stroke="rgba(0,224,255,0.35)" strokeWidth={1} />
          <path d="M4 280 L4 296 L20 296" stroke="rgba(0,224,255,0.35)" strokeWidth={1} />
          <path d="M460 296 L476 296 L476 280" stroke="rgba(0,224,255,0.35)" strokeWidth={1} />
        </svg>

        {/* "Click to declassify" hint on center card */}
        {isCenter && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-20 text-center pb-1.5 dvd-body pointer-events-none"
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ fontSize: 'clamp(6px, 1.3vw, 8px)', letterSpacing: '0.18em', color: 'rgba(0,224,255,0.6)' }}
          >
            {'[ CLICK TO DECLASSIFY ]'}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// ===============================================================
//  DECLASSIFIED DEEP DIVE — case study overlay
// ===============================================================
type Phase = 'INTEL' | 'SCHEMATICS' | 'EXECUTION';

function DeclassifiedView({
  mission,
  onClose,
}: {
  mission: Mission;
  onClose: () => void;
}) {
  const [phase, setPhase] = useState<Phase>('INTEL');
  const [revealed, setRevealed] = useState(false);
  const playSlide = useSlideSound();
  const { playBlip } = useSound();

  // Reveal text after a short delay when view opens
  useEffect(() => {
    const t = window.setTimeout(() => setRevealed(true), 400);
    return () => window.clearTimeout(t);
  }, []);

  // Re-trigger reveal when switching phases
  const switchPhase = (p: Phase) => {
    if (p === phase) return;
    playSlide();
    setRevealed(false);
    setPhase(p);
    window.setTimeout(() => setRevealed(true), 350);
  };

  const phases: { key: Phase; label: string; num: string }[] = [
    { key: 'INTEL', label: 'INTEL', num: '01' },
    { key: 'SCHEMATICS', label: 'SCHEMATICS', num: '02' },
    { key: 'EXECUTION', label: 'EXECUTION', num: '03' },
  ];

  const hasStudy = mission.intel && mission.schematics && mission.execution;

  return (
    <motion.div
      className="absolute inset-0 z-50 flex flex-col"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{ background: 'rgba(0,8,18,0.90)' }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(0,224,255,0.15)', padding: 'clamp(8px, 1.5vh, 16px) clamp(12px, 2vw, 24px)' }}
      >
        <div className="flex items-center gap-3">
          <div className="dvd-body" style={{ fontSize: 'clamp(8px, 1.4vw, 10px)', letterSpacing: '0.16em', color: 'rgba(255,70,70,0.75)' }}>
            DECLASSIFIED
          </div>
          <div className="dvd-header text-white/85" style={{ fontSize: 'clamp(10px, 1.7vw, 13px)', letterSpacing: '0.14em' }}>
            {mission.codename}: {mission.title.toUpperCase()}
          </div>
        </div>
        <button
          type="button"
          onClick={() => { playBlip(); onClose(); }}
          className="dvd-body px-3 py-1"
          style={{
            fontSize: 'clamp(8px, 1.4vw, 10px)',
            letterSpacing: '0.16em',
            color: 'rgba(255,70,70,0.8)',
            border: '1px solid rgba(255,70,70,0.25)',
            background: 'rgba(255,70,70,0.05)',
            cursor: 'pointer',
          }}
        >
          [ CLOSE FILE ]
        </button>
      </div>

      {/* Phase tabs */}
      <div className="flex items-center gap-0 py-0" style={{ borderBottom: '1px solid rgba(0,224,255,0.08)', paddingInline: 'clamp(12px, 2vw, 24px)' }}>
        {phases.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => switchPhase(p.key)}
            className="dvd-body px-4 py-2.5 relative"
            style={{
              fontSize: 'clamp(7px, 1.2vw, 9px)',
              letterSpacing: '0.18em',
              color: phase === p.key ? 'rgba(0,224,255,0.95)' : 'rgba(255,255,255,0.4)',
              background: phase === p.key ? 'rgba(0,224,255,0.06)' : 'transparent',
              cursor: 'pointer',
              borderBottom: phase === p.key ? '2px solid rgba(0,224,255,0.6)' : '2px solid transparent',
              transition: 'all 0.2s ease',
            }}
          >
            PHASE {p.num}: {p.label}
          </button>
        ))}
      </div>

      {/* Phase content */}
      <div className="flex-1 overflow-auto" style={{ padding: 'clamp(12px, 2vw, 24px)' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {!hasStudy ? (
              <div className="dvd-body text-white/40 text-center mt-12" style={{ fontSize: 'clamp(9px, 1.6vw, 11px)', letterSpacing: '0.14em' }}>
                {'[ MISSION DATA REDACTED — NO CASE STUDY LINKED ]'}
              </div>
            ) : phase === 'INTEL' ? (
              <IntelPhase mission={mission} revealed={revealed} />
            ) : phase === 'SCHEMATICS' ? (
              <SchematicsPhase mission={mission} revealed={revealed} />
            ) : (
              <ExecutionPhase mission={mission} revealed={revealed} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-5 py-2 flex items-center justify-between" style={{ borderTop: '1px solid rgba(0,224,255,0.08)' }}>
        <div className="dvd-body" style={{ fontSize: 'clamp(6px, 1.2vw, 8px)', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.25)' }}>
          FILE REF: {mission.id}-{mission.codename.replace(/\s/g, '_')} // ACCESS: LEVEL-5
        </div>
        <div className="dvd-body" style={{ fontSize: 'clamp(6px, 1.2vw, 8px)', letterSpacing: '0.12em', color: 'rgba(0,224,255,0.3)' }}>
          TECH: {mission.tech.join(' / ').toUpperCase()}
        </div>
      </div>
    </motion.div>
  );
}

// ---- Phase sub-components ----

function IntelPhase({ mission, revealed }: { mission: Mission; revealed: boolean }) {
  return (
    <div className="space-y-6">
      {/* Target Profile card */}
      <div style={{ border: '1px solid rgba(0,224,255,0.12)', background: 'rgba(0,224,255,0.02)' }} className="p-4">
        <div className="dvd-body mb-3" style={{ fontSize: 'clamp(7px, 1.3vw, 9px)', letterSpacing: '0.18em', color: 'rgba(255,70,70,0.65)' }}>
          TARGET PROFILE — INTERCEPTED SIGNAL
        </div>
        <div className="dvd-body text-white/45 mb-2" style={{ fontSize: 'clamp(8px, 1.4vw, 10px)', letterSpacing: '0.10em' }}>
          MISSION OVERVIEW:
        </div>
        <div className="dvd-body leading-relaxed" style={{ fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)' }}>
          <RedactedText text={mission.intel?.description ?? ''} revealed={revealed} />
        </div>
      </div>

      {/* Challenge */}
      <div style={{ border: '1px solid rgba(255,70,70,0.12)', background: 'rgba(255,70,70,0.02)' }} className="p-4">
        <div className="dvd-body mb-3" style={{ fontSize: 'clamp(7px, 1.3vw, 9px)', letterSpacing: '0.18em', color: 'rgba(255,70,70,0.65)' }}>
          THREAT ASSESSMENT
        </div>
        <div className="dvd-body leading-relaxed" style={{ fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.65)' }}>
          <RedactedText text={mission.intel?.challenge ?? ''} revealed={revealed} />
        </div>
      </div>

      {/* Props/stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'STATUS', value: mission.status, color: 'rgba(10,255,0,0.7)' },
          { label: 'CLEARANCE', value: mission.clearance, color: 'rgba(255,70,70,0.7)' },
          { label: 'PERIOD', value: mission.year, color: 'rgba(0,224,255,0.7)' },
        ].map((s) => (
          <div key={s.label} className="p-3 text-center" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
            <div className="dvd-body" style={{ fontSize: 'clamp(6px, 1.2vw, 8px)', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
            <div className="dvd-body mt-1" style={{ fontSize: 'clamp(8px, 1.4vw, 10px)', letterSpacing: '0.12em', color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SchematicsPhase({ mission, revealed }: { mission: Mission; revealed: boolean }) {
  return (
    <div className="space-y-6">
      {/* Blueprint grid background */}
      <div
        className="p-5 relative"
        style={{
          border: '1px solid rgba(60,130,255,0.18)',
          background: `
            linear-gradient(rgba(60,130,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(60,130,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundColor: 'rgba(0,8,25,0.6)',
        }}
      >
        <div className="dvd-body mb-3" style={{ fontSize: 'clamp(7px, 1.3vw, 9px)', letterSpacing: '0.18em', color: 'rgba(60,130,255,0.7)' }}>
          BLUEPRINT // STRATEGIC APPROACH
        </div>
        <div className="dvd-body leading-relaxed" style={{ fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.7)' }}>
          <RedactedText text={mission.schematics?.solution ?? ''} revealed={revealed} />
        </div>
      </div>

      {/* Wireframe mockup area */}
      <div
        className="p-5 relative"
        style={{
          border: '1px solid rgba(60,130,255,0.12)',
          background: 'rgba(0,8,25,0.4)',
          minHeight: 120,
        }}
      >
        <div className="dvd-body mb-3" style={{ fontSize: 'clamp(6px, 1.2vw, 8px)', letterSpacing: '0.16em', color: 'rgba(60,130,255,0.5)' }}>
          WIREFRAME SCHEMATICS
        </div>
        {/* Simulated wireframe layout */}
        <div className="flex gap-3" style={{ opacity: revealed ? 1 : 0.15, transition: 'opacity 0.6s ease' }}>
          <div className="flex-1 space-y-2">
            <div style={{ height: 12, width: '70%', background: 'rgba(60,130,255,0.12)', border: '1px solid rgba(60,130,255,0.18)' }} />
            <div style={{ height: 8, width: '90%', background: 'rgba(60,130,255,0.08)', border: '1px solid rgba(60,130,255,0.12)' }} />
            <div style={{ height: 8, width: '55%', background: 'rgba(60,130,255,0.08)', border: '1px solid rgba(60,130,255,0.12)' }} />
            <div style={{ height: 24, width: '40%', background: 'rgba(60,130,255,0.06)', border: '1px solid rgba(60,130,255,0.15)' }} />
          </div>
          <div style={{ width: 100, background: 'rgba(60,130,255,0.04)', border: '1px dashed rgba(60,130,255,0.15)' }} />
        </div>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {mission.tech.map((t) => (
            <span
              key={t}
              className="dvd-body px-2 py-1"
              style={{
                fontSize: 'clamp(5px, 1.1vw, 7px)',
                letterSpacing: '0.12em',
                color: 'rgba(60,130,255,0.7)',
                border: '1px solid rgba(60,130,255,0.15)',
                background: 'rgba(60,130,255,0.04)',
              }}
            >
              {t.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExecutionPhase({ mission, revealed }: { mission: Mission; revealed: boolean }) {
  return (
    <div className="space-y-6">
      {/* "Live Satellite Feed" */}
      <div
        className="p-5 relative"
        style={{
          border: '1px solid rgba(10,255,0,0.15)',
          background: 'rgba(0,12,5,0.4)',
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            className="rounded-full"
            style={{ width: 6, height: 6, background: 'rgba(10,255,0,0.8)' }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <div className="dvd-body" style={{ fontSize: 'clamp(7px, 1.3vw, 9px)', letterSpacing: '0.18em', color: 'rgba(10,255,0,0.7)' }}>
            LIVE FEED — DEPLOYMENT RESULT
          </div>
        </div>
        <div className="dvd-body leading-relaxed" style={{ fontSize: 'clamp(10px, 1.7vw, 12px)', letterSpacing: '0.06em', color: 'rgba(10,255,0,0.85)', fontWeight: 500 }}>
          <RedactedText text={mission.execution?.result ?? ''} revealed={revealed} />
        </div>
      </div>

      {/* Mission summary */}
      <div className="p-4" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        <div className="dvd-body mb-2" style={{ fontSize: 'clamp(7px, 1.3vw, 9px)', letterSpacing: '0.16em', color: 'rgba(255,255,255,0.35)' }}>
          OPERATION SUMMARY
        </div>
        <div className="dvd-body leading-relaxed" style={{ fontSize: 'clamp(8px, 1.4vw, 10px)', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.6)' }}>
          <RedactedText text={mission.description} revealed={revealed} />
        </div>
      </div>

      {/* Final status */}
      <div className="flex items-center gap-4 p-4" style={{ border: '1px solid rgba(10,255,0,0.1)', background: 'rgba(10,255,0,0.02)' }}>
        <div className="dvd-body" style={{ fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.14em', color: 'rgba(10,255,0,0.8)' }}>
          MISSION STATUS: {mission.status}
        </div>
        <div className="dvd-body" style={{ fontSize: 'clamp(7px, 1.3vw, 9px)', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.3)' }}>
          TIMELINE: {mission.year}
        </div>
      </div>
    </div>
  );
}

// ===============================================================
//  MAIN PROJECTS COMPONENT
// ===============================================================
export default function Projects() {
  const missions = useMemo(() => buildMissions(), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMission, setOpenMission] = useState<Mission | null>(null);
  const { playBlip, playSelect } = useSound();
  const cardSize = useCardSize();

  const goTo = useCallback((idx: number) => {
    const clamped = clamp(idx, 0, missions.length - 1);
    if (clamped !== activeIndex) {
      setActiveIndex(clamped);
      playBlip();
    }
  }, [activeIndex, missions.length, playBlip]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (openMission) return;
      if (e.key === 'ArrowLeft') goTo(activeIndex - 1);
      else if (e.key === 'ArrowRight') goTo(activeIndex + 1);
      else if (e.key === 'Enter') {
        playSelect();
        setOpenMission(missions[activeIndex]);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeIndex, openMission, goTo, missions, playSelect]);

  // Touch swipe support for mobile
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goTo(activeIndex + 1);
      else goTo(activeIndex - 1);
    }
  }, [activeIndex, goTo]);

  const activeMission = missions[activeIndex];

  return (
    <div
      className="h-full w-full relative overflow-hidden"
      style={{ background: 'rgba(0,10,22,0.88)' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient background */}
      <TickerBackground seed={activeIndex + 1} />

      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between"
        style={{
          borderBottom: '1px solid rgba(0,224,255,0.08)',
          padding: 'clamp(8px, 1.5vh, 16px) clamp(12px, 2vw, 24px)',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="dvd-body" style={{ fontSize: 'clamp(8px, 1.2vw, 11px)', letterSpacing: '0.18em', color: 'rgba(0,224,255,0.6)' }}>
            MISSION SELECT
          </div>
          <div className="dvd-body" style={{ fontSize: 'clamp(7px, 1vw, 9px)', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.25)' }}>
            {activeIndex + 1} / {missions.length}
          </div>
        </div>
        <div className="dvd-body hidden sm:block" style={{ fontSize: 'clamp(7px, 1vw, 9px)', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.3)' }}>
          TACTICAL OPERATIONS DATABASE
        </div>
      </div>

      {/* 3D Carousel area */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: 'clamp(800px, 80vw, 1400px)', transformStyle: 'preserve-3d' }}
      >
        {missions.map((m, i) => (
          <DataSlate
            key={m.id}
            mission={m}
            position={i - activeIndex}
            cardSize={cardSize}
            onClick={() => {
              if (i === activeIndex) {
                playSelect();
                setOpenMission(m);
              } else {
                goTo(i);
              }
            }}
            onHoverStart={() => {
              if (i !== activeIndex) goTo(i);
            }}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <div
        className="absolute left-0 right-0 z-20 flex items-center justify-center gap-4 md:gap-6"
        style={{ bottom: 'clamp(48px, 10vh, 72px)' }}
      >
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="dvd-body px-2 md:px-3 py-1 md:py-1.5"
          style={{
            fontSize: 'clamp(8px, 1.2vw, 11px)',
            letterSpacing: '0.14em',
            color: activeIndex === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(0,224,255,0.7)',
            border: `1px solid ${activeIndex === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(0,224,255,0.2)'}`,
            background: 'rgba(0,0,0,0.3)',
            cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          {'◄ PREV'}
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {missions.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className="transition-all duration-200"
              style={{
                width: i === activeIndex ? 20 : 6,
                height: 6,
                background: i === activeIndex ? 'rgba(0,224,255,0.8)' : 'rgba(0,224,255,0.2)',
                border: '1px solid rgba(0,224,255,0.25)',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === missions.length - 1}
          className="dvd-body px-2 md:px-3 py-1 md:py-1.5"
          style={{
            fontSize: 'clamp(8px, 1.2vw, 11px)',
            letterSpacing: '0.14em',
            color: activeIndex === missions.length - 1 ? 'rgba(255,255,255,0.15)' : 'rgba(0,224,255,0.7)',
            border: `1px solid ${activeIndex === missions.length - 1 ? 'rgba(255,255,255,0.06)' : 'rgba(0,224,255,0.2)'}`,
            background: 'rgba(0,0,0,0.3)',
            cursor: activeIndex === missions.length - 1 ? 'not-allowed' : 'pointer',
          }}
        >
          {'NEXT ►'}
        </button>
      </div>

      {/* Bottom info bar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMission.id}
          className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between"
          style={{
            borderTop: '1px solid rgba(0,224,255,0.08)',
            background: 'rgba(0,10,22,0.6)',
            padding: 'clamp(6px, 1vh, 12px) clamp(12px, 2vw, 24px)',
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18 }}
        >
          <div className="flex items-center gap-3">
            <div className="dvd-header text-white/80" style={{ fontSize: 'clamp(9px, 1.3vw, 12px)', letterSpacing: '0.14em' }}>
              {activeMission.title.toUpperCase()}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="dvd-body" style={{ fontSize: 'clamp(7px, 1vw, 9px)', letterSpacing: '0.14em', color: activeMission.status === 'ACTIVE' ? 'rgba(10,255,0,0.7)' : 'rgba(255,200,50,0.6)' }}>
              {activeMission.status}
            </div>
            <div className="dvd-body hidden sm:block" style={{ fontSize: 'clamp(7px, 1vw, 9px)', letterSpacing: '0.14em', color: 'rgba(255,70,70,0.5)' }}>
              {activeMission.clearance}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Declassified overlay */}
      <AnimatePresence>
        {openMission && (
          <DeclassifiedView
            mission={openMission}
            onClose={() => setOpenMission(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
