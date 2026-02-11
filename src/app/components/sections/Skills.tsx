import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import RadarSkillVisualizer from '../RadarSkillVisualizer';

function LiveClock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');
      const ms = String(Math.floor(d.getMilliseconds() / 10)).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss}:${ms}`);
    };
    tick();
    const id = setInterval(tick, 37); // ~27fps
    return () => clearInterval(id);
  }, []);
  return <>{time}</>;
}

const SIGNAL_BARS = [
  { dur: 1.1, heights: ['35%', '95%', '20%', '70%', '40%'] },
  { dur: 0.9, heights: ['50%', '30%', '85%', '25%', '60%'] },
  { dur: 1.3, heights: ['20%', '75%', '45%', '100%', '30%'] },
  { dur: 1.0, heights: ['60%', '40%', '90%', '35%', '55%'] },
  { dur: 1.2, heights: ['45%', '100%', '25%', '65%', '40%'] },
];

export default function Skills() {
  return (
    <div className="h-full flex flex-col">
      {/* Transparent Telemetry Banner */}
      <header
        className="relative w-full flex justify-between items-center px-6 md:px-8 py-2 z-50 font-mono border-b border-cyan-500/20"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
      >
        {/* ZONE 1: Operative Identity */}
        <div className="flex flex-col gap-0.5 min-w-0">
          <span
            className="text-cyan-400 font-bold"
            style={{ fontSize: 10, letterSpacing: '0.18em' }}
          >
            [ OP_ID: Y. S. JADAUN ]
          </span>
          <span
            className="text-cyan-700/80"
            style={{ fontSize: 9, letterSpacing: '0.14em' }}
          >
            // DESIGNATION: UI/UX INTEL
          </span>
        </div>

        {/* ZONE 2: Active Signal */}
        <div className="flex flex-col items-center justify-center opacity-50">
          <div className="flex gap-[3px] items-end" style={{ height: 14 }}>
            {SIGNAL_BARS.map((bar, i) => (
              <motion.div
                key={i}
                className="w-[3px] rounded-[1px] bg-cyan-400"
                animate={{ height: bar.heights }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: bar.dur,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
          <span className="text-cyan-600/70 mt-0.5" style={{ fontSize: 8, letterSpacing: '0.16em' }}>
            FREQUENCY: STABLE
          </span>
        </div>

        {/* ZONE 3: Global Telemetry */}
        <div className="flex flex-col items-end gap-0.5 min-w-0">
          <span className="text-cyan-600/70" style={{ fontSize: 9, letterSpacing: '0.12em' }}>
            LOC: REGION_IND &nbsp;// UPLINK: SECURE
          </span>
          <span className="text-cyan-300 font-bold tabular-nums" style={{ fontSize: 10, letterSpacing: '0.14em' }}>
            SYS_TIME: <LiveClock />
          </span>
        </div>

        {/* Scanning Node — glowing dot sliding across bottom edge */}
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

      {/* Strict overflow clipping: this view must never scroll. */}
      <div
        className="flex-1 relative w-full h-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(10,20,60,0.15) 0%, rgba(10,20,60,0.05) 100%)' } as any}
      >
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <RadarSkillVisualizer />
        </motion.div>
      </div>
    </div>
  );
}
