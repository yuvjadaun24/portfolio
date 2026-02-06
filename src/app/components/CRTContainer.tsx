import React from 'react';
import CRTEffect from './CRTEffect';

type CRTContainerProps = {
  /** DVD signal (menus, video, etc.) */
  children: React.ReactNode;

  /** Optional OSD: TV-internal overlays that should sit ABOVE the CRT shader */
  osd?: React.ReactNode;

  /** Optional classnames for sizing/positioning */
  className?: string;
};

export default function CRTContainer({ children, osd, className }: CRTContainerProps) {
  return (
    <div className={['crt-container relative h-full w-full', className].filter(Boolean).join(' ')}>
      <div className="crt-screen relative h-full w-full">
        {/* Signal layer (DVD output) */}
        <div className="crt-signal relative h-full w-full">{children}</div>

        {/* Post-processing chain (clipped to glass) */}
        <CRTEffect />

        {/* Glass reflection */}
        <div className="crt-glass pointer-events-none absolute inset-0 z-[10001]" />

        {/* OSD sits on top of the shader (TV internal), still clipped to the screen */}
        {osd ? <div className="crt-osd pointer-events-none absolute inset-0 z-[12000]">{osd}</div> : null}
      </div>
    </div>
  );
}
