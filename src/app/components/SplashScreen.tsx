import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import LiquidBackground from './LiquidBackground';
import { useSound } from '../hooks/useSound';
import { PixelUser, PixelCode, PixelDocument, PixelMail } from './icons/PixelIcons';
import type { Section } from './Sidebar';

interface SplashScreenProps {
  onSelect: (section: Section) => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
}

export default function SplashScreen({ onSelect }: SplashScreenProps) {
  const { playSelect } = useSound();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems: MenuItem[] = useMemo(
    () => [
      {
        id: 'about',
        label: 'About Me',
        icon: PixelUser,
        action: () => onSelect('about'),
      },
      {
        id: 'portfolio',
        label: 'Portfolio',
        icon: PixelCode,
        action: () => onSelect('projects'),
      },
      {
        id: 'resume',
        label: 'Resume',
        icon: PixelDocument,
        action: () => onSelect('about'),
      },
      {
        id: 'contact',
        label: 'Contact Me',
        icon: PixelMail,
        action: () => onSelect('contact'),
      },
    ],
    [onSelect],
  );

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        playSelect();
        setSelectedIndex((prev) => (prev + 1) % menuItems.length);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        playSelect();
        setSelectedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
      } else if (e.key === 'Enter') {
        playSelect();
        menuItems[selectedIndex].action();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedIndex, playSelect, menuItems]);

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
          DVD Test
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

      {/* DVD Menu Carousel - Centered */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] min-w-[320px] max-w-[900px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {/* Main Menu Container */}
        <div
          className="w-full border-4"
          style={{
            background: 'linear-gradient(135deg, rgba(20, 30, 80, 0.95) 0%, rgba(30, 50, 120, 0.95) 100%)',
            borderColor: 'rgba(100, 150, 255, 0.8)',
            boxShadow: '0 0 40px rgba(50, 100, 255, 0.4), inset 0 0 30px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Title Bar */}
          <div
            className="px-6 py-3 border-b-4"
            style={{
              background: 'linear-gradient(180deg, rgba(80, 120, 255, 0.9) 0%, rgba(50, 80, 200, 0.9) 100%)',
              borderColor: 'rgba(100, 150, 255, 0.8)',
            }}
          >
            <div
              className="text-white text-center"
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 'clamp(12px, 1.5vw, 16px)',
                textShadow: '2px 2px 0 rgba(0,0,0,0.5), 0 0 10px rgba(255,255,255,0.3)',
                letterSpacing: '0.05em',
              }}
            >
              ★ MAIN MENU ★
            </div>
          </div>

          {/* Menu Items Carousel */}
          <div className="px-8 py-10 md:px-12 md:py-14">
            {/* Viewport keeps off-center items "behind" without unmounting */}
            <div
              className="relative mx-auto w-full overflow-hidden"
              style={{
                height: 'clamp(220px, 32vh, 360px)',
                perspective: '900px',
              }}
            >
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                const isSelected = index === selectedIndex;

                const total = menuItems.length;
                const raw = (index - selectedIndex + total) % total;
                const signed = raw > total / 2 ? raw - total : raw; // shortest wrap distance
                const distance = Math.abs(signed);

                // Show only the active item plus its immediate neighbors.
                const isVisible = distance <= 1;

                // Visual tuning: center item is dominant, others recede "behind".
                const clampedDistance = Math.min(distance, 2);
                const y = signed * 104;
                const scale = isSelected ? 1 : 0.9;
                const opacity = isSelected ? 1 : 0.26;
                const brightness = isSelected ? 1 : 0.82;
                const blurPx = isSelected ? 0 : 0.35;

                return (
                  <motion.div
                    key={item.id}
                    animate={{
                      y,
                      scale,
                      opacity: isVisible ? opacity : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 560, damping: 42, mass: 0.95 }}
                    style={{
                      zIndex: 10 - distance,
                      pointerEvents: isVisible ? 'auto' : 'none',
                      filter: `brightness(${brightness}) blur(${blurPx}px)`,
                      transformOrigin: 'center',
                    }}
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 mx-auto"
                  >
                    <button
                      type="button"
                      aria-current={isSelected ? 'true' : undefined}
                      aria-hidden={!isVisible}
                      onClick={() => {
                        playSelect();
                        if (isSelected) item.action();
                        else setSelectedIndex(index);
                      }}
                      className="group relative block w-full"
                      style={{ background: 'transparent' }}
                    >
                      <div
                        className="relative px-6 py-5 md:px-8 md:py-6 border-4 transition-all duration-200"
                        style={{
                          background: isSelected
                            ? 'linear-gradient(90deg, rgba(255, 200, 0, 0.25) 0%, rgba(255, 150, 0, 0.25) 100%)'
                            : 'rgba(30, 50, 100, 0.35)',
                          borderColor: isSelected ? '#FFD700' : 'rgba(100, 150, 255, 0.45)',
                          boxShadow: isSelected
                            ? '0 0 20px rgba(255, 215, 0, 0.6), inset 0 0 20px rgba(255, 215, 0, 0.2)'
                            : 'inset 0 0 10px rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        {/* Selection indicator */}
                        {isSelected ? (
                          <motion.div
                            className="absolute left-2 top-1/2 -translate-y-1/2"
                            initial={false}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.16 }}
                          >
                            <div
                              className="text-yellow-300"
                              style={{
                                fontFamily: "'Press Start 2P', cursive",
                                fontSize: 'clamp(14px, 1.8vw, 20px)',
                                textShadow: '0 0 8px rgba(255, 215, 0, 0.8)',
                              }}
                            >
                              ▶
                            </div>
                          </motion.div>
                        ) : null}

                        <div className="flex items-center justify-center gap-4 md:gap-6">
                          {/* Icon */}
                          <div
                            className="flex-shrink-0"
                            style={{
                              filter: isSelected
                                ? 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))'
                                : 'none',
                            }}
                          >
                            <IconComponent
                              className={`w-10 h-10 md:w-12 md:h-12 ${
                                isSelected ? 'text-yellow-300' : 'text-blue-200'
                              }`}
                            />
                          </div>

                          {/* Label */}
                          <div
                            className={`${isSelected ? 'text-yellow-300' : 'text-blue-100'}`}
                            style={{
                              fontFamily: "'Press Start 2P', cursive",
                              fontSize: 'clamp(10px, 1.2vw, 14px)',
                              textShadow: isSelected
                                ? '0 0 10px rgba(255, 215, 0, 0.6), 2px 2px 0 rgba(0,0,0,0.4)'
                                : '1px 1px 0 rgba(0,0,0,0.5)',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {item.label.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Instructions Footer */}
          <div
            className="px-6 py-3 border-t-4"
            style={{
              background: 'rgba(20, 30, 60, 0.8)',
              borderColor: 'rgba(100, 150, 255, 0.6)',
            }}
          >
            <div
              className="text-blue-200 text-center"
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: 'clamp(7px, 0.9vw, 10px)',
                lineHeight: 1.6,
                textShadow: '1px 1px 0 rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white/10 border border-blue-300/30 rounded">↑↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="hidden md:inline text-blue-300/50">•</span>
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-white/10 border border-yellow-300/30 rounded text-yellow-300">
                    ENTER
                  </kbd>
                  <span>Select</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
