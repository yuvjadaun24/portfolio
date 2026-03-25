import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function BigStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        if (!headingRef.current || !paraRef.current) return;

        const splitH = new SplitText(headingRef.current, {
          type: 'words',
          wordsClass: 'word-wrap',
        });

        splitH.words.forEach((w: HTMLElement) => {
          w.style.overflow = 'hidden';
          w.style.display = 'inline-block';
        });

        gsap.from(splitH.words, {
          y: '108%',
          duration: 1.1, ease: 'expo.out', stagger: 0.06,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', once: true },
        });

        const splitP = new SplitText(paraRef.current, { type: 'words' });
        gsap.from(splitP.words, {
          y: 22, opacity: 0,
          duration: 0.7, ease: 'expo.out', stagger: 0.022, delay: 0.25,
          scrollTrigger: { trigger: paraRef.current, start: 'top 78%', once: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: 'var(--cream)', padding: '8vh 4vw 10vh', overflow: 'hidden' }}>
      <h2
        ref={headingRef}
        style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(64px, 13vw, 190px)',
          lineHeight: 0.88,
          color: 'var(--black)',
          letterSpacing: '-0.01em',
          fontWeight: 400,
          margin: '0 0 8vh',
        }}
      >
        (USER) THINKER DIGITAL MAKER
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p
          ref={paraRef}
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(16px, 1.9vw, 26px)',
            lineHeight: 1.5,
            color: 'rgba(0,0,0,0.72)',
            textAlign: 'center',
            maxWidth: 680,
          }}
        >
          Pushing the limits of user-centred design, constantly exploring
          emerging tools to craft visually striking, accessible, and
          immersive experiences that captivate and convert.
        </p>
      </div>
    </section>
  );
}
