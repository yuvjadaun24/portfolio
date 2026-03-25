import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { val: '+45%', label: 'Engagement Uplift' },
  { val: '+30%', label: 'Retention Growth' },
  { val: '95%',  label: 'Client Satisfaction' },
  { val: '50+',  label: 'User Studies' },
];

const SERVICES = [
  {
    title: 'Design Expertise',
    items: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin', 'Responsive Layouts', 'Accessibility (WCAG)', 'Interaction Design'],
  },
  {
    title: 'Research & Strategy',
    items: ['User Research', 'Information Architecture', 'Wireframing', 'Rapid Prototyping', 'Usability Testing', 'Heuristic Evaluation', 'Design Thinking', 'A/B Testing'],
  },
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'Bootstrap 5', 'Tailwind CSS', 'JavaScript (Basic)'],
  },
];

const FEATURED = [
  { img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80', tags: ['User Research', 'A/B Testing'], desc: 'Boosted engagement 45% through research-driven UX iterations.', name: 'AI/ML Course Platform' },
  { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80', tags: ['Product Design', 'Design Systems'], desc: 'Unified 6-platform payment experience with 25% bounce reduction.', name: 'FinTech Gateway Suite' },
  { img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80', tags: ['Figma', 'Prototyping'], desc: 'Dashboard modernisation that drove 40% mobile usage growth.', name: 'Dashboard Modernisation' },
  { img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80', tags: ['Interaction Design', 'Usability'], desc: '12-screen responsive system, 95% client satisfaction.', name: 'Responsive Web & Tablet' },
  { img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&q=80', tags: ['WCAG', 'Accessibility'], desc: 'Accessible design system across 3 platforms, 98% WCAG score.', name: 'WCAG Design System' },
  { img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=900&q=80', tags: ['Design Thinking', 'Wireframing'], desc: '50+ participant studies informing scalable UX architecture.', name: 'UX Research Sprint' },
];

const INLINE_PHOTOS = [
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
];

const ABOUT_PHOTOS = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
];

export default function About() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-headline', {
        y: 60, opacity: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: '.about-headline', start: 'top 80%', once: true },
      });

      STATS.forEach((_, i) => {
        gsap.from(`.stat-${i}`, {
          opacity: 0, y: 20, duration: 0.8,
          scrollTrigger: { trigger: `.stat-${i}`, start: 'top 85%', once: true },
        });
      });

      gsap.from('.about-photo', {
        y: 40, opacity: 0, stagger: 0.1, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: '.about-photos', start: 'top 75%', once: true },
      });

      gsap.from('.featured-card', {
        y: 50, opacity: 0, stagger: 0.08, duration: 0.9, ease: 'expo.out',
        scrollTrigger: { trigger: '.featured-grid', start: 'top 75%', once: true },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} id="about">
      {/* Giant headline with inline photos */}
      <div style={{ padding: '120px 48px 60px', borderTop: '1px solid var(--border-light)' }}>
        <h2
          className="about-headline"
          style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(56px, 9vw, 130px)',
            lineHeight: 0.93, color: 'var(--white)',
            letterSpacing: '0.01em',
          }}
        >
          DESIGNING FOR{' '}
          {INLINE_PHOTOS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              style={{
                display: 'inline-block', verticalAlign: 'middle',
                width: 'clamp(48px,5vw,80px)', height: 'clamp(60px,6.5vw,100px)',
                objectFit: 'cover', margin: '0 6px',
                filter: 'grayscale(20%)',
              }}
            />
          ))}{' '}
          HUMANS
        </h2>
        <h3 style={{
          fontFamily: 'var(--serif)', fontWeight: 400, fontStyle: 'italic',
          fontSize: 'clamp(18px, 2.2vw, 28px)',
          color: 'var(--gray)', marginTop: 32, maxWidth: 700,
        }}>
          Innovative UI/UX Designer bridging design &amp; technology — delivering accessible,
          <br />
          data-driven experiences that actually move the needle.
        </h3>
      </div>

      {/* Body + Services accordion */}
      <div
        className="about-cols"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, padding: '0 48px 80px' }}
      >
        <div>
          <p style={{
            fontFamily: 'var(--mono)', fontSize: 14, lineHeight: 1.8,
            color: 'var(--gray)', marginBottom: 40, maxWidth: 480,
          }}>
            With 3.5+ years of experience I specialise in user research, wireframing, and
            prototyping to deliver WCAG-accessible and responsive web solutions. Proficient in
            Figma, Adobe XD, and modern frontend frameworks. Consistently improved retention and
            engagement through data-driven iterations — 95% client satisfaction across 7+ projects.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.25em',
              color: 'var(--white)', textDecoration: 'none',
              border: '1px solid var(--border-light)', padding: '12px 28px',
              display: 'inline-block', transition: 'background 0.3s, color 0.3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'var(--black)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--white)'; }}
          >
            DOWNLOAD RÉSUMÉ ↗
          </a>
        </div>

        {/* Services accordion */}
        <div style={{ borderTop: '1px solid var(--border-light)' }}>
          {SERVICES.map((s, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '20px 0', cursor: 'none',
                }}
              >
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em',
                  color: 'var(--white)', textTransform: 'uppercase',
                }}>
                  {s.title}
                </span>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: 18,
                  color: 'var(--gray)', lineHeight: 1,
                }}>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <div style={{
                maxHeight: open === i ? 300 : 0, overflow: 'hidden',
                transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1)',
              }}>
                <div style={{ paddingBottom: 20, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.items.map((item) => (
                    <span key={item} style={{
                      fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em',
                      border: '1px solid var(--border-light)', padding: '4px 10px',
                      color: 'var(--gray)', textTransform: 'uppercase',
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div
        className="stats-grid"
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
          borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)',
          margin: '0 0 80px',
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            className={`stat-${i}`}
            style={{
              padding: '48px 48px',
              borderRight: i < 3 ? '1px solid var(--border-light)' : 'none',
            }}
          >
            <div style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(40px,4vw,64px)',
              color: 'var(--white)', letterSpacing: '0.02em',
            }}>
              {s.val}
            </div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 10,
              letterSpacing: '0.2em', color: 'var(--gray)',
              marginTop: 8, textTransform: 'uppercase',
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* 3 photos row */}
      <div
        className="about-photos"
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          gap: 2, padding: '0 0 120px', height: 480,
        }}
      >
        {ABOUT_PHOTOS.map((src, i) => (
          <div
            key={i}
            className="about-photo"
            style={{
              overflow: 'hidden',
              marginTop: i === 1 ? 48 : 0,
              height: i === 1 ? 'calc(100% - 48px)' : '100%',
            }}
          >
            <img
              src={src}
              alt=""
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                filter: 'grayscale(40%)', transition: 'filter 0.5s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(40%)')}
            />
          </div>
        ))}
      </div>

      {/* Featured Work */}
      <div id="skills" style={{ padding: '0 48px 120px', borderTop: '1px solid var(--border-light)' }}>
        <div style={{ paddingTop: 80, marginBottom: 24 }}>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 10,
            letterSpacing: '0.3em', color: 'var(--gray)',
          }}>
            FEATURED WORK
          </span>
        </div>
        <h2 style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(36px,4.5vw,60px)',
          lineHeight: 1.05, color: 'var(--white)', marginBottom: 80, maxWidth: 700,
        }}>
          Handcrafted Experiences,
          <br />
          All Sizes, Worldwide.
        </h2>

        {/* 2-col featured cards */}
        <div
          className="featured-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}
        >
          {FEATURED.map((f, i) => (
            <a
              key={i}
              href="#works"
              className="featured-card"
              style={{
                display: 'block', textDecoration: 'none',
                borderTop: '1px solid var(--border-light)',
                paddingTop: 24, paddingBottom: 48,
                paddingRight: i % 2 === 0 ? 40 : 0,
                paddingLeft: i % 2 === 1 ? 40 : 0,
                borderLeft: i % 2 === 1 ? '1px solid var(--border-light)' : 'none',
                overflow: 'hidden',
              }}
            >
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', marginBottom: 20 }}>
                <img
                  src={f.img}
                  alt={f.name}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                {f.tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '0.15em',
                    border: '1px solid var(--border-light)', padding: '3px 8px',
                    color: 'var(--gray)', textTransform: 'uppercase',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <p style={{
                fontFamily: 'var(--mono)', fontSize: 13,
                color: 'var(--gray)', lineHeight: 1.6, marginBottom: 16,
              }}>
                {f.desc}
              </p>
              <span style={{
                fontFamily: 'var(--display)', fontSize: 28,
                color: 'var(--white)', letterSpacing: '0.02em',
              }}>
                {f.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
