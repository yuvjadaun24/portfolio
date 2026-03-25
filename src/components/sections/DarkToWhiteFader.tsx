import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LIST_PROJECTS = [
  { name: 'WCAG Design System',    year: '2023', tags: ['USER RESEARCH', 'WCAG'] },
  { name: 'Mobile UX Sprint',      year: '2023', tags: ['FIGMA', 'PROTOTYPING'] },
  { name: 'E-commerce Redesign',   year: '2022', tags: ['UX/UI', 'USABILITY'] },
  { name: 'SaaS Onboarding Flow',  year: '2022', tags: ['INTERACTION', 'FIGMA'] },
  { name: 'Brand Identity System', year: '2021', tags: ['DESIGN SYSTEMS', 'FIGMA'] },
  { name: 'Analytics Dashboard',   year: '2021', tags: ['DATA VIZ', 'PROTOTYPING'] },
];

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    rotation: -3,
    posStyle: {
      left: '6%', top: '20%',
      width: 'clamp(240px,22vw,340px)',
      height: 'clamp(160px,15vw,230px)',
    } as React.CSSProperties,
  },
  {
    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    rotation: 0,
    posStyle: {
      left: '32%', top: '10%',
      width: 'clamp(340px,33vw,500px)',
      height: 'clamp(420px,42vw,640px)',
    } as React.CSSProperties,
  },
  {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    rotation: 2,
    posStyle: {
      right: '4%', top: '48%',
      width: 'clamp(280px,24vw,360px)',
      height: 'clamp(180px,16vw,250px)',
    } as React.CSSProperties,
  },
];

export default function DarkToWhiteFader() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let ctx: ReturnType<typeof gsap.context>;

    // Delay one rAF so HeroPinned's async setup (rAF + fonts.ready) can register
    // its 500vh pin spacer first. Without this, DarkToWhiteFader calculates its
    // start position as ~100vh (wrong) instead of ~600vh (correct), causing it to
    // pin mid-hero and render on top of the hero section.
    rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const photos = photosRef.current
          ? Array.from(photosRef.current.children) as HTMLElement[]
          : [];

        // Hide photos immediately so they don't flash before the timeline takes over
        gsap.set(photos, { opacity: 0 });

        const tl = gsap.timeline();

        // ─── Phase 1 (0→30%): list rows fully visible, bg stays black ────────
        // implicit hold — no tweens fire until 0.30

        // ─── Phase 2 (30→50%): list rows fade out, bg starts warming ─────────
        tl.to(listRef.current, { opacity: 0, y: -20, duration: 0.20, ease: 'power2.in' }, 0.30);
        tl.to(fillRef.current, { backgroundColor: '#1a1a1a', duration: 0.10, ease: 'none' }, 0.30);
        tl.to(fillRef.current, { backgroundColor: '#2e2e2e', duration: 0.10, ease: 'none' }, 0.40);

        // ─── Phase 3 (50→75%): bg transitions to cream ───────────────────────
        tl.to(fillRef.current, { backgroundColor: '#c8c4bf', duration: 0.15, ease: 'power1.out' }, 0.50);
        tl.to(fillRef.current, { backgroundColor: '#f0ede8', duration: 0.10, ease: 'power2.out' }, 0.65);

        // ─── Phase 4 (55→90%): photos rise in (fromTo = GSAP owns full from→to) ──
        photos.forEach((photo, i) => {
          tl.fromTo(
            photo,
            { y: 55, opacity: 0, rotation: PHOTOS[i].rotation },
            { y: 0, opacity: 1, rotation: PHOTOS[i].rotation, duration: 0.25, ease: 'expo.out' },
            0.55 + i * 0.08,
          );
        });

        ScrollTrigger.create({
          trigger: wrapRef.current,
          start: 'top top',
          end: '+=400%',
          pin: true,
          anticipatePin: 1,
          scrub: 1.2,
          animation: tl,
          // Re-measure position on every refresh so hero's pin spacer is accounted for
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const nav = document.querySelector('.navbar') as HTMLElement;
            if (!nav) return;
            if (self.progress < 0.55) {
              nav.classList.add('dark');
              nav.classList.remove('scrolled');
            } else {
              nav.classList.remove('dark');
            }
          },
        });
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background fill */}
      <div ref={fillRef} style={{
        position: 'absolute', inset: 0,
        backgroundColor: '#0a0a0a',
        willChange: 'background-color',
      }} />

      {/* List rows — visible in the first third of scroll */}
      <div
        ref={listRef}
        style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          paddingBottom: '4vh',
          zIndex: 2,
        }}
      >
        {LIST_PROJECTS.map((p, i) => (
          <div
            key={i}
            className="wlt-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto auto',
              alignItems: 'center',
              padding: '0 6vw',
              height: 72,
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              gap: '4vw',
            }}
          >
            <span style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(14px,1.4vw,20px)',
              fontWeight: 500, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.01em',
            }}>{p.name}</span>
            <span style={{
              fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.3)',
            }}>{p.year}</span>
            <div style={{ display: 'flex', gap: 16 }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase',
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Photos — fade in during the light phase */}
      <div ref={photosRef} style={{ position: 'absolute', inset: 0, zIndex: 3 }}>
        {PHOTOS.map((p, i) => (
          <div key={i} style={{
            position: 'absolute', overflow: 'hidden',
            willChange: 'transform, opacity',
            ...p.posStyle,
          }}>
            <img src={p.src} alt="Yuvraj" style={{
              width: '100%', height: '115%',
              objectFit: 'cover', display: 'block',
            }} />
          </div>
        ))}
      </div>
    </div>
  );
}
