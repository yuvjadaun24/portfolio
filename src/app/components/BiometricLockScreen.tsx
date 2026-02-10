import React from 'react';
import BootSequence from './BootSequence';

interface BiometricLockScreenProps {
  onUnlock: () => void;
}
export default function BiometricLockScreen({ onUnlock }: BiometricLockScreenProps) {
  return <BootSequence onUnlock={onUnlock} />;
}
