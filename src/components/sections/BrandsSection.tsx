import { useEffect, useRef, Suspense, lazy } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function BrandsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 50, opacity: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: textRef.current, start: 'top 85%', once: true },
      });
      gsap.from(labelRef.current, {
        opacity: 0, duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--black)',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        padding: '5vw 5vw 6vh',
      }}
    >
      {/* Top-left label */}
      <div
        ref={labelRef}
        style={{
          position: 'absolute', top: '5vh', left: '5vw',
          display: 'flex', alignItems: 'flex-start', gap: 14,
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 8, marginTop: 4 }}>●</span>
        <p style={{
          fontFamily: 'var(--serif)', fontSize: 14, lineHeight: 1.6,
          color: 'rgba(255,255,255,0.7)', maxWidth: 200,
        }}>
          From Every Industry, For Every Scale. Explore the Skills I Bring.
        </p>
      </div>

      {/* Vortex */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -55%)',
        width: '50vmin', height: '50vmin',
        pointerEvents: 'none',
      }}>
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/qIB3Yi6uopze8PhU/scene.splinecode" />
        </Suspense>
      </div>

      {/* Large skills text */}
      <p
        ref={textRef}
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(24px, 3.5vw, 52px)',
          fontWeight: 500,
          lineHeight: 1.2,
          color: 'rgba(255,255,255,0.9)',
          position: 'relative',
          zIndex: 10,
          maxWidth: '92vw',
        }}
      >
        Figma / Adobe XD / Heuristic Evaluation / WCAG Accessibility /
        User Research / Interaction Design / Rapid Prototyping /
        Design Systems / A/B Testing / Mobile UX / Dashboard Modernisation /
        Information Architecture / Usability Testing / Responsive Web Design
      </p>
    </section>
  );
}
