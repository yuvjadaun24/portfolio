import { motion, AnimatePresence } from 'motion/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { aboutData, contactData } from '../../data/portfolio-data';
import { useSound } from '../../hooks/useSound';
import ResumePrinterDialog from '../ResumePrinterDialog';
import { ImageWithFallback } from '../figma/ImageWithFallback';

/* ============================================================
   Constants
   ============================================================ */

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!?/\\<>{}[]';

const MISSION_PARAMS = [
  { tag: 'SPECIALIZATION', text: 'Bridging design & code — React, Figma, Tailwind, design systems.' },
  { tag: 'OBJECTIVE', text: 'Delivering pixel-perfect, WCAG-compliant UIs with measurable impact.' },
  { tag: 'TRACK RECORD', text: '+45% engagement, +30% retention, 95% client satisfaction across 7+ projects.' },
  { tag: 'CURRENT STATUS', text: 'Available for deployment. Clearance: Level 5.' },
];

const CORE_CAPACITIES = [
  { label: 'UI ENGINEERING', pct: 95 },
  { label: 'UX STRATEGY', pct: 88 },
  { label: 'DESIGN SYSTEMS', pct: 85 },
  { label: 'MOTION DESIGN', pct: 72 },
  { label: 'USER RESEARCH', pct: 80 },
  { label: 'ACCESSIBILITY', pct: 90 },
];

const TOOLS = [
  { name: 'Figma', color: '#A259FF' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Tailwind', color: '#38BDF8' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Adobe XD', color: '#FF61F6' },
  { name: 'Sketch', color: '#FDB300' },
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'InVision', color: '#FF3366' },
  { name: 'Zeplin', color: '#FDBD39' },
  { name: 'Illustrator', color: '#FF9A00' },
  { name: 'Bootstrap', color: '#7952B3' },
];

const SIGNAL_NODES = [
  { label: 'EMAIL', value: contactData.email, href: `mailto:${contactData.email}`, icon: '✉' },
  { label: 'PHONE', value: contactData.phone, href: `tel:${contactData.phone}`, icon: '☎' },
  { label: 'LINKEDIN', value: 'LinkedIn', href: `https://${contactData.linkedin}`, icon: 'in' },
  { label: 'GITHUB', value: 'GitHub', href: `https://${contactData.github}`, icon: '⌘' },
  { label: 'DRIBBBLE', value: 'Dribbble', href: `https://${contactData.dribbble}`, icon: '◉' },
];

/* ============================================================
   Scramble-Decode text — wave resolves from top to bottom
   ============================================================ */

function useScrambleDecode(text: string, delayMs = 0, durationMs = 600) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);
  const frame = useRef(0);

  useEffect(() => {
    const len = text.length;
    if (!len) return;

    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / durationMs, 1);
        const resolvedCount = Math.floor(progress * len);

        const out = text
          .split('')
          .map((c, i) => {
            if (c === ' ') return ' ';
            if (i < resolvedCount) return c;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join('');

        setDisplay(out);
        if (progress < 1) {
          frame.current = requestAnimationFrame(tick);
        } else {
          setDisplay(text);
          setDone(true);
        }
      };
      frame.current = requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame.current);
    };
  }, [text, delayMs, durationMs]);

  return { display, done };
}

/* ============================================================
   Face Detection Box — parallax corners
   ============================================================ */

function FaceDetectionBox() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setOffset({
        x: ((e.clientX - cx) / cx) * 5,
        y: ((e.clientY - cy) / cy) * 5,
      });
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <motion.div
      className="cmd-face-box"
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <svg className="cmd-face-corner cmd-fc-tl" viewBox="0 0 20 20" fill="none">
        <path d="M0 8 L0 0 L8 0" stroke="rgba(0,224,255,0.7)" strokeWidth="1.5" />
      </svg>
      <svg className="cmd-face-corner cmd-fc-tr" viewBox="0 0 20 20" fill="none">
        <path d="M12 0 L20 0 L20 8" stroke="rgba(0,224,255,0.7)" strokeWidth="1.5" />
      </svg>
      <svg className="cmd-face-corner cmd-fc-bl" viewBox="0 0 20 20" fill="none">
        <path d="M0 12 L0 20 L8 20" stroke="rgba(0,224,255,0.7)" strokeWidth="1.5" />
      </svg>
      <svg className="cmd-face-corner cmd-fc-br" viewBox="0 0 20 20" fill="none">
        <path d="M12 20 L20 20 L20 12" stroke="rgba(0,224,255,0.7)" strokeWidth="1.5" />
      </svg>
      <div className="cmd-face-crosshair" />
      <motion.div
        className="cmd-face-label"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        TRACKING
      </motion.div>
    </motion.div>
  );
}

/* ============================================================
   EKG heartbeat
   ============================================================ */

function EKGLine({ width = 90, height = 20 }: { width?: number; height?: number }) {
  const [d, setD] = useState('');

  useEffect(() => {
    let raf: number;
    let t = 0;

    const tick = () => {
      t += 1.6;
      const pts: string[] = [];
      for (let x = 0; x < width; x++) {
        const phase = (x + t) % 36;
        let y = height / 2;
        if (phase > 14 && phase < 16) y = height * 0.12;
        else if (phase > 16 && phase < 18) y = height * 0.88;
        else if (phase > 18 && phase < 20) y = height * 0.28;
        pts.push(`${x === 0 ? 'M' : 'L'}${x},${y.toFixed(1)}`);
      }
      setD(pts.join(' '));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [width, height]);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="cmd-ekg">
      <path d={d} fill="none" stroke="rgba(10,255,0,0.7)" strokeWidth="1.2" />
    </svg>
  );
}

/* ============================================================
   Experience counter
   ============================================================ */

function ExperienceCounter() {
  const [mode, setMode] = useState(0);
  const labels = useMemo(() => ['3.5+ YRS', '42+ MO', '1,270+ DAYS'], []);

  useEffect(() => {
    const id = setInterval(() => setMode((m) => (m + 1) % labels.length), 2800);
    return () => clearInterval(id);
  }, [labels.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={mode}
        className="cmd-exp-value"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {labels[mode]}
      </motion.span>
    </AnimatePresence>
  );
}

/* ============================================================
   Mini wireframe globe
   ============================================================ */

function MiniGlobe() {
  return (
    <svg viewBox="0 0 32 32" className="cmd-globe">
      <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(0,224,255,0.18)" strokeWidth="0.5" />
      <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="rgba(0,224,255,0.12)" strokeWidth="0.5" />
      <g className="cmd-globe-spin">
        <ellipse cx="16" cy="16" rx="6" ry="13" fill="none" stroke="rgba(0,224,255,0.15)" strokeWidth="0.5" />
        <ellipse cx="16" cy="16" rx="10" ry="13" fill="none" stroke="rgba(0,224,255,0.15)" strokeWidth="0.5" />
      </g>
      <circle cx="22" cy="12" r="1.5" fill="rgba(255,60,60,0.75)" className="cmd-globe-pin" />
      <circle cx="22" cy="12" r="4" fill="none" stroke="rgba(255,60,60,0.35)" strokeWidth="0.5" className="cmd-globe-ping" />
    </svg>
  );
}

/* ============================================================
   Core-capacity progress bar
   ============================================================ */

function CapacityBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  const blocks = 10;
  const filled = Math.round((pct / 100) * blocks);

  return (
    <motion.div
      className="cmd-capacity-row"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <span className="cmd-cap-label">{label}</span>
      <div className="cmd-cap-blocks">
        {Array.from({ length: blocks }, (_, i) => (
          <motion.span
            key={i}
            className={`cmd-cap-block ${i < filled ? 'cmd-cap-block--on' : 'cmd-cap-block--off'}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: delay + i * 0.03, duration: 0.15 }}
          />
        ))}
      </div>
      <span className="cmd-cap-pct">{pct}%</span>
    </motion.div>
  );
}

/* ============================================================
   Tool icon node
   ============================================================ */

function ToolNode({ name, color, delay }: { name: string; color: string; delay: number }) {
  return (
    <motion.div
      className="cmd-tool-node"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.25, ease: 'easeOut' }}
      title={name}
      style={{ '--tool-color': color } as React.CSSProperties}
    >
      <span className="cmd-tool-abbr">{name.slice(0, 2).toUpperCase()}</span>
      <span className="cmd-tool-name">{name}</span>
    </motion.div>
  );
}

/* ============================================================
   Faint background art (fingerprint)
   ============================================================ */

function BgArt() {
  return (
    <div className="cmd-bg-art" aria-hidden="true">
      <svg viewBox="0 0 400 400" fill="none">
        {Array.from({ length: 12 }, (_, i) => {
          const r = 40 + i * 14;
          const w = i % 3 === 0 ? 0.93 : i % 3 === 1 ? 1.07 : 1;
          return (
            <ellipse
              key={i}
              cx="200" cy="200"
              rx={r * w} ry={r / w}
              stroke="rgba(0,224,255,0.03)"
              strokeWidth="0.6"
              transform={`rotate(${i * 8} 200 200)`}
            />
          );
        })}
      </svg>
    </div>
  );
}

/* ============================================================
   Live timestamp
   ============================================================ */

function LiveTimestamp() {
  const [ts, setTs] = useState(() => new Date().toISOString().slice(11, 19));
  useEffect(() => {
    const id = setInterval(() => setTs(new Date().toISOString().slice(11, 19)), 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{ts}</span>;
}

/* ============================================================
   MAIN: About — "Command Deck" Bento Grid
   ============================================================ */

export default function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { playBlip } = useSound();

  /* Scramble-decode for each mission param */
  const decoded = MISSION_PARAMS.map((p, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScrambleDecode(`>> ${p.tag}: ${p.text}`, 200 + i * 120, 550),
  );

  const nameDecoded = useScrambleDecode(aboutData.name.toUpperCase(), 100, 400);
  const roleDecoded = useScrambleDecode(aboutData.role.toUpperCase(), 250, 450);

  return (
    <div className="cmd-deck">
      {/* Background art */}
      <BgArt />

      {/* ─── Top bar ─── */}
      <div className="cmd-topbar">
        <div className="cmd-topbar-left">
          <span className="cmd-badge">CLASSIFIED</span>
          <span className="cmd-file-id">FILE: TS-7734-ECHO</span>
          <span className="cmd-separator">|</span>
          <span className="cmd-date">{new Date().toISOString().slice(0, 10)}</span>
        </div>
        <button
          type="button"
          onClick={() => { playBlip(); setIsResumeOpen(true); }}
          className="cmd-extract-btn"
        >
          ▼ EXTRACT DOSSIER
        </button>
      </div>

      <ResumePrinterDialog open={isResumeOpen} onOpenChange={setIsResumeOpen} />

      {/* ─── Bento Grid ─── */}
      <div className="cmd-grid">

        {/* ════════ COL 1: IDENTITY MODULE ════════ */}
        <div className="cmd-col cmd-col-identity">

          {/* Photo */}
          <div className="cmd-photo-module">
            <div className="cmd-photo-inner">
              <ImageWithFallback
                src="/images/Yuvraj_Profile.png"
                alt={aboutData.name}
                className="h-full w-full object-cover"
                style={{
                  filter: 'saturate(0.2) contrast(1.3) brightness(0.85) sepia(0.65) hue-rotate(140deg)',
                }}
              />
              <div className="cmd-photo-grain" />
              <motion.div
                className="cmd-scan-line"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              />
              <FaceDetectionBox />
            </div>
            <div className="cmd-photo-hud-top">
              <span>◉ LIVE</span>
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ color: 'rgba(255,60,60,0.8)' }}
              >
                ● REC
              </motion.span>
            </div>
            <div className="cmd-photo-hud-bot">
              <span>CAM-04</span>
              <LiveTimestamp />
            </div>
          </div>

          {/* Identity */}
          <div className="cmd-identity-block">
            <div className="cmd-id-name">{nameDecoded.display || '...'}</div>
            <div className="cmd-id-role">{roleDecoded.display || '...'}</div>
          </div>

          {/* Status row */}
          <div className="cmd-status-strip">
            <div className="cmd-status-item">
              <span className="cmd-pulse-dot" />
              <span className="cmd-status-lbl">ONLINE</span>
              <EKGLine width={60} height={14} />
            </div>
            <div className="cmd-status-item">
              <MiniGlobe />
              <span className="cmd-status-lbl">{contactData.location.toUpperCase()}</span>
            </div>
            <div className="cmd-status-item">
              <span className="cmd-status-lbl">SERVICE</span>
              <ExperienceCounter />
            </div>
          </div>

          {/* Signal Nodes — contact links */}
          <div className="cmd-signal-grid">
            {SIGNAL_NODES.map((n) => (
              <a
                key={n.label}
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cmd-signal-node"
                onClick={() => playBlip()}
              >
                <span className="cmd-signal-icon">{n.icon}</span>
                <span className="cmd-signal-lbl">{n.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ════════ COL 2: INTEL CORE ════════ */}
        <div className="cmd-col cmd-col-intel">

          <div className="cmd-intel-header">
            <span className="cmd-intel-title">AGENT PROFILE — FIELD REPORT</span>
            <span className="cmd-intel-class">TS/SCI • HANDLER: [REDACTED]</span>
          </div>

          {/* Mission Parameters — scramble-decoded */}
          <div className="cmd-params">
            {MISSION_PARAMS.map((p, i) => (
              <motion.div
                key={p.tag}
                className="cmd-param-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.3 }}
              >
                <span className={`cmd-param-text ${decoded[i].done ? 'cmd-param-resolved' : 'cmd-param-scrambling'}`}>
                  {decoded[i].display}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Key Intel highlights */}
          <div className="cmd-highlights">
            <div className="cmd-section-divider">KEY INTELLIGENCE</div>
            <div className="cmd-highlight-grid">
              {((aboutData as any).highlights ?? []).map((h: string, i: number) => (
                <motion.div
                  key={i}
                  className="cmd-highlight-card"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                >
                  <span className="cmd-hl-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="cmd-hl-text">{h}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="cmd-intel-footer">
            FILE ENDS — TS-7734-ECHO — DO NOT DISTRIBUTE
          </div>
        </div>

        {/* ════════ COL 3: SKILL MATRIX ════════ */}
        <div className="cmd-col cmd-col-skills">

          <div className="cmd-skills-header">CORE CAPACITIES</div>

          <div className="cmd-capacities">
            {CORE_CAPACITIES.map((c, i) => (
              <CapacityBar key={c.label} label={c.label} pct={c.pct} delay={0.3 + i * 0.08} />
            ))}
          </div>

          <div className="cmd-tools-header">TOOLS & FRAMEWORKS</div>

          <div className="cmd-tools-grid">
            {TOOLS.map((t, i) => (
              <ToolNode key={t.name} name={t.name} color={t.color} delay={0.5 + i * 0.04} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
