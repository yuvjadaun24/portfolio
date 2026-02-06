import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { skills } from '@/app/data/portfolio-data';
import type { Skill } from '@/app/data/portfolio-data';
import LenisScroll from '@/app/components/LenisScroll';
import SkillBar from '@/app/components/SkillBar';
import { PixelCode, PixelDocument, PixelMonitor, PixelUser } from '@/app/components/icons/PixelIcons';
import {
  PixelLayout,
  PixelPalette,
  PixelSparkles,
  PixelTarget,
} from '@/app/components/icons/PixelMisc';

export default function Skills() {
  const levelMap: Record<string, number> = {
    Figma: 10,
    'Adobe XD': 8,
    Sketch: 7,
    'Adobe Illustrator': 7,
    InVision: 7,
    Zeplin: 7,

    HTML5: 8,
    CSS3: 8,
    'Bootstrap 5': 8,
    Tailwind: 9,
    'JavaScript (Basic)': 6,

    'Accessibility (WCAG)': 8,
    'Responsive Web Design': 9,
    'Responsive Layouts': 8,
    'Interaction Design': 9,

    'User Research': 9,
    'Information Architecture': 8,
    Wireframing: 9,
    'Rapid Prototyping': 9,
    'Usability Testing': 8,
    'Heuristic Evaluation': 8,
    'Design Thinking': 8,
  };

  const iconFor = (skill: string): ReactNode => {
    const s = skill.toLowerCase();

    // Design tools
    if (
      s.includes('figma') ||
      s.includes('photoshop') ||
      s.includes('illustrator') ||
      s.includes('sketch') ||
      s.includes('adobe')
    ) {
      return <PixelPalette className="w-full h-full" />;
    }

    // Code / frameworks
    if (
      s.includes('react') ||
      s.includes('next') ||
      s.includes('typescript') ||
      s.includes('javascript')
    ) {
      return <PixelCode className="w-full h-full" />;
    }

    // Markup / styling
    if (s.includes('html') || s.includes('css') || s.includes('tailwind')) {
      return <PixelMonitor className="w-full h-full" />;
    }

    // UI frameworks / layout systems
    if (
      s.includes('material') ||
      s.includes('bootstrap') ||
      s.includes('ant') ||
      s.includes('design')
    ) {
      return <PixelLayout className="w-full h-full" />;
    }

    // UX / research
    if (s.includes('user research')) return <PixelUser className="w-full h-full" />;
    if (s.includes('accessibility')) return <PixelTarget className="w-full h-full" />;

    // Planning / docs / wireframes
    if (s.includes('wire')) return <PixelDocument className="w-full h-full" />;

    // Generic “feature/extra”
    if (s.includes('proto') || s.includes('responsive')) return <PixelSparkles className="w-full h-full" />;

    return <PixelCode className="w-full h-full" />;
  };

  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#6633ff] px-4 md:px-6 py-3 border-b-2 border-black/20">
        <div className="dvd-header text-white crt-glow-text" style={{ fontSize: 22, lineHeight: 1 }}>
          A/V SETUP MENU
        </div>
      </div>

      <LenisScroll
        className="flex-1 overflow-y-auto"
        style={{ background: 'linear-gradient(180deg, rgba(10,20,60,0.55) 0%, rgba(10,20,60,0.25) 100%)' } as any}
      >
        <motion.div
          className="max-w-5xl mx-auto p-6 md:p-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {skills.map((group: Skill, groupIndex: number) => {
            const header =
              group.category === 'Design Tools'
                ? 'VIDEO SETTINGS'
                : group.category === 'Frontend'
                  ? 'AUDIO SETTINGS'
                  : group.category === 'UI Frameworks'
                    ? 'OUTPUT MATRIX'
                    : 'SYSTEM';

            const variant: 'green' | 'yellow' =
              group.category === 'Design Tools' ? 'green' : group.category === 'Frontend' ? 'yellow' : 'yellow';

            return (
              <div
                key={group.category}
                className="border-4 mb-6"
                style={{
                  borderColor: 'rgba(255,255,255,0.10)',
                  background: 'rgba(0,0,0,0.18)',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="px-5 py-3 border-b-2"
                  style={{
                    borderColor: 'rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.04)',
                  }}
                >
                  <div className="dvd-header text-white crt-glow-text" style={{ fontSize: 22, lineHeight: 1 }}>
                    {header}
                  </div>
                </div>

                <div className="p-5 md:p-6 space-y-4">
                  {group.items.map((item: string) => (
                    <SkillBar
                      key={item}
                      label={item.toUpperCase()}
                      level={levelMap[item] ?? 6}
                      variant={variant}
                      icon={iconFor(item)}
                    />
                  ))}
                </div>
              </div>
            );
          })}

          <div
            className="border-4 p-5"
            style={{
              borderColor: 'rgba(255,255,255,0.10)',
              background: 'rgba(0,0,0,0.18)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
            }}
          >
            <div className="dvd-body text-white/75" style={{ fontSize: 12, lineHeight: 1.8 }}>
              <span className="crt-glow-text">TIP:</span> BARS MAY FLUCTUATE DUE TO SIGNAL NOISE.
            </div>
          </div>
        </motion.div>
      </LenisScroll>
    </div>
  );
}
