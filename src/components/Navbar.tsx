import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function smoothScrollTo(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top -60',
      onEnter: () => navRef.current?.classList.add('scrolled'),
      onLeaveBack: () => navRef.current?.classList.remove('scrolled'),
    });

    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="navbar"
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
          transition: 'background 0.4s, backdrop-filter 0.4s',
        }}
      >
        {/* ── Segmented column grid ── */}
        <div
          className="nav-row"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1.8fr',
            borderBottom: '1px solid var(--nav-border)',
          }}
        >
          {/* Logo + mobile hamburger */}
          <div style={{
            padding: '17px 32px',
            borderRight: '1px solid var(--nav-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <a href="/" style={{
              fontFamily: 'var(--display)', fontSize: 20, letterSpacing: '0.05em',
              color: 'currentColor', textDecoration: 'none', fontWeight: 400,
            }}>YSJ</a>

            <button
              className="hamburger"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'none', flexDirection: 'column', gap: 5, padding: 0,
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block', width: 26, height: 1, background: 'currentColor',
                  transition: 'all 0.3s',
                  transform: mobileOpen
                    ? (i === 0 ? 'rotate(45deg) translateY(6px)' : i === 2 ? 'rotate(-45deg) translateY(-6px)' : 'scaleX(0)')
                    : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>

          {/* Nav link cells */}
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); smoothScrollTo(l.href); }}
              className="nav-cell"
              onMouseEnter={() => setHovered(l.href)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '17px 24px',
                fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em',
                textDecoration: 'none', color: 'currentColor',
                borderRight: '1px solid var(--nav-border)',
                opacity: hovered !== null && hovered !== l.href ? 0.3 : 0.75,
                transition: 'opacity 0.25s',
                textTransform: 'uppercase',
              }}
            >
              {/* Fixed 22×22 slot so the label never shifts on hover */}
              <span style={{
                width: 22, height: 22, flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  width: hovered === l.href ? 20 : 6,
                  height: hovered === l.href ? 20 : 6,
                  borderRadius: '50%',
                  border: hovered === l.href ? 'none' : '1px solid currentColor',
                  background: hovered === l.href ? 'currentColor' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'width 0.2s, height 0.2s, background 0.2s, border 0.2s',
                  overflow: 'hidden',
                }}>
                  {hovered === l.href && (
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M1.5 7.5L7.5 1.5M7.5 1.5H2.5M7.5 1.5V6.5"
                        stroke="var(--nav-arrow-color)" strokeWidth="1.3"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
              </span>
              {l.label}
            </a>
          ))}

          {/* Email */}
          <a
            href="mailto:yuvrajjadaun2@gmail.com"
            className="nav-cell nav-email"
            style={{
              display: 'flex', alignItems: 'center',
              padding: '17px 24px',
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
              textDecoration: 'none', color: 'currentColor', opacity: 0.6,
              transition: 'opacity 0.3s', textTransform: 'uppercase',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
          >
            yuvrajjadaun2@gmail.com
          </a>
        </div>

        {/* Scroll progress — rides the bottom border */}
        <div
          ref={progressRef}
          style={{
            position: 'absolute', bottom: 0, left: 0,
            width: '100%', height: 1,
            background: 'currentColor',
            transformOrigin: 'left center',
            transform: 'scaleX(0)',
            zIndex: 2,
          }}
        />
      </nav>

      {/* Mobile full-screen overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'var(--black)', color: 'var(--white)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 24,
        opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none',
        transition: 'opacity 0.4s',
      }}>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); setMobileOpen(false); smoothScrollTo(l.href); }} style={{
            fontFamily: 'var(--display)', fontSize: '15vw', letterSpacing: '0.04em',
            textDecoration: 'none', color: 'var(--white)',
          }}>{l.label}</a>
        ))}
        <a href="mailto:yuvrajjadaun2@gmail.com" style={{
          fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em',
          color: 'rgba(240,237,232,0.5)', textDecoration: 'none',
        }}>YUVRAJJADAUN2@GMAIL.COM</a>
      </div>

      <style>{`
        /* Scoped CSS vars so inline borders auto-flip in dark mode */
        .navbar { --nav-border: rgba(0,0,0,0.1); --nav-arrow-color: #f0ede8; }
        .navbar.dark { --nav-border: rgba(255,255,255,0.1); --nav-arrow-color: #0a0a0a; }

        .navbar.scrolled {
          background: rgba(240,237,232,0.92) !important;
          backdrop-filter: blur(16px);
        }
        .navbar.dark { color: #f0ede8 !important; }
        .navbar.dark.scrolled { background: rgba(10,10,10,0.92) !important; }

        @media (max-width: 768px) {
          .nav-cell { display: none !important; }
          .hamburger { display: flex !important; }
          .nav-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
