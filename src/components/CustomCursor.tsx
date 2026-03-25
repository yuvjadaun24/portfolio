import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;
    let velX = 0;
    let prevX = mouseX;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      curX += (mouseX - curX) * 0.14;
      curY += (mouseY - curY) * 0.14;

      velX = mouseX - prevX;
      prevX = mouseX;

      // Stretch blob based on horizontal velocity
      const stretchX = Math.max(1, Math.min(2.5, 1 + Math.abs(velX) * 0.04));
      const stretchY = 1 / stretchX; // preserve area

      gsap.set(blobRef.current, {
        x: curX,
        y: curY,
        scaleX: stretchX,
        scaleY: stretchY,
      });

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    // Scale up on hover of interactive elements
    const onEnter = () => gsap.to(blobRef.current, { width: 48, height: 48, duration: 0.3, ease: 'expo.out' });
    const onLeave = () => gsap.to(blobRef.current, { width: 18, height: 18, duration: 0.3, ease: 'expo.out' });

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-hover]')) onEnter();
      else onLeave();
    };

    document.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="cursor-blob"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: '#ffffff',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        willChange: 'transform',
      }}
    />
  );
}
