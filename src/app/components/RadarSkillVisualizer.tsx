import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { skills as skillGroups } from '../data/portfolio-data';
import { useScrambleText } from './SkillCallout';

type CategoryId = 'design' | 'frontend' | 'backend' | 'tools';

type RadarNode = {
  key: string;
  label: string;
  value: number; // 0..100
};

type Category = {
  id: CategoryId;
  label: string;
  nodes: RadarNode[];
};

const RINGS = 5;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function toNodeKey(label: string) {
  if (!label || label === '—') return 'NO_SIGNAL';
  const cleaned = label
    .toUpperCase()
    .replace(/\([^)]*\)/g, '')
    .replace(/[^A-Z0-9]+/g, '.')
    .replace(/^\.|\.$/g, '')
    .trim();
  return cleaned || 'NODE';
}

function statusFor(value: number) {
  if (value <= 0) return 'NO SIGNAL';
  if (value >= 90) return 'DEPLOYMENT READY';
  if (value >= 75) return 'OPERATIONAL';
  if (value >= 60) return 'CALIBRATING';
  return 'DEGRADED';
}

function summaryForSkill(label: string, categoryLabel: string) {
  const key = label.toUpperCase();

  const map: Record<string, string> = {
    FIGMA:
      'Designed end-to-end flows and high-fidelity UI components in Figma, maintaining consistent spacing, typography, and responsive rules. Built reusable libraries to speed iteration and reduce handoff ambiguity.',
    'ADOBE XD':
      'Created interactive prototypes for stakeholder reviews and usability sessions, validating navigation and interaction patterns early. Iterated quickly on feedback to converge on a clean, buildable spec.',
    SKETCH:
      'Maintained lightweight UI explorations and component drafts to rapidly test layout options before committing to high-fidelity builds. Organized symbols and styles for consistent screens.',
    'ADOBE ILLUSTRATOR':
      'Crafted iconography and vector assets for UI, ensuring crisp export pipelines and consistent stroke/shape language. Prepared production-ready assets aligned with platform constraints.',
    INVISION:
      'Shared prototypes and gathered feedback loops with clear annotations, accelerating approvals and reducing rework. Supported review cycles with structured comments and version control.',
    ZEPLIN:
      'Delivered structured handoff specs for developers with clear measurements, assets, and intent notes. Reduced implementation drift by keeping design-to-build details explicit.',

    HTML5:
      'Translated UI layouts into semantic, structured markup with a focus on accessibility and maintainability. Ensured content hierarchy and interaction states were predictable across devices.',
    CSS3:
      'Built responsive layouts and interaction states with careful attention to spacing, rhythm, and readability. Tuned UI polish with subtle transitions while keeping performance stable.',
    'BOOTSTRAP 5':
      'Used Bootstrap primitives to assemble responsive screens quickly while maintaining consistent spacing and component behavior. Customized layout patterns to match product needs without breaking conventions.',
    TAILWIND:
      'Applied utility-first styling to iterate fast while keeping spacing and typography consistent across screens. Reduced CSS surface area by composing reusable patterns directly in components.',
    'JAVASCRIPT (BASIC)':
      'Implemented lightweight interactions and UI helpers to support prototypes and production behavior. Focused on readable, maintainable logic for state changes and input handling.',

    'ACCESSIBILITY (WCAG)':
      'Designed interfaces with contrast, focus order, and keyboard support in mind, aligning key flows with WCAG expectations. Documented interaction states and error handling to reduce accessibility regressions.',
    'RESPONSIVE WEB DESIGN':
      'Planned breakpoints and component behavior across desktop/tablet/mobile so layouts remained stable under real-world content. Validated scaling rules to avoid overflow, clipping, and unreadable density.',
    'RESPONSIVE LAYOUTS':
      'Defined grid and spacing systems that adapt cleanly across resolutions. Kept UI readable and consistent by treating layout as a system, not one-off screens.',
    'INTERACTION DESIGN':
      'Designed micro-interactions and state transitions that communicate intent and reduce user uncertainty. Paired interaction specs with clear edge-case handling for implementation.',

    'USER RESEARCH':
      'Ran user interviews and structured testing to identify friction points, then translated insights into actionable design changes. Used evidence-driven iteration to improve clarity, confidence, and task completion.',
    'INFORMATION ARCHITECTURE':
      'Mapped navigation and content hierarchy to reduce cognitive load and make key tasks discoverable. Validated structure through iterative feedback and simplified user flows.',
    WIREFRAMING:
      'Built low-to-mid fidelity wireframes to rapidly explore layouts and prioritize content without visual noise. Used wireframes to align stakeholders before high-fidelity execution.',
    'RAPID PROTOTYPING':
      'Created interactive prototypes to test assumptions early and compress iteration cycles. Focused on realistic flows that surface edge cases before build time.',
    'USABILITY TESTING':
      'Planned and executed usability sessions to validate flows and uncover points of confusion. Synthesized findings into prioritized fixes with clear rationale.',
    'HEURISTIC EVALUATION':
      'Audited interfaces using heuristic principles to flag consistency, feedback, and error-prevention gaps. Converted findings into practical UI updates that improved day-to-day usability.',
    'DESIGN THINKING':
      'Applied a structured approach to problem framing, ideation, and validation to keep decisions grounded in user needs. Balanced creativity with constraints to ship realistic solutions.',
  };

  return (
    map[key] ??
    `Applied ${label} across real product work under the ${categoryLabel} module. Prioritized clarity, consistency, and build-ready specifications while iterating quickly on feedback.`
  );
}

/** Master coordinate function — works for any number of sides. */
function pointAtN(cx: number, cy: number, radius: number, index: number, totalSides: number) {
  const angle = -Math.PI / 2 + index * (2 * Math.PI / totalSides);
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
    angle,
  };
}

function ringPath(cx: number, cy: number, radius: number, sides: number) {
  const points = Array.from({ length: sides }, (_, i) => pointAtN(cx, cy, radius, i, sides));
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ') + ' Z';
}

function dataPolygonPath(cx: number, cy: number, maxRadius: number, values: number[], sides: number) {
  const points = values.map((v, i) => {
    const r = (clamp(v, 0, 100) / 100) * maxRadius;
    return pointAtN(cx, cy, r, i, sides);
  });
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ') + ' Z';
}

function seededBits(count: number) {
  // Deterministic pseudo-random bits so we don't re-layout on re-render.
  let seed = 1337;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 0xffffffff;
  };

  return Array.from({ length: count }, (_, i) => {
    const left = 8 + next() * 84; // percent
    const top = 10 + next() * 70; // percent
    const duration = 3.5 + next() * 3.5;
    const delay = next() * 1.5;
    const drift = (next() - 0.5) * 24;
    const bit = next() > 0.5 ? '1' : '0';
    const size = 10 + Math.round(next() * 4);

    return { id: `${i}`, left, top, duration, delay, drift, bit, size };
  });
}

function seededDust(count: number) {
  let seed = 424242;
  const next = () => {
    seed = (seed * 1103515245 + 12345) >>> 0;
    return seed / 0xffffffff;
  };

  return Array.from({ length: count }, (_, i) => {
    const left = 10 + next() * 80; // percent
    const top = 40 + next() * 55; // percent
    const z = -60 + next() * 140; // px
    const size = 1.5 + next() * 2.5; // px
    const duration = 5.5 + next() * 5;
    const delay = next() * 2.5;
    const driftX = (next() - 0.5) * 30;
    const driftY = -80 - next() * 110;

    return { id: `${i}`, left, top, z, size, duration, delay, driftX, driftY };
  });
}

function TypewriterTerminal({ text }: { text: string }) {
  const [visible, setVisible] = useState('');
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setVisible('');

    const start = performance.now();
    const charsPerSecond = 90;

    const tick = (now: number) => {
      const elapsed = (now - start) / 1000;
      const count = Math.min(text.length, Math.floor(elapsed * charsPerSecond));
      setVisible(text.slice(0, count));
      if (count < text.length) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text]);

  return (
    <div
      className="w-full border-2 border-white/10 bg-black/40 px-4 py-3"
      style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }}
    >
      <div className="dvd-body text-white/80 whitespace-pre-wrap" style={{ fontSize: 12, lineHeight: 1.7 }}>
        {visible || ' '}
        <span className="terminal-cursor" aria-hidden="true" />
      </div>
    </div>
  );
}

function DegreeRing({ size = 640 }: { size?: number }) {
  const view = 200;
  const cx = view / 2;
  const cy = view / 2;
  const r = 86;

  const ticks = Array.from({ length: 72 }, (_, i) => i * 5); // every 5 degrees
  const labelAngles = Array.from({ length: 8 }, (_, i) => i * 45); // 0..315

  const polar = (deg: number, radius: number) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return { x: cx + radius * Math.cos(a), y: cy + radius * Math.sin(a) };
  };

  return (
    <div
      className="absolute pointer-events-none opacity-10 animate-[spin_60s_linear_infinite]"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" viewBox={`0 0 ${view} ${view}`} className="block" style={{ color: 'rgb(6 182 212)' }}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={0.8} opacity={0.55} />

        {ticks.map((deg) => {
          const major = deg % 30 === 0;
          const p1 = polar(deg, r - (major ? 6 : 3));
          const p2 = polar(deg, r + (major ? 6 : 3));
          return (
            <line
              key={deg}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="currentColor"
              strokeWidth={major ? 1.2 : 0.8}
              opacity={major ? 0.75 : 0.45}
            />
          );
        })}

        {labelAngles.map((deg) => {
          const p = polar(deg, r + 14);
          return (
            <text
              key={deg}
              x={p.x}
              y={p.y}
              fill="currentColor"
              fontSize={6.5}
              textAnchor="middle"
              dominantBaseline="middle"
              opacity={0.7}
              style={{ fontFamily: 'Space Mono, ui-monospace, monospace', letterSpacing: '0.12em' }}
            >
              {`${deg}°`}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

function TelemetryTerminal({ text }: { text: string }) {
  const { chars } = useScrambleText(text, { durationMs: 260 });

  return (
    <div className="relative h-full w-full overflow-hidden bg-cyan-950/30 backdrop-blur-md">
      {/* Corner brackets only */}
      <span className="panel-corner panel-corner--tl" />
      <span className="panel-corner panel-corner--tr" />
      <span className="panel-corner panel-corner--bl" />
      <span className="panel-corner panel-corner--br" />

      <div className="p-4 h-full">
        <div className="dvd-body text-white/80 whitespace-pre-wrap" style={{ fontSize: 12, lineHeight: 1.65, letterSpacing: '0.06em' }}>
          {chars.length ? (
            chars.map((c, i) => (
              <span key={i} className={c.resolved ? 'text-white/85' : 'text-cyan-200/35'}>
                {c.ch}
              </span>
            ))
          ) : (
            <span className="text-white/70"> </span>
          )}
          <span className="terminal-cursor" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function ScrambleSummary({ text }: { text: string }) {
  const { chars } = useScrambleText(text, { durationMs: 600 });
  return (
    <>
      {chars.length ? (
        chars.map((c, i) => (
          <span key={i} className={c.resolved ? 'text-white/85' : 'text-cyan-300/30'}>
            {c.ch}
          </span>
        ))
      ) : (
        <span className="text-white/60"> </span>
      )}
    </>
  );
}

export default function RadarSkillVisualizer() {
  const levelMap: Record<string, number> = useMemo(
    () => ({
      Figma: 10,
      'Adobe XD': 8,
      Sketch: 7,
      'Adobe Illustrator': 7,
      InVision: 7,
      Zeplin: 7,

      HTML5: 8,
      CSS3: 8,
      'Bootstrap 5': 8,
      Tailwind: 9,
      'JavaScript (Basic)': 6,

      'Accessibility (WCAG)': 8,
      'Responsive Web Design': 9,
      'Responsive Layouts': 8,
      'Interaction Design': 9,

      'User Research': 9,
      'Information Architecture': 8,
      Wireframing: 9,
      'Rapid Prototyping': 9,
      'Usability Testing': 8,
      'Heuristic Evaluation': 8,
      'Design Thinking': 8,
    }),
    [],
  );

  const groupByCategory = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const g of skillGroups) map.set(g.category, g.items);
    return map;
  }, []);

  const categories: Category[] = useMemo(() => {
    const buildNodes = (items: string[]) =>
      items
        .filter((label) => label && label !== '—')
        .map((label) => {
          const level = levelMap[label] ?? 6;
          const value = clamp(Math.round((level / 10) * 100), 0, 100);
          return { key: toNodeKey(label), label, value } satisfies RadarNode;
        });

    return [
      {
        id: 'design',
        label: 'DESIGN',
        nodes: buildNodes(groupByCategory.get('Design Tools') ?? []),
      },
      {
        id: 'frontend',
        label: 'FRONTEND',
        nodes: buildNodes(groupByCategory.get('Frontend') ?? []),
      },
      {
        id: 'backend',
        label: 'BACKEND',
        nodes: buildNodes(groupByCategory.get('UI Frameworks') ?? []),
      },
      {
        id: 'tools',
        label: 'TOOLS',
        nodes: buildNodes(groupByCategory.get('Other Skills') ?? []),
      },
    ];
  }, [groupByCategory, levelMap]);

  const [activeCategoryId, setActiveCategoryId] = useState<CategoryId>('frontend');
  const [hoveredNodeIndex, setHoveredNodeIndex] = useState<number | null>(null);

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === activeCategoryId) ?? categories[0],
    [categories, activeCategoryId],
  );

  // Radar geometry (fixed viewBox; responsive sizing via CSS)
  const view = 420;
  const cx = view / 2;
  const cy = view / 2;
  const maxRadius = 150;

  // Dynamic side count based on real (non-placeholder) data
  const validNodes = activeCategory.nodes;
  const totalSides = validNodes.length;

  // Fixed "Targeting Lock" callout — pushed into top-left periphery
  const calloutBox = { x: -220, y: -20, w: 210, h: 155 };
  const calloutAnchor = { x: calloutBox.x + calloutBox.w, y: calloutBox.y + calloutBox.h / 2 };

  const values = validNodes.map((n) => n.value);
  const polygonD = useMemo(
    () => dataPolygonPath(cx, cy, maxRadius, values, totalSides),
    [cx, cy, maxRadius, values.join(','), totalSides],
  );

  const hoveredNode = hoveredNodeIndex == null ? null : validNodes[hoveredNodeIndex] ?? null;
  const hoveredNodePoint = useMemo(() => {
    if (hoveredNodeIndex == null) return null;
    const node = validNodes[hoveredNodeIndex];
    if (!node) return null;
    const r = (node.value / 100) * maxRadius;
    return pointAtN(cx, cy, r, hoveredNodeIndex, totalSides);
  }, [hoveredNodeIndex, validNodes, cx, cy, maxRadius, totalSides]);

  // Shallow-sweep connector: dot → sweeping diagonal → horizontal snap into box.
  // Elbow sits 60 viewBox-units right of the box, at the box's Y mid-line.
  const connector = useMemo(() => {
    if (!hoveredNodePoint) return null;
    const dot = hoveredNodePoint;
    const elbowX = calloutAnchor.x + 60;
    const elbowY = calloutAnchor.y;
    return {
      path: `M ${dot.x.toFixed(1)},${dot.y.toFixed(1)} L ${elbowX.toFixed(1)},${elbowY.toFixed(1)} L ${calloutAnchor.x},${calloutAnchor.y.toFixed(1)}`,
      elbow: { x: elbowX, y: elbowY },
    };
  }, [hoveredNodePoint, calloutAnchor.x, calloutAnchor.y]);

  const hoveredSummary = useMemo(() => {
    if (!hoveredNode) return '';
    return summaryForSkill(hoveredNode.label, activeCategory.label);
  }, [hoveredNode?.label, activeCategory.label]);

  const telemetryText = useMemo(() => {
    if (!hoveredNode) {
      return [
        `>> SYSTEM DIAGNOSTICS ONLINE`,
        `>> SCAN FOR TARGETS...`,
        `>> ACTIVE MODULE: ${activeCategory.label.toUpperCase()}`,
      ].join('\n');
    }

    return [
      `>> TARGET ACQUIRED: ${hoveredNode.key}`,
      `>> DECRYPTING...`,
      `>> SPECIALIZATION: ${toNodeKey(hoveredNode.label)}`,
      `>> STATUS: ${hoveredNode.value >= 85 ? 'EXPERT LEVEL' : statusFor(hoveredNode.value)}`,
    ].join('\n');
  }, [hoveredNode?.key, hoveredNode?.label, hoveredNode?.value, activeCategory.label]);

  const dust = useMemo(() => seededDust(28), []);

  const [tilt, setTilt] = useState({ rx: 8, ry: -10 });
  const rafRef = useRef<number | null>(null);

  const hudRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [crosshair, setCrosshair] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const hudEl = hudRef.current;
    const chartEl = chartRef.current;
    if (!hudEl || !chartEl) return;

    const update = () => {
      const hudRect = hudEl.getBoundingClientRect();
      const chartRect = chartEl.getBoundingClientRect();
      setCrosshair({
        x: chartRect.left - hudRect.left + chartRect.width / 2,
        y: chartRect.top - hudRect.top + chartRect.height / 2,
      });
    };

    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(hudEl);
    ro.observe(chartEl);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const nx = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    const ny = clamp((e.clientY - rect.top) / rect.height, 0, 1);

    const ry = -15 + nx * 30; // -15..15
    const rx = 15 - ny * 30; // 15..-15

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => setTilt({ rx, ry }));
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTilt({ rx: 8, ry: -10 });
  };

  useEffect(() => {
    // Reset node selection when switching category.
    setHoveredNodeIndex(null);
  }, [activeCategoryId]);

  return (
    <div ref={hudRef} className="relative w-full h-full overflow-hidden flex bg-black/90 p-8">
      {/* Crosshair overlay (absolute, spans whole screen; aligned to chart center) */}
      {crosshair ? (
        <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
          <div className="absolute left-0 right-0 h-[1px] bg-cyan-500" style={{ top: crosshair.y }} />
          <div className="absolute top-0 bottom-0 w-[1px] bg-cyan-500" style={{ left: crosshair.x }} />
        </div>
      ) : null}

      {/* Left: Locked Controller */}
      <div className="w-[300px] h-full flex flex-col justify-center pl-6 z-10 shrink-0 relative">
        <span className="panel-corner panel-corner--tl" />
        <span className="panel-corner panel-corner--tr" />
        <span className="panel-corner panel-corner--bl" />
        <span className="panel-corner panel-corner--br" />

        <div className="dvd-header text-white/90 crt-glow-text" style={{ fontSize: 18, lineHeight: 1 }}>
          CONTROLLER
        </div>

        <div className="mt-5 space-y-3">
          {categories.map((cat, idx) => {
            const active = cat.id === activeCategoryId;
            const channel = String(idx + 1).padStart(2, '0');
            return (
              <button
                key={cat.id}
                type="button"
                onMouseEnter={() => setActiveCategoryId(cat.id)}
                onFocus={() => setActiveCategoryId(cat.id)}
                className={
                  'w-full text-left dvd-body tracking-wider bg-transparent px-2 py-2 ' +
                  (active ? 'text-green-300' : 'text-white/55')
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    {active ? <span className="w-2 h-2 animate-pulse bg-green-500 shrink-0" aria-hidden="true" /> : <span className="w-2 h-2 bg-white/20 shrink-0" aria-hidden="true" />}
                    <span className={active ? 'crt-glow-text' : ''}>{`[ CH_${channel} ] ${cat.label.toUpperCase()}`}</span>
                  </div>
                  <span className={active ? 'text-green-300' : 'text-white/40'}>{active ? '[ ACTIVE ]' : '[ OFFLINE ]'}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-5 text-white/55 dvd-body" style={{ fontSize: 12, lineHeight: 1.6, letterSpacing: '0.10em' }}>
          CALIBRATION CHANNELS ONLINE.
        </div>
      </div>

      {/* Center: The Visualizer (takes remaining space) */}
      <div className="flex-1 relative flex justify-center items-center z-10">
        {/* Rotating Outer Ring */}
        <DegreeRing size={720} />

        {/* Holographic projection container */}
        <div ref={chartRef} className="relative" style={{ width: 'min(520px, 64vmin)', aspectRatio: '1 / 1' }}>
          {/* Volumetric projector rays */}
          <div className="projector-rays" aria-hidden="true" />

          <div className="absolute inset-0 projector-chamber" aria-hidden="true" />

          {/* Dust particles floating in 3D space */}
          <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
            {dust.map((p) => (
              <motion.div
                key={p.id}
                className="absolute"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: p.size,
                  height: p.size,
                  borderRadius: 9999,
                  background: 'rgba(255,255,255,0.65)',
                  transform: `translateZ(${p.z}px)`,
                  boxShadow: '0 0 10px rgba(34,211,238,0.22)',
                  opacity: 0.35,
                }}
                initial={{ y: 18, x: 0, opacity: 0 }}
                animate={{ y: [10, p.driftY], x: [0, p.driftX], opacity: [0, 0.45, 0] }}
                transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
                aria-hidden="true"
              />
            ))}
          </div>

          <motion.div
            className="absolute inset-0"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
            transition={{ type: 'spring', stiffness: 130, damping: 18, mass: 0.6 }}
            style={{
              transformStyle: 'preserve-3d',
              perspective: 1200,
            }}
          >
            {/* Chart stack */}
            <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
              {/* Layer 1: back wireframe */}
              <div className="absolute inset-0" style={{ transform: 'translateZ(-50px)' }}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox={`0 0 ${view} ${view}`}
                  className="block holo-glow"
                  style={{ color: 'rgb(34 211 238)', opacity: 0.55 }}
                  overflow="visible"
                  onMouseLeave={() => setHoveredNodeIndex(null)}
                >
                  <g opacity={0.35}>
                    {/* Dynamic concentric rings — adapts to totalSides */}
                    {Array.from({ length: RINGS }, (_, i) => {
                      const r = (maxRadius * (i + 1)) / RINGS;
                      return (
                        <path
                          key={i}
                          d={ringPath(cx, cy, r, totalSides)}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1}
                          opacity={i === RINGS - 1 ? 0.55 : 0.22}
                        />
                      );
                    })}

                    {/* Dynamic spoke lines */}
                    {Array.from({ length: totalSides }, (_, i) => {
                      const p = pointAtN(cx, cy, maxRadius, i, totalSides);
                      return (
                        <line
                          key={i}
                          x1={cx}
                          y1={cy}
                          x2={p.x}
                          y2={p.y}
                          stroke="currentColor"
                          strokeWidth={1}
                          opacity={0.18}
                        />
                      );
                    })}
                  </g>
                </svg>
              </div>

              {/* Layer 2: data polygon */}
              <div className="absolute inset-0" style={{ transform: 'translateZ(0px)' }}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox={`0 0 ${view} ${view}`}
                  className="block holo-glow"
                  style={{ color: 'rgb(34 211 238)' }}
                  overflow="visible"
                >
                  <defs>
                    <radialGradient id="hologram-gradient" cx="50%" cy="45%" r="60%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.40" />
                      <stop offset="65%" stopColor="currentColor" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
                    </radialGradient>
                  </defs>

                  <motion.path
                    d={polygonD}
                    animate={{ d: polygonD }}
                    transition={{ duration: 0.55, ease: 'easeInOut' }}
                    fill="url(#hologram-gradient)"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Layer 3: labels + nodes */}
              <div className="absolute inset-0" style={{ transform: 'translateZ(50px)' }}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox={`0 0 ${view} ${view}`}
                  className="block holo-glow"
                  style={{ color: 'rgb(34 211 238)' }}
                  overflow="visible"
                  onMouseLeave={() => setHoveredNodeIndex(null)}
                >
                  {validNodes.map((node, i) => {
                    const r = (node.value / 100) * maxRadius;
                    const p = pointAtN(cx, cy, r, i, totalSides);
                    const labelP = pointAtN(cx, cy, maxRadius + 28, i, totalSides);
                    const cosA = Math.cos(labelP.angle);
                    const active = hoveredNodeIndex === i;

                    return (
                      <g key={node.key}>
                        <text
                          x={labelP.x}
                          y={labelP.y}
                          fill="rgba(255,255,255,0.78)"
                          fontSize={10}
                          textAnchor={cosA > 0.1 ? 'start' : cosA < -0.1 ? 'end' : 'middle'}
                          dominantBaseline={labelP.y < cy ? 'auto' : 'hanging'}
                          style={{ fontFamily: 'Space Mono, ui-monospace, monospace', letterSpacing: '0.10em' }}
                        >
                          {node.label.toUpperCase()}
                        </text>

                        <motion.circle
                          cx={p.x}
                          cy={p.y}
                          r={active ? 5 : 4}
                          fill={active ? 'rgba(255,255,255,0.95)' : 'currentColor'}
                          animate={{ r: active ? 5 : 4, opacity: active ? 1 : 0.85 }}
                          transition={{ duration: 0.18 }}
                        />

                        {/* Hit zone */}
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r={30}
                          fill="transparent"
                          className="cursor-crosshair"
                          onMouseEnter={() => setHoveredNodeIndex(i)}
                          onMouseLeave={() => setHoveredNodeIndex(null)}
                          aria-label={`Analyze ${node.label}`}
                        />
                      </g>
                    );
                  })}
                </svg>

              </div>
            </div>
          </motion.div>

          {/* Fixed "Targeting Lock" — pinned top-left with elbow connector */}
          <AnimatePresence>
            {hoveredNode && hoveredNodePoint ? (
              <>
                {/* Elbow connector SVG (same viewBox → coordinates align with chart) */}
                {/* 45° dogleg connector SVG */}
                {connector ? (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-30"
                    viewBox={`0 0 ${view} ${view}`}
                    overflow="visible"
                    aria-hidden="true"
                  >
                    {/* Shallow sweep → horizontal rail */}
                    <motion.path
                      key={`conn-${hoveredNode.key}`}
                      d={connector.path}
                      stroke="rgb(0 224 255)"
                      strokeWidth={1.5}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.1 } }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      style={{ filter: 'drop-shadow(0 0 6px rgba(0,224,255,0.35))' }}
                    />

                    {/* Mechanical joint at the sweep→horizontal bend */}
                    <motion.circle
                      cx={connector.elbow.x}
                      cy={connector.elbow.y}
                      r={2}
                      fill="rgb(0 224 255)"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.08 } }}
                      transition={{ delay: 0.12, duration: 0.12 }}
                      style={{ filter: 'drop-shadow(0 0 10px rgba(0,224,255,0.55))' }}
                    />

                    {/* Outer ring at joint */}
                    <motion.circle
                      cx={connector.elbow.x}
                      cy={connector.elbow.y}
                      r={5}
                      fill="none"
                      stroke="rgb(0 224 255)"
                      strokeWidth={0.5}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.45, scale: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.06 } }}
                      transition={{ delay: 0.14, duration: 0.15 }}
                    />

                    {/* Terminal dot at box anchor edge */}
                    <motion.circle
                      cx={calloutAnchor.x}
                      cy={calloutAnchor.y}
                      r={2}
                      fill="rgb(0 224 255)"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.08 } }}
                      transition={{ delay: 0.18, duration: 0.12 }}
                      style={{ filter: 'drop-shadow(0 0 8px rgba(0,224,255,0.5))' }}
                    />
                  </svg>
                ) : null}

                {/* Pinned callout card (top-left, viewBox-aligned %) */}
                <motion.div
                  key={`card-${hoveredNode.key}`}
                  className="absolute pointer-events-none z-40 overflow-hidden"
                  style={{
                    left: `${(calloutBox.x / view) * 100}%`,
                    top: `${(calloutBox.y / view) * 100}%`,
                    width: `${(calloutBox.w / view) * 100}%`,
                    height: `${(calloutBox.h / view) * 100}%`,
                  }}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.1 } }}
                  transition={{ delay: 0.18, duration: 0.2, ease: 'easeOut' }}
                >
                  <div className="relative w-full h-full bg-cyan-950/50 backdrop-blur-md overflow-hidden">
                    <span className="panel-corner panel-corner--tl" />
                    <span className="panel-corner panel-corner--tr" />
                    <span className="panel-corner panel-corner--bl" />
                    <span className="panel-corner panel-corner--br" />
                    <div className="px-3 py-2">
                      <motion.div
                        className="dvd-body text-cyan-300/90"
                        style={{ fontSize: 10, letterSpacing: '0.12em' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0.4, 1] }}
                        transition={{ duration: 0.3, ease: 'easeOut', delay: 0.22 }}
                      >
                        {`>> TARGET LOCK: ${hoveredNode.key}`}
                      </motion.div>
                      <div className="mt-0.5 dvd-body text-white/65" style={{ fontSize: 9.5, letterSpacing: '0.08em' }}>
                        {`>> ${hoveredNode.value}% — ${statusFor(hoveredNode.value)}`}
                      </div>
                      <div
                        className="mt-1.5 dvd-body whitespace-pre-wrap overflow-hidden"
                        style={{ fontSize: 9, lineHeight: 1.45, letterSpacing: '0.02em' }}
                      >
                        <ScrambleSummary text={hoveredSummary} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Right: Locked Telemetry */}
      <div className="absolute bottom-8 right-8 w-[400px] h-[120px] min-h-[120px] overflow-hidden z-20">
        <TelemetryTerminal text={telemetryText} />
      </div>
    </div>
  );
}
