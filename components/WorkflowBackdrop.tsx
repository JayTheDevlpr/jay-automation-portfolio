// Faint automation-canvas texture for the About section: a straight run of
// varied node shapes with one signal travelling along the wire, lighting the
// path up behind it and resetting when the loop restarts.
//
// How the lighting works: every wire and node is drawn twice — once unlit in
// the theme's own tones (`--bone` outlines over an `--ink` fill, held at
// 8-10%), then again in `--ember` on top, revealed through a mask. Each mask
// holds a white rectangle that slides left to right, so whatever the wipe has
// already passed stays lit until the animation loops. Two wipes rather than
// one: the wires light progressively, tracking the dot's own position, while
// the nodes snap on as the dot reaches them — a node caught half-lit while the
// dot pauses inside it would read as a rendering fault rather than a signal.
//
// The keyframes behind all three animations live in tailwind.config.ts, and
// their stops are derived from the geometry below — moving a node here means
// moving its percentage and pixel stops there too.

type Shape = "circle" | "diamond" | "rect" | "hexagon";
type Node = { x: number; shape: Shape; half: number };

const ROW_Y = 320;
const VIEW_W = 1440;
const VIEW_H = 640;

// Shapes alternate so the row reads as distinct steps rather than a repeated
// stamp. `half` is the horizontal radius, which is what the wires stop short
// of and what the node wipe has to clear.
const NODES: Node[] = [
  { x: 190, shape: "circle", half: 30 },
  { x: 480, shape: "diamond", half: 34 },
  { x: 720, shape: "rect", half: 46 },
  { x: 960, shape: "hexagon", half: 36 },
  { x: 1250, shape: "circle", half: 30 },
];

const RECT_H = 56;
const HEX_H = 30;

function nodeShapes() {
  return NODES.map((n, key) => {
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
        // Flat-topped: the two points sit on the wire, so the signal enters
        // and leaves through a vertex.
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
  });
}

// Wires run edge to edge, so each node keeps a clean break in the run.
function wires() {
  return NODES.slice(0, -1).map((a, i) => {
    const b = NODES[i + 1];
    return (
      <line key={i} x1={a.x + a.half} y1={ROW_Y} x2={b.x - b.half} y2={ROW_Y} />
    );
  });
}

// The signal rides this path, which spans centre to centre so the dot arrives
// inside each node rather than stopping at its edge.
const TRACK = `M${NODES[0].x} ${ROW_Y} H${NODES[NODES.length - 1].x}`;

// A wipe is a white rectangle parked just off the left edge; the keyframes
// slide it right, and everything it has covered is revealed.
function Wipe({ animation }: { animation: string }) {
  return (
    <rect
      className={`workflow-motion ${animation}`}
      x={-VIEW_W}
      y={0}
      width={VIEW_W}
      height={VIEW_H}
      fill="#fff"
    />
  );
}

export default function WorkflowBackdrop() {
  // Explicit userSpaceOnUse bounds: a mask region otherwise sizes itself to
  // the masked group's bounding box, which would clip the wipe.
  const maskBounds = {
    maskUnits: "userSpaceOnUse" as const,
    x: 0,
    y: 0,
    width: VIEW_W,
    height: VIEW_H,
  };

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    >
      <defs>
        <filter
          id="workflow-pulse-glow"
          x="-200%"
          y="-200%"
          width="500%"
          height="500%"
        >
          <feGaussianBlur stdDeviation="7" />
        </filter>

        <mask id="workflow-lit-wires" {...maskBounds}>
          <Wipe animation="animate-trail" />
        </mask>

        <mask id="workflow-lit-nodes" {...maskBounds}>
          <Wipe animation="animate-ignite" />
        </mask>
      </defs>

      {/* Unlit wires. */}
      <g stroke="rgb(var(--bone) / 0.08)" strokeWidth="2" strokeLinecap="round">
        {wires()}
      </g>

      {/* Lit wires: revealed behind the dot as it travels. */}
      <g
        mask="url(#workflow-lit-wires)"
        stroke="rgb(var(--ember) / 0.4)"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {wires()}
      </g>

      {/* Unlit nodes: cream outline over a fill in the page's own dark tone,
          both low enough that the row never competes with the copy. */}
      <g
        fill="rgb(var(--ink) / 0.55)"
        stroke="rgb(var(--bone) / 0.1)"
        strokeWidth="2"
      >
        {nodeShapes()}
      </g>

      {/* Lit nodes: each one switched on as the signal reaches it. Brighter
          than the wire trail, still short of the dot itself. */}
      <g
        mask="url(#workflow-lit-nodes)"
        fill="rgb(var(--ember) / 0.08)"
        stroke="rgb(var(--ember) / 0.5)"
        strokeWidth="2"
      >
        {nodeShapes()}
      </g>

      {/* The signal: the brightest thing on the layer, and the only one that
          carries a glow. */}
      <g
        className="workflow-motion animate-travel"
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
