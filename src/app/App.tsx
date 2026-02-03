import { useState } from 'react';
import SplashScreen from '@/app/components/SplashScreen';
import MainLayout from '@/app/components/MainLayout';
import CRTEffect from '@/app/components/CRTEffect';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="size-full">
      {showSplash ? (
        <SplashScreen onEnter={() => setShowSplash(false)} />
      ) : (
        <MainLayout />
      )}
      <CRTEffect />
    </div>
  );
}
