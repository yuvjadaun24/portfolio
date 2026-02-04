import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

export type DeviceState = 'POWER_OFF' | 'BOOTING' | 'READY' | 'NO_DISC' | 'READING' | 'MENU_ROOT' | 'PLAYING_CONTENT';

type DeviceContextValue = {
  state: DeviceState;
  setState: (next: DeviceState) => void;

  /** Fire-and-forget transition helper (will later trigger static bursts / cut-to-black). */
  transitionTo: (next: DeviceState) => void;

  /** Remote-like input latency in ms (defaults to 150). */
  inputLatencyMs: number;

  /** Helper to mark boot as complete. */
  completeBoot: () => void;
};

const DeviceContext = createContext<DeviceContextValue | null>(null);

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<DeviceState>('BOOTING');
  const inputLatencyMs = 150;

  // reserved for later: central timeline/transition lock
  const transitionLock = useRef(false);

  const transitionTo = useCallback(
    (next: DeviceState) => {
      if (transitionLock.current) return;
      if (state === 'BOOTING' && next !== 'MENU_ROOT') return; // guard for boot->menu transitions
      transitionLock.current = true;

      // In later phases: trigger "cut to black" -> static burst -> next state
      setState(next);

      window.setTimeout(() => {
        transitionLock.current = false;
      }, 220);
    },
    [setState, state],
  );

  const completeBoot = useCallback(() => {
    if (state === 'BOOTING') {
      setState('MENU_ROOT');
    }
  }, [state]);

  const value = useMemo<DeviceContextValue>(
    () => ({
      state,
      setState,
      transitionTo,
      inputLatencyMs,
      completeBoot,
    }),
    [state, transitionTo, completeBoot],
  );

  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
}

export function useDevice() {
  const ctx = useContext(DeviceContext);
  if (!ctx) throw new Error('useDevice must be used within DeviceProvider');
  return ctx;
}
