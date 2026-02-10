import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Fingerprint } from 'lucide-react';

/* ---------- types ---------- */
type ScanState = 'idle' | 'scanning' | 'success' | 'aborted';

interface BiometricScannerProps {
  /** Called once the 2-second hold completes */
  onVerified: () => void;
  /** Whether the scanner is interactive */
  disabled?: boolean;
}

/* ---------- oscillator scanning hum ---------- */
function useScanHum() {
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ osc: OscillatorNode; lfo: OscillatorNode; gain: GainNode } | null>(null);

  const start = useCallback(() => {
    try {
      if (!ctxRef.current) {
        ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = ctxRef.current;

      // Low "data-crunching" hum
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.value = 90;

      // LFO for pulsing
      const lfo = ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 4.5;

      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 25;

      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      const gain = ctx.createGain();
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      lfo.start();

      // Fade in
      gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.15);

      nodesRef.current = { osc, lfo, gain };
    } catch {
      // audio unavailable
    }
  }, []);

  const stop = useCallback(() => {
    try {
      if (!nodesRef.current || !ctxRef.current) return;
      const { osc, lfo, gain } = nodesRef.current;
      const ctx = ctxRef.current;
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.12);
      osc.stop(ctx.currentTime + 0.15);
      lfo.stop(ctx.currentTime + 0.15);
      nodesRef.current = null;
    } catch {
      // ok
    }
  }, []);

  // cleanup on unmount
  useEffect(() => stop, [stop]);

  return { start, stop };
}

/* ---------- success chime ---------- */
function playSuccessChime() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const now = ctx.currentTime;

    [523.25, 659.25, 783.99].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;

      const g = ctx.createGain();
      g.gain.setValueAtTime(0, now + i * 0.09);
      g.gain.linearRampToValueAtTime(0.12, now + i * 0.09 + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.25);

      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(now + i * 0.09);
      osc.stop(now + i * 0.09 + 0.3);
    });
  } catch {
    // audio unavailable
  }
}

/* ---------- abort buzz ---------- */
function playAbortBuzz() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.value = 180;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.1, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch {
    // ok
  }
}

/* ========== COMPONENT ========== */
const SCAN_DURATION_MS = 2000;

export default function BiometricScanner({ onVerified, disabled = false }: BiometricScannerProps) {
  const [state, setState] = useState<ScanState>('idle');
  const [progress, setProgress] = useState(0); // 0–100
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef(0);
  const drainRafRef = useRef<number | null>(null);
  const progressRef = useRef(0); // mirror for drain
  const hum = useScanHum();

  // ---- Drain animation (abort or idle reset) ----
  const drainTo = useCallback((target: number, durationMs: number, onDone?: () => void) => {
    if (drainRafRef.current) cancelAnimationFrame(drainRafRef.current);
    const start = performance.now();
    const from = progressRef.current;

    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      const v = from + (target - from) * t;
      progressRef.current = v;
      setProgress(v);
      if (t < 1) {
        drainRafRef.current = requestAnimationFrame(tick);
      } else {
        drainRafRef.current = null;
        onDone?.();
      }
    };
    drainRafRef.current = requestAnimationFrame(tick);
  }, []);

  // ---- Start scan (long press begin) ----
  const startScan = useCallback(() => {
    if (disabled || state === 'success') return;

    // Cancel any running drain
    if (drainRafRef.current) {
      cancelAnimationFrame(drainRafRef.current);
      drainRafRef.current = null;
    }

    setState('scanning');
    hum.start();

    const startedAt = performance.now();
    const fromProgress = progressRef.current;
    startTimeRef.current = startedAt;

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const remainingFraction = 1 - fromProgress / 100;
      const totalNeeded = SCAN_DURATION_MS * remainingFraction;
      const p = fromProgress + ((elapsed / totalNeeded) * (100 - fromProgress));
      const clamped = Math.min(p, 100);

      progressRef.current = clamped;
      setProgress(clamped);

      if (clamped >= 100) {
        // SUCCESS
        setState('success');
        hum.stop();
        playSuccessChime();
        window.setTimeout(() => onVerified(), 850);
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [disabled, state, hum, onVerified, drainTo]);

  // ---- Stop scan (release early) ----
  const stopScan = useCallback(() => {
    if (state !== 'scanning') return;

    // Cancel the fill
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    hum.stop();

    if (progressRef.current >= 100) return; // already success

    // Abort: flash red then drain back
    setState('aborted');
    playAbortBuzz();

    window.setTimeout(() => {
      drainTo(0, 400, () => {
        setState('idle');
      });
    }, 500);
  }, [state, hum, drainTo]);

  // ---- Cleanup on unmount ----
  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (drainRafRef.current) cancelAnimationFrame(drainRafRef.current);
    };
  }, []);

  // ---- Derived colors ----
  const isSuccess = state === 'success';
  const isAborted = state === 'aborted';
  const isScanning = state === 'scanning';

  const primaryColor = isSuccess
    ? '#0aff00'
    : isAborted
      ? '#ff3333'
      : '#00E0FF';

  const glowColor = isSuccess
    ? 'rgba(10, 255, 0, 0.6)'
    : isAborted
      ? 'rgba(255, 51, 51, 0.5)'
      : 'rgba(0, 224, 255, 0.6)';

  // ---- Status text ----
  const statusText = isSuccess
    ? '[ IDENTITY VERIFIED ]'
    : isAborted
      ? '[ SCAN INTERRUPTED ]'
      : isScanning
        ? `ANALYZING BIOMETRICS... ${Math.floor(progress)}%`
        : '[ PRESS & HOLD TO AUTHORIZE ]';

  const statusColor = isSuccess
    ? 'rgba(10, 255, 0, 0.9)'
    : isAborted
      ? 'rgba(255, 70, 70, 0.9)'
      : isScanning
        ? 'rgba(0, 224, 255, 0.85)'
        : 'rgba(0, 224, 255, 0.55)';

  const FP_SIZE = 100;
  const CONTAINER_SIZE = 140;

  return (
    <div className="flex flex-col items-center select-none">
      {/* Targeting Reticle Container */}
      <div
        className="relative group"
        style={{ width: CONTAINER_SIZE, height: CONTAINER_SIZE, cursor: disabled ? 'not-allowed' : 'pointer' }}
        onMouseDown={startScan}
        onMouseUp={stopScan}
        onMouseLeave={stopScan}
        onTouchStart={startScan}
        onTouchEnd={stopScan}
        onTouchCancel={stopScan}
      >
        {/* Corner brackets (targeting reticle) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox={`0 0 ${CONTAINER_SIZE} ${CONTAINER_SIZE}`}
          fill="none"
          aria-hidden="true"
        >
          {/* Top-left */}
          <path d={`M4 26 L4 4 L26 4`} stroke={primaryColor} strokeWidth={2} opacity={0.7} />
          {/* Top-right */}
          <path d={`M${CONTAINER_SIZE - 26} 4 L${CONTAINER_SIZE - 4} 4 L${CONTAINER_SIZE - 4} 26`} stroke={primaryColor} strokeWidth={2} opacity={0.7} />
          {/* Bottom-left */}
          <path d={`M4 ${CONTAINER_SIZE - 26} L4 ${CONTAINER_SIZE - 4} L26 ${CONTAINER_SIZE - 4}`} stroke={primaryColor} strokeWidth={2} opacity={0.7} />
          {/* Bottom-right */}
          <path d={`M${CONTAINER_SIZE - 26} ${CONTAINER_SIZE - 4} L${CONTAINER_SIZE - 4} ${CONTAINER_SIZE - 4} L${CONTAINER_SIZE - 4} ${CONTAINER_SIZE - 26}`} stroke={primaryColor} strokeWidth={2} opacity={0.7} />

          {/* Cross-hairs (center ticks) */}
          <line x1={CONTAINER_SIZE / 2} y1="0" x2={CONTAINER_SIZE / 2} y2="7" stroke={primaryColor} strokeWidth={1} opacity={0.3} />
          <line x1={CONTAINER_SIZE / 2} y1={CONTAINER_SIZE - 7} x2={CONTAINER_SIZE / 2} y2={CONTAINER_SIZE} stroke={primaryColor} strokeWidth={1} opacity={0.3} />
          <line x1="0" y1={CONTAINER_SIZE / 2} x2="7" y2={CONTAINER_SIZE / 2} stroke={primaryColor} strokeWidth={1} opacity={0.3} />
          <line x1={CONTAINER_SIZE - 7} y1={CONTAINER_SIZE / 2} x2={CONTAINER_SIZE} y2={CONTAINER_SIZE / 2} stroke={primaryColor} strokeWidth={1} opacity={0.3} />
        </svg>

        {/* Fingerprint icon area — centered inside reticle */}
        <div
          className="absolute"
          style={{
            width: FP_SIZE,
            height: FP_SIZE,
            top: (CONTAINER_SIZE - FP_SIZE) / 2,
            left: (CONTAINER_SIZE - FP_SIZE) / 2,
          }}
        >
          {/* Static dim background fingerprint (always visible) */}
          <Fingerprint
            className="absolute inset-0 w-full h-full"
            strokeWidth={1}
            style={{ color: isAborted ? 'rgba(255, 50, 50, 0.12)' : 'rgba(0, 224, 255, 0.1)' }}
          />

          {/* Animated "filling" fingerprint — clipped by overflow-hidden height */}
          <div
            className="absolute inset-0 overflow-hidden transition-none"
            style={{ height: `${isSuccess ? 100 : progress}%` }}
          >
            <Fingerprint
              className="w-full h-full"
              strokeWidth={1.5}
              style={{
                /* height must match parent's full size so the icon doesn't squish */
                height: FP_SIZE,
                color: primaryColor,
                filter: `drop-shadow(0 0 10px ${glowColor}) drop-shadow(0 0 4px ${glowColor})`,
                transition: isSuccess ? 'color 0.3s, filter 0.3s' : 'none',
              }}
            />
          </div>

          {/* Scanning laser line — follows progress */}
          <AnimatePresence>
            {isScanning && (
              <motion.div
                className="absolute left-0 right-0 z-20"
                style={{
                  height: 2,
                  top: `${progress}%`,
                  background: `linear-gradient(90deg, transparent 0%, ${primaryColor} 20%, ${primaryColor} 80%, transparent 100%)`,
                  boxShadow: `0 0 12px ${glowColor}, 0 0 25px ${glowColor}`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ opacity: { duration: 0.12 } }}
              />
            )}
          </AnimatePresence>

          {/* Success flash */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                className="absolute inset-0 z-30"
                initial={{ opacity: 0.55 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                style={{ background: `radial-gradient(circle, rgba(10,255,0,0.2) 0%, transparent 70%)` }}
              />
            )}
          </AnimatePresence>

          {/* Abort flash */}
          <AnimatePresence>
            {isAborted && (
              <motion.div
                className="absolute inset-0 z-30"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 0, 0.35, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{ background: 'rgba(255, 50, 50, 0.15)' }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="mt-4 overflow-hidden"
        style={{
          width: CONTAINER_SIZE,
          height: 3,
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 2,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: primaryColor,
            boxShadow: `0 0 6px ${glowColor}`,
            borderRadius: 2,
            transition: state === 'aborted' ? 'none' : 'width 0.05s linear',
          }}
        />
      </div>

      {/* Status text */}
      <motion.div
        className="mt-3 dvd-body text-center"
        animate={{
          opacity: isAborted ? [1, 0.3, 1, 0.3, 1] : 1,
        }}
        transition={{ duration: isAborted ? 0.5 : 0.2 }}
        style={{
          fontSize: 11,
          letterSpacing: '0.18em',
          color: statusColor,
          minHeight: 16,
        }}
      >
        {statusText}
      </motion.div>

      {/* Sub-readout */}
      <div
        className="mt-1 dvd-body text-white/30 text-center"
        style={{ fontSize: 9, letterSpacing: '0.14em' }}
      >
        {isScanning
          ? `DELTA-T ${((progress / 100) * 2).toFixed(1)}s // HASH: ${Math.floor(progress * 41.7).toString(16).toUpperCase().padStart(4, '0')}`
          : isSuccess
            ? 'CLEARANCE: LEVEL-5 AUTHORIZED'
            : 'BIOMETRIC MODULE v4.2.1 // READY'}
      </div>
    </div>
  );
}
