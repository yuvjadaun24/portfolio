import { Component, Suspense, lazy, useEffect, useRef, type ReactNode } from 'react';
import type { Application } from '@splinetool/runtime';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface Props {
  scene: string;
  style?: React.CSSProperties;
}

interface State { crashed: boolean; }

class SplineErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { crashed: false };
  static getDerivedStateFromError(): State { return { crashed: true }; }
  componentDidCatch() {}
  render() {
    if (this.state.crashed) return null;
    return this.props.children;
  }
}

function SplineInner({ scene, style }: Props) {
  const appRef = useRef<Application | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const disposeApp = () => {
    const app = appRef.current as any;
    if (!app) return;

    // Traverse scene graph and dispose every GPU resource
    app.scene?.traverse((obj: any) => {
      if (obj.geometry) obj.geometry.dispose();

      if (obj.material) {
        const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
        materials.forEach((mat: any) => {
          Object.values(mat).forEach((val: any) => {
            if (val?.isTexture) val.dispose();
          });
          mat.dispose();
        });
      }
    });

    // Release the WebGL context itself
    app.renderer?.dispose();
    app.renderer?.forceContextLoss();

    appRef.current = null;
  };

  useEffect(() => {
    // Listen for force-dispose on page unload (safety net)
    window.addEventListener('force-gpu-dispose', disposeApp);
    return () => {
      window.removeEventListener('force-gpu-dispose', disposeApp);
      disposeApp();
    };
  }, []);

  // Pause/resume Spline when scrolling in/out of viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const app = appRef.current as any;
        if (!app) return;
        if (entry.isIntersecting) {
          app.play?.();
        } else {
          app.stop?.();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <Suspense
        fallback={
          <div style={{ width: '100%', height: '100%', background: 'transparent', ...style }} />
        }
      >
        <Spline
          scene={scene}
          style={style}
          onLoad={(app) => { appRef.current = app; }}
          renderOnDemand
        />
      </Suspense>
    </div>
  );
}

export default function SplineSafe({ scene, style }: Props) {
  return (
    <SplineErrorBoundary>
      <SplineInner scene={scene} style={style} />
    </SplineErrorBoundary>
  );
}
