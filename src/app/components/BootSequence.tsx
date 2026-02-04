import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LiquidBackground from './LiquidBackground';
import { useSound } from '../hooks/useSound';
import { useDevice } from '../device/DeviceContext';

type BootPhase = 'BLACK' | 'WARMUP' | 'READING' | 'SPLASH' | 'BLINK';

export default function BootSequence() {
  const { transitionTo } = useDevice();
  const { playSelect } = useSound();
  const [phase, setPhase] = useState<BootPhase>('BLACK');

  const timeline = useMemo(
    () => [
      { at: 0, phase: 'BLACK' as const },
      { at: 500, phase: 'WARMUP' as const },
      { at: 1500, phase: 'READING' as const },
      { at: 3000, phase: 'SPLASH' as const },
      { at: 4500, phase: 'BLINK' as const },
      { at: 4700, phase: 'SPLASH' as const },
      { at: 4900, phase: 'BLINK' as const },
      { at: 5100, phase: 'SPLASH' as const },
      { at: 5400, phase: null },
    ],
    [],
  );

  useEffect(() => {
    const timers: number[] = [];
    const start = performance.now();

    timeline.forEach((t) => {
      timers.push(
        window.setTimeout(() => {
          if (t.phase) setPhase(t.phase);
          else transitionTo('MENU_ROOT');

          // placeholder audio cues: use playSelect until Howler engine exists
          // (boot click/laser seek/spin-up will be routed through SoundManager later)
          if (t.at === 500 || t.at === 4500) playSelect();
        }, t.at),
      );
    });

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [playSelect, timeline, transitionTo]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {phase !== 'BLACK' ? (
          <motion.div
            key="signal"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {/* The signal background comes alive after warmup */}
            <LiquidBackground />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* CRT warmup: horizontal line that blooms */}
      <AnimatePresence>
        {phase === 'WARMUP' ? (
          <motion.div
            key="warmup"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ width: 2, height: 2, opacity: 0.0 }}
            animate={{ width: '70vw', height: 2, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              background: 'rgba(255,255,255,0.85)',
              boxShadow: '0 0 18px rgba(255,255,255,0.35)',
            }}
          />
        ) : null}
      </AnimatePresence>

      {/* Reading disc OSD */}
      {phase === 'READING' ? (
        <div
          className="absolute left-6 top-6 text-white/85"
          style={{
            fontFamily: "'Press Start 2P', cursive",
            fontSize: 12,
            filter: 'blur(0.2px)',
            textShadow: '0 0 8px rgba(255,255,255,0.15)',
          }}
        >
          READING DISC...
        </div>
      ) : null}

      {/* Splash */}
      {phase === 'SPLASH' ? (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {/* ghost watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-12 top-10 select-none"
            style={{
              fontFamily:
                'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Noto Sans", "Liberation Sans", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(110px, 16vw, 220px)',
              letterSpacing: '0.03em',
              color: 'rgba(255,255,255,0.06)',
              transform: 'skewX(-10deg)',
            }}
          >
            DVD
          </div>

          <div
            className="absolute right-8 top-14 md:right-14 md:top-16 text-right"
            style={{
              fontFamily:
                'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Noto Sans", "Liberation Sans", sans-serif',
            }}
          >
            <div
              className="crt-ui-text crt-ui-text-mask text-white/95"
              style={{
                fontWeight: 500,
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                textShadow:
                  '0.6px 0 rgba(255,60,60,0.22), -0.6px 0 rgba(80,180,255,0.22), 0 1px 0 rgba(0,0,0,0.25)',
              }}
            >
              Yuvraj DVD Player
            </div>
            <div
              className="crt-ui-text crt-ui-text-mask mt-2 text-white/80"
              style={{
                fontWeight: 500,
                fontSize: 'clamp(11px, 1.3vw, 14px)',
                letterSpacing: '0.12em',
                textShadow:
                  '0.4px 0 rgba(255,60,60,0.18), -0.4px 0 rgba(80,180,255,0.18)',
              }}
            >
              <div>UI/UX DESIGN</div>
              <div className="mt-1">WEB DEVELOPMENT</div>
            </div>
          </div>
        </motion.div>
      ) : null}

      {/* Sync loss blink */}
      {phase === 'BLINK' ? <div className="absolute inset-0 bg-black" /> : null}
    </div>
  );
}
