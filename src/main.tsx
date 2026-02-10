import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import './styles/index.css';
import { DeviceProvider } from './app/device/DeviceContext';
import CRTEffect from './app/components/CRTEffect';

/* ── Fluid layout ──
   No more 1280×720 box. The UI fills 100vw × 100dvh.
   We still detect DPI for CRT quality, but no transform scaling. */

function applyDisplayFlags() {
  const dpr = window.devicePixelRatio ?? 1;
  const isMac = /Mac/i.test(navigator.platform || '');

  document.documentElement.dataset.dpi = dpr > 1 ? 'hi' : 'lo';
  document.documentElement.style.setProperty('--ui-scale', '1');
  document.documentElement.dataset.crtQuality = (dpr >= 2 && isMac) ? 'lite' : 'full';
}

applyDisplayFlags();
window.addEventListener('resize', applyDisplayFlags, { passive: true });

const overlayNode = document.getElementById('crt-overlay');
if (!overlayNode) throw new Error('Missing #crt-overlay node');
const overlayRoot = createRoot(overlayNode);

// Prevent font reflow: hide until fonts are ready.
(document as any).fonts?.ready
  ?.then(() => {
    document.body.classList.add('ready');
    applyDisplayFlags();
    overlayRoot.render(<CRTEffect />);
  })
  .catch(() => {
    document.body.classList.add('ready');
    applyDisplayFlags();
    overlayRoot.render(<CRTEffect />);
  });

const mountNode = document.getElementById('ui-content');
if (!mountNode) throw new Error('Missing #ui-content mount node');

createRoot(mountNode).render(
  <DeviceProvider>
    <App />
  </DeviceProvider>,
);
