import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { contactData } from '@/app/data/portfolio-data';
import LenisScroll from '@/app/components/LenisScroll';
import { useSound } from '@/app/hooks/useSound';

export default function Contact() {
  const { playSelect } = useSound();
  const [name, setName] = useState('');
  const [brief, setBrief] = useState('');
  const [focused, setFocused] = useState<'name' | 'brief' | null>(null);

  const devices = useMemo(
    () => {
      const list = [
        { label: 'LINKEDIN_DRIVE', status: 'CONNECTED', href: `https://${contactData.linkedin}` },
        { label: 'DRIBBBLE_DRIVE', status: 'CONNECTED', href: `https://${contactData.dribbble}` },
        { label: 'GITHUB_DRIVE', status: 'CONNECTED', href: `https://${contactData.github}` },
        { label: 'EMAIL_RELAY', status: 'READY', href: `mailto:${contactData.email}` },
      ];

      if (contactData.phone) {
        list.unshift({ label: 'PHONE_LINE', status: 'READY', href: `tel:${contactData.phone}` });
      }

      return list;
    },
    [],
  );

  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#6633ff] px-4 md:px-6 py-3 border-b-2 border-black/20">
        <div className="dvd-header text-white crt-glow-text" style={{ fontSize: 22, lineHeight: 1 }}>
          REGISTRATION / WARNING
        </div>
      </div>

      <LenisScroll
        className="flex-1 overflow-y-auto"
        style={{ background: 'linear-gradient(180deg, rgba(10,20,60,0.55) 0%, rgba(10,20,60,0.25) 100%)' } as any}
      >
        <div className="h-full flex items-center justify-center p-6 md:p-10">
          <motion.div
            className="w-full max-w-3xl border-4"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            style={{
              borderColor: 'rgba(255,255,255,0.10)',
              background: 'rgba(0,0,0,0.22)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 60px rgba(0,0,0,0.35)',
            }}
          >
            <div className="p-6 md:p-8">
              <div
                className="dvd-header text-center crt-glow-text"
                style={{
                  fontSize: 30,
                  color: 'rgba(255,255,255,0.92)',
                  animation: 'rec-blink 1.1s steps(2, end) infinite',
                }}
              >
                ARE YOU READY TO START THE PROJECT?
              </div>

              <div className="mt-8 space-y-5 dvd-body">
                {/* Name */}
                <div
                  className="border-2 px-4 py-3"
                  style={{ borderColor: 'rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="text-white/70" style={{ fontSize: 12 }}>
                    [ ENTER NAME_ ]
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent outline-none text-white crt-glow-text"
                      style={{ fontFamily: 'Space Mono, monospace', fontSize: 14 }}
                      placeholder="TYPE HERE"
                    />
                    {focused === 'name' ? <span className="terminal-cursor" aria-hidden="true" /> : null}
                  </div>
                </div>

                {/* Brief */}
                <div
                  className="border-2 px-4 py-3"
                  style={{ borderColor: 'rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.04)' }}
                >
                  <div className="text-white/70" style={{ fontSize: 12 }}>
                    [ ENTER MISSION BRIEF_ ]
                  </div>
                  <div className="mt-2 relative">
                    <textarea
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      onFocus={() => setFocused('brief')}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent outline-none text-white crt-glow-text resize-none"
                      style={{ fontFamily: 'Space Mono, monospace', fontSize: 14, minHeight: 110 }}
                      placeholder="DESCRIBE THE MISSION…"
                    />
                    {focused === 'brief' ? (
                      <span className="terminal-cursor absolute right-2 bottom-2" aria-hidden="true" />
                    ) : null}
                  </div>
                </div>
              </div>

              {/* External devices */}
              <div className="mt-8 border-t-2 pt-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <div className="dvd-header text-white/90 crt-glow-text" style={{ fontSize: 22 }}>
                  EXTERNAL DEVICES
                </div>

                <div className="mt-4 space-y-3 dvd-body">
                  {devices.map((d) => (
                    <a
                      key={d.label}
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => playSelect()}
                      className="block border-2 px-4 py-3 transition-colors"
                      style={{
                        borderColor: 'rgba(255,255,255,0.10)',
                        background: 'rgba(255,255,255,0.04)',
                      }}
                      onFocus={() => {}}
                    >
                      <motion.div
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.12 }}
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="text-white/85 crt-glow-text" style={{ fontSize: 13 }}>
                          [ {d.label} :: {d.status} ]
                        </div>
                        <div className="text-yellow-200/90" style={{ fontSize: 12 }}>
                          CONNECT
                        </div>
                      </motion.div>

                      {/* Invert-on-hover look */}
                      <style>{`
                        a[href="${d.href}"]:hover {
                          background: rgba(230, 211, 46, 0.92) !important;
                          border-color: rgba(0,0,0,0.35) !important;
                        }
                        a[href="${d.href}"]:hover * {
                          color: rgba(0,0,0,0.92) !important;
                          text-shadow: none !important;
                        }
                      `}</style>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </LenisScroll>
    </div>
  );
}
