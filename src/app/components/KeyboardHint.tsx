import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function KeyboardHint() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    // Hide the hint after 5 seconds
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);

    // Show hint again on keyboard press
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter') {
        setShowHint(true);
        clearTimeout(timer);
        setTimeout(() => setShowHint(false), 3000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <AnimatePresence>
      {showHint && (
        <motion.div
          className="fixed bottom-20 md:bottom-4 right-4 bg-black/80 backdrop-blur-sm px-4 py-3 rounded-md border border-white/10 z-50 dvd-body"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <div className="text-cyan-200">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M6 8h.01M10 8h.01M14 8h.01" />
                <path d="M6 12h12M6 16h12" />
              </svg>
            </div>
            <div className="text-white/75 text-xs" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>
              <div className="mb-1">USE ARROW KEYS</div>
              <div className="text-cyan-200">↑ ↓ + ENTER</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
