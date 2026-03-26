import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { PROJECTS } from '@/data/projects';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.id === slug);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [snapshotOpen, setSnapshotOpen] = useState(false);
  const [snapshotMode, setSnapshotMode] = useState<'vertical' | 'horizontal'>('vertical');
  const [snapshotIndex, setSnapshotIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        // Animate title
        if (titleRef.current) {
          const split = new SplitText(titleRef.current, {
            type: 'chars',
            charsClass: 'char-wrap',
          });
          gsap.from(split.chars, {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.03,
          });
        }

        // Animate content sections
        const sections = rootRef.current?.querySelectorAll('.cs-section');
        sections?.forEach((section) => {
          gsap.from(section, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              once: true,
            },
          });
        });
      });
    });

    return () => ctx.revert();
  }, [project]);

  useEffect(() => {
    if (!snapshotOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSnapshotOpen(false);
      if (e.key === 'ArrowRight') setSnapshotIndex(i => i + 1);
      if (e.key === 'ArrowLeft') setSnapshotIndex(i => Math.max(0, i - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [snapshotOpen]);

  // Lock background scrolling when snapshot modal is open using overflow:hidden
  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevDocOverflow = document.documentElement.style.overflow;
    const prevBodyTouch = document.body.style.touchAction;
    if (snapshotOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.body.style.overscrollBehavior = 'none';
    } else {
      document.body.style.overflow = prevBodyOverflow || '';
      document.documentElement.style.overflow = prevDocOverflow || '';
      document.body.style.touchAction = prevBodyTouch || '';
      document.body.style.overscrollBehavior = '';
    }
    return () => {
      document.body.style.overflow = prevBodyOverflow || '';
      document.documentElement.style.overflow = prevDocOverflow || '';
      document.body.style.touchAction = prevBodyTouch || '';
      document.body.style.overscrollBehavior = '';
    };
  }, [snapshotOpen]);
  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: 'var(--cream)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <p style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--black)' }}>
          Project not found
        </p>
        <Link
          to="/"
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 12,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--black)',
            textDecoration: 'none',
            border: '1px solid var(--black)',
            padding: '10px 24px',
          }}
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const snaps = project.snapshots ?? project.images ?? [project.image];

  return (
    <div key={slug} ref={rootRef} style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      {/* ── Back button ── */}
      <div
        style={{
          position: 'fixed',
          top: 24,
          left: 32,
          zIndex: 100,
        }}
      >
        <Link
          to="/"
          state={{ scrollTo: 'works' }}
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--black)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 20px',
            background: 'var(--cream)',
            border: '1px solid var(--border)',
            transition: 'background 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--cream)')}
        >
          ← Back
        </Link>
      </div>

      {/* ── Hero Section ── */}
      <div
        ref={heroRef}
        style={{
          padding: '140px 6vw 60px',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* Domain tag */}
        <div style={{ marginBottom: 20 }}>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.4)',
              border: '1px solid var(--border)',
              padding: '6px 14px',
            }}
          >
            {project.domain}
          </span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(64px, 12vw, 180px)',
            lineHeight: 0.9,
            color: 'var(--black)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            marginBottom: 32,
            overflow: 'hidden',
          }}
        >
          {project.title}
        </h1>

        {/* Meta row */}
        <div
          style={{
            display: 'flex',
            gap: 32,
            flexWrap: 'wrap',
            paddingBottom: 40,
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 9,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.35)',
                display: 'block',
                marginBottom: 6,
              }}
            >
              Year
            </span>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 13,
                color: 'var(--black)',
              }}
            >
              {project.year}
            </span>
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 9,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.35)',
                display: 'block',
                marginBottom: 6,
              }}
            >
              Role
            </span>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 13,
                color: 'var(--black)',
              }}
            >
              UI/UX Designer
            </span>
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 9,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.35)',
                display: 'block',
                marginBottom: 6,
              }}
            >
              Tags
            </span>
            <div style={{ display: 'flex', gap: 8 }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(0,0,0,0.5)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Cover Image ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 6vw 60px',
        }}
      >
        <div
          style={{
            width: '100%',
            aspectRatio: '16 / 9',
            overflow: 'hidden',
            background: '#111',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* ── Overview ── */}
      <div className="cs-section" style={{ maxWidth: 900, margin: '0 auto 80px', padding: '0 6vw' }}>
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.35)',
            display: 'block',
            marginBottom: 16,
          }}
        >
          Overview
        </span>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(18px, 2vw, 26px)',
            lineHeight: 1.5,
            color: 'var(--black)',
            fontWeight: 400,
          }}
        >
          {project.overview}
        </p>
      </div>

      {/* ── Image Break 1 — screen 2, wide editorial (16:7) ── */}
      {project.images?.[1] && (
        <div style={{ maxWidth: 1200, margin: '0 auto 80px', padding: '0 6vw' }}>
          <div style={{ width: '100%', aspectRatio: '16 / 7', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <img
              src={project.images[1]}
              alt={`${project.title} — screen 2`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      )}

      {/* ── Problem / Solution ── */}
      <div
        className="cs-section"
        style={{ maxWidth: 900, margin: '0 auto 80px', padding: '0 6vw' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48,
            paddingBottom: 60,
            borderBottom: '1px solid var(--border)',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.35)',
                display: 'block',
                marginBottom: 16,
              }}
            >
              The Problem
            </span>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(14px, 1.2vw, 18px)',
                lineHeight: 1.65,
                color: 'var(--black)',
                fontWeight: 400,
              }}
            >
              {project.problem}
            </p>
          </div>
          <div>
            <span
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(0,0,0,0.35)',
                display: 'block',
                marginBottom: 16,
              }}
            >
              The Solution
            </span>
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(14px, 1.2vw, 18px)',
                lineHeight: 1.65,
                color: 'var(--black)',
                fontWeight: 400,
              }}
            >
              {project.solution}
            </p>
          </div>
        </div>
      </div>

      {/* ── Image Break 2 — screen 3, full-bleed horizontal strip ── */}
      {project.images?.[2] && (
        <div
          style={{
            width: '100%',
            height: '45vh',
            overflow: 'hidden',
            marginBottom: 80,
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <img
            src={project.images[2]}
            alt={`${project.title} — screen 3`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      )}

      {/* ── Key Features ── */}
      <div className="cs-section" style={{ maxWidth: 900, margin: '0 auto 80px', padding: '0 6vw' }}>
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.35)',
            display: 'block',
            marginBottom: 32,
          }}
        >
          Key Features
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {project.features.map((feature, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: 24,
                padding: '28px 0',
                borderTop: '1px solid var(--border)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  color: 'rgba(0,0,0,0.25)',
                  paddingTop: 2,
                }}
              >
                0{i + 1}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: 'clamp(18px, 2vw, 28px)',
                    fontWeight: 400,
                    color: 'var(--black)',
                    marginBottom: 8,
                    textTransform: 'uppercase',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 'clamp(13px, 1.1vw, 16px)',
                    lineHeight: 1.6,
                    color: 'rgba(0,0,0,0.6)',
                    fontWeight: 400,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Image Break 3 — screen 4, 2/3 width right-anchored ── */}
      {project.images?.[3] && (
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto 80px',
            padding: '0 6vw',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div style={{ width: '68%', aspectRatio: '4 / 3', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <img
              src={project.images[3]}
              alt={`${project.title} — screen 4`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      )}

      {/* ── Design Highlights + Color Palette ── */}
      <div
        className="cs-section"
        style={{
          maxWidth: 900,
          margin: '0 auto 80px',
          padding: '48px 6vw 0',
          borderTop: '1px solid var(--border)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.35)',
            display: 'block',
            marginBottom: 16,
          }}
        >
          Design Highlights
        </span>
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(14px, 1.2vw, 18px)',
            lineHeight: 1.65,
            color: 'var(--black)',
            fontWeight: 400,
            marginBottom: 40,
          }}
        >
          {project.designHighlights}
        </p>
        <span
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.35)',
            display: 'block',
            marginBottom: 16,
          }}
        >
          Color Palette
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          {project.palette.map((color) => (
            <div key={color} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: color,
                  border: '1px solid var(--border)',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 9,
                  letterSpacing: '0.08em',
                  color: 'rgba(0,0,0,0.35)',
                  marginTop: 6,
                  display: 'block',
                }}
              >
                {color}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Image Break 4 — screen 5, panoramic accent (Arogya / Aspedan only) ── */}
      {project.images?.[4] && (
        <div style={{ maxWidth: 900, margin: '0 auto 80px', padding: '0 6vw' }}>
          <div style={{ width: '100%', aspectRatio: '3 / 1', overflow: 'hidden', border: '1px solid var(--border)' }}>
            <img
              src={project.images[4]}
              alt={`${project.title} — screen 5`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      )}

      {/* ── Project Snapshot ── */}
      {snaps && snaps.length > 0 && (
        <div style={{ maxWidth: 900, margin: '0 auto 60px', padding: '0 6vw' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', display: 'block', marginBottom: 16 }}>Project Snapshot</span>

          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Left: heading + supporting paragraph */}
            <div style={{ flex: 1, minWidth: 220 }}>
              <h3 style={{
                fontFamily: 'var(--display)',
                fontWeight: 600,
                fontSize: 'clamp(20px, 2.4vw, 28px)',
                margin: '0 0 12px',
                color: 'var(--black)'
              }}>
                Snapshot Preview
              </h3>
              <p style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                lineHeight: 1.6,
                color: 'rgba(0,0,0,0.7)',
                margin: 0
              }}>
                {project.desc}
              </p>
            </div>

            {/* Right: fixed-size snapshot container */}
            <div
              role="button"
              onClick={() => { setSnapshotMode(project.id === 'aspedan' ? 'horizontal' : 'vertical'); setSnapshotIndex(0); setSnapshotOpen(true); }}
              style={{
                width: 'min(520px, 45%)',
                aspectRatio: '1 / 1',
                flex: '0 0 auto',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                borderRadius: 6,
                cursor: 'zoom-in',
                background: '#111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {project.id === 'aspedan' ? (
                <div style={{ display: 'flex', gap: 8, padding: 8, height: '100%', alignItems: 'center', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                  {snaps.map((src, i) => (
                    <div key={i} style={{ minWidth: 160, height: '100%', flex: '0 0 auto', overflow: 'hidden', borderRadius: 4 }}>
                      <img src={src} alt={`${project.title} screen ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={snaps[0] ?? project.hero ?? project.image} alt={`${project.title} snapshot`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Overlay modal for snapshot */}
      {snapshotOpen && (
        <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, overscrollBehavior: 'contain' }} onClick={() => setSnapshotOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: 'calc(100% - 80px)', maxWidth: 1200, maxHeight: 'calc(100vh - 80px)', background: 'var(--cream)', padding: 12, overflow: 'hidden', borderRadius: 6 }}>
            <button onClick={() => setSnapshotOpen(false)} style={{ position: 'absolute', right: 28, top: 28, zIndex: 1010, background: 'transparent', border: 'none', color: '#fff', fontSize: 22 }}>✕</button>
            {(() => {
              const imgs = snaps;
              if (snapshotMode === 'vertical') {
                return (
                  <div onTouchMove={(e) => e.stopPropagation()} style={{ width: '100%', height: '90vh', overflowY: 'auto', background: '#111', WebkitOverflowScrolling: 'touch' }}>
                    <img src={snaps[0] ?? project.hero ?? imgs[0] ?? project.image} alt={`${project.title} expanded`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                );
              }
              if (project.id === 'aspedan') {
                return (
                  <div onTouchMove={(e) => e.stopPropagation()} style={{ width: '100%', height: '100%', overflowX: 'auto', display: 'flex', gap: 16, alignItems: 'center', padding: 12, WebkitOverflowScrolling: 'touch' }}>
                    {imgs.map((src, i) => (
                      <div key={i} style={{ flex: '0 0 auto', width: 'min(380px, 46vw)', height: 'min(820px, calc(100vh - 180px))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border)', background: '#111', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                          <img src={src} alt={`${project.title} expanded ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              return (
                <div onTouchMove={(e) => e.stopPropagation()} style={{ width: '100%', height: '100%', overflowX: 'auto', display: 'flex', gap: 12, alignItems: 'center', padding: 8, WebkitOverflowScrolling: 'touch' }}>
                  {imgs.map((src, i) => (
                    <div key={i} style={{ minWidth: '70%', height: '100%', flex: '0 0 auto', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={src} alt={`${project.title} expanded ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ── Next Project ── */}
      <div
        className="cs-section"
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '60px 6vw 100px',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
        }}
      >
        {(() => {
          const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
          const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
          return (
            <div>
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.35)',
                  display: 'block',
                  marginBottom: 16,
                }}
              >
                Next Project
              </span>
              <Link
                to={`/case-study/${nextProject.id}`}
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(32px, 6vw, 80px)',
                  color: 'var(--black)',
                  textDecoration: 'none',
                  lineHeight: 0.95,
                  display: 'inline-block',
                  transition: 'opacity 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                {nextProject.title} ↗
              </Link>
            </div>
          );
        })()}
      </div>
    </div>
  );
}


