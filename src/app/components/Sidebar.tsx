import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSound } from '../hooks/useSound';

export type Section = 'projects' | 'about' | 'skills' | 'contact';

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

/* ── menu data ─────────────────────────────────────────── */
const menuItems: { id: Section; num: string; label: string }[] = [
  { id: 'projects', num: '01', label: 'DASHBOARD' },
  { id: 'about', num: '02', label: 'AGENT_PROFILE' },
  { id: 'skills', num: '03', label: 'DIAGNOSTICS' },
  { id: 'contact', num: '04', label: 'UPLINK' },
];

/* ── Decrypting Text ───────────────────────────────────── */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!?/<>';

function DecryptingText({ text, active }: { text: string; active: boolean }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) {
      setDisplay(text);
      return;
    }
    const chars = text.split('');
    const resolved = new Array(chars.length).fill(false);
    let iteration = 0;

    const tick = () => {
      iteration++;
      const next = chars.map((ch, i) => {
        if (ch === ' ') return ' ';
        if (resolved[i]) return ch;
        // resolve ~1-2 chars per frame after a few scramble rounds
        if (iteration > 3 + i * 2) {
          resolved[i] = true;
          return ch;
        }
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      });
      setDisplay(next.join(''));
      if (resolved.every(Boolean)) return;
      rafRef.current = requestAnimationFrame(tick);
    };
    // short initial delay
    frameRef.current = window.setTimeout(() => {
      rafRef.current = requestAnimationFrame(tick);
    }, 40);
    return () => {
      window.clearTimeout(frameRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [active, text]);

  return <span>{display}</span>;
}

/* ── Servo Hover Sound (high-pitched zzzzt) ──────────── */
function useServoSound() {
  const ctxRef = useRef<AudioContext | null>(null);
  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return ctxRef.current;
  }, []);

  return useCallback(() => {
    try {
      const ctx = getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      // fast servo sweep: 2200 → 3400 Hz
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(2200, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(3400, ctx.currentTime + 0.06);
      osc.frequency.linearRampToValueAtTime(2800, ctx.currentTime + 0.10);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.003, ctx.currentTime + 0.10);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.10);
    } catch {
      /* silent */
    }
  }, [getCtx]);
}

/* ── Scrolling Tick-Mark Rail (SVG pattern) ──────────── */
function TickRail({ height }: { height: number }) {
  // We render a tall SVG with tick marks and animate its Y offset to loop.
  const TICK_SPACING = 12;
  const SEGMENT = TICK_SPACING * 40; // one cycle height
  const majorEvery = 5;

  return (
    <div
      className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none overflow-hidden"
      style={{ width: 20 }}
    >
      {/* the 1px rail line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 -translate-x-[0.5px]"
        style={{ width: 1, background: 'rgba(0,224,255,0.12)' }}
      />
      {/* scrolling ticks */}
      <motion.svg
        className="absolute left-0"
        width={20}
        height={SEGMENT * 2}
        animate={{ y: [0, -SEGMENT] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
        aria-hidden="true"
      >
        {Array.from({ length: Math.ceil((SEGMENT * 2) / TICK_SPACING) }, (_, i) => {
          const y = i * TICK_SPACING;
          const isMajor = i % majorEvery === 0;
          const w = isMajor ? 7 : 4;
          const opacity = isMajor ? 0.25 : 0.1;
          return (
            <line
              key={i}
              x1={10 - w}
              y1={y}
              x2={10 + w}
              y2={y}
              stroke="rgba(0,224,255,1)"
              strokeWidth={isMajor ? 1 : 0.5}
              opacity={opacity}
            />
          );
        })}
      </motion.svg>
    </div>
  );
}

/* ── Ghost Reticle (tracks mouse Y) ──────────────────── */
function GhostReticle({ y }: { y: ReturnType<typeof useSpring> }) {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-30"
      style={{
        y,
        width: 28,
        height: 28,
        marginTop: -14,
      }}
    >
      {/* bracket corners — the [ ] reticle */}
      <svg width={28} height={28} viewBox="0 0 28 28" fill="none" className="absolute inset-0">
        {/* top-left */}
        <path d="M2 9 L2 2 L9 2" stroke="rgba(0,224,255,0.7)" strokeWidth={1.5} />
        {/* top-right */}
        <path d="M19 2 L26 2 L26 9" stroke="rgba(0,224,255,0.7)" strokeWidth={1.5} />
        {/* bottom-left */}
        <path d="M2 19 L2 26 L9 26" stroke="rgba(0,224,255,0.7)" strokeWidth={1.5} />
        {/* bottom-right */}
        <path d="M19 26 L26 26 L26 19" stroke="rgba(0,224,255,0.7)" strokeWidth={1.5} />
        {/* center cross-hair dot */}
        <circle cx={14} cy={14} r={1.5} fill="rgba(0,224,255,0.5)" />
      </svg>
    </motion.div>
  );
}

/* ── Single Nav Item ─────────────────────────────────── */
function NavItem({
  item,
  isActive,
  isHovered,
  onHoverStart,
  onHoverEnd,
  onClick,
  yCenter,
}: {
  item: (typeof menuItems)[number];
  isActive: boolean;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
  yCenter: number;
}) {
  const showLabel = isHovered || isActive;

  return (
    <div
      className="relative flex items-center"
      style={{ height: 44 }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      {/* The Diamond node on the rail */}
      <div className="relative z-20 flex items-center justify-center" style={{ width: 44 }}>
        <motion.div
          className="flex items-center justify-center"
          style={{
            width: 18,
            height: 18,
            rotate: 45,
            background: isActive
              ? 'rgba(10,255,0,0.15)'
              : isHovered
                ? 'rgba(0,224,255,0.1)'
                : 'rgba(0,0,0,0.6)',
            border: isActive
              ? '1px solid rgba(10,255,0,0.6)'
              : isHovered
                ? '1px solid rgba(0,224,255,0.5)'
                : '1px solid rgba(0,224,255,0.18)',
            boxShadow: isActive
              ? '0 0 12px rgba(10,255,0,0.3), inset 0 0 6px rgba(10,255,0,0.1)'
              : 'none',
            cursor: 'pointer',
          }}
          animate={{
            scale: isHovered && !isActive ? 1.15 : 1,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <span
            className="dvd-body"
            style={{
              rotate: '-45deg',
              fontSize: 'clamp(6px, 0.9vw, 8px)',
              letterSpacing: '0.04em',
              color: isActive
                ? 'rgba(10,255,0,0.9)'
                : isHovered
                  ? 'rgba(0,224,255,0.85)'
                  : 'rgba(0,224,255,0.4)',
              display: 'block',
            }}
          >
            {item.num}
          </span>
        </motion.div>
      </div>

      {/* Active connector line — horizontal beam from node into content */}
      {isActive && (
        <motion.div
          className="absolute z-10"
          style={{
            left: 31,
            top: '50%',
            height: 1,
            marginTop: -0.5,
            background: 'linear-gradient(90deg, rgba(10,255,0,0.5) 0%, rgba(10,255,0,0) 100%)',
          }}
          initial={{ width: 0 }}
          animate={{ width: 'clamp(60px, 8vw, 120px)' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      )}

      {/* The reveal tab — slides out on hover */}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            className="absolute z-20 flex items-center overflow-hidden"
            style={{
              left: 40,
              top: '50%',
              translateY: '-50%',
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div
              className="dvd-body whitespace-nowrap"
              style={{
                fontSize: 'clamp(8px, 1.1vw, 10px)',
                letterSpacing: '0.16em',
                paddingInline: 'clamp(6px, 0.8vw, 10px)',
                paddingBlock: '3px',
                color: isActive ? 'rgba(10,255,0,0.9)' : 'rgba(0,224,255,0.85)',
                background: isActive
                  ? 'rgba(10,255,0,0.06)'
                  : 'rgba(0,224,255,0.06)',
                borderTop: `1px solid ${isActive ? 'rgba(10,255,0,0.25)' : 'rgba(0,224,255,0.2)'}`,
                borderRight: `1px solid ${isActive ? 'rgba(10,255,0,0.25)' : 'rgba(0,224,255,0.2)'}`,
                borderBottom: `1px solid ${isActive ? 'rgba(10,255,0,0.25)' : 'rgba(0,224,255,0.2)'}`,
              }}
            >
              <DecryptingText text={item.label} active={isHovered} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   TARGETING RAIL SIDEBAR
   ══════════════════════════════════════════════════════════ */
export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const { playSelect } = useSound();
  const playServo = useServoSound();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<Section | null>(null);
  const [containerHeight, setContainerHeight] = useState(400);

  // Track mouse Y inside the sidebar
  const rawMouseY = useMotionValue(containerHeight / 2);
  const reticleY = useSpring(rawMouseY, { stiffness: 300, damping: 30, mass: 0.6 });

  // Item Y positions (measured from container top)
  const itemRefs = useRef<Map<Section, HTMLDivElement>>(new Map());
  const itemCenters = useRef<Map<Section, number>>(new Map());

  const measureItems = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    setContainerHeight(containerRect.height);
    itemRefs.current.forEach((el, id) => {
      const rect = el.getBoundingClientRect();
      itemCenters.current.set(id, rect.top - containerRect.top + rect.height / 2);
    });
  }, []);

  useEffect(() => {
    measureItems();
    window.addEventListener('resize', measureItems);
    return () => window.removeEventListener('resize', measureItems);
  }, [measureItems]);

  // Mouse-move handler with magnetic snapping
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const localY = e.clientY - containerRect.top;

      // Find closest item for magnetic snap
      let closestId: Section | null = null;
      let closestDist = Infinity;
      itemCenters.current.forEach((cy, id) => {
        const d = Math.abs(localY - cy);
        if (d < closestDist) {
          closestDist = d;
          closestId = id;
        }
      });

      const SNAP_RADIUS = 28;
      if (closestId && closestDist < SNAP_RADIUS) {
        rawMouseY.set(itemCenters.current.get(closestId)!);
      } else {
        rawMouseY.set(localY);
      }
    },
    [rawMouseY],
  );

  const handleItemHover = useCallback(
    (id: Section) => {
      setHoveredId(id);
      playServo();
      // snap reticle to this item
      const cy = itemCenters.current.get(id);
      if (cy != null) rawMouseY.set(cy);
    },
    [playServo, rawMouseY],
  );

  return (
    <div
      ref={containerRef}
      className="h-full relative flex flex-col items-center"
      style={{
        width: 'clamp(44px, 5vw, 56px)',
        background: 'rgba(0,0,0,0.15)',
        borderRight: '1px solid rgba(0,224,255,0.06)',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredId(null)}
    >
      {/* Scrolling tick-mark rail */}
      <TickRail height={containerHeight} />

      {/* Ghost reticle — follows mouse */}
      <GhostReticle y={reticleY} />

      {/* Header label */}
      <div
        className="relative z-20 dvd-body text-center mt-4 mb-2"
        style={{
          fontSize: 'clamp(6px, 0.8vw, 8px)',
          letterSpacing: '0.2em',
          color: 'rgba(0,224,255,0.3)',
          writingMode: 'vertical-lr',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          height: 'clamp(50px, 8vh, 80px)',
        }}
      >
        TARGETING RAIL
      </div>

      {/* Nav nodes — centered vertically */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center gap-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            ref={(el) => {
              if (el) itemRefs.current.set(item.id, el);
            }}
          >
            <NavItem
              item={item}
              isActive={activeSection === item.id}
              isHovered={hoveredId === item.id}
              onHoverStart={() => handleItemHover(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => {
                playSelect();
                onSectionChange(item.id);
              }}
              yCenter={0}
            />
          </div>
        ))}
      </div>

      {/* Bottom status */}
      <div
        className="relative z-20 dvd-body text-center mb-4"
        style={{
          fontSize: 'clamp(5px, 0.7vw, 7px)',
          letterSpacing: '0.14em',
          color: 'rgba(0,224,255,0.2)',
        }}
      >
        SYS
        <br />
        RDY
      </div>
    </div>
  );
}
