import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REEL_IMAGES = [
  '/images/Aifinite-image/Aifinite-2.png',
  '/images/Aifinite-image/Aifinite-3.png',
  '/images/Arogya-images/Arogya-2.png',
  '/images/Arogya-images/Arogya-3.png',
  '/images/parktek-images/Parktek-2.png',
  '/images/parktek-images/Parktek-3.png',
  '/images/Aspedan-images/Aspedan-2.png',
  '/images/Aspedan-images/Aspedan-3.png',
];

const DESIGN_SKILLS = [
  'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin',
  'Responsive Design', 'Accessibility (WCAG)', 'Interaction Design', 'Design Systems',
];
const RESEARCH_SKILLS = [
  'User Research', 'Information Architecture', 'Wireframing',
  'Rapid Prototyping', 'Usability Testing', 'Heuristic Evaluation',
  'Design Thinking', 'A/B Testing',
];

export default function StudioInfo() {
  const [reelIdx, setReelIdx] = useState(0);
  const [reelRunning, setReelRunning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        setReelRunning(true);
        intervalRef.current = setInterval(() => {
          setReelIdx(i => (i + 1) % REEL_IMAGES.length);
        }, 110);
        setTimeout(() => {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setReelRunning(false);
        }, 4000);
      },
    });

    const ctx = gsap.context(() => {
      gsap.from('.reel-text-item', {
        opacity: 0, y: 20, stagger: 0.04, duration: 0.6, ease: 'expo.out',
        scrollTrigger: { trigger: textRef.current, start: 'top 75%', once: true },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      st.kill();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="reel-grid"
      style={{
        background: 'var(--cream)',
        display: 'grid',
        gridTemplateColumns: '40vw 1fr',
        minHeight: '80vh',
        borderTop: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      {/* LEFT — rapid project reel */}
      <div style={{
        background: '#1e1e1e', overflow: 'hidden',
        position: 'relative', minHeight: '70vh',
      }}>
        <img
          src={REEL_IMAGES[reelIdx]}
          alt=""
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
            position: 'absolute', inset: 0,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
        {/* Flickering dot indicator */}
        <div style={{
          position: 'absolute', top: 20, right: 20,
          width: 8, height: 8, borderRadius: '50%',
          background: reelRunning ? '#ff3b30' : 'rgba(255,255,255,0.2)',
          animation: reelRunning ? 'flicker 0.3s infinite alternate' : 'none',
        }} />
        <style>{`@keyframes flicker { 0% { opacity: 1; } 100% { opacity: 0.3; } }`}</style>
      </div>

      {/* RIGHT — bio + skills */}
      <div
        ref={textRef}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.75fr 0.75fr',
          gap: '4vw',
          padding: '6vh 5vw',
          alignContent: 'start',
        }}
      >
        <div>
          <p className="reel-text-item" style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(18px,1.8vw,26px)',
            lineHeight: 1.35, color: 'var(--black)', marginBottom: '4vh',
          }}>
            UI/UX Designer with 3.5+ years bridging design and technology, passionate about accessible and immersive digital experiences.
          </p>
          <p className="reel-text-item" style={{
            fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.7,
            color: 'rgba(0,0,0,0.5)',
          }}>
            45% engagement uplift · 30% retention growth · 95% client satisfaction · 90% on-time delivery across 10+ projects.
          </p>
          <a
            className="reel-text-item"
            href="/Yuvraj_Singh_Jadaun_Resume_UI_UX.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block', marginTop: '3vh',
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em',
              color: 'var(--black)', textDecoration: 'none',
              border: '1px solid rgba(0,0,0,0.2)', padding: '10px 20px',
              transition: 'background 0.3s, color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--black)'; e.currentTarget.style.color = 'var(--cream)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--black)'; }}
          >
            DOWNLOAD RÉSUMÉ
          </a>
        </div>

        <div>
          <p className="reel-text-item" style={{
            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em',
            color: 'rgba(0,0,0,0.35)', marginBottom: 20, textTransform: 'uppercase',
          }}>Design Tools</p>
          {DESIGN_SKILLS.map(s => (
            <p key={s} className="reel-text-item" style={{
              fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.9,
              color: 'rgba(0,0,0,0.7)',
            }}>{s}</p>
          ))}
        </div>

        <div>
          <p className="reel-text-item" style={{
            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em',
            color: 'rgba(0,0,0,0.35)', marginBottom: 20, textTransform: 'uppercase',
          }}>Research & Strategy</p>
          {RESEARCH_SKILLS.map(s => (
            <p key={s} className="reel-text-item" style={{
              fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.9,
              color: 'rgba(0,0,0,0.7)',
            }}>{s}</p>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .reel-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
