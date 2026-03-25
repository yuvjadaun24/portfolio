import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollingTextPinned() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { x: '80vw' });

      gsap.to(textRef.current, {
        x: '-160vw',
        ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: '+=350%',
          pin: true,
          anticipatePin: 1,
          scrub: 0.8,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} style={{
      position: 'relative', height: '100vh',
      background: 'var(--black)', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
    }}>
      <div ref={textRef} style={{
        position: 'absolute', top: '50%',
        transform: 'translateY(-50%)',
        whiteSpace: 'nowrap', zIndex: 5,
        willChange: 'transform',
      }}>
        <span style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(80px, 17vw, 230px)',
          lineHeight: 1, color: '#ffffff',
          letterSpacing: '-0.01em',
          display: 'block',
        }}>
          LET'S TALK IDEAS
        </span>
      </div>
    </div>
  );
}
