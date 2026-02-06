import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar, { Section } from './Sidebar';
import MobileSidebar from './MobileSidebar';
import Footer from './Footer';
import KeyboardHint from './KeyboardHint';
import LiquidBackground from './LiquidBackground';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { useSound } from '../hooks/useSound';

function isEventInsideDialog(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest('[data-slot="dialog-content"], [data-slot="dialog-overlay"]'));
}

function getFocusableElements(root: HTMLElement | null): HTMLElement[] {
  if (!root) return [];

  const selector = [
    'button:not([disabled])',
    '[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',');

  const nodes = Array.from(root.querySelectorAll<HTMLElement>(selector));
  return nodes.filter((el) => {
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  });
}

type Direction = 'up' | 'down' | 'left' | 'right';

function moveFocusDirectional(root: HTMLElement | null, direction: Direction) {
  const focusables = getFocusableElements(root);
  if (!focusables.length) return;

  const activeEl = document.activeElement;
  const current = (activeEl instanceof HTMLElement && root?.contains(activeEl)) ? activeEl : focusables[0];
  const currentRect = current.getBoundingClientRect();
  const currentCx = currentRect.left + currentRect.width / 2;
  const currentCy = currentRect.top + currentRect.height / 2;

  let best: { el: HTMLElement; primary: number; perpendicular: number } | null = null;

  for (const candidate of focusables) {
    if (candidate === current) continue;
    const rect = candidate.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = cx - currentCx;
    const dy = cy - currentCy;

    let primary = 0;
    let perpendicular = 0;

    if (direction === 'right') {
      if (dx <= 4) continue;
      primary = dx;
      perpendicular = Math.abs(dy);
    } else if (direction === 'left') {
      if (dx >= -4) continue;
      primary = Math.abs(dx);
      perpendicular = Math.abs(dy);
    } else if (direction === 'down') {
      if (dy <= 4) continue;
      primary = dy;
      perpendicular = Math.abs(dx);
    } else {
      if (dy >= -4) continue;
      primary = Math.abs(dy);
      perpendicular = Math.abs(dx);
    }

    if (!best) {
      best = { el: candidate, primary, perpendicular };
      continue;
    }

    if (primary < best.primary || (primary === best.primary && perpendicular < best.perpendicular)) {
      best = { el: candidate, primary, perpendicular };
    }
  }

  if (best) {
    best.el.focus();
  } else {
    // No candidate found in that direction; do a simple wrap.
    const index = focusables.indexOf(current);
    const nextIndex =
      direction === 'right' || direction === 'down'
        ? (index + 1) % focusables.length
        : (index - 1 + focusables.length) % focusables.length;
    focusables[nextIndex]?.focus();
  }
}

export default function MainLayout({ initialSection = 'projects' }: { initialSection?: Section }) {
  const [activeSection, setActiveSection] = useState<Section>(initialSection);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const { playBlip, playSelect } = useSound();

  const contentRef = useRef<HTMLDivElement | null>(null);

  const sections: Section[] = useMemo(() => ['projects', 'about', 'skills', 'contact'], []);

  const requestSectionChange = (next: Section) => {
    if (next === activeSection) return;
    if (isTransitioning) return;
    // Switching sections exits interaction mode.
    if (isInteracting) setIsInteracting(false);

    // Tiny hardware-like input lag
    setIsTransitioning(true);
    window.setTimeout(() => {
      setActiveSection(next);
      // Let the "expand" finish before allowing more input
      window.setTimeout(() => setIsTransitioning(false), 360);
    }, 50);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isEventInsideDialog(e.target)) return;

      // If interaction mode is active, arrows navigate inside the current page.
      if (isInteracting) {
        if (e.key === 'Escape') {
          e.preventDefault();
          setIsInteracting(false);
          return;
        }

        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          const dir: Direction =
            e.key === 'ArrowUp'
              ? 'up'
              : e.key === 'ArrowDown'
                ? 'down'
                : e.key === 'ArrowLeft'
                  ? 'left'
                  : 'right';
          playBlip();
          moveFocusDirectional(contentRef.current, dir);
          return;
        }

        if (e.key === 'Enter') {
          e.preventDefault();
          playSelect();
          const activeEl = document.activeElement;
          if (activeEl instanceof HTMLElement && contentRef.current?.contains(activeEl)) {
            activeEl.click();
          }
          return;
        }
      }

      const currentIndex = sections.indexOf(activeSection);

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        playBlip();
        const newIndex = currentIndex > 0 ? currentIndex - 1 : sections.length - 1;
        requestSectionChange(sections[newIndex]);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        playBlip();
        const newIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : 0;
        requestSectionChange(sections[newIndex]);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        playSelect();

        const focusables = getFocusableElements(contentRef.current);
        if (focusables.length) {
          setIsInteracting(true);
          // Focus after React state settles.
          window.setTimeout(() => {
            // Only focus if we are still in interaction mode.
            const activeEl = document.activeElement;
            if (activeEl instanceof HTMLElement && contentRef.current?.contains(activeEl)) return;
            focusables[0]?.focus();
          }, 0);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeSection, isInteracting, playBlip, playSelect, sections]);

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="size-full relative overflow-hidden bg-[#0033cc] flex items-center justify-center">
      {/* Animated Liquid Background */}
      <LiquidBackground />

      {/* Main Container */}
      <motion.div
        className="relative z-10 w-full md:w-[95%] h-full md:h-[90%] max-w-7xl flex flex-col shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Content Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden md:rounded-t-lg border-4 border-black/30">
          {/* Mobile Sidebar (Top) */}
          <div className="md:hidden">
            <MobileSidebar activeSection={activeSection} onSectionChange={requestSectionChange} />
          </div>

          {/* Desktop Sidebar (Left) */}
          <div className="hidden md:block">
            <Sidebar activeSection={activeSection} onSectionChange={requestSectionChange} />
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-[#b0b0b0] overflow-hidden relative">
            <div ref={contentRef} className="size-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  className="size-full"
                  initial={{ opacity: 0, scaleX: 0.02, scaleY: 0.92 }}
                  animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleX: 0.02, scaleY: 0.92 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  style={{ transformOrigin: 'center' }}
                >
                  {renderSection()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Static blast during transition */}
            {isTransitioning ? (
              <div className="pointer-events-none absolute inset-0 z-[200] tv-static" />
            ) : null}
          </div>
        </div>

        {/* Footer */}
        <div className="hidden md:block">
          <Footer />
        </div>
      </motion.div>

      {/* Keyboard Navigation Hint */}
      <KeyboardHint />
    </div>
  );
}
