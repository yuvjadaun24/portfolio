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

export default function WorksListTable() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.wlt-row', {
        opacity: 0, y: 20, stagger: 0.07, duration: 0.9, ease: 'expo.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} style={{ background: 'var(--dark)', paddingBottom: '4vh' }}>
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
            transition: 'background 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
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
  );
}
