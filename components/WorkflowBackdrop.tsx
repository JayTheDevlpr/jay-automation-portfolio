// Faint automation-canvas texture for the About section: outlined nodes wired
// together with the horizontal-out / horizontal-in curves an n8n or Make
// canvas draws. Purely decorative — no labels, no colour, and low enough
// contrast that it never competes with the copy in front of it.

type Node = { x: number; y: number };

const NODE_W = 92;
const NODE_H = 54;

// Two loose clusters rather than one tidy chain, so it reads as a canvas
// caught mid-build instead of a diagram asking to be followed.
const NODES: Node[] = [
  { x: 52, y: 150 },
  { x: 266, y: 150 },
  { x: 486, y: 58 },
  { x: 486, y: 246 },
  { x: 716, y: 152 },
  { x: 942, y: 152 },
  { x: 1166, y: 62 },
  { x: 1166, y: 248 },
  { x: 146, y: 436 },
  { x: 388, y: 436 },
  { x: 624, y: 488 },
  { x: 868, y: 430 },
  { x: 1098, y: 472 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [4, 5],
  [5, 6],
  [5, 7],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
];

// Leaves each node horizontally and arrives horizontally, which is what gives
// these editors their signature S-curve between offset rows.
function edgePath(a: Node, b: Node) {
  const x1 = a.x + NODE_W;
  const y1 = a.y + NODE_H / 2;
  const x2 = b.x;
  const y2 = b.y + NODE_H / 2;
  const bend = Math.max(44, (x2 - x1) / 2);
  return `M${x1} ${y1} C${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2} ${y2}`;
}

export default function WorkflowBackdrop() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full text-bone opacity-[0.07]"
    >
      {EDGES.map(([i, j]) => (
        <path key={`${i}-${j}`} d={edgePath(NODES[i], NODES[j])} />
      ))}

      {NODES.map((n, i) => (
        <g key={i}>
          <rect
            x={n.x}
            y={n.y}
            width={NODE_W}
            height={NODE_H}
            rx="10"
            ry="10"
          />
          {/* Connection ports, as on an automation canvas. */}
          <circle cx={n.x} cy={n.y + NODE_H / 2} r="3.5" />
          <circle cx={n.x + NODE_W} cy={n.y + NODE_H / 2} r="3.5" />
        </g>
      ))}
    </svg>
  );
}
