import React from 'react';

export default function SkillBar({
  label,
  level,
  variant,
  rightText,
  icon,
}: {
  label: string;
  /** 0..10 */
  level: number;
  variant: 'green' | 'yellow';
  rightText?: string;
  icon?: React.ReactNode;
}) {
  const blocks = Array.from({ length: 10 }, (_, i) => i);
  const clamped = Math.max(0, Math.min(10, Math.round(level)));

  return (
    <div className="flex items-center gap-4">
      <div className="min-w-[140px] md:min-w-[180px]">
        <div className="flex items-center gap-3">
          {icon ? (
            <div
              className="w-8 h-8 border-2 flex items-center justify-center"
              style={{
                borderColor: 'rgba(255,255,255,0.10)',
                background: 'rgba(255,255,255,0.04)',
                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.22)',
              }}
              aria-hidden="true"
            >
              <div className="text-white/85" style={{ width: 18, height: 18 }}>
                {icon}
              </div>
            </div>
          ) : null}
          <div className="dvd-header text-white/90 crt-glow-text" style={{ fontSize: 18, lineHeight: 1 }}>
            {label}
          </div>
        </div>
        {rightText ? (
          <div className="dvd-body text-white/60 mt-1" style={{ fontSize: 12 }}>
            {rightText}
          </div>
        ) : null}
      </div>

      <div className="flex-1">
        <div
          className="flex items-center gap-1"
          role="meter"
          aria-valuemin={0}
          aria-valuemax={10}
          aria-valuenow={clamped}
          aria-label={`${label} level ${clamped} out of 10`}
        >
          {blocks.map((i) => {
            const isOn = i < clamped;
            return (
              <div
                key={i}
                className={[
                  'skill-block',
                  isOn ? `skill-block--${variant}` : 'skill-block--off',
                ].join(' ')}
                style={{
                  animationDelay: `${i * 55}ms`,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="hidden md:block min-w-[64px] text-right dvd-body text-white/70" style={{ fontSize: 12 }}>
        {clamped}/10
      </div>
    </div>
  );
}
