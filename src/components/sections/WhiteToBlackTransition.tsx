import { useEffect, useRef, Suspense, lazy } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function WhiteToBlackTransition() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Start: invisible small rectangle
      gsap.set(overlayRef.current, {
        clipPath: 'inset(35% 30% 35% 30% round 4px)',
        opacity: 0,
      });

      // Timeline: phase 1 = fade in (0→20%), phase 2 = expand clip-path (20→100%)
      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.20,
        ease: 'power2.out',
      });
      tl.to(overlayRef.current, {
        clipPath: 'inset(0% 0% 0% 0% round 0px)',
        ease: 'power2.inOut',
        duration: 0.80,
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
          willChange: 'clip-path',
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
          <Suspense fallback={null}>
            <Spline scene="https://prod.spline.design/qIB3Yi6uopze8PhU/scene.splinecode" />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
