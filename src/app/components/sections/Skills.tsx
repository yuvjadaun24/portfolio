import { motion } from 'motion/react';
import LenisScroll from '../LenisScroll';
import RadarSkillVisualizer from '../RadarSkillVisualizer';

export default function Skills() {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#6633ff] px-4 md:px-6 py-3 border-b-2 border-black/20">
        <div className="dvd-header text-white crt-glow-text" style={{ fontSize: 22, lineHeight: 1 }}>
          SYSTEM DIAGNOSTICS
        </div>
      </div>

      <LenisScroll
        className="flex-1 overflow-y-auto"
        style={{ background: 'linear-gradient(180deg, rgba(10,20,60,0.55) 0%, rgba(10,20,60,0.25) 100%)' } as any}
      >
        <motion.div
          className="max-w-6xl mx-auto p-6 md:p-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <RadarSkillVisualizer />
        </motion.div>
      </LenisScroll>
    </div>
  );
}
