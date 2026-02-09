import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useSound } from '../hooks/useSound';
import type { Section } from './Sidebar';

interface SplashScreenProps {
  onSelect: (section: Section) => void;
}

interface MenuItem {
  id: Section;
  label: string;
  action: () => void;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function useDecodeText(targetText: string, active: boolean, durationMs = 380) {
  const [text, setText] = useState('');
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (!active) {
      setText(targetText);
      return;
    }

    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$@!%&*+-_=<>?/';
    const target = targetText;
    const len = target.length;
    const start = performance.now();

    const rand = () => charset[Math.floor(Math.random() * charset.length)] ?? 'X';

    const tick = (now: number) => {
      const p = clamp((now - start) / durationMs, 0, 1);
      const reveal = Math.floor(p * len);

      let out = '';
      for (let i = 0; i < len; i += 1) {
        const ch = target[i] ?? '';
        if (ch === ' ') out += ' ';
        else if (i < reveal) out += ch;
        else out += rand();
      }
      setText(out);

      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else setText(target);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [targetText, active, durationMs]);

  return text;
}

function WireframeGlobe() {
  return (
    <svg viewBox="0 0 220 220" className="block" aria-hidden="true">
      <defs>
        <radialGradient id="glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="rgba(0,240,255,0.18)" />
          <stop offset="65%" stopColor="rgba(0,240,255,0.06)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      <circle cx="110" cy="110" r="86" fill="url(#glow)" />
      <circle cx="110" cy="110" r="86" fill="none" stroke="rgba(0,240,255,0.35)" strokeWidth="1" />

      {[-60, -30, 0, 30, 60].map((lat) => {
        const ry = 86 * Math.cos((Math.abs(lat) * Math.PI) / 180);
        const y = 110 + (86 * Math.sin((lat * Math.PI) / 180));
        return (
          <ellipse
            key={lat}
            cx="110"
            cy={y}
            rx="86"
            ry={Math.max(8, ry)}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        );
      })}

      {[-60, -30, 0, 30, 60].map((lng) => (
        <ellipse
          key={lng}
          cx="110"
          cy="110"
          rx={Math.max(8, 86 * Math.cos((lng * Math.PI) / 180))}
          ry="86"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}

      {/* India marker (approx) */}
      <circle cx="142" cy="126" r="2" fill="rgba(10,255,0,0.9)" />
    </svg>
  );
}

function ScannerGraphic({ ok }: { ok: boolean }) {
  const color = ok ? 'rgba(10,255,0,0.85)' : 'rgba(255,255,255,0.35)';
  const glow = ok ? '0 0 18px rgba(10,255,0,0.18)' : '0 0 18px rgba(0,240,255,0.10)';

  return (
    <div className="relative" style={{ width: 190, height: 190 }} aria-hidden="true">
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${color}`,
          boxShadow: glow,
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.75) 100%)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, ease: 'linear', repeat: Infinity }}
      />

      <motion.div
        className="absolute inset-[14px] rounded-full"
        style={{ border: `1px solid ${color}`, opacity: 0.7 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 2.2, ease: 'linear', repeat: Infinity }}
      />

      {/* Tick marks */}
      <div className="absolute inset-0">
        {Array.from({ length: 24 }, (_, i) => {
          const isMajor = i % 3 === 0;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                width: 2,
                height: isMajor ? 12 : 7,
                background: ok ? 'rgba(10,255,0,0.5)' : 'rgba(0,240,255,0.25)',
                transform: `rotate(${i * (360 / 24)}deg) translateY(-88px)`,
                transformOrigin: 'center',
              }}
            />
          );
        })}
      </div>

      {/* Scan bar */}
      <motion.div
        className="absolute left-[16px] right-[16px] top-1/2"
        style={{
          height: 2,
          background: ok ? 'rgba(10,255,0,0.65)' : 'rgba(0,240,255,0.55)',
          boxShadow: ok ? '0 0 16px rgba(10,255,0,0.22)' : '0 0 16px rgba(0,240,255,0.18)',
          opacity: 0.75,
        }}
        animate={{ y: [-62, 62, -62] }}
        transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
      />
    </div>
  );

}

function CrosshairOverlay() {
  return (
    <div className="hud-crosshair" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="w-full h-full block">
        <g stroke="rgba(0,240,255,0.75)" strokeWidth="1" fill="none" strokeLinecap="square">
          <path d="M10 28 L10 10 L28 10" />
          <path d="M72 10 L90 10 L90 28" />
          <path d="M10 72 L10 90 L28 90" />
          <path d="M72 90 L90 90 L90 72" />
          <circle cx="50" cy="50" r="22" opacity="0.35" />
        </g>
      </svg>
    </div>
  );
}

function seededHexRain(count: number) {
  let seed = 9001;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 0xffffffff;
  };

  return Array.from({ length: count }, (_, i) => {
    const left = next() * 24;
    const topDelay = next() * 1.6;
    const duration = 2.8 + next() * 2.6;
    const value = next() > 0.5 ? `0x${Math.floor(next() * 255).toString(16).toUpperCase().padStart(2, '0')}` : `${Math.floor(next() * 99).toString().padStart(2, '0')}`;
    const size = 10 + Math.round(next() * 3);
    return { id: `${i}`, left, topDelay, duration, value, size };
  });
}

export default function SplashScreen({ onSelect }: SplashScreenProps) {
  const { playSelect, playBlip } = useSound();

  const [phase, setPhase] = useState<'BLACKOUT' | 'INJECT' | 'LOCKED' | 'GRANT' | 'MENU'>('BLACKOUT');
  const [typed, setTyped] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [authorized, setAuthorized] = useState(false);
  const [flash, setFlash] = useState(false);

  const menuItems: MenuItem[] = useMemo(
    () => [
      { id: 'skills', label: '[ MISSION HUB ]', action: () => onSelect('skills') },
      { id: 'about', label: '[ AGENT DOSSIER ]', action: () => onSelect('about') },
      { id: 'projects', label: '[ CASE FILES ]', action: () => onSelect('projects') },
      { id: 'contact', label: '[ ENCRYPTED COMMS ]', action: () => onSelect('contact') },
    ],
    [onSelect],
  );

  const hexLeft = useMemo(() => seededHexRain(14), []);
  const hexRight = useMemo(() => seededHexRain(14), []);

  useEffect(() => {
    const script = [
      '> INITIALIZING SECURE CONNECTION...',
      '> BYPASSING FIREWALL... [SUCCESS]',
      '> NEGOTIATING UPLINK... [OK]',
    ].join('\n');

    let i = 0;
    const start = performance.now();
    let raf: number | null = null;

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const charsPerSecond = 48;
      const count = Math.min(script.length, Math.floor(elapsed * charsPerSecond));
      setTyped(script.slice(0, count));
      if (count < script.length) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const t1 = window.setTimeout(() => setPhase('INJECT'), 1050);
    const t2 = window.setTimeout(() => setPhase('LOCKED'), 2400);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (phase !== 'MENU') return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        playBlip();
        setSelectedIndex((prev) => (prev + 1) % menuItems.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        playBlip();
        setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
      } else if (e.key === 'Enter') {
        playSelect();
        menuItems[selectedIndex].action();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [phase, selectedIndex, playBlip, playSelect, menuItems]);

  const activeMenuLabel = menuItems[selectedIndex]?.label ?? '';

  const onAuthorize = () => {
    if (phase !== 'LOCKED') return;
    playSelect();
    setAuthorized(true);
    setPhase('GRANT');
    setFlash(true);
    window.setTimeout(() => setFlash(false), 70);
    window.setTimeout(() => setPhase('MENU'), 680);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#020202]">
      {/* Global tactical overlays */}
      <div className="hud-grid" aria-hidden="true" />
      <div className="hud-scanlines" aria-hidden="true" />
      <div className="hud-vignette" aria-hidden="true" />

      {/* Stage 2: 3D grid injection */}
      {phase === 'INJECT' || phase === 'LOCKED' || phase === 'GRANT' || phase === 'MENU' ? (
        <div
          className="absolute inset-0"
          style={{ perspective: '900px', transformStyle: 'preserve-3d' }}
          aria-hidden="true"
        >
          <div className="hud-grid-plane" />
        </div>
      ) : null}

      {/* Minimal hex rain at the sides */}
      {phase === 'INJECT' || phase === 'LOCKED' || phase === 'GRANT' || phase === 'MENU' ? (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {hexLeft.map((h) => (
            <div
              key={`L-${h.id}`}
              className="absolute left-3 dvd-body"
              style={{
                top: '-12%',
                left: `${h.left}px`,
                color: 'rgba(10,255,0,0.28)',
                fontSize: h.size,
                letterSpacing: '0.08em',
                animation: `hud-hex-fall ${h.duration}s linear ${h.topDelay}s infinite`,
              }}
            >
              {h.value}
            </div>
          ))}
          {hexRight.map((h) => (
            <div
              key={`R-${h.id}`}
              className="absolute right-3 dvd-body"
              style={{
                top: '-12%',
                right: `${h.left}px`,
                color: 'rgba(0,240,255,0.20)',
                fontSize: h.size,
                letterSpacing: '0.08em',
                animation: `hud-hex-fall ${h.duration}s linear ${h.topDelay}s infinite`,
              }}
            >
              {h.value}
            </div>
          ))}
        </div>
      ) : null}

      {/* Flash on authorize */}
      {flash ? <div className="absolute inset-0 bg-white" aria-hidden="true" /> : null}

      {/* Corner readouts */}
      <div className="pointer-events-none absolute left-6 top-6 dvd-body text-white/65" style={{ fontSize: 12 }}>
        <div style={{ letterSpacing: '0.14em' }}>SECURE_LINK</div>
        <div className="mt-2" style={{ letterSpacing: '0.12em' }}>SAT: UPLINK</div>
      </div>
      <div className="pointer-events-none absolute right-6 top-6 dvd-body text-white/55 text-right" style={{ fontSize: 12 }}>
        <div style={{ letterSpacing: '0.12em' }}>SYS: STANDBY</div>
        <div className="mt-2" style={{ letterSpacing: '0.12em' }}>CLR: LVL_5</div>
      </div>

      {/* Stage 1: blackout typing */}
      <div className="absolute left-6 top-20 right-6 md:right-auto md:w-[520px]">
        <pre
          className="dvd-body whitespace-pre-wrap"
          style={{
            fontSize: 12,
            lineHeight: 1.7,
            letterSpacing: '0.10em',
            color: phase === 'BLACKOUT' ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.55)',
            textShadow: '0 0 18px rgba(0,240,255,0.08)',
          }}
        >
          {typed}
          <span className="terminal-cursor" aria-hidden="true" />
        </pre>
      </div>

      {/* Stage 3: biometric interaction */}
      <AnimatePresence mode="wait">
        {phase === 'LOCKED' || phase === 'GRANT' ? (
          <motion.div
            key="lock"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <motion.button
              type="button"
              onClick={onAuthorize}
              className="relative px-10 py-8 bg-transparent"
              style={{ cursor: phase === 'LOCKED' ? 'crosshair' : 'default' }}
              disabled={phase !== 'LOCKED'}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <div className="absolute inset-0 rounded-md border border-white/10 bg-black/40" />
              <div className="relative flex flex-col items-center gap-5">
                <ScannerGraphic ok={phase === 'GRANT' || authorized} />

                <div className="dvd-header text-white/80" style={{ fontSize: 14, letterSpacing: '0.18em' }}>
                  {phase === 'LOCKED'
                    ? '>> SYSTEM LOCKED. CLICK TO AUTHORIZE BIOMETRICS. <<'
                    : '[ ACCESS GRANTED: AGENT YUVRAJ ]'}
                </div>

                {phase === 'LOCKED' ? (
                  <div className="dvd-body text-white/50" style={{ fontSize: 11, letterSpacing: '0.12em' }}>
                    // CLICK TO PROCEED
                  </div>
                ) : null}
              </div>
            </motion.button>
          </motion.div>
        ) : null}

        {/* Stage 4: tactical carousel */}
        {phase === 'MENU' ? (
          <motion.div
            key="menu"
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {/* Background globe */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 42, ease: 'linear', repeat: Infinity }}
              style={{ filter: 'drop-shadow(0 0 24px rgba(0,240,255,0.08))' }}
              aria-hidden="true"
            >
              <WireframeGlobe />
            </motion.div>

            {/* Menu title */}
            <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 text-center">
              <div className="dvd-header text-white/80" style={{ fontSize: 16, letterSpacing: '0.22em' }}>
                TACTICAL SELECTOR
              </div>
              <div className="mt-2 dvd-body text-white/45" style={{ fontSize: 11, letterSpacing: '0.12em' }}>
                // ARROWS TO NAVIGATE :: ENTER TO OPEN
              </div>
            </div>

            {/* Cylinder carousel */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: 980, maxWidth: '92%', perspective: '1100px' }}
            >
              <div className="relative h-[220px] flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                {menuItems.map((item, index) => {
                  const isActive = index === selectedIndex;
                  const total = menuItems.length;
                  const raw = (index - selectedIndex + total) % total;
                  const signed = raw > total / 2 ? raw - total : raw;
                  const dist = Math.abs(signed);

                  const x = signed * 260;
                  const rotateY = signed * -45;
                  const scale = isActive ? 1.5 : 0.82;
                  const opacity = isActive ? 1 : 0.38;
                  const blur = isActive ? 0 : 2;
                  const color = isActive ? 'rgba(10,255,0,0.92)' : 'rgba(255,255,255,0.55)';

                  const decoded = useDecodeText(item.label, isActive, 320);

                  return (
                    <motion.button
                      key={item.id}
                      type="button"
                      onMouseEnter={() => {
                        playBlip();
                        setSelectedIndex(index);
                      }}
                      onFocus={() => setSelectedIndex(index)}
                      onClick={() => {
                        playSelect();
                        item.action();
                      }}
                      className="absolute bg-transparent"
                      style={{
                        transformStyle: 'preserve-3d',
                        textTransform: 'uppercase',
                      }}
                      animate={{
                        x,
                        rotateY,
                        scale,
                        opacity,
                        filter: `blur(${blur}px)`,
                      }}
                      transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.9 }}
                    >
                      <div className="relative px-8 py-6">
                        {isActive ? <CrosshairOverlay /> : null}

                        <div
                          className={isActive ? 'crt-glow-text' : ''}
                          style={{
                            color,
                            fontFamily: 'Space Mono, ui-monospace, monospace',
                            fontSize: isActive ? 26 : 18,
                            letterSpacing: '0.22em',
                            textShadow: isActive ? '0 0 16px rgba(10,255,0,0.16)' : 'none',
                          }}
                        >
                          {decoded}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Bottom status */}
            <div className="pointer-events-none absolute left-6 bottom-8 dvd-body text-white/45" style={{ fontSize: 11, letterSpacing: '0.12em' }}>
              {`>> TARGET: ${activeMenuLabel.replace(/\[|\]/g, '').trim()}`}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );

}
