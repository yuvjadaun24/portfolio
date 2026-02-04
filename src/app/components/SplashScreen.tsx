import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import LiquidBackground from './LiquidBackground';
import { useSound } from '../hooks/useSound';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const { playSelect } = useSound();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        playSelect();
        onEnter();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onEnter, playSelect]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Underwater liquid background */}
      <LiquidBackground />

      {/* Lo-fi overlays: vignette + subtle scanlines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.32) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
        style={{
          background:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.00) 0px, rgba(0,0,0,0.00) 2px, rgba(0,0,0,0.35) 3px)',
        }}
      />

      {/* Title block (upper-right quadrant) */}
      <motion.div
        className="absolute right-8 top-12 md:right-14 md:top-14 text-right"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Ghost watermark behind title */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-10 select-none"
          style={{
            fontFamily:
              'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Noto Sans", "Liberation Sans", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(92px, 14vw, 190px)',
            letterSpacing: '0.03em',
            color: 'rgba(255,255,255,0.06)',
            transform: 'skewX(-10deg)',
          }}
        >
          DVD
        </div>

        <div
          className="crt-ui-text crt-ui-text-mask text-white/95 leading-tight"
          style={{
            fontFamily:
              'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Noto Sans", "Liberation Sans", sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(26px, 3.2vw, 38px)',
            textShadow:
              '0.5px 0 rgba(255,60,60,0.22), -0.5px 0 rgba(80,180,255,0.22), 0 1px 0 rgba(0,0,0,0.25)',
          }}
        >
          Yuvraj DVD Player
        </div>

        <div
          className="crt-ui-text crt-ui-text-mask mt-2 text-white/80"
          style={{
            fontFamily:
              'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Noto Sans", "Liberation Sans", sans-serif',
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
      </motion.div>

      {/* Floating vibrant blue OSD box (centered, ~20% above bottom) */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-[68%] min-w-[280px] max-w-[860px] bottom-[20%]"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div
          className="w-full"
          style={{
            background: 'rgba(75, 57, 230, 0.90)',
            boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
          }}
        >
          <div
            className="px-5 py-4 md:px-7 md:py-5 text-white"
            style={{
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 'clamp(10px, 1.05vw, 12px)',
              lineHeight: 1.45,
              textShadow:
                '0.8px 0 rgba(255,60,60,0.20), -0.8px 0 rgba(80,180,255,0.20)',
            }}
          >
            <div className="flex items-center gap-2">
              <span>Press</span>
              <span
                className="inline-flex items-center justify-center px-2 py-1"
                style={{
                  background: '#ffffff',
                  color: '#000000',
                  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)',
                }}
              >
                ENTER
              </span>
              <span>to enter Portfolio.</span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span>Press</span>
              <span
                className="inline-flex items-center justify-center px-2 py-1"
                style={{
                  background: '#ffffff',
                  color: '#000000',
                  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)',
                }}
              >
                CLEAR
              </span>
              <span>to erase this message.</span>
            </div>
          </div>
        </div>

        {/* Make the box clickable to enter (matches Enter behavior) */}
        <button
          type="button"
          className="absolute inset-0"
          onClick={() => {
            playSelect();
            onEnter();
          }}
          aria-label="Enter portfolio"
          style={{ background: 'transparent' }}
        />
      </motion.div>
    </div>
  );
}
