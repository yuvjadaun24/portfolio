import React, { useState } from 'react';
import BiometricLockScreen from './components/BiometricLockScreen';
import MainLayout from './components/MainLayout';
import type { Section } from './components/Sidebar';

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [initialSection] = useState<Section>('about');

  return (
    <div className="w-full h-full">
      {!isAuthorized ? <BiometricLockScreen onUnlock={() => setIsAuthorized(true)} /> : null}
      {isAuthorized ? <MainLayout initialSection={initialSection} /> : null}
    </div>
  );
}
