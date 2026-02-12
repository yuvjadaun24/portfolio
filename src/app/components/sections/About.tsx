import { motion, AnimatePresence, useInView } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { aboutData, contactData } from '../../data/portfolio-data';
import { useSound } from '../../hooks/useSound';
import ResumePrinterDialog from '../ResumePrinterDialog';
import { ImageWithFallback } from '../figma/ImageWithFallback';

/* ================================================================
   THE KINETIC COMMAND GRID — Apple Bento × Military HUD
   ================================================================ */

// ─── Glass Card Wrapper ─────────────────────────────────

function GlassCard({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${hovered ? 'rgba(0,224,255,0.40)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 20,
        boxShadow: hovered
          ? '0 0 30px rgba(0,224,255,0.06), inset 0 0 20px rgba(0,224,255,0.02)'
          : 'none',
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

// ─── Scramble-Decode Hook ───────────────────────────────

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!?';

function useScramble(text: string, trigger: boolean, delayMs = 0, durationMs = 500) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);
  const raf = useRef(0);

  useEffect(() => {
    if (!trigger) return;
    const len = text.length;
    if (!len) return;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / durationMs, 1);
        const reveal = Math.floor(t * len);
        setDisplay(
          text
            .split('')
            .map((ch, i) =>
              ch === ' ' ? ' ' : i < reveal ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
            )
            .join(''),
        );
        if (t < 1) raf.current = requestAnimationFrame(tick);
        else {
          setDisplay(text);
          setDone(true);
        }
      };
      raf.current = requestAnimationFrame(tick);
    }, delayMs);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf.current);
    };
  }, [text, trigger, delayMs, durationMs]);

  return { display, done };
}

// ─── Count-Up Hook ──────────────────────────────────────

function useCountUp(target: number, inView: boolean, durationMs = 1200) {
  const [value, setValue] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      // ease-out quad
      const eased = 1 - (1 - t) * (1 - t);
      setValue(Math.round(eased * target));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, inView, durationMs]);

  return value;
}

// ─── Module 1: Identity Card ────────────────────────────

function IdentityCard() {
  const [hovered, setHovered] = useState(false);
  const { playBlip } = useSound();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <GlassCard className="h-full flex flex-col">
      {/* Photo area */}
      <div
        className="relative flex-1 overflow-hidden min-h-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ImageWithFallback
          src="/images/Yuvraj_Profile.png"
          alt={aboutData.name}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{
            filter: 'saturate(0) contrast(1.15) brightness(0.85)',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />

        {/* Diagonal scanner shine */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, transparent 70%)',
            backgroundSize: '300% 100%',
            animation: 'scanner-shine 5s ease-in-out infinite',
          }}
        />

        {/* Live status pill */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(10,255,0,0.3)',
          }}
        >
          <motion.div
            className="rounded-full"
            style={{ width: 6, height: 6, background: 'rgba(10,255,0,0.85)' }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="font-mono text-green-400" style={{ fontSize: 10, letterSpacing: '0.14em' }}>
            AVAILABLE
          </span>
        </div>

        {/* Hover data overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{
                background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)',
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
            >
              <div className="font-mono text-white/90" style={{ fontSize: 14, letterSpacing: '0.08em' }}>
                {aboutData.name.toUpperCase()}
              </div>
              <div className="font-mono text-cyan-400/70 mt-0.5" style={{ fontSize: 10, letterSpacing: '0.14em' }}>
                ID: TS-7734 // CLEARANCE: LEVEL-5
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Identity info */}
      <div className="p-5">
        <div className="font-mono text-white/90 font-medium" style={{ fontSize: 15, letterSpacing: '0.06em' }}>
          {aboutData.name.toUpperCase()}
        </div>
        <div className="font-mono text-cyan-400/60 mt-1" style={{ fontSize: 11, letterSpacing: '0.14em' }}>
          {aboutData.role.toUpperCase()}
        </div>
        <div className="flex items-center gap-2 mt-3">
          <span className="font-mono text-white/40" style={{ fontSize: 10, letterSpacing: '0.1em' }}>
            {aboutData.experience}
          </span>
          <span className="text-white/20">•</span>
          <span className="font-mono text-white/40" style={{ fontSize: 10, letterSpacing: '0.1em' }}>
            {contactData.location}
          </span>
        </div>
        <button
          type="button"
          onClick={() => { playBlip(); setIsResumeOpen(true); }}
          className="mt-4 font-mono px-4 py-2 transition-colors cursor-pointer"
          style={{
            fontSize: 10,
            letterSpacing: '0.18em',
            color: 'rgba(0,224,255,0.8)',
            border: '1px solid rgba(0,224,255,0.25)',
            background: 'rgba(0,224,255,0.04)',
          }}
        >
          ▼ EXTRACT DOSSIER
        </button>
      </div>

      <ResumePrinterDialog open={isResumeOpen} onOpenChange={setIsResumeOpen} />
    </GlassCard>
  );
}

// ─── Module 2: Metric Core ──────────────────────────────

const METRICS = [
  { value: 45, suffix: '%', label: 'Engagement Uplift', context: 'vs. previous baseline' },
  { value: 30, suffix: '%', label: 'Retention Growth', context: 'quarter-over-quarter' },
  { value: 95, suffix: '%', label: 'Client Satisfaction', context: 'across 7+ projects' },
  { value: 50, suffix: '+', label: 'User Studies', context: 'participants analyzed' },
];

function MetricCore() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <GlassCard className="h-full flex flex-col p-6">
      <div className="font-mono text-white/30" style={{ fontSize: 10, letterSpacing: '0.22em' }}>
        KEY INTELLIGENCE
      </div>
      <div ref={ref} className="grid grid-cols-2 gap-x-6 gap-y-8 flex-1 place-content-center">
        {METRICS.map((m, i) => (
          <MetricItem key={m.label} metric={m} inView={inView} delay={i * 150} />
        ))}
      </div>
    </GlassCard>
  );
}

function MetricItem({
  metric,
  inView,
  delay,
}: {
  metric: (typeof METRICS)[number];
  inView: boolean;
  delay: number;
}) {
  const val = useCountUp(metric.value, inView, 1200 + delay);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay / 1000, duration: 0.35 }}
    >
      <div className="flex items-baseline gap-0.5">
        <span className="font-mono text-white/90 font-semibold" style={{ fontSize: 28, lineHeight: 1 }}>
          +{val}
        </span>
        <span className="font-mono text-cyan-400/70" style={{ fontSize: 16 }}>
          {metric.suffix}
        </span>
      </div>
      <div className="font-mono text-white/55 mt-1 whitespace-nowrap" style={{ fontSize: 10, letterSpacing: '0.08em' }}>
        {metric.label}
      </div>
      <div className="font-mono text-white/25 mt-0.5 whitespace-nowrap" style={{ fontSize: 9, letterSpacing: '0.06em' }}>
        {metric.context}
      </div>
    </motion.div>
  );
}

// ─── Module 3: Stack Tape — Dual-Stream Tech Reactor ───

const STREAM_CORE = [
  { name: 'React', abbr: 'RE', ver: 'v18.3' },
  { name: 'TypeScript', abbr: 'TS', ver: 'v5.4' },
  { name: 'Next.js', abbr: 'NX', ver: 'v14' },
  { name: 'HTML5', abbr: 'H5', ver: 'spec' },
  { name: 'CSS3', abbr: 'C3', ver: 'L4' },
  { name: 'Bootstrap', abbr: 'BS', ver: 'v5.3' },
];

const STREAM_DESIGN = [
  { name: 'Figma', abbr: 'FG', ver: 'Ent' },
  { name: 'Tailwind', abbr: 'TW', ver: 'v3.4' },
  { name: 'Framer', abbr: 'FM', ver: 'Motion' },
  { name: 'Adobe XD', abbr: 'XD', ver: 'v57' },
  { name: 'Sketch', abbr: 'SK', ver: 'v100' },
  { name: 'Illustrator', abbr: 'AI', ver: 'v28' },
  { name: 'InVision', abbr: 'IV', ver: 'DSM' },
  { name: 'Zeplin', abbr: 'ZP', ver: 'v4' },
];

/* Micro-grid dot background — reused for both dense cards */
function MicroGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 0.5px, transparent 0.5px)',
        backgroundSize: '16px 16px',
        opacity: 0.03,
      }}
    />
  );
}

/* Circuit board SVG pattern — faint engineering blueprint feel */
function CircuitPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.025 }}>
      <defs>
        <pattern id="circuit" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M0 24h12m24 0h12M24 0v12m0 24v12" stroke="#0ef" strokeWidth="0.6" fill="none" />
          <circle cx="24" cy="24" r="1.5" fill="#0ef" />
          <circle cx="12" cy="24" r="1" fill="#0ef" />
          <circle cx="24" cy="12" r="1" fill="#0ef" />
          <circle cx="36" cy="24" r="1" fill="#0ef" />
          <circle cx="24" cy="36" r="1" fill="#0ef" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}

/* Individual tech badge with version tag */
function TechBadge({
  name,
  abbr,
  ver,
  isHovered,
  onHover,
  onLeave,
}: {
  name: string;
  abbr: string;
  ver: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="flex items-center gap-2 shrink-0 px-3 py-2 rounded-lg transition-all duration-200 cursor-default"
      style={{
        border: `1px solid ${isHovered ? 'rgba(0,224,255,0.45)' : 'rgba(255,255,255,0.06)'}`,
        background: isHovered ? 'rgba(0,224,255,0.08)' : 'rgba(255,255,255,0.02)',
        boxShadow: isHovered ? '0 0 16px rgba(0,224,255,0.15)' : 'none',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <span
        className="font-mono font-semibold shrink-0 flex items-center justify-center rounded"
        style={{
          width: 26,
          height: 26,
          fontSize: 10,
          letterSpacing: '0.08em',
          color: isHovered ? 'rgba(0,224,255,1)' : 'rgba(0,224,255,0.5)',
          background: isHovered ? 'rgba(0,224,255,0.12)' : 'rgba(0,224,255,0.04)',
          border: `1px solid ${isHovered ? 'rgba(0,224,255,0.3)' : 'rgba(0,224,255,0.1)'}`,
          transition: 'all 0.2s',
        }}
      >
        {abbr}
      </span>
      <div className="flex flex-col">
        <span
          className="font-mono whitespace-nowrap transition-colors duration-200 leading-tight"
          style={{
            fontSize: 11,
            letterSpacing: '0.06em',
            color: isHovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
          }}
        >
          {name}
        </span>
        <span
          className="font-mono whitespace-nowrap leading-tight"
          style={{
            fontSize: 8,
            letterSpacing: '0.1em',
            color: isHovered ? 'rgba(0,224,255,0.6)' : 'rgba(255,255,255,0.2)',
          }}
        >
          [{ver}]
        </span>
      </div>
    </div>
  );
}

/* Single marquee stream */
function MarqueeStream({
  items,
  direction,
  speed,
}: {
  items: { name: string; abbr: string; ver: string }[];
  direction: 'left' | 'right';
  speed: number;
}) {
  const [paused, setPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const doubled = [...items, ...items];
  const fromX = direction === 'left' ? '0%' : '-50%';
  const toX = direction === 'left' ? '-50%' : '0%';

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); setHoveredId(null); }}
    >
      <motion.div
        className="flex gap-3 px-5"
        animate={{ x: [fromX, toX] }}
        transition={{
          x: { duration: speed, repeat: Infinity, ease: 'linear', ...(paused ? { duration: 0 } : {}) },
        }}
        style={paused ? { animationPlayState: 'paused' } : {}}
      >
        {doubled.map((tool, i) => (
          <TechBadge
            key={`${tool.name}-${i}`}
            name={tool.name}
            abbr={tool.abbr}
            ver={tool.ver}
            isHovered={hoveredId === `${tool.name}-${i}`}
            onHover={() => setHoveredId(`${tool.name}-${i}`)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </motion.div>
    </div>
  );
}

function StackTape() {
  return (
    <GlassCard className="h-full flex flex-col justify-center overflow-hidden">
      {/* Texture layers */}
      <MicroGrid />
      <CircuitPattern />

      {/* Header */}
      <div className="relative z-10 px-5 pt-4 pb-1 flex items-center justify-between">
        <span className="font-mono text-white/30" style={{ fontSize: 10, letterSpacing: '0.22em' }}>
          TOOLS & FRAMEWORKS
        </span>
        <span className="font-mono text-white/15" style={{ fontSize: 8, letterSpacing: '0.1em' }}>
          {STREAM_CORE.length + STREAM_DESIGN.length} MODULES LOADED
        </span>
      </div>

      {/* Stream A — Core Tech, scrolls left */}
      <div className="relative z-10 mt-2">
        <div className="px-5 mb-1">
          <span className="font-mono text-cyan-400/25" style={{ fontSize: 8, letterSpacing: '0.18em' }}>STREAM_A // CORE_TECH</span>
        </div>
        <MarqueeStream items={STREAM_CORE} direction="left" speed={26} />
      </div>

      {/* Stream B — Design & Aux, scrolls right */}
      <div className="relative z-10 mt-3 pb-4">
        <div className="px-5 mb-1">
          <span className="font-mono text-cyan-400/25" style={{ fontSize: 8, letterSpacing: '0.18em' }}>STREAM_B // DESIGN_AUX</span>
        </div>
        <MarqueeStream items={STREAM_DESIGN} direction="right" speed={32} />
      </div>
    </GlassCard>
  );
}

// ─── Module 4: Briefing ─────────────────────────────────

const HIGHLIGHT_WORDS: Record<string, string> = {
  'design systems': 'Systematic, token-driven component libraries for scale.',
  'WCAG': 'Web Content Accessibility Guidelines — AA+ compliance.',
  'Figma': 'Primary design tool for UI/UX workflows.',
  'wireframing': 'Low-fidelity structural blueprints before visual design.',
  'data-driven': 'Decisions backed by analytics, heatmaps, and A/B tests.',
  'responsive': 'Fluid layouts optimized across every viewport.',
};

function Briefing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const titleScramble = useScramble('OPERATIVE SUMMARY', inView, 0, 600);
  const [tooltip, setTooltip] = useState<{ word: string; text: string; x: number; y: number } | null>(null);

  // Split bio into segments, highlighting matching words
  const renderBio = useCallback(() => {
    const bio = aboutData.bio;
    const keys = Object.keys(HIGHLIGHT_WORDS);
    const regex = new RegExp(`(${keys.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
    const parts = bio.split(regex);

    return parts.map((part, i) => {
      const matchKey = keys.find((k) => k.toLowerCase() === part.toLowerCase());
      if (matchKey) {
        return (
          <span
            key={i}
            className="text-cyan-400 cursor-help relative transition-colors hover:text-cyan-300"
            style={{ borderBottom: '1px dashed rgba(0,224,255,0.3)' }}
            onMouseEnter={(e) => {
              const rect = (e.target as HTMLElement).getBoundingClientRect();
              setTooltip({
                word: matchKey,
                text: HIGHLIGHT_WORDS[matchKey],
                x: rect.left + rect.width / 2,
                y: rect.top,
              });
            }}
            onMouseLeave={() => setTooltip(null)}
          >
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  }, []);

  return (
    <GlassCard className="h-full p-6 md:p-8 flex flex-col justify-center relative">
      <div ref={ref}>
        <div className="font-mono text-white/30 mb-1" style={{ fontSize: 10, letterSpacing: '0.22em' }}>
          CLASSIFIED BRIEFING
        </div>
        <h3
          className="font-mono text-white/85 mb-4"
          style={{ fontSize: 16, letterSpacing: '0.14em', fontWeight: 600 }}
        >
          {inView ? titleScramble.display || '...' : '...'}
        </h3>

        <p
          className="leading-relaxed"
          style={{
            fontFamily: "'Inter', 'Geist', system-ui, sans-serif",
            fontSize: 14,
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          {renderBio()}
        </p>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            className="fixed z-[999] pointer-events-none font-mono px-3 py-2 rounded-lg"
            style={{
              left: tooltip.x,
              top: tooltip.y - 8,
              transform: 'translate(-50%, -100%)',
              background: 'rgba(0,20,40,0.92)',
              border: '1px solid rgba(0,224,255,0.3)',
              backdropFilter: 'blur(12px)',
              maxWidth: 260,
              fontSize: 10,
              letterSpacing: '0.06em',
              color: 'rgba(0,224,255,0.85)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
          >
            {tooltip.text}
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

// ─── Module 5: Global Uplink — Comms Station ───────────

function WireframeGlobe() {
  const R = 56;
  const CX = 80;
  const CY = 80;
  const meridians = 6;
  const parallels = 5;
  const pinX = CX + 16;
  const pinY = CY - 6;

  return (
    <div className="relative shrink-0" style={{ width: 160, height: 160 }}>
      <motion.svg
        width={160}
        height={160}
        viewBox="0 0 160 160"
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, ease: 'linear', repeat: Infinity }}
      >
        {/* Outer orbital rings */}
        <circle cx={CX} cy={CY} r={R + 18} fill="none" stroke="rgba(0,224,255,0.06)" strokeWidth={0.5} strokeDasharray="4 6" />
        <circle cx={CX} cy={CY} r={R + 12} fill="none" stroke="rgba(0,224,255,0.08)" strokeWidth={0.4} strokeDasharray="2 8" />
        <ellipse cx={CX} cy={CY} rx={R + 22} ry={14} fill="none" stroke="rgba(0,224,255,0.05)" strokeWidth={0.5} strokeDasharray="3 5" />

        {/* Main sphere */}
        <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(0,224,255,0.14)" strokeWidth={0.8} />
        {Array.from({ length: meridians }, (_, i) => {
          const rx = Math.abs(Math.cos((i / meridians) * Math.PI)) * R;
          return (
            <ellipse
              key={`m${i}`}
              cx={CX}
              cy={CY}
              rx={rx || 0.5}
              ry={R}
              fill="none"
              stroke="rgba(0,224,255,0.07)"
              strokeWidth={0.5}
            />
          );
        })}
        {Array.from({ length: parallels }, (_, i) => {
          const frac = (i + 1) / (parallels + 1);
          const y = CY - R + frac * 2 * R;
          const lr = Math.sqrt(R * R - (y - CY) * (y - CY));
          return (
            <ellipse
              key={`p${i}`}
              cx={CX}
              cy={y}
              rx={lr}
              ry={lr * 0.2}
              fill="none"
              stroke="rgba(0,224,255,0.05)"
              strokeWidth={0.4}
            />
          );
        })}

        {/* Location pin */}
        <circle cx={pinX} cy={pinY} r={2.5} fill="rgba(255,60,60,0.85)" />
        <motion.circle
          cx={pinX}
          cy={pinY}
          r={8}
          fill="none"
          stroke="rgba(255,60,60,0.4)"
          strokeWidth={0.8}
          animate={{ r: [5, 14, 5], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        />

        {/* Orbital dots */}
        <motion.circle
          cx={CX + R + 15}
          cy={CY}
          r={1.5}
          fill="rgba(0,224,255,0.5)"
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx={CX}
          cy={CY - R - 15}
          r={1}
          fill="rgba(0,224,255,0.35)"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}

/* Network log channel row */
const CHANNELS = [
  { platform: 'GITHUB', status: 'CONNECTED', ping: '14ms', color: 'rgba(10,255,0,0.85)', href: `https://${contactData.github}` },
  { platform: 'LINKEDIN', status: 'ACTIVE', ping: '22ms', color: 'rgba(10,255,0,0.85)', href: `https://${contactData.linkedin}` },
  { platform: 'DRIBBBLE', status: 'STANDBY', ping: '--', color: 'rgba(255,200,0,0.85)', href: `https://${contactData.dribbble}` },
  { platform: 'MAIL', status: 'READY', ping: '8ms', color: 'rgba(10,255,0,0.85)', href: `mailto:${contactData.email}` },
] as const;

function ChannelRow({
  platform,
  status,
  ping,
  color,
  href,
  delay,
}: {
  platform: string;
  status: string;
  ping: string;
  color: string;
  href: string;
  delay: number;
}) {
  const { playBlip } = useSound();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-mono transition-all duration-200 cursor-pointer"
      style={{
        background: hovered ? 'rgba(0,224,255,0.06)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? 'rgba(0,224,255,0.25)' : 'rgba(255,255,255,0.04)'}`,
      }}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      onMouseEnter={() => { setHovered(true); playBlip(); }}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Status dot */}
      <motion.div
        className="shrink-0 rounded-full"
        style={{ width: 6, height: 6, background: color }}
        animate={{ opacity: status === 'STANDBY' ? [1, 0.3, 1] : 1 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Platform name */}
      <span
        className="whitespace-nowrap"
        style={{ fontSize: 11, letterSpacing: '0.12em', color: hovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.55)' }}
      >
        {platform}
      </span>

      {/* Status tag */}
      <span
        className="whitespace-nowrap"
        style={{
          fontSize: 8,
          letterSpacing: '0.08em',
          color: status === 'STANDBY' ? 'rgba(255,200,0,0.6)' : 'rgba(10,255,0,0.5)',
          padding: '1px 6px',
          background: status === 'STANDBY' ? 'rgba(255,200,0,0.06)' : 'rgba(10,255,0,0.05)',
          border: `1px solid ${status === 'STANDBY' ? 'rgba(255,200,0,0.15)' : 'rgba(10,255,0,0.12)'}`,
          borderRadius: 4,
        }}
      >
        :: {status} ::
      </span>

      {/* Ping — pushed right */}
      <span className="ml-auto whitespace-nowrap" style={{ fontSize: 9, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.2)' }}>
        {ping}
      </span>
    </motion.a>
  );
}

function GlobalUplink() {
  return (
    <GlassCard className="h-full flex flex-col p-5 justify-center">
      {/* Texture layers */}
      <MicroGrid />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-3">
        <span className="font-mono text-white/30" style={{ fontSize: 10, letterSpacing: '0.22em' }}>
          GLOBAL UPLINK
        </span>
        <span className="font-mono text-white/15" style={{ fontSize: 8, letterSpacing: '0.1em' }}>
          {contactData.location.toUpperCase()}
        </span>
      </div>

      <div className="relative z-10 flex items-start gap-4 flex-1 min-h-0">
        {/* Left: Globe (40%) */}
        <div className="flex items-center justify-center" style={{ width: '38%' }}>
          <WireframeGlobe />
        </div>

        {/* Right: Network Log (60%) */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-cyan-400/25" style={{ fontSize: 8, letterSpacing: '0.18em' }}>
              ENCRYPTED_CHANNELS
            </span>
            <span className="font-mono text-white/15" style={{ fontSize: 8, letterSpacing: '0.08em' }}>
              {CHANNELS.length} NODES
            </span>
          </div>

          {CHANNELS.map((ch, i) => (
            <ChannelRow key={ch.platform} {...ch} delay={0.15 + i * 0.08} />
          ))}

          {/* Coordinates footer */}
          <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <span className="font-mono text-white/15" style={{ fontSize: 8, letterSpacing: '0.12em' }}>
              COORD: 28.41°N 77.31°E // ENCRYPT: AES-256 // UPTIME: 99.97%
            </span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

// ─── Scanner Shine Keyframes (injected once) ────────────

function ScannerShineStyles() {
  return (
    <style>{`
      @keyframes scanner-shine {
        0%, 100% { background-position: 200% 0; }
        50% { background-position: -100% 0; }
      }
    `}</style>
  );
}

// ─── Main Component ─────────────────────────────────────

export default function About() {
  return (
    <>
      <ScannerShineStyles />

      {/* ── Desktop: Center-locked, scroll-free viewport ── */}
      <section className="hidden md:flex relative w-full h-screen items-center justify-center overflow-hidden selection:bg-cyan-500/30">
        <div className="w-full max-w-[1200px] h-[80vh] max-h-[800px] grid grid-cols-12 grid-rows-10 gap-5 p-4">

          {/* 1. Identity Module (Left - Tall) — col 1-3, rows 1-6 */}
          <div className="h-full" style={{ gridColumn: '1 / 4', gridRow: '1 / 7' }}>
            <IdentityCard />
          </div>

          {/* 2. Metrics Module (Center - Tall) — col 4-7, rows 1-6 */}
          <div className="h-full" style={{ gridColumn: '4 / 8', gridRow: '1 / 7' }}>
            <MetricCore />
          </div>

          {/* 3. Tech Stack (Right Top) — col 8-12, rows 1-4 */}
          <div className="h-full" style={{ gridColumn: '8 / 13', gridRow: '1 / 5' }}>
            <StackTape />
          </div>

          {/* 4. Location / Global Uplink (Right Bottom) — col 8-12, rows 5-10 */}
          <div className="h-full" style={{ gridColumn: '8 / 13', gridRow: '5 / 11' }}>
            <GlobalUplink />
          </div>

          {/* 5. Bio / Briefing (Bottom Left-Center) — col 1-7, rows 7-10 */}
          <div className="h-full" style={{ gridColumn: '1 / 8', gridRow: '7 / 11' }}>
            <Briefing />
          </div>

        </div>
      </section>

      {/* ── Mobile: vertical stack ── */}
      <div className="md:hidden flex flex-col gap-4 p-4 w-full min-h-screen">
        <IdentityCard />
        <MetricCore />
        <StackTape />
        <Briefing />
        <GlobalUplink />
      </div>
    </>
  );
}
