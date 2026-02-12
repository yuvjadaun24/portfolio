import { motion, AnimatePresence } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSound } from '../hooks/useSound';

export type Section = 'projects' | 'about' | 'skills' | 'contact';

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  onHoverPreview?: (text: string | null) => void;
}

/* ── menu data ─────────────────────────────────────────── */
const menuItems: { id: Section; num: string; label: string; uplink: string }[] = [
  { id: 'projects', num: '01', label: 'DASHBOARD', uplink: 'DASHBOARD_MAIN' },
  { id: 'about', num: '02', label: 'AGENT_PROFILE', uplink: 'AGENT_DOSSIER' },
  { id: 'skills', num: '03', label: 'DIAGNOSTICS', uplink: 'SYS_DIAGNOSTICS' },
  { id: 'contact', num: '04', label: 'UPLINK', uplink: 'CONTACT_UPLINK' },
];

/* ── Servo Hover Sound ───────────────────────────────── */
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

/* ── System Heartbeat (bottom visualizer) ────────────── */
function SystemHeartbeat() {
  const BAR_COUNT = 7;
  return (
    <div className="flex items-end justify-center gap-[3px] h-9 px-3 opacity-60">
      {Array.from({ length: BAR_COUNT }, (_, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-[1px]"
          style={{ background: 'rgba(0,224,255,0.55)' }}
          animate={{
            height: [4, 12 + Math.random() * 18, 6, 20 + Math.random() * 10, 4],
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.8,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: i * 0.09,
          }}
        />
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   MAG-LEV CONTROL SPINE
   ══════════════════════════════════════════════════════════ */
export default function Sidebar({ activeSection, onSectionChange, onHoverPreview }: SidebarProps) {
  const { playSelect } = useSound();
  const playServo = useServoSound();
  const [hoveredId, setHoveredId] = useState<Section | null>(null);

  const handleHoverStart = useCallback(
    (id: Section) => {
      setHoveredId(id);
      playServo();
      const item = menuItems.find((m) => m.id === id);
      if (item && onHoverPreview) {
        onHoverPreview(`>> PREVIEW: ${item.uplink}`);
      }
    },
    [playServo, onHoverPreview],
  );

  const handleHoverEnd = useCallback(() => {
    setHoveredId(null);
    onHoverPreview?.(null);
  }, [onHoverPreview]);

  return (
    <nav
      className="h-full relative flex flex-col items-center select-none"
      style={{
        width: 96,
        background: 'rgba(0,0,0,0.40)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRight: '1px solid rgba(0,224,255,0.25)',
      }}
      onMouseLeave={handleHoverEnd}
    >
      {/* ── The Central Rail Track ── */}
      <div
        className="absolute left-1/2 top-0 bottom-0 -translate-x-[0.5px] pointer-events-none"
        style={{ width: 1, background: 'rgba(0,224,255,0.12)' }}
      />

      {/* ── Top Label ── */}
      <div
        className="relative z-10 font-mono text-center mt-5 mb-1"
        style={{
          fontSize: 7,
          letterSpacing: '0.28em',
          color: 'rgba(0,224,255,0.28)',
        }}
      >
        MAG-LEV
        <br />
        SPINE
      </div>

      {/* ── Navigation Nodes ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-1">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              className="relative flex items-center justify-center cursor-pointer"
              style={{ width: 96, height: 88 }}
              onMouseEnter={() => handleHoverStart(item.id)}
              onMouseLeave={handleHoverEnd}
              onClick={() => {
                playSelect();
                onSectionChange(item.id);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  playSelect();
                  onSectionChange(item.id);
                }
              }}
            >
              {/* ── Active: The Mag-Lev Carriage (sliding bracket) ── */}
              {isActive && (
                <motion.div
                  layoutId="mag-lev-carriage"
                  className="absolute inset-x-[6px] inset-y-0"
                  style={{
                    borderTop: '1px solid rgba(0,224,255,0.5)',
                    borderBottom: '1px solid rgba(0,224,255,0.5)',
                    background: 'rgba(0,224,255,0.06)',
                    boxShadow: '0 0 20px rgba(0,224,255,0.12), inset 0 0 12px rgba(0,224,255,0.04)',
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}

              {/* ── The Diamond Node ── */}
              <motion.div
                className="relative z-20 flex items-center justify-center"
                style={{
                  width: 22,
                  height: 22,
                  rotate: 45,
                  background: isActive
                    ? 'rgba(10,255,0,0.12)'
                    : 'rgba(0,0,0,0.6)',
                  border: isActive
                    ? '1px solid rgba(10,255,0,0.6)'
                    : '1px solid rgba(0,224,255,0.22)',
                  boxShadow: isActive
                    ? '0 0 14px rgba(10,255,0,0.25), inset 0 0 6px rgba(10,255,0,0.08)'
                    : 'none',
                  transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
                }}
                animate={{
                  scale: isHovered && !isActive ? 1.3 : 1,
                  rotate: isHovered && !isActive ? 45 + 90 : 45,
                  borderColor: isHovered && !isActive
                    ? 'rgba(0,224,255,0.6)'
                    : undefined,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              >
                <span
                  className="font-mono block select-none"
                  style={{
                    transform: 'rotate(-45deg)',
                    fontSize: 8,
                    letterSpacing: '0.04em',
                    color: isActive
                      ? 'rgba(10,255,0,0.9)'
                      : isHovered
                        ? 'rgba(0,224,255,0.9)'
                        : 'rgba(0,224,255,0.45)',
                    transition: 'color 0.15s',
                  }}
                >
                  {item.num}
                </span>
              </motion.div>

              {/* ── Vertical Label (ONLY when active) ── */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    className="absolute z-20 font-mono select-none pointer-events-none"
                    style={{
                      right: 7,
                      top: '50%',
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transform: 'translateY(-50%) rotate(180deg)',
                      fontSize: 9,
                      letterSpacing: '0.22em',
                      color: 'rgba(0,224,255,0.75)',
                      textShadow: '0 0 8px rgba(0,224,255,0.3)',
                      whiteSpace: 'nowrap',
                    }}
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* ── Hover: Connector line shoots to top of sidebar ── */}
              <AnimatePresence>
                {isHovered && !isActive && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-[0.5px] bottom-full pointer-events-none"
                    style={{
                      width: 1,
                      background: 'linear-gradient(0deg, rgba(0,224,255,0.4) 0%, rgba(0,224,255,0) 100%)',
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: 60 }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* ── Bottom: System Heartbeat Visualizer ── */}
      <div className="relative z-10 mb-5 w-full">
        <div
          className="text-center font-mono mb-2"
          style={{
            fontSize: 6,
            letterSpacing: '0.2em',
            color: 'rgba(0,224,255,0.22)',
          }}
        >
          SYS PULSE
        </div>
        <SystemHeartbeat />
      </div>
    </nav>
  );
}
