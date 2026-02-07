import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './styles/index.css';
import { DeviceProvider } from './app/device/DeviceContext';
import CRTEffect from './app/components/CRTEffect';

const BASE_WIDTH = 1280;
const BASE_HEIGHT = 720;

// NOTE (NON-NEGOTIABLE): scaling must use the exact float from Math.min(...)
// Do NOT quantize/round/clamp/snap this value.
function scaleUI() {
  const scale = Math.min(window.innerWidth / BASE_WIDTH, window.innerHeight / BASE_HEIGHT);
  const root = document.getElementById('ui-root') as HTMLDivElement | null;
  if (!root) return;
  root.style.transform = `scale(${scale})`;
}

function applyDpiFlags() {
  const dpr = window.devicePixelRatio ?? 1;
  document.documentElement.dataset.dpi = dpr > 1 ? 'hi' : 'lo';
}

applyDpiFlags();
window.addEventListener('resize', applyDpiFlags, { passive: true });
window.addEventListener('resize', scaleUI, { passive: true });
window.addEventListener('load', scaleUI);

const overlayNode = document.getElementById('crt-overlay');
if (!overlayNode) throw new Error('Missing #crt-overlay node');
const overlayRoot = createRoot(overlayNode);

// Prevent font reflow: hide until fonts are ready.
(document as any).fonts?.ready
  ?.then(() => {
    document.body.classList.add('ready');
    scaleUI();
    overlayRoot.render(<CRTEffect />);
  })
  .catch(() => {
    document.body.classList.add('ready');
    scaleUI();
    overlayRoot.render(<CRTEffect />);
  });

const mountNode = document.getElementById('ui-content');
if (!mountNode) throw new Error('Missing #ui-content mount node');

createRoot(mountNode).render(
  <DeviceProvider>
    <App />
  </DeviceProvider>,
);
