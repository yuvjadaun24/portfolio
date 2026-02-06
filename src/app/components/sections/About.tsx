import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { aboutData, contactData } from '@/app/data/portfolio-data';
import LenisScroll from '@/app/components/LenisScroll';
import ResumePrinterDialog from '@/app/components/ResumePrinterDialog';
// Update the import path below to the correct relative path if the file exists:
import { ImageWithFallback } from '../figma/ImageWithFallback';
// If the file is not in '../figma/', adjust the path accordingly.

export default function About() {
  const storyLines = useMemo(() => {
    const raw = aboutData.bio
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);

    // Keep it DVD-ish: short lines.
    return raw.length ? raw : [aboutData.bio];
  }, []);

  const [typed, setTyped] = useState('');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const full = storyLines.map((l) => `> ${l}`).join('\n');
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) window.clearInterval(id);
    }, 14);

    return () => window.clearInterval(id);
  }, [storyLines]);

  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#6633ff] px-4 md:px-6 py-3 border-b-2 border-black/20">
        <div className="flex items-center justify-between gap-3">
          <div className="dvd-header text-white crt-glow-text" style={{ fontSize: 22, lineHeight: 1 }}>
            CAST & CREW BIO
          </div>

          <button
            type="button"
            onClick={() => setIsResumeOpen(true)}
            className="px-3 py-2 border-2"
            style={{
              borderColor: 'rgba(0,0,0,0.25)',
              background: 'rgba(230, 211, 46, 0.92)',
              fontFamily: "'Press Start 2P', cursive",
              fontSize: 9,
              letterSpacing: '0.06em',
              color: 'rgba(0,0,0,0.92)',
            }}
          >
            OPEN RESUME
          </button>
        </div>
      </div>

      <ResumePrinterDialog open={isResumeOpen} onOpenChange={setIsResumeOpen} />

      <LenisScroll className="flex-1 overflow-y-auto" style={{ background: 'linear-gradient(180deg, rgba(10,20,60,0.55) 0%, rgba(10,20,60,0.25) 100%)' } as any}>
        <motion.div
          className="h-full w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="h-full w-full grid grid-cols-1 md:grid-cols-10 gap-6 p-6 md:p-10">
            {/* Left: Headshot */}
            <div className="md:col-span-3">
              <div
                className="border-4"
                style={{
                  borderColor: 'rgba(255,255,255,0.12)',
                  background: 'rgba(0,0,0,0.25)',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 40px rgba(0,0,0,0.35)',
                }}
              >
                <div className="p-4">
                  <div
                    className="aspect-[3/4] w-full overflow-hidden border-2"
                    style={{
                      borderColor: 'rgba(0,0,0,0.35)',
                      background: 'rgba(255,255,255,0.06)',
                    }}
                  >
                    <ImageWithFallback
                      src="/images/Yuvraj_Profile.png"
                      alt={aboutData.name}
                      className="h-full w-full object-cover"
                      style={{ filter: 'grayscale(1) contrast(1.2) brightness(0.95)' }}
                    />
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="dvd-disc" aria-hidden="true" />
                    <div className="dvd-body text-white/70" style={{ fontSize: 12 }}>
                      LOADING BIO DATA...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Data stream */}
            <div className="md:col-span-7">
              <div
                className="border-4 p-5 md:p-7"
                style={{
                  borderColor: 'rgba(255,255,255,0.10)',
                  background: 'rgba(0,0,0,0.22)',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                }}
              >
                <div className="dvd-header text-white crt-glow-text" style={{ fontSize: 26, lineHeight: 1 }}>
                  STAR: {aboutData.name.toUpperCase()}
                </div>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3 dvd-body">
                  {[
                    { k: 'ROLE', v: aboutData.role },
                    { k: 'EXPERIENCE', v: aboutData.experience },
                    { k: 'LOCATION', v: `${contactData.location} (Region 5)` },
                    { k: 'STATUS', v: 'READY' },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-center justify-between gap-4 px-4 py-3 border"
                      style={{
                        borderColor: 'rgba(255,255,255,0.08)',
                        background: 'rgba(255,255,255,0.04)',
                      }}
                    >
                      <span className="text-white/65">{row.k}:</span>
                      <span className="text-white/90 crt-glow-text" style={{ textAlign: 'right' }}>
                        {row.v}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Story (terminal green typewriter) */}
                <div className="mt-6 border p-4"
                  style={{
                    borderColor: 'rgba(120,255,160,0.20)',
                    background: 'rgba(0,0,0,0.30)',
                  }}
                >
                  <div className="dvd-header" style={{ color: 'rgba(120,255,160,0.92)', fontSize: 20 }}>
                    DATA STREAM
                  </div>
                  <pre
                    className="mt-3 dvd-body whitespace-pre-wrap"
                    style={{
                      color: 'rgba(120,255,160,0.88)',
                      fontSize: 13,
                      lineHeight: 1.55,
                      textShadow: '0 0 8px rgba(120,255,160,0.18)',
                    }}
                  >
                    {typed}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </LenisScroll>
    </div>
  );
}
