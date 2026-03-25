import { useEffect, useRef, Suspense, lazy } from 'react';
import gsap from 'gsap';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface PhotoDef {
  src: string;
  rot: number;
  top: string;
  left?: string;
  right?: string;
  w: number;
  depth: number;
}

const PHOTOS: PhotoDef[] = [
  { src: '/images/profile.jpg', rot: -7,  top: '8%',  left: '5%',   w: 140, depth: 0.6 },
  { src: '/images/profile.jpg', rot:  4,  top: '5%',  left: '22%',  w: 100, depth: 1.2 },
  { src: '/images/profile.jpg', rot: -3,  top: '55%', left: '3%',   w: 120, depth: 0.9 },
  { src: '/images/profile.jpg', rot:  8,  top: '70%', left: '18%',  w: 90,  depth: 1.8 },
  { src: '/images/profile.jpg', rot: -5,  top: '10%', right: '4%',  w: 130, depth: 1.0 },
  { src: '/images/profile.jpg', rot:  3,  top: '22%', right: '20%', w: 100, depth: 2.2 },
  { src: '/images/profile.jpg', rot: -9,  top: '62%', right: '6%',  w: 115, depth: 1.5 },
  { src: '/images/profile.jpg', rot:  6,  top: '75%', right: '22%', w: 90,  depth: 2.5 },
];

export default function Hero() {
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from('.hero-corner-tl, .hero-corner-tr', { opacity: 0, duration: 0.8 })
        .from(
          imgRefs.current.filter(Boolean),
          { y: 40, opacity: 0, stagger: 0.08, duration: 1, ease: 'expo.out' },
          '-=0.4',
        )
        .from('.hero-body', { opacity: 0, y: 16, duration: 0.8 }, '-=0.3')
        .from('.hero-cta', { opacity: 0, y: 8, duration: 0.6 }, '-=0.4');
    });

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      imgRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = PHOTOS[i].depth;
        gsap.to(el, {
          x: dx * d * 0.025,
          y: dy * d * 0.018,
          duration: 1.4,
          ease: 'power1.out',
          overwrite: 'auto',
        });
      });
    };
    window.addEventListener('mousemove', onMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative', width: '100%', height: '100svh',
        background: 'var(--black)', overflow: 'hidden',
      }}
    >
      {/* Spline 3D background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.75 }}>
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/qIB3Yi6uopze8PhU/scene.splinecode" />
        </Suspense>
      </div>

      {/* Scattered photos */}
      {PHOTOS.map((p, i) => (
        <div
          key={i}
          ref={(el) => { imgRefs.current[i] = el; }}
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            right: p.right,
            width: p.w,
            height: p.w * 1.2,
            transform: `rotate(${p.rot}deg)`,
            overflow: 'hidden',
            zIndex: 1,
            filter: 'grayscale(30%)',
          }}
        >
          <img
            src={p.src}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ))}

      {/* Corner labels */}
      <div
        className="hero-corner-tl"
        style={{
          position: 'absolute', top: 100, left: 48, zIndex: 10,
          display: 'flex', flexDirection: 'column',
        }}
      >
        {['USER', 'THINKER'].map((w) => (
          <span
            key={w}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '0.3em', color: 'var(--gray)', lineHeight: 1.8,
            }}
          >
            {w}
          </span>
        ))}
      </div>
      <div
        className="hero-corner-tr"
        style={{
          position: 'absolute', top: 100, right: 48, zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
        }}
      >
        {['DIGITAL', 'MAKER'].map((w) => (
          <span
            key={w}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '0.3em', color: 'var(--gray)', lineHeight: 1.8,
            }}
          >
            {w}
          </span>
        ))}
      </div>

      {/* Centre content */}
      <div
        style={{
          position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)',
          zIndex: 10, textAlign: 'center', width: '90%', maxWidth: 600,
        }}
      >
        <p
          className="hero-body"
          style={{
            fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--white)',
            lineHeight: 1.8, letterSpacing: '0.02em', marginBottom: 32,
          }}
        >
          UI/UX Designer with 3.5+ years bridging design &amp; technology.
          <br />
          Crafting accessible, immersive digital experiences that convert.
        </p>
        <a
          href="#works"
          className="hero-cta"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.4em',
            color: 'var(--white)', textDecoration: 'none', textTransform: 'uppercase',
            border: '1px solid var(--border)', padding: '12px 32px',
            display: 'inline-block', transition: 'border-color 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--white)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
        >
          DISCOVER
        </a>
      </div>
    </section>
  );
}
