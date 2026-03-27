import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import App from './App';
import './styles/index.css';

gsap.registerPlugin(ScrollTrigger);

// Pause all GSAP (and thus ScrollTrigger) work when the tab is hidden
// to prevent GPU/CPU burn while the user is on another tab.
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    gsap.ticker.sleep();
    (window as any).__tabHidden = true;
  } else {
    gsap.ticker.wake();
    (window as any).__tabHidden = false;
  }
});

// Safety net: force-release all GPU resources when the page unloads,
// covering cases where React unmount lifecycle doesn't run.
window.addEventListener('beforeunload', () => {
  gsap.ticker.sleep();
  gsap.globalTimeline.clear();
  ScrollTrigger.getAll().forEach(t => t.kill());
  window.dispatchEvent(new Event('force-gpu-dispose'));
});

// Prevent browser from restoring scroll position on reload
history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root element');

createRoot(root).render(<App />);
