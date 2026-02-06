import React from 'react';
import { ReactLenis } from 'lenis/react';

export default function LenisScroll({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <ReactLenis
      root={false}
      className={className}
      style={style}
      options={{
        autoRaf: true,
        lerp: 0.08,
        smoothWheel: true,
        overscroll: false,
        allowNestedScroll: true,
        autoToggle: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
