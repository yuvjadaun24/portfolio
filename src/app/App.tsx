import React, { useState } from 'react';
import BootSequence from './components/BootSequence';
import MainLayout from './components/MainLayout';
import CRTContainer from './components/CRTContainer';
import { useDevice } from './device/DeviceContext';
import SplashScreen from './components/SplashScreen';
import type { Section } from './components/Sidebar';

export default function App() {
  const { state, transitionTo } = useDevice();
  const [initialSection, setInitialSection] = useState<Section>('projects');

  return (
    <CRTContainer>
      <div className="size-full">
        {state === 'BOOTING' ? <BootSequence /> : null}
        {state === 'MENU_ROOT' ? (
          <SplashScreen
            onSelect={(nextSection) => {
              setInitialSection(nextSection);
              transitionTo('PLAYING_CONTENT');
            }}
          />
        ) : null}

        {state === 'PLAYING_CONTENT' ? <MainLayout initialSection={initialSection} /> : null}
        {/* fallback */}
        {state !== 'BOOTING' && state !== 'MENU_ROOT' && state !== 'PLAYING_CONTENT' ? (
          <MainLayout initialSection={initialSection} />
        ) : null}
      </div>
    </CRTContainer>
  );
}
