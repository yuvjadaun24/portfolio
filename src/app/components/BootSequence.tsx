import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useSound } from '../hooks/useSound';
import BiometricScanner from './BiometricScanner';

interface BootSequenceProps {
  onUnlock: () => void;
}

const LazySpline = React.lazy(() => import('@splinetool/react-spline'));

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function seededHexRain(count: number) {
  let seed = 7331;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 0xffffffff;
  };

  return Array.from({ length: count }, (_, i) => {
    const size = 10 + Math.floor(next() * 10);
    const left = Math.floor(next() * 140);
    const duration = 4.2 + next() * 5.2;
    const topDelay = next() * 4.2;
    const value =
      next() > 0.55
        ? '0x' + Math.floor(next() * 0xffffff).toString(16).padStart(6, '0')
        : '101' + Math.floor(next() * 1000);

    return {
      id: i,
      size,
      left,
      duration,
      topDelay,
      value,
    };
  });
}

function TypewriterLine({ text, active, charMs = 50 }: { text: string; active: boolean; charMs?: number }) {
  const [out, setOut] = useState('');

  useEffect(() => {
    if (!active) {
      setOut('');
      return;
    }

    let i = 0;
    setOut('');
    const t = window.setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) window.clearInterval(t);
    }, charMs);

    return () => window.clearInterval(t);
  }, [text, active, charMs]);

  return <>{out}</>;
}

// Lock icon removed — replaced by BiometricScanner UI

/* ScannerGraphic replaced by BiometricScanner component */

/* LockIcon replaced by BiometricScanner component */

export default function BootSequence({ onUnlock }: BootSequenceProps) {
  const { playBlip, playSelect } = useSound();

  // 0: Hardware init, 1: Security layer, 2: Access portal
  const [bootPhase, setBootPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [unlockState, setUnlockState] = useState<'LOCKED' | 'UNLOCKING' | 'UNLOCKED'>('LOCKED');
  const [warp, setWarp] = useState(false);
  const [splineReady, setSplineReady] = useState(false);

  const hexLeft = useMemo(() => seededHexRain(14), []);
  const hexRight = useMemo(() => seededHexRain(14), []);

  const phase0Lines = useMemo(
    () => [
      '> KERNEL_PANIC_CHECK... [OK]',
      '> MOUNTING VOLUMES... [OK]',
      '> DECRYPTING UI ASSETS... [OK]',
      '> LOADING CRYPTO DRIVERS... [OK]',
      '> ESTABLISHING SECURE CONNECTION TO: 192.168.0.██',
    ],
    [],
  );

  const [lines, setLines] = useState<string[]>([]);
  const logRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (bootPhase !== 0) return;

    setLines([]);
    let idx = 0;

    const t = window.setInterval(() => {
      const nextLine = phase0Lines[idx];
      if (nextLine) {
        setLines((prev) => [...prev, nextLine]);
        playBlip();
      }
      idx += 1;
      if (idx >= phase0Lines.length - 1) window.clearInterval(t);
    }, 140);

    const toSecurity = window.setTimeout(() => {
      setBootPhase(1);
    }, 2500);

    return () => {
      window.clearInterval(t);
      window.clearTimeout(toSecurity);
    };
  }, [bootPhase, phase0Lines, playBlip]);

  useEffect(() => {
    if (!logRef.current) return;
    logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [lines]);

  useEffect(() => {
    if (bootPhase !== 1) return;

    // Clear terminal instantly (with a tiny glitch burst via AnimatePresence in render)
    setLines([]);

    setProgress(0);
    setUnlockState('LOCKED');

    const start = performance.now();
    let raf: number | null = null;

    const tick = (now: number) => {
      const p = clamp((now - start) / 900, 0, 1);
      setProgress(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setUnlockState('UNLOCKING');
        window.setTimeout(() => setUnlockState('UNLOCKED'), 260);
      }
    };

    raf = requestAnimationFrame(tick);

    const toPortal = window.setTimeout(() => {
      setBootPhase(2);
    }, 1500);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.clearTimeout(toPortal);
    };
  }, [bootPhase]);

  const canInteract = bootPhase === 2 && !warp;

  const onScanVerified = () => {
    if (!canInteract) return;
    playSelect();
    setWarp(true);

    window.setTimeout(() => {
      onUnlock();
    }, 780);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#020202]">
      {/* Background Layer: Spline 3D Scene (Biometric Access Portal only) */}
      <AnimatePresence>
        {bootPhase === 2 ? (
          <motion.div
            key="spline-bg"
            className="fixed top-0 right-0 h-screen w-[200vmax] z-0 pointer-events-auto overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <motion.div
              className="absolute inset-0 origin-right translate-x-[75%] scale-[1.6] opacity-80 mix-blend-screen"
              initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
              animate={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                opacity: splineReady ? 0.8 : 0,
              }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <Suspense fallback={null}>
                <LazySpline
                  className="w-full h-full"
                  scene="https://prod.spline.design/aIfUG7KfspmqBf6K/scene.splinecode"
                  onLoad={() => setSplineReady(true)}
                />
              </Suspense>

              {/* Sci-fi sweep flash */}
              <motion.div
                className="pointer-events-none absolute inset-y-0 right-0 w-[45%]"
                initial={{ x: '120%', opacity: 0 }}
                animate={{ x: '-220%', opacity: [0, 0.8, 0] }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                style={{
                  background:
                    'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,240,255,0.16) 45%, rgba(10,255,0,0.10) 65%, rgba(0,0,0,0) 100%)',
                  mixBlendMode: 'screen',
                }}
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* HUD overlays above Spline */}
      <div className="hud-grid z-10 pointer-events-none" aria-hidden="true" />
      <div className="hud-scanlines z-10 pointer-events-none" aria-hidden="true" />
      <div className="hud-vignette z-10 pointer-events-none" aria-hidden="true" />

      {/* Phase 1: pitch black + terminal logs */}
      <AnimatePresence mode="wait">
        {bootPhase === 0 ? (
          <motion.div
            key="phase0"
            className="absolute inset-0 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <div className="absolute dvd-body" style={{ color: 'rgba(10,255,0,0.78)', fontSize: 'clamp(10px, 1.6vw, 13px)', letterSpacing: '0.10em', left: 'clamp(12px, 3vw, 28px)', top: 'clamp(12px, 3vh, 28px)' }}>
              <span>{'>'}</span>
              <motion.span
                className="inline-block"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
              >
                {'_'}
              </motion.span>
            </div>

            <div
              ref={logRef}
              className="absolute dvd-body"
              style={{
                maxHeight: 320,
                overflow: 'hidden',
                color: 'rgba(10,255,0,0.72)',
                fontSize: 'clamp(10px, 1.6vw, 13px)',
                lineHeight: 1.7,
                letterSpacing: '0.10em',
                left: 'clamp(12px, 3vw, 28px)',
                top: 'clamp(36px, 6vh, 52px)',
                right: 'clamp(12px, 3vw, 28px)',
              }}
            >
              {lines.slice(0, -1).map((l, i) => (
                <div key={i}>{l}</div>
              ))}
              <div>
                <TypewriterLine text={phase0Lines[phase0Lines.length - 1] ?? ''} active={lines.length >= phase0Lines.length - 1} />
              </div>
            </div>
          </motion.div>
        ) : null}

        {/* Phase 2: security protocols */}
        {bootPhase === 1 ? (
          <motion.div
            key="phase1"
            className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
          >
            {/* tiny glitch flash */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.85, 0] }}
              transition={{ duration: 0.22 }}
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(0,0,0,0))' }}
              aria-hidden="true"
            />

            <div className="text-center">
              {/* lock icon removed */}

              <motion.div
                className="mt-6 dvd-header"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  fontSize: 'clamp(11px, 1.8vw, 14px)',
                  letterSpacing: '0.20em',
                  color: 'rgba(255,70,70,0.85)',
                }}
              >
                {'SECURITY PROTOCOLS ACTIVE'}
              </motion.div>

              <div className="mt-5 dvd-body" style={{ fontSize: 'clamp(10px, 1.6vw, 12px)', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)' }}>
                {`[${'/'.repeat(Math.floor(progress / 5)).padEnd(20, ' ')}] ${progress}%`}
              </div>

              <div className="mt-3 mx-auto" style={{ width: 'clamp(200px, 40vw, 360px)', height: 2, background: 'rgba(255,255,255,0.08)' }}>
                <motion.div
                  style={{ height: 2, background: 'rgba(255,70,70,0.65)' }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.08, ease: 'linear' }}
                />
              </div>

              <AnimatePresence>
                {unlockState === 'UNLOCKED' ? (
                  <motion.div
                    className="mt-5 dvd-body"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ fontSize: 'clamp(10px, 1.6vw, 12px)', letterSpacing: '0.16em', color: 'rgba(10,255,0,0.75)' }}
                  >
                    {'>> ACCESS GRANTED'}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : null}

        {/* Phase 3: access portal */}
        {bootPhase === 2 ? (
          <motion.div
            key="phase2"
            className="absolute inset-0 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0" style={{ perspective: '900px', transformStyle: 'preserve-3d' }} aria-hidden="true">
              <motion.div
                className="hud-grid-plane"
                initial={{ transform: 'translateZ(-480px) rotateX(68deg) scale(1.05)' }}
                animate={{ transform: warp ? 'translateZ(180px) rotateX(66deg) scale(1.35)' : 'translateZ(-260px) rotateX(68deg) scale(1.08)' }}
                transition={{ duration: warp ? 0.7 : 1.2, ease: 'easeInOut' }}
              />
            </div>

            {/* Minimal hex rain at the sides */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {hexLeft.map((h) => (
                <div
                  key={`L-${h.id}`}
                  className="absolute left-3 dvd-body"
                  style={{
                    top: '-12%',
                    left: `${h.left}px`,
                    color: 'rgba(10,255,0,0.22)',
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
                    color: 'rgba(0,240,255,0.18)',
                    fontSize: h.size,
                    letterSpacing: '0.08em',
                    animation: `hud-hex-fall ${h.duration}s linear ${h.topDelay}s infinite`,
                  }}
                >
                  {h.value}
                </div>
              ))}
            </div>

            <div className="absolute dvd-body text-white/65" style={{ fontSize: 'clamp(10px, 1.6vw, 12px)', letterSpacing: '0.12em', left: 'clamp(12px, 3vw, 28px)', top: 'clamp(12px, 3vh, 28px)' }}>
              {'> BIOMETRIC ACCESS PORTAL'}
            </div>
            <div className="absolute dvd-body text-white/55 text-right" style={{ fontSize: 'clamp(10px, 1.6vw, 12px)', letterSpacing: '0.12em', right: 'clamp(12px, 3vw, 28px)', top: 'clamp(12px, 3vh, 28px)' }}>
              {'SYS: AUTH_GATE / SECURE'}
            </div>

            <div className="absolute inset-0 flex items-center justify-start pl-[8%]">
              <div className="flex flex-col items-center">
                <div className="dvd-header text-white/80 text-center" style={{ fontSize: 'clamp(11px, 1.8vw, 14px)', letterSpacing: '0.18em' }}>
                  {'[ BIOMETRIC SECURITY LOCK ]'}
                </div>
                <div className="mt-2 dvd-body text-white/55 text-center" style={{ fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.12em' }}>
                  {'Authorize to unlock the terminal.'}
                </div>

                <div className="mt-5 pointer-events-auto">
                  <BiometricScanner
                    onVerified={onScanVerified}
                    disabled={!canInteract}
                  />
                </div>

                <div className="mt-3 dvd-body text-white/45 text-center" style={{ fontSize: 'clamp(9px, 1.5vw, 11px)', letterSpacing: '0.12em' }}>
                  {warp ? 'STATUS: ENTERING' : 'STATUS: READY'}
                </div>
              </div>
            </div>

            {/* Warp speed */}
            <AnimatePresence>
              {warp ? (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12 }}
                >
                  <motion.div
                    className="absolute left-1/2 top-1/2 rounded-full"
                    style={{
                      width: 280,
                      height: 280,
                      marginLeft: -140,
                      marginTop: -140,
                      background:
                        'radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(10,255,0,0.18) 45%, rgba(10,255,0,0.34) 70%, rgba(10,255,0,0.00) 100%)',
                      filter: 'saturate(1.15) contrast(1.08)',
                    }}
                    initial={{ scale: 1, opacity: 0.2 }}
                    animate={{ scale: 14, opacity: 1 }}
                    transition={{ duration: 0.72, ease: 'easeIn' }}
                  />
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.92 }}
                    transition={{ duration: 0.72, ease: 'easeIn' }}
                    style={{ background: 'rgba(10,255,0,0.06)' }}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
