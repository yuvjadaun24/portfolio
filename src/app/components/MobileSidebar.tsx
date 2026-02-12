import { motion } from 'motion/react';
import { useSound } from '@/app/hooks/useSound';
import { Section } from '@/app/components/Sidebar';

interface MobileSidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

/* ── Icons (inline SVG for clarity & HUD aesthetic) ──── */

function IconRadar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
      <circle cx={12} cy={12} r={9} />
      <circle cx={12} cy={12} r={4.5} opacity={0.5} />
      <line x1={12} y1={3} x2={12} y2={12} />
      <line x1={12} y1={12} x2={18.36} y2={5.64} />
    </svg>
  );
}

function IconFingerprint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 2a10 10 0 0 1 10 10" />
      <path d="M12 6a6 6 0 0 1 6 6" />
      <path d="M12 10a2 2 0 0 1 2 2v4" />
      <path d="M6.7 6.7A10 10 0 0 0 2 12c0 2.8 1.1 5.3 3 7.1" />
      <path d="M12 22a10 10 0 0 0 7.1-3" />
      <path d="M8 12a4 4 0 0 1 3-3.9" />
    </svg>
  );
}

function IconChip({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.5}>
      <rect x={6} y={6} width={12} height={12} rx={1.5} />
      <rect x={9} y={9} width={6} height={6} rx={0.5} opacity={0.5} />
      {/* Pins */}
      <line x1={9} y1={6} x2={9} y2={3} />
      <line x1={12} y1={6} x2={12} y2={3} />
      <line x1={15} y1={6} x2={15} y2={3} />
      <line x1={9} y1={18} x2={9} y2={21} />
      <line x1={12} y1={18} x2={12} y2={21} />
      <line x1={15} y1={18} x2={15} y2={21} />
      <line x1={6} y1={9} x2={3} y2={9} />
      <line x1={6} y1={15} x2={3} y2={15} />
      <line x1={18} y1={9} x2={21} y2={9} />
      <line x1={18} y1={15} x2={21} y2={15} />
    </svg>
  );
}

function IconSignal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={1.6}>
      <path d="M5 18.5A10.5 10.5 0 0 1 12 3a10.5 10.5 0 0 1 7 15.5" />
      <path d="M8 15.5A6 6 0 0 1 12 7a6 6 0 0 1 4 8.5" />
      <circle cx={12} cy={17} r={1.5} fill="currentColor" stroke="none" />
      <line x1={12} y1={13} x2={12} y2={15.5} />
    </svg>
  );
}

const menuItems: { id: Section; icon: typeof IconRadar; label: string }[] = [
  { id: 'projects', icon: IconRadar, label: 'HUB' },
  { id: 'about', icon: IconFingerprint, label: 'INTEL' },
  { id: 'skills', icon: IconChip, label: 'WORK' },
  { id: 'contact', icon: IconSignal, label: 'COMMS' },
];

export default function MobileSidebar({ activeSection, onSectionChange }: MobileSidebarProps) {
  const { playSelect } = useSound();

  return (
    <nav
      className="w-full flex items-center justify-around relative"
      style={{
        height: 64,
        background: 'rgba(0,0,0,0.80)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(0,224,255,0.25)',
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 0px)',
      }}
    >
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <motion.button
            key={item.id}
            className="relative flex flex-col items-center justify-center flex-1 h-full cursor-pointer outline-none"
            style={{ WebkitTapHighlightColor: 'transparent' }}
            onClick={() => {
              playSelect();
              onSectionChange(item.id);
            }}
            whileTap={{ scale: 0.88 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          >
            {/* ── Active indicator light (top bar) ── */}
            {isActive && (
              <motion.div
                layoutId="mobile-dock-indicator"
                className="absolute top-0 rounded-b-sm"
                style={{
                  width: 28,
                  height: 2,
                  background: 'rgba(10,255,0,0.85)',
                  boxShadow: '0 0 10px rgba(10,255,0,0.5), 0 2px 12px rgba(10,255,0,0.2)',
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              />
            )}

            {/* ── Icon ── */}
            <Icon
              className={
                'w-[22px] h-[22px] transition-colors duration-200 ' +
                (isActive
                  ? 'text-green-400 drop-shadow-[0_0_6px_rgba(10,255,0,0.4)]'
                  : 'text-cyan-800/70')
              }
            />

            {/* ── Label ── */}
            <span
              className={
                'font-mono mt-1 transition-colors duration-200 ' +
                (isActive ? 'text-green-400' : 'text-cyan-800/60')
              }
              style={{ fontSize: 9, letterSpacing: '0.2em' }}
            >
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
}
