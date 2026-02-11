import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { contactData } from '../../data/portfolio-data';
import { useSound } from '../../hooks/useSound';

// ─── Helpers ────────────────────────────────────────────

function toHex(text: string) {
  return Array.from(text)
    .map((ch) => `0x${ch.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')}`)
    .join(' ');
}

function useScramble(target: string, active: boolean, durationMs = 400) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$@!%&*_';
  const [text, setText] = useState(target);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!active) {
      setText(target);
      return;
    }
    const chars = Array.from(target);
    const len = chars.length;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      const reveal = Math.floor(t * len);
      setText(
        chars
          .map((ch, i) => (i < reveal ? ch : ch === ' ' ? ' ' : charset[Math.floor(Math.random() * charset.length)]))
          .join(''),
      );
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, active, durationMs]);

  return text;
}

// ─── Relay Node ─────────────────────────────────────────

function RelayNode({
  label,
  status,
  href,
  routeText,
}: {
  label: string;
  status: string;
  href: string;
  routeText: string;
}) {
  const { playSelect } = useSound();
  const [hovered, setHovered] = useState(false);
  const displayLabel = useScramble(label, hovered, 350);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => {
        setHovered(true);
        playSelect();
      }}
      onMouseLeave={() => setHovered(false)}
      className="group flex items-start gap-3 no-underline"
    >
      {/* Antenna node dot */}
      <div className="relative mt-1.5 shrink-0">
        <div
          className={
            'w-2.5 h-2.5 rounded-full border transition-colors duration-200 ' +
            (hovered ? 'bg-green-400 border-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]' : 'bg-cyan-800/50 border-cyan-700/60')
          }
        />
        {/* Horizontal branch from the antenna */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-[18px] w-[18px] h-[1px] bg-cyan-700/40" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span
            className={
              'font-mono transition-colors duration-200 ' +
              (hovered ? 'text-green-300' : 'text-cyan-400/80')
            }
            style={{ fontSize: 11, letterSpacing: '0.14em' }}
          >
            [ {displayLabel} ]
          </span>
          <span
            className={
              'font-mono shrink-0 transition-colors duration-200 ' +
              (hovered ? 'text-green-400' : 'text-cyan-700/70')
            }
            style={{ fontSize: 9, letterSpacing: '0.12em' }}
          >
            {hovered ? '[ ACTIVE ]' : `[ ${status} ]`}
          </span>
        </div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15 }}
              className="overflow-hidden"
            >
              <span className="font-mono text-green-400/70 block mt-0.5" style={{ fontSize: 9, letterSpacing: '0.08em' }}>
                {routeText}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </a>
  );
}

// ─── Hold-to-Transmit Button ────────────────────────────

function HoldToTransmit({ onTransmit, disabled }: { onTransmit: () => void; disabled: boolean }) {
  const [progress, setProgress] = useState(0);
  const holdRef = useRef<number | null>(null);
  const startRef = useRef(0);
  const holdDuration = 1200; // ms

  const start = () => {
    if (disabled) return;
    startRef.current = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startRef.current) / holdDuration, 1);
      setProgress(t);
      if (t < 1) {
        holdRef.current = requestAnimationFrame(tick);
      } else {
        onTransmit();
        setProgress(0);
      }
    };
    holdRef.current = requestAnimationFrame(tick);
  };

  const stop = () => {
    if (holdRef.current) cancelAnimationFrame(holdRef.current);
    holdRef.current = null;
    setProgress(0);
  };

  return (
    <button
      type="button"
      onMouseDown={start}
      onMouseUp={stop}
      onMouseLeave={stop}
      onTouchStart={start}
      onTouchEnd={stop}
      disabled={disabled}
      className={
        'relative w-full font-mono py-3 border border-cyan-700/50 select-none overflow-hidden transition-colors ' +
        (disabled
          ? 'text-cyan-800/50 cursor-not-allowed'
          : 'text-cyan-400 hover:border-cyan-500/60 cursor-pointer')
      }
      style={{ fontSize: 11, letterSpacing: '0.18em', background: 'rgba(0,30,40,0.3)' }}
    >
      {/* Fill bar */}
      <div
        className="absolute inset-0 bg-cyan-500/20 origin-left transition-none"
        style={{ transform: `scaleX(${progress})` }}
      />
      <span className="relative z-10">
        {progress > 0 ? `ENCRYPTING... ${Math.round(progress * 100)}%` : '[ HOLD TO ENCRYPT & TRANSMIT ]'}
      </span>
    </button>
  );
}

// ─── Wireframe Globe (Background) ───────────────────────

function WireframeGlobe() {
  // Lightweight SVG wireframe globe slowly rotating
  const meridians = 8;
  const parallels = 6;
  const r = 180;
  const cx = 200;
  const cy = 200;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]"
      aria-hidden="true"
    >
      <motion.svg
        width={400}
        height={400}
        viewBox="0 0 400 400"
        className="block"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
        style={{ color: 'rgb(6 182 212)' }}
      >
        {/* Outer circle */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={1} />

        {/* Meridians (longitude ellipses) */}
        {Array.from({ length: meridians }, (_, i) => {
          const angle = (i / meridians) * Math.PI;
          const rx = Math.abs(Math.cos(angle)) * r;
          return (
            <ellipse
              key={`m${i}`}
              cx={cx}
              cy={cy}
              rx={rx || 0.5}
              ry={r}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.6}
              opacity={0.7}
            />
          );
        })}

        {/* Parallels (latitude lines) */}
        {Array.from({ length: parallels }, (_, i) => {
          const frac = (i + 1) / (parallels + 1);
          const y = cy - r + frac * 2 * r;
          const localR = Math.sqrt(r * r - (y - cy) * (y - cy));
          return (
            <ellipse
              key={`p${i}`}
              cx={cx}
              cy={y}
              rx={localR}
              ry={localR * 0.25}
              fill="none"
              stroke="currentColor"
              strokeWidth={0.5}
              opacity={0.5}
            />
          );
        })}
      </motion.svg>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────

type TransmitStage = 'idle' | 'encrypting' | 'transmitting' | 'done';

export default function Contact() {
  const [name, setName] = useState('');
  const [brief, setBrief] = useState('');
  const [focused, setFocused] = useState<'name' | 'brief' | null>(null);
  const [stage, setStage] = useState<TransmitStage>('idle');
  const [hexPayload, setHexPayload] = useState('');
  const [txProgress, setTxProgress] = useState(0);

  const devices = useMemo(
    () => [
      {
        label: 'PHONE_LINE',
        status: 'READY',
        href: `tel:${contactData.phone}`,
        routeText: '>> ROUTING TO DIRECT COMMS... [ ENCRYPTED ]',
      },
      {
        label: 'LINKEDIN_DRIVE',
        status: 'CONNECTED',
        href: `https://${contactData.linkedin}`,
        routeText: '>> ROUTING TO NETWORK NODE... [ SECURE ]',
      },
      {
        label: 'DRIBBBLE_DRIVE',
        status: 'CONNECTED',
        href: `https://${contactData.dribbble}`,
        routeText: '>> ROUTING TO PORTFOLIO CACHE... [ SECURE ]',
      },
      {
        label: 'GITHUB_DRIVE',
        status: 'CONNECTED',
        href: `https://${contactData.github}`,
        routeText: '>> ROUTING TO REPOSITORY... [ SECURE ]',
      },
      {
        label: 'EMAIL_RELAY',
        status: 'READY',
        href: `mailto:${contactData.email}`,
        routeText: '>> ROUTING TO MAIL RELAY... [ READY ]',
      },
    ],
    [],
  );

  const canTransmit = name.trim().length > 0 && brief.trim().length > 0 && stage === 'idle';

  const handleTransmit = useCallback(() => {
    if (!canTransmit) return;

    // Stage 1: Encrypt
    setHexPayload(toHex((name + ' ' + brief).slice(0, 80)));
    setStage('encrypting');

    setTimeout(() => {
      // Stage 2: Transmit
      setStage('transmitting');
      setTxProgress(0);
      const start = performance.now();
      const dur = 1200;
      const tick = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        setTxProgress(t);
        if (t < 1) requestAnimationFrame(tick);
        else {
          // Stage 3: Done
          setStage('done');
          setName('');
          setBrief('');
          setHexPayload('');
          setTimeout(() => setStage('idle'), 4000);
        }
      };
      requestAnimationFrame(tick);
    }, 1800);
  }, [canTransmit, name, brief]);

  return (
    <div className="h-full flex flex-col">
      {/* Transparent header strip */}
      <header
        className="relative w-full flex items-center px-6 md:px-8 py-2 z-50 font-mono border-b border-cyan-500/20"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
      >
        <span className="text-cyan-500/70" style={{ fontSize: 10, letterSpacing: '0.18em' }}>
          SECURE TRANSMISSION TERMINAL &nbsp;// CLASSIFICATION: CONFIDENTIAL
        </span>
        <motion.div
          className="absolute bottom-[-1px] h-[2px] w-2 rounded-full"
          style={{
            background: 'white',
            boxShadow: '0 0 6px 2px rgba(0,224,255,0.7), 0 0 14px 4px rgba(0,224,255,0.35)',
          }}
          animate={{ left: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        />
      </header>

      {/* Main content */}
      <div
        className="flex-1 relative w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(2,10,25,0.9) 0%, rgba(2,10,25,0.7) 100%)' }}
      >
        <WireframeGlobe />

        <div className="relative z-10 h-full flex flex-col md:flex-row gap-8 md:gap-12 p-6 md:p-10 overflow-y-auto">
          {/* ─── Left: Payload Terminal (60%) ─── */}
          <div className="flex-[3] flex flex-col justify-center min-w-0">
            {/* Header prompt */}
            <div className="font-mono text-cyan-500/80 mb-8" style={{ fontSize: 11, letterSpacing: '0.14em' }}>
              {'>> ESTABLISHING SECURE CONNECTION... '}
              <motion.span
                className="text-green-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                [ OK ]
              </motion.span>
            </div>

            {/* Overlay states */}
            <AnimatePresence mode="wait">
              {stage === 'encrypting' && (
                <motion.div
                  key="encrypt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-cyan-300/70 whitespace-pre-wrap break-all mb-8"
                  style={{ fontSize: 11, lineHeight: 1.7, letterSpacing: '0.08em' }}
                >
                  {'>> ENCRYPTING PAYLOAD...\n\n'}
                  <span className="text-cyan-400/50">{hexPayload}</span>
                </motion.div>
              )}

              {stage === 'transmitting' && (
                <motion.div
                  key="transmit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-8"
                >
                  <div className="font-mono text-cyan-500/80 mb-3" style={{ fontSize: 10, letterSpacing: '0.14em' }}>
                    {'>> TRANSMITTING PAYLOAD... '}{Math.round(txProgress * 100)}%
                  </div>
                  <div className="w-full h-[3px] bg-cyan-900/40 rounded overflow-hidden">
                    <div
                      className="h-full bg-cyan-400 transition-none"
                      style={{ width: `${txProgress * 100}%`, boxShadow: '0 0 12px rgba(0,224,255,0.5)' }}
                    />
                  </div>
                </motion.div>
              )}

              {stage === 'done' && (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-green-400 mb-8"
                  style={{ fontSize: 13, letterSpacing: '0.14em', textShadow: '0 0 18px rgba(74,222,128,0.4)' }}
                >
                  [ PAYLOAD DELIVERED. NO LOGS RETAINED. ]
                </motion.div>
              )}

              {stage === 'idle' && (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {/* IDENT_SENDER */}
                  <div className="mb-8">
                    <label
                      className="block font-mono text-cyan-700/80 mb-2"
                      style={{ fontSize: 10, letterSpacing: '0.16em' }}
                    >
                      {'> IDENT_SENDER //:'}
                    </label>
                    <div className="relative">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent outline-none text-cyan-100 font-mono py-2 border-b border-cyan-800/50 focus:border-cyan-400/60 transition-colors"
                        style={{ fontSize: 13, letterSpacing: '0.06em' }}
                        placeholder="..."
                        maxLength={64}
                      />
                      {focused === 'name' && (
                        <span className="terminal-cursor absolute right-0 bottom-2" aria-hidden="true" />
                      )}
                    </div>
                  </div>

                  {/* PAYLOAD_DATA */}
                  <div className="mb-8 relative">
                    <label
                      className="block font-mono text-cyan-700/80 mb-2"
                      style={{ fontSize: 10, letterSpacing: '0.16em' }}
                    >
                      {'> PAYLOAD_DATA //:'}
                    </label>
                    <textarea
                      value={brief}
                      onChange={(e) => setBrief(e.target.value.slice(0, 2048))}
                      onFocus={() => setFocused('brief')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-cyan-950/10 border border-cyan-900/40 focus:border-cyan-500/50 outline-none text-cyan-100 font-mono p-4 resize-none transition-colors"
                      style={{ fontSize: 12, lineHeight: 1.6, letterSpacing: '0.04em', minHeight: 130 }}
                      placeholder="ENTER MESSAGE..."
                      maxLength={2048}
                    />
                    {/* Memory counter */}
                    <span
                      className="absolute bottom-2 right-3 font-mono text-cyan-800/60 pointer-events-none"
                      style={{ fontSize: 10, letterSpacing: '0.08em' }}
                    >
                      [ MEMORY: {brief.length} / 2048 BYTES ]
                    </span>
                  </div>

                  {/* Transmit button */}
                  <HoldToTransmit onTransmit={handleTransmit} disabled={!canTransmit} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ─── Right: Network Relays (40%) ─── */}
          <div className="flex-[2] md:border-l md:border-cyan-900/40 md:pl-8 flex flex-col justify-center min-w-0">
            <div
              className="font-mono text-cyan-600/60 mb-6"
              style={{ fontSize: 10, letterSpacing: '0.28em' }}
            >
              AVAILABLE RELAYS
            </div>

            {/* Antenna line */}
            <div className="relative pl-[18px]">
              {/* Vertical antenna */}
              <div className="absolute left-[4px] top-0 bottom-0 w-[1px] bg-cyan-800/30" />

              <div className="flex flex-col gap-5">
                {devices.map((d) => (
                  <RelayNode
                    key={d.label}
                    label={d.label}
                    status={d.status}
                    href={d.href}
                    routeText={d.routeText}
                  />
                ))}
              </div>
            </div>

            {/* Footer telemetry */}
            <div className="mt-8 font-mono text-cyan-800/40" style={{ fontSize: 9, letterSpacing: '0.12em' }}>
              {`ALL CHANNELS MONITORED // ZERO-LOG POLICY`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
