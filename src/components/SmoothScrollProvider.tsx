import { useEffect, useState, type ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Ensure we always start at the very top regardless of browser scroll memory
    window.scrollTo(0, 0);

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.scrollTo(0, { immediate: true });

    // Scroller proxy so Lenis + ScrollTrigger pin don't conflict
    ScrollTrigger.scrollerProxy(window, {
      scrollTop(value) {
        if (arguments.length) lenis.scrollTo(value as number);
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Wait for fonts BEFORE rendering sections so every ScrollTrigger is
    // created synchronously in DOM order — no more race conditions.
    document.fonts.ready.then(() => {
      setReady(true);
      // After React renders all sections and their useEffects fire (creating
      // ScrollTriggers in DOM order), refresh once to calculate correct positions.
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        window.scrollTo(0, 0);
        lenis.scrollTo(0, { immediate: true });
      });
    });

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  // Don't render children until fonts are loaded — all ScrollTrigger pins
  // will then be created synchronously in the correct DOM order.
  return <>{ready ? children : null}</>;
}
