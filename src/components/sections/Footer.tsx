import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplineSafe from '@/components/SplineSafe';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yuvrajsinghjadaun' },
  { label: 'Dribbble', href: 'https://dribbble.com/Uiraj' },
  { label: 'GitHub', href: 'https://github.com/yuvrajjadaun' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-inner', {
        opacity: 0, y: 50, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 80%', once: true },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        background: 'var(--black)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '80px 48px 40px',
      }}
    >
      <div
        className="footer-inner footer-main"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'start',
          gap: '4vw',
          marginBottom: 80,
        }}
      >
        {/* Left — giant heading */}
        <div>
          <h2 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(56px, 8.5vw, 122px)',
            lineHeight: 1.0, color: 'var(--white)',
            letterSpacing: '0.02em',
          }}>
            DESIGNING &amp;
            <br />
            BUILDING SINCE
            <br />
            '2021
          </h2>
        </div>

        {/* Center — vortex */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '38vmin', height: '38vmin' }}>
            <SplineSafe scene="https://prod.spline.design/qIB3Yi6uopze8PhU/scene.splinecode" />
          </div>
        </div>

        {/* Right — socials */}
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 10,
            letterSpacing: '0.3em', color: 'var(--gray)',
            marginBottom: 8,
          }}>
            SOCIALS
          </span>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.2em',
                color: 'var(--gray)', textDecoration: 'none', transition: 'color 0.3s',
                display: 'block', lineHeight: 2.4,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray)')}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 16,
      }}>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: 10,
          letterSpacing: '0.15em', color: 'var(--gray)',
        }}>
          ©2026 YUVRAJ SINGH JADAUN. ALL RIGHTS RESERVED.
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 9,
            letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)',
          }}>BASED IN</span>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 10,
            letterSpacing: '0.15em', color: 'var(--gray)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '4px 12px',
          }}>FARIDABAD, IN</span>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: 10,
            letterSpacing: '0.15em', color: 'var(--gray)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '4px 12px',
          }}>HARYANA</span>
        </div>
        <a
          href="mailto:yuvrajjadaun2@gmail.com"
          style={{
            fontFamily: 'var(--mono)', fontSize: 10,
            letterSpacing: '0.15em', color: 'var(--gray)',
            textDecoration: 'none', transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray)')}
        >
          YUVRAJJADAUN2@GMAIL.COM
        </a>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-main { grid-template-columns: 1fr !important; text-align: center !important; }
          .footer-main > div { text-align: center !important; }
        }
      `}</style>
    </footer>
  );
}
