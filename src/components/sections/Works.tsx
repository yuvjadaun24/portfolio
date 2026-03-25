import { useEffect, useRef } from 'react';
import type React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShaderFrame from '../ShaderFrame';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    year: '2024–Present',
    client: 'AI/ML Course Platform',
    desc: 'Delivered a WCAG-aligned, responsive experience that boosted engagement 45% and retention 30% through A/B-tested UX iterations.',
    tags: ['User Research', 'A/B Testing'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85',
  },
  {
    id: 2,
    year: '2021–2023',
    client: 'FinTech Payment Gateway',
    desc: 'Unified POS, web, and Android into one design language. Reduced bounce rates 25% with heuristic evaluation across 6 platforms.',
    tags: ['Product Design', 'Design Systems'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85',
  },
  {
    id: 3,
    year: '2024–Present',
    client: 'Dashboard Modernisation',
    desc: 'Modernised 8 dashboards with iterative feedback loops — 35% higher engagement and 40% surge in mobile usage.',
    tags: ['Figma', 'Prototyping'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=85',
  },
  {
    id: 4,
    year: '2021–2023',
    client: 'Responsive Web & Tablet',
    desc: 'Delivered 12 high-fidelity screens across desktop and tablet, validated through 50+ participant usability studies.',
    tags: ['Interaction Design', 'Usability'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=85',
  },
];

// Explicit bento placement for each of the 4 cards
const BENTO_PLACEMENT: React.CSSProperties[] = [
  { gridColumn: '1 / 3', gridRow: '1 / 2' }, // large wide
  { gridColumn: '3 / 4', gridRow: '1 / 3' }, // tall (spans both rows)
  { gridColumn: '1 / 2', gridRow: '2 / 3' }, // small
  { gridColumn: '2 / 3', gridRow: '2 / 3' }, // small
];


// ─────────────────────────────────────────────────────────
// BENTO CARD  — full-bleed image with overlaid text
// ─────────────────────────────────────────────────────────
function BentoCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const cardRef       = useRef<HTMLDivElement>(null);
  const discoverRef   = useRef<HTMLDivElement>(null);
  const discoverTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const card      = cardRef.current;
    const disco     = discoverRef.current;
    const discoText = discoverTextRef.current;
    if (!card || !disco || !discoText) return;

    gsap.set(disco, {
      xPercent: -50, yPercent: -50,
      x: '50%', y: '50%',
      width: 44, height: 44,
      borderRadius: '50%',
      opacity: 0,
    });
    gsap.set(discoText, { opacity: 0, x: -8 });

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      gsap.to(disco, { x: mx, y: my, duration: 0.16, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(card, {
        rotateY: (mx / rect.width  - 0.5) * 8,
        rotateX: -(my / rect.height - 0.5) * 6,
        transformPerspective: 1200,
        duration: 0.45, ease: 'power2.out', overwrite: 'auto',
      });
    };

    const onEnter = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      gsap.set(disco, { x: e.clientX - rect.left, y: e.clientY - rect.top });
      gsap.to(card,  { scale: 1.02, duration: 0.55, ease: 'expo.out', overwrite: 'auto' });
      gsap.to(disco, { opacity: 1, width: 162, height: 44, borderRadius: 0, duration: 0.38, ease: 'expo.out' });
      gsap.to(discoText, { opacity: 1, x: 0, duration: 0.22, ease: 'power2.out', delay: 0.12 });
    };

    const onLeave = () => {
      gsap.to(discoText, { opacity: 0, x: -8, duration: 0.14, ease: 'power2.in' });
      gsap.to(disco, { width: 44, height: 44, borderRadius: '50%', opacity: 0, duration: 0.38, ease: 'expo.out', delay: 0.08 });
      gsap.to(card,  { rotateX: 0, rotateY: 0, scale: 1, duration: 0.75, ease: 'expo.out', overwrite: 'auto' });
    };

    card.addEventListener('mousemove',  onMove);
    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);
    return () => {
      card.removeEventListener('mousemove',  onMove);
      card.removeEventListener('mouseenter', onEnter);
      card.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="bento-card"
      style={{
        position: 'relative', width: '100%', height: '100%',
        overflow: 'hidden', background: '#111',
        willChange: 'transform', cursor: 'none',
      }}
    >
      {/* WebGL image */}
      <ShaderFrame src={project.image} />

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 40%, transparent 68%)',
      }} />

      {/* Year pill — top left */}
      <div style={{
        position: 'absolute', top: 18, left: 18, zIndex: 10,
        background: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: 100, padding: '5px 13px',
      }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)' }}>
          {project.year}
        </span>
      </div>

      {/* Bottom info */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '0 22px 22px', zIndex: 10,
      }}>
        {/* Tags */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.18em',
              textTransform: 'uppercase',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'rgba(255,255,255,0.6)', padding: '4px 9px',
            }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 14 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.4)', marginBottom: 5, textTransform: 'uppercase',
            }}>{project.client}</p>
            <p style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(13px, 1vw, 18px)',
              lineHeight: 1.3, color: '#fff', fontWeight: 400,
              overflow: 'hidden', display: '-webkit-box',
              WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
            }}>{project.desc}</p>
          </div>
          <a
            href={project.link}
            style={{
              width: 40, height: 40, borderRadius: '50%',
              background: '#fff', color: '#000',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 15, flexShrink: 0, textDecoration: 'none',
              transition: 'background 0.25s, transform 0.25s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.75)'; e.currentTarget.style.transform = 'scale(1.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'scale(1)'; }}
          >↗</a>
        </div>
      </div>

      {/* Cursor-follow DISCOVER morph button */}
      <div
        ref={discoverRef}
        style={{
          position: 'absolute', top: 0, left: 0,
          pointerEvents: 'none', zIndex: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden',
          background: '#fff', color: '#000',
          willChange: 'transform, width, border-radius',
        }}
      >
        <span
          ref={discoverTextRef}
          style={{
            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em',
            textTransform: 'uppercase', whiteSpace: 'nowrap',
            marginRight: 8, flexShrink: 0,
          }}
        >DISCOVER</span>
        <span style={{ fontSize: 14, lineHeight: 1, flexShrink: 0 }}>↗</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// MAIN WORKS SECTION
// ─────────────────────────────────────────────────────────
export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      sectionRef.current!.querySelectorAll<HTMLElement>('.bento-cell').forEach((cell, i) => {
        gsap.from(cell, {
          y: 50, opacity: 0, duration: 1.1, ease: 'expo.out',
          delay: i * 0.09,
          scrollTrigger: { trigger: cell, start: 'top 90%', once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div id="works" ref={sectionRef} style={{ background: '#000' }}>
      {/* ═══ SECTION HEADER ═══ */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        padding: '80px 4vw 48px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{
          background: '#1c1c1c', borderRadius: 100,
          padding: '12px 24px', display: 'inline-flex', alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '0.05em', color: '#fff' }}>
            Featured Work
          </span>
        </div>
        <p style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(18px, 2vw, 32px)',
          lineHeight: 1.2, color: '#fff', fontWeight: 500, margin: 0, maxWidth: 320, textAlign: 'right',
        }}>
          Handcrafted Experiences<br />
          for Brands of All Sizes,{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Worldwide</em>
        </p>
      </div>

      {/* ═══ BENTO GRID ═══ */}
      <div
        className="bento-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '54vh 40vh',
          gap: '10px',
          padding: '10px 4vw 0',
        }}
      >
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            className="bento-cell"
            style={BENTO_PLACEMENT[i]}
          >
            <BentoCard project={p} />
          </div>
        ))}
      </div>

      <div style={{ height: '8vh' }} />

      <style>{`
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          .bento-cell {
            grid-column: auto !important;
            grid-row: auto !important;
            aspect-ratio: 4/3;
          }
        }
        @media (max-width: 540px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-cell { aspect-ratio: 3/4; }
        }
      `}</style>
    </div>
  );
}
