import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { skills as skillGroups } from '../data/portfolio-data';
import { SkillCallout } from './SkillCallout';

type CategoryId = 'design' | 'frontend' | 'backend' | 'tools';

type RadarNode = {
  key: string;
  label: string;
  value: number; // 0..100
};

type Category = {
  id: CategoryId;
  label: string;
  nodes: RadarNode[]; // always 6
};

const AXES = 6;
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

function pointAt(cx: number, cy: number, radius: number, axisIndex: number) {
  const angle = (-Math.PI / 2) + (axisIndex * (2 * Math.PI / AXES));
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  };
}

function polygonPath(cx: number, cy: number, maxRadius: number, values: number[]) {
  const points = values.map((v, i) => {
    const r = (clamp(v, 0, 100) / 100) * maxRadius;
    return pointAt(cx, cy, r, i);
  });

  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(' ');
  return `${d} Z`;
}

function hexPath(cx: number, cy: number, radius: number) {
  const points = Array.from({ length: AXES }, (_, i) => pointAt(cx, cy, radius, i));
  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(' ');
  return `${d} Z`;
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
    const buildNodes = (items: string[]) => {
      const padded = [...items];
      while (padded.length < AXES) padded.push('—');
      return padded.slice(0, AXES).map((label) => {
        const level = label === '—' ? 0 : levelMap[label] ?? 6;
        const value = label === '—' ? 0 : clamp(Math.round((level / 10) * 100), 0, 100);
        return { key: toNodeKey(label), label, value } satisfies RadarNode;
      });
    };

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

  const values = activeCategory.nodes.map((n) => n.value);
  const polygonD = useMemo(() => polygonPath(cx, cy, maxRadius, values), [cx, cy, maxRadius, values.join(',')]);

  const hoveredNode = hoveredNodeIndex == null ? null : activeCategory.nodes[hoveredNodeIndex] ?? null;
  const hoveredNodePoint = useMemo(() => {
    if (hoveredNodeIndex == null) return null;
    const node = activeCategory.nodes[hoveredNodeIndex];
    if (!node || node.label === '—') return null;
    const r = (node.value / 100) * maxRadius;
    return pointAt(cx, cy, r, hoveredNodeIndex);
  }, [hoveredNodeIndex, activeCategory.nodes, cx, cy, maxRadius]);

  const hoveredSummary = useMemo(() => {
    if (!hoveredNode || hoveredNode.label === '—') return '';
    return summaryForSkill(hoveredNode.label, activeCategory.label);
  }, [hoveredNode?.label, activeCategory.label]);
  const terminalText = useMemo(() => {
    if (!hoveredNode || hoveredNode.label === '—') {
      return [
        `>> SYSTEM DIAGNOSTICS ONLINE`,
        `>> HOVER A NODE TO ANALYZE`,
        `>> ACTIVE MODULE: ${activeCategory.label}`,
      ].join('\n');
    }

    return [
      `>> ANALYZING NODE: ${hoveredNode.key}`,
      `>> PROFICIENCY: ${hoveredNode.value}%`,
      `>> STATUS: ${statusFor(hoveredNode.value)}`,
    ].join('\n');
  }, [hoveredNode?.key, hoveredNode?.value, hoveredNode?.label, activeCategory.label]);

  const dust = useMemo(() => seededDust(28), []);

  const [tilt, setTilt] = useState({ rx: 8, ry: -10 });
  const rafRef = useRef<number | null>(null);

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
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
        {/* Left: Controller */}
        <div
          className="holo-panel rounded-md p-4"
          style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 0 24px rgba(134,239,172,0.06)' }}
        >
          <div className="dvd-header text-white/90 crt-glow-text" style={{ fontSize: 18, lineHeight: 1 }}>
            CONTROLLER
          </div>
          <div className="mt-4 space-y-2">
            {categories.map((cat) => {
              const active = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onMouseEnter={() => setActiveCategoryId(cat.id)}
                  onFocus={() => setActiveCategoryId(cat.id)}
                  className={
                    'w-full text-left px-3 py-2 border border-white/10 dvd-body tracking-wider bg-transparent ' +
                    (active ? 'text-green-300' : 'text-white/70')
                  }
                  style={
                    active
                      ? {
                          boxShadow: '0 0 0 1px rgba(134,239,172,0.25), 0 0 18px rgba(134,239,172,0.18)',
                        }
                      : undefined
                  }
                >
                  <span className={active ? 'crt-glow-text' : ''}>{`> ${cat.label}`}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 text-white/60 dvd-body" style={{ fontSize: 12, lineHeight: 1.6 }}>
            HOVER MODULES TO RECALIBRATE RADAR.
          </div>
        </div>

        {/* Right: Visualizer */}
        <div className="flex flex-col gap-4">
          <div
            className="relative projector-chamber holo-panel rounded-md p-4"
            style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 0 30px rgba(134,239,172,0.08)' }}
          >
            <div className="dvd-header text-white/90 crt-glow-text" style={{ fontSize: 18, lineHeight: 1 }}>
              VISUALIZER
            </div>

            {/* Volumetric projector rays */}
            <div className="projector-rays" aria-hidden="true" />

            {/* Holographic projection container */}
            <div className="mt-4 relative mx-auto" style={{ maxWidth: 420, width: '100%', aspectRatio: '1 / 1' }}>
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
                      boxShadow: '0 0 10px rgba(134,239,172,0.22)',
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
                      style={{ color: 'rgb(134 239 172)', opacity: 0.55 }}
                      onMouseLeave={() => setHoveredNodeIndex(null)}
                    >
                      <g opacity={0.35}>
                        {Array.from({ length: RINGS }, (_, i) => {
                          const r = (maxRadius * (i + 1)) / RINGS;
                          return (
                            <path
                              key={i}
                              d={hexPath(cx, cy, r)}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={1}
                              opacity={i === RINGS - 1 ? 0.55 : 0.22}
                            />
                          );
                        })}

                        {Array.from({ length: AXES }, (_, i) => {
                          const p = pointAt(cx, cy, maxRadius, i);
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
                      style={{ color: 'rgb(134 239 172)' }}
                    >
                      <defs>
                        <radialGradient id="hologram-gradient" cx="50%" cy="45%" r="60%">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.45" />
                          <stop offset="65%" stopColor="currentColor" stopOpacity="0.14" />
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
                      style={{ color: 'rgb(134 239 172)' }}
                      onMouseLeave={() => setHoveredNodeIndex(null)}
                    >
                      {activeCategory.nodes.map((node, i) => {
                        const r = (node.value / 100) * maxRadius;
                        const p = pointAt(cx, cy, r, i);
                        const labelP = pointAt(cx, cy, maxRadius + 20, i);
                        const active = hoveredNodeIndex === i;

                        return (
                          <g key={node.key}>
                            <text
                              x={labelP.x}
                              y={labelP.y}
                              fill="rgba(255,255,255,0.78)"
                              fontSize={10}
                              textAnchor={labelP.x < cx - 5 ? 'end' : labelP.x > cx + 5 ? 'start' : 'middle'}
                              dominantBaseline={labelP.y < cy ? 'auto' : 'hanging'}
                              style={{ fontFamily: 'Space Mono, ui-monospace, monospace', letterSpacing: '0.10em' }}
                            >
                              {node.label === '—' ? '' : node.label.toUpperCase()}
                            </text>

                            <motion.circle
                              cx={p.x}
                              cy={p.y}
                              r={active ? 5 : 4}
                              fill={active ? 'rgba(255,255,255,0.95)' : 'currentColor'}
                              animate={{ r: active ? 5 : 4, opacity: active ? 1 : 0.85 }}
                              transition={{ duration: 0.18 }}
                            />

                            {/* Hit zone (large, invisible, interactive) */}
                            <circle
                              cx={p.x}
                              cy={p.y}
                              r={30}
                              fill="transparent"
                              className="cursor-crosshair"
                              onMouseEnter={() => node.label !== '—' && setHoveredNodeIndex(i)}
                              onMouseLeave={() => setHoveredNodeIndex(null)}
                              aria-label={node.label === '—' ? 'Empty node' : `Analyze ${node.label}`}
                            />
                          </g>
                        );
                      })}
                    </svg>

                    {/* Cinematic data callout */}
                    <AnimatePresence>
                      {hoveredNode && hoveredNode.label !== '—' && hoveredNodePoint ? (
                        <SkillCallout
                          key={hoveredNode.key}
                          view={view}
                          center={{ x: cx, y: cy }}
                          chartRadius={maxRadius}
                          anchor={hoveredNodePoint}
                          skillId={hoveredNode.key}
                          skillName={hoveredNode.label}
                          summary={hoveredSummary}
                        />
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="dvd-body text-white/60" style={{ fontSize: 12 }}>
                ACTIVE: <span className="text-green-300">{activeCategory.label}</span>
              </div>
              <div className="dvd-body text-white/60" style={{ fontSize: 12 }}>
                SIGNAL: <span className="text-green-200">STABLE</span>
              </div>
            </div>
          </div>

          {/* Bottom: Details */}
          <div>
            <div className="dvd-header text-white/90 crt-glow-text mb-2" style={{ fontSize: 18, lineHeight: 1 }}>
              DETAILS
            </div>
            <TypewriterTerminal text={terminalText} />
          </div>
        </div>
      </div>
    </div>
  );
}
