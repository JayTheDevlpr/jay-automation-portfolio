// Faint automation-canvas texture for the About section: a single straight run
// of varied node shapes with one signal travelling along the wire between them.
//
// Everything structural is drawn in the theme's own tones — `--bone` for the
// outlines, `--ink` for the node interiors — held at 5-8% so the row stays
// texture. The travelling pulse is the only element carrying real saturation,
// in `--ember`, which is also the accent the section's headline uses.

type Shape = "circle" | "diamond" | "rect" | "hexagon";
type Node = { x: number; shape: Shape; half: number };

const ROW_Y = 320;

// Shapes alternate so the row reads as distinct steps rather than a repeated
// stamp. `half` is the horizontal radius, which is what the connector lines
// stop short of.
const NODES: Node[] = [
  { x: 190, shape: "circle", half: 30 },
  { x: 480, shape: "diamond", half: 34 },
  { x: 720, shape: "rect", half: 46 },
  { x: 960, shape: "hexagon", half: 36 },
  { x: 1250, shape: "circle", half: 30 },
];

const RECT_H = 56;
const HEX_H = 30;

function nodeShape(n: Node, key: number) {
  const { x, half } = n;

  switch (n.shape) {
    case "circle":
      return <circle key={key} cx={x} cy={ROW_Y} r={half} />;

    case "diamond":
      return (
        <path
          key={key}
          d={`M${x} ${ROW_Y - half} L${x + half} ${ROW_Y} L${x} ${
            ROW_Y + half
          } L${x - half} ${ROW_Y} Z`}
        />
      );

    case "rect":
      return (
        <rect
          key={key}
          x={x - half}
          y={ROW_Y - RECT_H / 2}
          width={half * 2}
          height={RECT_H}
          rx="12"
          ry="12"
        />
      );

    case "hexagon": {
      // Flat-topped: the two points sit on the wire, so the pulse enters and
      // leaves through a vertex.
      const s = half / 2;
      return (
        <path
          key={key}
          d={`M${x - half} ${ROW_Y} L${x - s} ${ROW_Y - HEX_H} L${x + s} ${
            ROW_Y - HEX_H
          } L${x + half} ${ROW_Y} L${x + s} ${ROW_Y + HEX_H} L${x - s} ${
            ROW_Y + HEX_H
          } Z`}
        />
      );
    }
  }
}

// The pulse rides this path, which spans centre to centre so the dot arrives
// inside each node rather than stopping at its edge.
const TRACK = `M${NODES[0].x} ${ROW_Y} H${NODES[NODES.length - 1].x}`;

export default function WorkflowBackdrop() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 640"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    >
      <defs>
        <filter id="workflow-pulse-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* Wires: drawn edge to edge so each node keeps a clean break in the run. */}
      <g stroke="rgb(var(--bone) / 0.08)" strokeWidth="2" strokeLinecap="round">
        {NODES.slice(0, -1).map((a, i) => {
          const b = NODES[i + 1];
          return (
            <line
              key={i}
              x1={a.x + a.half}
              y1={ROW_Y}
              x2={b.x - b.half}
              y2={ROW_Y}
            />
          );
        })}
      </g>

      {/* Nodes: cream outline over a fill in the page's own dark tone, both
          low enough that the row never competes with the copy in front. */}
      <g
        fill="rgb(var(--ink) / 0.55)"
        stroke="rgb(var(--bone) / 0.1)"
        strokeWidth="2"
      >
        {NODES.map(nodeShape)}
      </g>

      {/* The one saturated element: a single signal looping node to node. */}
      <g
        className="animate-travel"
        style={{ offsetPath: `path("${TRACK}")`, offsetRotate: "0deg" }}
      >
        <circle
          r="9"
          fill="rgb(var(--ember) / 0.35)"
          filter="url(#workflow-pulse-glow)"
        />
        <circle r="4" fill="rgb(var(--ember) / 0.75)" />
      </g>
    </svg>
  );
}
