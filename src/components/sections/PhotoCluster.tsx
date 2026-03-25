import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PHOTOS = [
  {
    src: '/images/About-me-1.jpg',
    style: {
      left: '6%', top: '20%',
      width: 'clamp(240px,22vw,340px)',
      height: 'clamp(160px,15vw,230px)',
      transform: 'rotate(-3deg)',
    } as React.CSSProperties,
  },
  {
    src: '/images/About-me-2.jpg',
    style: {
      left: '32%', top: '10%',
      width: 'clamp(340px,33vw,500px)',
      height: 'clamp(420px,42vw,640px)',
      transform: 'rotate(0deg)',
    } as React.CSSProperties,
  },
  {
    src: '/images/About-me-3.jpg',
    style: {
      right: '4%', top: '48%',
      width: 'clamp(280px,24vw,360px)',
      height: 'clamp(180px,16vw,250px)',
      transform: 'rotate(2deg)',
    } as React.CSSProperties,
  },
];

function TiltPhoto({ src, style }: { src: string; style: React.CSSProperties }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const img = imgRef.current;
    if (!wrapper || !img) return;

    const onMove = (e: MouseEvent) => {
      const r = wrapper.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      gsap.to(img, {
        rotateY: (x - 0.5) * 18,
        rotateX: -(y - 0.5) * 14,
        transformPerspective: 900,
        duration: 0.45, ease: 'power2.out', overwrite: 'auto',
      });
    };
    const onEnter = () => gsap.to(img, { scale: 1.06, duration: 0.5, ease: 'expo.out' });
    const onLeave = () => gsap.to(img, { rotateX: 0, rotateY: 0, scale: 1, duration: 1, ease: 'expo.out' });

    wrapper.addEventListener('mousemove', onMove);
    wrapper.addEventListener('mouseenter', onEnter);
    wrapper.addEventListener('mouseleave', onLeave);

    return () => {
      wrapper.removeEventListener('mousemove', onMove);
      wrapper.removeEventListener('mouseenter', onEnter);
      wrapper.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'absolute', overflow: 'hidden',
        willChange: 'transform', ...style,
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt="Yuvraj"
        style={{
          width: '100%', height: '115%',
          objectFit: 'cover', display: 'block',
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
      />
    </div>
  );
}

export default function PhotoCluster() {
  return (
    <section
      id="photos"
      style={{
        position: 'relative', height: '115vh',
        background: 'var(--cream)', overflow: 'hidden',
      }}
    >
      {PHOTOS.map((p, i) => (
        <TiltPhoto key={i} src={p.src} style={p.style} />
      ))}
    </section>
  );
}
