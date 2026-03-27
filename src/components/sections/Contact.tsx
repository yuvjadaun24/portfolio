import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplineSafe from '@/components/SplineSafe';

gsap.registerPlugin(ScrollTrigger);

type Step = 'init' | 'name' | 'email' | 'type' | 'note' | 'sending' | 'done' | 'error';
type Message = { from: 'bot' | 'user'; text: string };

const PROJECT_TYPES = [
  'UI/UX Design', 'Front-End Dev', 'Full Design System',
  'Branding & Identity', 'UX Research', 'Consultation', 'Other',
];

export default function Contact() {
  const [step, setStep] = useState<Step>('init');
  const [inputError, setInputError] = useState('');
  const [input, setInput] = useState('');
  const [data, setData] = useState({ name: '', email: '', type: '', note: '' });
  const [msgs, setMsgs] = useState<Message[]>([
    { from: 'bot', text: "Hey there! I'm Yuvraj's contact bot. Ready to discuss your next project.\n\nShall we get started?  Hit Enter" },
  ]);
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const push = (from: 'bot' | 'user', text: string) =>
    setMsgs(prev => [...prev, { from, text }]);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const advance = async () => {
    setInputError('');
    if (step === 'init') {
      push('bot', "Hi — what's your name?");
      setStep('name');
    } else if (step === 'name') {
      if (!input.trim()) { setInputError('Please enter your name.'); return; }
      setData(d => ({ ...d, name: input.trim() }));
      push('user', input.trim());
      push('bot', `Nice to meet you, ${input.trim()}! What's your email?`);
      setStep('email');
      setInput('');
    } else if (step === 'email') {
      if (!isValidEmail(input.trim())) { setInputError('Please enter a valid email address.'); return; }
      setData(d => ({ ...d, email: input.trim() }));
      push('user', input.trim());
      push('bot', 'What kind of project are you thinking?');
      setStep('type');
      setInput('');
    } else if (step === 'note') {
      if (!input.trim()) { setInputError('Please leave a short note.'); return; }
      const note = input.trim();
      const payload = { ...data, note };
      setData(d => ({ ...d, note }));
      push('user', note);
      setStep('sending');
      setInput('');
      try {
        const res = await fetch('https://formspree.io/f/mnjonlve', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('Network response was not ok');
        setStep('done');
        push('bot', "Message sent! I'll get back to you soon.");
      } catch {
        setStep('error');
        push('bot', 'Hmm, something went wrong. Please email me directly at yuvrajjadaun2@gmail.com');
      }
    } else if (step === 'error') {
      // restart
      setStep('init');
      setData({ name: '', email: '', type: '', note: '' });
      setMsgs([{ from: 'bot', text: "Hey there! I'm Yuvraj's contact bot. Ready to discuss your next project.\n\nShall we get started?  Hit Enter" }]);
    }
  };

  const selectType = (t: string) => {
    setData(d => ({ ...d, type: t }));
    push('user', t);
    push('bot', 'Any additional notes or context?');
    setStep('note');
  };

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
    if (step !== 'init' && step !== 'type' && step !== 'done' && step !== 'sending' && step !== 'error') setTimeout(() => inputRef.current?.focus(), 80);
  }, [msgs, step]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        opacity: 0, y: 40, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-grid"
      style={{
        background: 'var(--black)',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '48% 52%',
        padding: '8vh 5vw',
        gap: '4vw',
        alignItems: 'center',
      }}
    >
      {/* LEFT — chat form */}
      <div
        ref={leftRef}
        style={{ border: '1px solid rgba(255,255,255,0.15)', display: 'flex', flexDirection: 'column' }}
      >
        {/* Header row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '16px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)' }}>
            TO: YUVRAJ
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)' }}>
            ( YUVRAJJADAUN2@GMAIL.COM )
          </span>
        </div>

        {/* Chat area */}
        <div ref={chatRef} style={{ padding: '28px 24px', minHeight: 320, maxHeight: 420, overflowY: 'auto', flex: 1 }}>
          {msgs.map((m, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 20,
            }}>
              <p style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(16px, 1.6vw, 22px)',
                lineHeight: 1.45, color: '#fff',
                whiteSpace: 'pre-line',
                maxWidth: m.from === 'user' ? '75%' : '100%',
                ...(m.from === 'user' ? { border: '1px solid rgba(255,255,255,0.2)', padding: '10px 16px' } : {}),
              }}>
                {m.text}
                {i === 0 && (
                  <button
                    onClick={advance}
                    style={{
                      display: 'inline-block', marginLeft: 12,
                      border: '1px solid rgba(255,255,255,0.4)',
                      background: 'none', color: '#fff',
                      fontFamily: 'var(--mono)', fontSize: 10,
                      letterSpacing: '0.2em', padding: '6px 14px',
                      verticalAlign: 'middle',
                    }}
                  >ENTER</button>
                )}
              </p>
            </div>
          ))}

          {step === 'sending' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em' }}>SENDING…</span>
            </div>
          )}

          {step === 'type' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {PROJECT_TYPES.map(t => (
                <button key={t} onClick={() => selectType(t)} style={{
                  background: 'none',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em',
                  padding: '8px 16px', transition: 'border-color 0.3s, color 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
                >{t.toLowerCase()}</button>
              ))}
            </div>
          )}
        </div>

        {/* Bottom input bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '14px 24px',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          {step !== 'type' && step !== 'done' && step !== 'sending' && step !== 'error' && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => { setInput(e.target.value); setInputError(''); }}
                onKeyDown={e => e.key === 'Enter' && advance()}
                placeholder={step === 'init' ? '...' : step === 'name' ? 'Your name' : step === 'email' ? 'your@email.com' : 'Additional notes...'}
                style={{
                  flex: 1, background: 'none', border: 'none', outline: 'none',
                  fontFamily: 'var(--mono)', fontSize: 12, color: '#fff', caretColor: '#fff',
                }}
              />
              {inputError && (
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#ff6b6b', letterSpacing: '0.1em' }}>{inputError}</span>
              )}
            </div>
          )}
          {step === 'done' && (
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
              MESSAGE SENT — TALK SOON
            </span>
          )}
          {(step === 'sending') && (
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
              SENDING…
            </span>
          )}
          {step === 'error' && (
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
              FAILED — HIT SEND TO RETRY
            </span>
          )}
          <button
            onClick={advance}
            disabled={step === 'done' || step === 'type' || step === 'sending'}
            style={{
              marginLeft: 'auto',
              background: step === 'done' ? 'transparent' : 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.6)',
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.2em',
              padding: '10px 20px', transition: 'background 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >SEND REQUEST</button>
        </div>
      </div>

      {/* RIGHT — vortex */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
        <div style={{ width: '52vmin', height: '52vmin' }}>
          <SplineSafe scene="https://prod.spline.design/qIB3Yi6uopze8PhU/scene.splinecode" />
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
