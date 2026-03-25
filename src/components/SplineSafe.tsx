import { Component, type ReactNode } from 'react';
import Spline from '@splinetool/react-spline';

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

export default function SplineSafe({ scene, style }: Props) {
  return (
    <SplineErrorBoundary>
      <Spline scene={scene} style={style} />
    </SplineErrorBoundary>
  );
}
