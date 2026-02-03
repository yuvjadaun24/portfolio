import React from 'react';

// CRT screen effects for authentic retro look

export default function CRTEffect() {
  return (
    <>
      {/* Curvature / barrel-ish distortion layer (subtle) */}
      <div className="crt-curvature pointer-events-none fixed inset-0 z-[9996]" />

      {/* Heavy vignette */}
      <div className="crt-vignette pointer-events-none fixed inset-0 z-[9997]" />

      {/* Chromatic aberration (RGB split) */}
      <div className="crt-rgb pointer-events-none fixed inset-0 z-[9998]" />

      {/* Scanlines + interlacing + flicker */}
      <div className="crt-scanlines pointer-events-none fixed inset-0 z-[9999]" />

      {/* Analog noise / grain */}
      <div className="crt-noise pointer-events-none fixed inset-0 z-[10000]" />
    </>
  );
}
