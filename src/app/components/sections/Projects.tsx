import { motion, AnimatePresence } from 'motion/react';
import { useMemo, useState } from 'react';
import { projects } from '@/app/data/portfolio-data';
import { useSound } from '@/app/hooks/useSound';

function projectThumbSrc(id: string) {
  // Optional: drop screenshots in public/images/projects (e.g., 01.jpg, 02.jpg)
  return `/images/projects/${id}.jpg`;
}

export default function Projects() {
  const scenes = useMemo(() => projects.slice(0, 4), []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { playBlip } = useSound();

  const selected = scenes[selectedIndex];

  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#6633ff] px-4 md:px-6 py-3 border-b-2 border-black/20">
        <h2 className="text-white uppercase tracking-wider" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px' }}>
          <span className="hidden md:inline" style={{ fontSize: '14px' }}>Projects</span>
          <span className="md:hidden">Projects</span>
        </h2>
      </div>

      <div className="flex-1 relative overflow-hidden bg-[#0033cc]">
        {/* Scene grid */}
        <div className="absolute inset-0 p-4 md:p-8" style={{ paddingBottom: '96px' }}>
          <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-4 md:gap-6">
            {scenes.map((project, index) => {
              const isActive = index === selectedIndex;

              return (
                <motion.button
                  key={project.id}
                  type="button"
                  onMouseEnter={() => {
                    playBlip();
                    setSelectedIndex(index);
                  }}
                  onFocus={() => setSelectedIndex(index)}
                  onClick={() => setSelectedIndex(index)}
                  className="relative overflow-hidden border-4"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(10, 20, 60, 0.92) 0%, rgba(20, 40, 110, 0.92) 55%, rgba(10, 20, 60, 0.92) 100%)',
                    borderColor: isActive ? '#E6D32E' : 'rgba(0, 0, 0, 0.25)',
                    boxShadow: isActive
                      ? '0 0 0 2px rgba(230, 211, 46, 0.25), 0 0 34px rgba(230, 211, 46, 0.35), inset 0 0 0 1px rgba(255,255,255,0.08)'
                      : 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                  }}
                >
                  {/* Bezel */}
                  <div
                    className="absolute inset-0"
                    style={{
                      boxShadow:
                        'inset 0 0 0 2px rgba(255,255,255,0.05), inset 0 0 24px rgba(0,0,0,0.45)',
                    }}
                  />

                  {/* Thumbnail area (placeholder). Drop real shots into /public/images/projects/01.jpg etc. */}
                  <motion.div
                    className="absolute inset-[10px] md:inset-[14px]"
                    animate={{ scale: isActive ? 1.02 : 1 }}
                    transition={{ duration: 0.22 }}
                    style={{
                      background:
                        'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 55%), repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0 6px, rgba(0,0,0,0.08) 6px 12px)',
                      border: '2px solid rgba(0,0,0,0.35)',
                      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)',
                    }}
                  />

                  {/* Scene label (minimal, DVD-like) */}
                  <div
                    className="absolute left-3 top-3 px-2 py-1"
                    style={{
                      background: 'rgba(0, 0, 0, 0.35)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      fontFamily: "'Press Start 2P', cursive",
                      fontSize: 9,
                      letterSpacing: '0.08em',
                      color: 'rgba(255,255,255,0.80)',
                    }}
                  >
                    SCENE {project.id}
                  </div>

                  {/* Active glow pulse */}
                  {isActive ? (
                    <div className="absolute inset-0 pointer-events-none crt-neon-yellow" />
                  ) : null}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Info footer */}
        <div
          className="absolute left-0 right-0 bottom-0 border-t-4"
          style={{
            background: 'rgba(20, 30, 60, 0.92)',
            borderColor: 'rgba(0,0,0,0.25)',
          }}
        >
          <div className="px-4 md:px-8 py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div
                      className="text-white crt-glow-text"
                      style={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: 'clamp(10px, 1.1vw, 12px)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {selected.title.toUpperCase()}
                    </div>
                    <div className="mt-2 text-white/75" style={{ fontSize: 12 }}>
                      {selected.description}
                    </div>
                  </div>

                  <div className="flex-shrink-0 text-right">
                    <div
                      className="text-yellow-200 crt-glow-text"
                      style={{
                        fontFamily: "'Press Start 2P', cursive",
                        fontSize: 10,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {selected.year}
                    </div>
                    <div className="mt-2 flex flex-wrap justify-end gap-2 max-w-[340px]">
                      {selected.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1"
                          style={{
                            background: 'rgba(102, 51, 255, 0.65)',
                            color: 'rgba(255,255,255,0.92)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            fontFamily: "'Press Start 2P', cursive",
                            fontSize: 8,
                            letterSpacing: '0.06em',
                          }}
                        >
                          {tech.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
