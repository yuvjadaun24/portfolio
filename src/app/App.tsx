import React from 'react';
import BootSequence from './components/BootSequence';
import MainLayout from './components/MainLayout';
import CRTContainer from './components/CRTContainer';
import { useDevice } from './device/DeviceContext';

export default function App() {
  const { state } = useDevice();

  return (
    <CRTContainer>
      <div className="size-full">
        {state === 'BOOTING' ? <BootSequence /> : null}
        {state === 'MENU_ROOT' ? <MainLayout /> : null}
        {/* fallback */}
        {state !== 'BOOTING' && state !== 'MENU_ROOT' ? <MainLayout /> : null}
      </div>
    </CRTContainer>
  );
}
