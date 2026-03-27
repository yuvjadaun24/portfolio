import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { scrollVelocityProxy, initScrollVelocity } from '../utils/scrollVelocity';

// Initialise the singleton velocity tracker once on first import
initScrollVelocity();

// ── Shaders ──────────────────────────────────────────────────────────────────

const VERT = /* glsl */ `
  varying vec2 vUv;
  varying vec2 vUvCover;
  uniform vec2 uTextureSize;
  uniform vec2 uQuadSize;

  void main() {
    vUv = uv;

    // "cover" mapping — preserves aspect ratio
    float texR  = uTextureSize.x / uTextureSize.y;
    float quadR = uQuadSize.x    / uQuadSize.y;
    vec2 s = vec2(1.0);
    if (quadR > texR) { s.y = texR / quadR; } else { s.x = quadR / texR; }
    vUvCover = vUv * s + (1.0 - s) * 0.5;

    gl_Position = vec4(position, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;

  uniform sampler2D uTexture;
  uniform vec2      uTextureSize;
  uniform vec2      uQuadSize;
  uniform float     uTime;
  uniform float     uScrollVelocity;   // signed -1..1
  uniform float     uVelocityStrength; // 0..1, decays to 0

  varying vec2 vUv;
  varying vec2 vUvCover;

  void main() {
    vec2  texCoords = vUvCover;
    float amt = 0.03 * uVelocityStrength;
    float t   = uTime * 0.8;

    texCoords.y += sin((texCoords.x * 8.0) + t)          * amt;
    texCoords.x += cos((texCoords.y * 6.0) - t * 0.8)    * amt * 0.6;

    float dir = sign(uScrollVelocity);
    vec2  tc  = texCoords;

    float r = texture2D(uTexture, tc + vec2( amt * 0.50 * dir,  0.0)).r;
    float g = texture2D(uTexture, tc + vec2( amt * 0.25 * dir,  0.0)).g;
    float b = texture2D(uTexture, tc + vec2(-amt * 0.35 * dir,  0.0)).b;

    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

// ── Component ─────────────────────────────────────────────────────────────────

interface ShaderFrameProps {
  /** Full URL of the image to render */
  src: string;
}

/** Returns true if WebGL is available in this browser/environment */
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export default function ShaderFrame({ src }: ShaderFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Stable check: computed once on first render, never changes
  const [webglSupported] = useState<boolean>(() => isWebGLAvailable());

  // useEffect is always called (Rules of Hooks) — guards inside skip work if WebGL is off
  useEffect(() => {
    if (!webglSupported) return;
    const container = containerRef.current;
    if (!container) return;

    // Only create the WebGL renderer when this card is actually visible.
    // This keeps the active context count low so Spline can get a slot too.
    let cleanup: (() => void) | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !cleanup) {
          cleanup = startRenderer(container, src);
        } else if (!entry.isIntersecting && cleanup) {
          cleanup();
          cleanup = undefined;
        }
      },
      { rootMargin: '200px' },
    );
    io.observe(container);
    return () => {
      io.disconnect();
      cleanup?.();
    };
  }, [src, webglSupported]);

  if (!webglSupported) {
    return (
      <img
        src={src}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  );
}

/** Creates + starts the Three.js renderer; returns a cleanup fn. */
function startRenderer(container: HTMLDivElement, src: string): (() => void) | undefined {

    // ── Renderer ──
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      // WebGL creation failed at runtime — bail out silently
      return;
    }
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio ?? 1, 2));

    // Canvas fills the container absolutely
    const canvas = renderer.domElement;
    canvas.style.cssText =
      'position:absolute;inset:0;width:100%;height:100%;display:block;';
    container.appendChild(canvas);

    // ── Scene ──
    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geom   = new THREE.PlaneGeometry(2, 2);

    const uniforms: Record<string, { value: unknown }> = {
      uTexture:         { value: null },
      uTextureSize:     { value: new THREE.Vector2(1, 1) },
      uQuadSize:        { value: new THREE.Vector2(1, 1) },
      uTime:            { value: 0 },
      uScrollVelocity:  { value: 0 },
      uVelocityStrength:{ value: 0 },
    };

    const mat = new THREE.ShaderMaterial({
      uniforms,
      vertexShader:   VERT,
      fragmentShader: FRAG,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geom, mat);
    scene.add(mesh);

    // ── Layout helper ──
    const layout = () => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      (uniforms.uQuadSize.value as THREE.Vector2).set(width, height);
    };

    // ── Texture load ──
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');
    loader.load(src, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      uniforms.uTexture.value = tex;
      (uniforms.uTextureSize.value as THREE.Vector2).set(
        tex.image.width,
        tex.image.height
      );
      layout();
    });

    layout();

    const ro = new ResizeObserver(layout);
    ro.observe(container);

    // ── Render loop ──
    let last = performance.now();
    const tick = (now: number) => {
      // Skip GPU work when tab is hidden
      if ((window as any).__tabHidden) return;

      const dt = (now - last) * 0.001;
      last = now;
      uniforms.uTime.value = (uniforms.uTime.value as number) + dt;
      uniforms.uScrollVelocity.value  = scrollVelocityProxy.v;
      uniforms.uVelocityStrength.value = scrollVelocityProxy.s;
      renderer.render(scene, camera);
    };
    gsap.ticker.add(tick);

  // ── Cleanup ──
  return () => {
    gsap.ticker.remove(tick);
    ro.disconnect();
    if (container.contains(canvas)) container.removeChild(canvas);

    // Dispose loaded texture
    const tex = uniforms.uTexture.value as THREE.Texture | null;
    if (tex) tex.dispose();

    mat.dispose();
    geom.dispose();
    renderer.dispose();

    // Force-release the WebGL context
    renderer.forceContextLoss();
  };
}
