import React from 'react';
import { motion } from 'motion/react';

export default function LiquidBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient (Deep Teal -> Deep Ocean) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(0, 102, 128, 0.95) 0%, rgba(0, 26, 41, 1) 100%)',
        }}
      />

      {/* SVG Liquid Waves */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(120, 255, 235, 0.20)" />
            <stop offset="100%" stopColor="rgba(120, 255, 235, 0)" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(90, 220, 200, 0.16)" />
            <stop offset="100%" stopColor="rgba(90, 220, 200, 0)" />
          </linearGradient>
        </defs>

        {/* Animated Wave 1 */}
        <motion.path
          d="M0,100 Q250,80 500,100 T1000,100 T1500,100 T2000,100 L2000,200 L0,200 Z"
          fill="url(#wave-gradient-1)"
          opacity="0.55"
          animate={{
            d: [
              "M0,100 Q250,80 500,100 T1000,100 T1500,100 T2000,100 L2000,200 L0,200 Z",
              "M0,100 Q250,120 500,100 T1000,100 T1500,100 T2000,100 L2000,200 L0,200 Z",
              "M0,100 Q250,80 500,100 T1000,100 T1500,100 T2000,100 L2000,200 L0,200 Z",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated Wave 2 */}
        <motion.path
          d="M0,150 Q300,130 600,150 T1200,150 T1800,150 T2400,150 L2400,250 L0,250 Z"
          fill="url(#wave-gradient-2)"
          opacity="0.45"
          animate={{
            d: [
              "M0,150 Q300,130 600,150 T1200,150 T1800,150 T2400,150 L2400,250 L0,250 Z",
              "M0,150 Q300,170 600,150 T1200,150 T1800,150 T2400,150 L2400,250 L0,250 Z",
              "M0,150 Q300,130 600,150 T1200,150 T1800,150 T2400,150 L2400,250 L0,250 Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        {/* Animated Wave 3 */}
        <motion.path
          d="M0,200 Q400,180 800,200 T1600,200 T2400,200 L2400,300 L0,300 Z"
          fill="url(#wave-gradient-1)"
          opacity="0.30"
          animate={{
            d: [
              "M0,200 Q400,180 800,200 T1600,200 T2400,200 L2400,300 L0,300 Z",
              "M0,200 Q400,220 800,200 T1600,200 T2400,200 L2400,300 L0,300 Z",
              "M0,200 Q400,180 800,200 T1600,200 T2400,200 L2400,300 L0,300 Z",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </svg>

      {/* Soft highlight blooms */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(120, 255, 235, 0.16) 0%, transparent 55%)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 70% 60%, rgba(90, 220, 200, 0.14) 0%, transparent 55%)',
        }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.14, 0.26, 0.14] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full blur-sm"
          style={{
            left: `${15 + i * 10}%`,
            top: `${25 + (i % 3) * 20}%`,
            background: 'rgba(200, 255, 245, 0.10)',
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.08, 0.20, 0.08],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Ambient glow at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(120, 255, 235, 0.10) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </div>
  );
}
