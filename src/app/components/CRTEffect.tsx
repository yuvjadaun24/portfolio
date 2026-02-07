import React from 'react';

// CRT screen effects for authentic retro look

export default function CRTEffect() {
  return (
    <div id="crt-overlay-stack" className="crt-overlay-stack" aria-hidden="true">
      <div className="crt-curvature pointer-events-none absolute inset-0" />
      <div className="crt-vignette pointer-events-none absolute inset-0" />
      <div className="crt-rgb pointer-events-none absolute inset-0" />
      <div className="crt-scanlines pointer-events-none absolute inset-0" />
      <div className="crt-noise pointer-events-none absolute inset-0" />
      <div className="crt-glass pointer-events-none absolute inset-0" />
    </div>
  );
}
