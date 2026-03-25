import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Prevent browser from restoring scroll position on reload
history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

const root = document.getElementById('root');
if (!root) throw new Error('Missing #root element');

createRoot(root).render(<App />);
