import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplineSafe from '@/components/SplineSafe';

gsap.registerPlugin(ScrollTrigger);

export default function WhiteToBlackTransition() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Start: tiny rectangle at dead center
      gsap.set(overlayRef.current, {
        scale: 0,
        transformOrigin: '50% 50%',
        opacity: 1,
      });

      const tl = gsap.timeline();

      // Expand from center to full screen
      tl.to(overlayRef.current, {
        scale: 1,
        ease: 'power2.inOut',
        duration: 1,
      });

      ScrollTrigger.create({
        trigger: wrapRef.current,
        start: 'top top',
        end: '+=300%',
        pin: true,
        anticipatePin: 1,
        scrub: 1.5,
        animation: tl,
        onUpdate: (self) => {
          const nav = document.querySelector('.navbar') as HTMLElement;
          if (nav) {
            if (self.progress > 0.4) nav.classList.add('dark');
            else nav.classList.remove('dark');
          }
        },
        onLeave: () => {
          document.querySelector('.navbar')?.classList.add('dark');
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        position: 'relative', height: '100vh',
        background: 'var(--cream)', overflow: 'hidden',
      }}
    >
      {/* The expanding black rectangle with Spline inside */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute', inset: 0,
          background: 'var(--black)',
          willChange: 'transform',
        }}
      >
        {/* Spline vortex — always centered inside the overlay */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vmin', height: '60vmin',
          pointerEvents: 'none',
        }}>
          <SplineSafe scene="https://prod.spline.design/qIB3Yi6uopze8PhU/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
