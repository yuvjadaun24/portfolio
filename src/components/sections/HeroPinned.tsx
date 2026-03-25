import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import SplineSafe from '@/components/SplineSafe';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Project thumbnail images for the tray
const TRAY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&q=80', alt: 'AI/ML Platform' },
  { src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&q=80', alt: 'FinTech' },
  { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&q=80', alt: 'Dashboard' },
  { src: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&q=80', alt: 'Responsive Web' },
  { src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&q=80', alt: 'Mobile' },
  { src: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=300&q=80', alt: 'Design System' },
  { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&q=80', alt: 'UX Research' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80', alt: 'Analytics' },
];

export default function HeroPinned() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const taglineParaRef = useRef<HTMLParagraphElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const trayRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!wrapperRef.current || !overlayRef.current || !anchorRef.current) return;

    let cancelled = false;
    let rafId: number;
    // Track the one ScrollTrigger we create so cleanup is scoped
    let st: ReturnType<typeof ScrollTrigger.create> | null = null;
    let tl: gsap.core.Timeline | null = null;

    rafId = requestAnimationFrame(() => {
      if (cancelled) return;

      document.fonts.ready.then(() => {
        if (cancelled) return;
        if (!wrapperRef.current || !overlayRef.current || !anchorRef.current) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // 1. Measure the inline anchor position
      const rect = anchorRef.current.getBoundingClientRect();
      const iTop = (rect.top / vh) * 100;
      const iRight = ((vw - rect.right) / vw) * 100;
      const iBottom = ((vh - rect.bottom) / vh) * 100;
      const iLeft = (rect.left / vw) * 100;

      // 2. Set initial clip-path on overlay to match anchor position
      gsap.set(overlayRef.current, {
        clipPath: `inset(${iTop}% ${iRight}% ${iBottom}% ${iLeft}% round 2px)`,
      });

      // 3. Set initial state of all animated elements
      gsap.set(taglineRef.current, { opacity: 0 });

      // Split tagline into lines and hide them below a clip mask
      let split: InstanceType<typeof SplitText> | null = null;
      if (taglineParaRef.current) {
        split = new SplitText(taglineParaRef.current, {
          type: 'lines',
          linesClass: 'tl-line',
        });
        split.lines.forEach((line) => {
          const wrapper = document.createElement('div');
          wrapper.style.overflow = 'hidden';
          wrapper.style.display = 'block';
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
          gsap.set(line, { y: '105%', opacity: 0 });
        });
      }

      // Pre-calculate final row metrics — tiles span full viewport width
      const gap = 8;
      const tileW = Math.floor((vw - gap * 7) / 8);
      const tileH = tileW;
      const totalW = tileW * 8 + gap * 7;
      const rowStartX = Math.floor((vw - totalW) / 2);
      const finalRowY = vh / 2 - tileH / 2 - 4;

      // Initial tile positions: above viewport at final column x
      trayRefs.current.forEach((el, i) => {
        if (!el) return;
        const finalX = rowStartX + i * (tileW + gap) - vw / 2 + tileW / 2;
        gsap.set(el, { x: finalX, y: -(vh * 0.7), opacity: 0, scale: 1, width: tileW, height: tileH });
      });

      // 4. Build the master timeline
      tl = gsap.timeline({ defaults: { ease: 'none' } });

      // Phase 1 (0→35%): expand clip-path, fade heading/desc
      tl.to(overlayRef.current, { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 0.35 }, 0);
      tl.to([headingRef.current, descRef.current], { opacity: 0, duration: 0.2 }, 0.05);

      // Phase 3 (52%→76%): images fall in
      trayRefs.current.forEach((el, i) => {
        if (!el) return;
        tl!.to(el, { y: finalRowY, opacity: 1, duration: 0.10, ease: 'expo.out' }, 0.52 + i * 0.02);
      });

      // Phase 3 cont (64%→79%): tagline lines reveal
      tl.to(taglineRef.current, { opacity: 1, duration: 0.01 }, 0.64);
      if (split?.lines.length) {
        tl.to(split.lines, { y: '0%', opacity: 1, duration: 0.10, ease: 'power3.out', stagger: 0.02 }, 0.65);
      }

      // Phase 4 (82%→95%): tagline + images exit downward
      const exitY = finalRowY + tileH + vh * 0.15 + 20;
      tl.to(taglineRef.current, { opacity: 0, y: -30, duration: 0.06, ease: 'power2.in' }, 0.82);
      trayRefs.current.forEach((el, i) => {
        if (!el) return;
        tl!.to(el, { y: exitY, opacity: 0, duration: 0.06, ease: 'power2.in' }, 0.82 + i * 0.01);
      });

      // Phase 5 (93%→100%): vortex fades
      tl.to(splineRef.current, { opacity: 0, scale: 0.92, duration: 0.07, ease: 'power2.inOut' }, 0.90);

      // 5. Pin with ScrollTrigger
      st = ScrollTrigger.create({
        trigger: wrapperRef.current,
        scroller: window,
        start: 'top top',
        end: '+=500%',
        pin: true,
        scrub: 1,
        animation: tl,
        onUpdate: (self) => {
          const nav = document.querySelector('.navbar') as HTMLElement;
          if (!nav) return;
          if (self.progress > 0.25 && self.progress < 0.95) nav.classList.add('dark');
          else nav.classList.remove('dark');
        },
      });

      // Refresh so Lenis scrollerProxy positions are recalculated
      ScrollTrigger.refresh();

      }); // document.fonts.ready
    }); // requestAnimationFrame

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      tl?.kill();
      st?.kill();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: 'var(--cream)',
        overflow: 'hidden',
      }}
    >
      {/* Full-screen vortex overlay — starts INVISIBLE; clip-path set in useEffect */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute', inset: 0,
          background: 'var(--black)',
          zIndex: 10,
          willChange: 'clip-path',
          clipPath: 'inset(100%)',   /* hidden until useEffect measures the anchor */
        }}
      >
        {/* Spline — starts at anchor position, grows to centre on scroll */}
        <div
          ref={splineRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <SplineSafe scene="https://prod.spline.design/qIB3Yi6uopze8PhU/scene.splinecode" />
        </div>

        {/* Tagline — appears in Phase 3; lines revealed via SplitText */}
        <div
          ref={taglineRef}
          style={{
            position: 'absolute',
            top: '12%', left: '50%',
            transform: 'translateX(-50%)',
            width: '90%', maxWidth: 1100,
            textAlign: 'left',
            zIndex: 20, pointerEvents: 'none',
            opacity: 0,   /* hidden until Phase 3 */
          }}
        >
          <p
            ref={taglineParaRef}
            style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(28px, 3.8vw, 56px)',
            lineHeight: 1.15,
            color: 'var(--white)',
            fontWeight: 400,
          }}>
            Crafting accessible &amp; immersive experiences for{' '}
            <em style={{ fontStyle: 'italic' }}>bold products,</em>{' '}
            <em style={{ fontStyle: 'italic' }}>beautiful interfaces,</em>
            {' '}and digital journeys that actually matter.
          </p>
        </div>

        {/* Project image tray */}
        {TRAY_IMAGES.map((img, i) => (
          <div
            key={i}
            ref={el => { trayRefs.current[i] = el; }}
            style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 80, height: 80,
              borderRadius: 6,
              overflow: 'hidden',
              flexShrink: 0,
              zIndex: 15,
              willChange: 'transform',
            }}
          >
            <img
              src={img.src} alt={img.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      {/* Heading — cream bg layer with giant black text */}
      <div
        ref={headingRef}
        style={{
          position: 'absolute',
          bottom: '12%', left: 0, right: 0,
          paddingLeft: '3vw',
          zIndex: 5,
          willChange: 'opacity',
        }}
      >
        <h1 style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(60px, 10vw, 190px)',
          lineHeight: 0.90,
          color: 'var(--black)',
          letterSpacing: '-0.01em',
          fontWeight: 400,
          margin: 0,
        }}>
          <span style={{ display: 'block' }}>YUVRAJ</span>
          <span style={{ display: 'block', paddingLeft: '4vw' }}>SINGH</span>
          <span style={{
            display: 'flex', alignItems: 'center',
            gap: '2vw', paddingLeft: '1.5vw',
          }}>
            <span>JADAUN</span>
            {/* Anchor — placeholder that the overlay clip-path starts from */}
            <div
              ref={anchorRef}
              id="vortex-anchor"
              style={{
                width: 'clamp(180px, 16vw, 260px)',
                height: 'clamp(160px, 14vw, 240px)',
                background: 'var(--black)',
                flexShrink: 0,
                borderRadius: 2,
              }}
            />
            <span>DESIGNER</span>
          </span>
        </h1>
      </div>

      {/* Description (top-right) */}
      <div
        ref={descRef}
        style={{
          position: 'absolute',
          top: '14%', right: '3%',
          width: 200,
          zIndex: 5,
          willChange: 'opacity',
        }}
      >
        <p style={{
          fontFamily: 'var(--mono)',
          fontSize: 11,
          lineHeight: 1.7,
          letterSpacing: '0.03em',
          color: 'var(--black)',
          opacity: 0.75,
          textAlign: 'justify',
        }}>
          UI/UX Designer with 3.5+ years bridging design &amp; technology. Specialising in accessible, data-driven digital experiences.
        </p>
      </div>
    </div>
  );
}
