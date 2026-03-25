import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const total = el.scrollWidth / 2;

    const tween = gsap.to(el, {
      x: reverse ? total : -total,
      duration: 25,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (x: string) => (parseFloat(x) % total) + 'px',
      },
    });

    const pause = () => tween.pause();
    const resume = () => tween.resume();
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);

    return () => {
      tween.kill();
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
    };
  }, [reverse]);

  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: 'hidden', borderBottom: '1px solid var(--border-light)' }}>
      <div ref={ref} style={{ display: 'flex', whiteSpace: 'nowrap', padding: '16px 0' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--mono)', fontSize: 10,
              letterSpacing: '0.3em', color: 'var(--gray)',
              textTransform: 'uppercase', padding: '0 40px',
              borderRight: '1px solid var(--border-light)',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div style={{ borderTop: '1px solid var(--border-light)' }}>
      <Row
        items={[
          'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin',
          'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap 5', 'JavaScript',
        ]}
      />
      <Row
        items={[
          'User Research', 'Wireframing', 'Prototyping', 'WCAG Accessibility',
          'Heuristic Evaluation', 'Design Thinking', 'A/B Testing', 'Information Architecture',
        ]}
        reverse
      />
    </div>
  );
}
