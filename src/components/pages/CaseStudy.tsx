import { useEffect, useRef } from 'react';
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
  const contentRef = useRef<HTMLDivElement>(null);

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
        const sections = contentRef.current?.querySelectorAll('.cs-section');
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

  return (
    <div key={slug} style={{ background: 'var(--cream)', minHeight: '100vh' }}>
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

      {/* ── Content ── */}
      <div
        ref={contentRef}
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 6vw 100px',
        }}
      >
        {/* Overview */}
        <div className="cs-section" style={{ marginBottom: 80 }}>
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

        {/* Problem / Solution — side by side */}
        <div
          className="cs-section"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48,
            marginBottom: 80,
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

        {/* Key Features */}
        <div className="cs-section" style={{ marginBottom: 80 }}>
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

        {/* Design Highlights + Color Palette */}
        <div
          className="cs-section"
          style={{
            marginBottom: 80,
            paddingTop: 48,
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

          {/* Palette */}
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

        {/* Next project link */}
        <div
          className="cs-section"
          style={{
            paddingTop: 60,
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
    </div>
  );
}
