import type { ServiceId } from "@/lib/content";

// Small schematic drawings, one per service. Static, drawn in the tile's tone.
export default function ServiceGlyph({ id }: { id: ServiceId }) {
  // Drawn on a 120x72 grid but rendered smaller, so the tile header stays a
  // detail rather than a third of the card. The viewBox keeps the ratio.
  const common = {
    viewBox: "0 0 120 72",
    width: 100,
    height: 60,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "square" as const,
    "aria-hidden": true,
  };

  switch (id) {
    case "workflow":
      // trigger → step → branch to two actions
      return (
        <svg {...common}>
          <rect x="3" y="26" width="24" height="20" />
          <path d="M27 36h16" />
          <circle cx="53" cy="36" r="10" />
          <path d="M63 36h10M73 36l14-16M73 36l14 16" />
          <rect x="87" y="10" width="28" height="20" />
          <rect x="87" y="42" width="28" height="20" />
          <path d="M8 36h3M48 36h10" strokeWidth="3" />
        </svg>
      );
    case "leads":
      // funnel narrowing to a scored lead
      return (
        <svg {...common}>
          <path d="M4 8h72l-22 26v22l-14 8V34z" />
          <path d="M92 14h24M92 36h24M92 58h24" />
          <path d="M92 14h20" strokeWidth="5" />
          <path d="M92 36h12" strokeWidth="5" />
          <path d="M92 58h6" strokeWidth="5" />
        </svg>
      );
    case "voice":
      // waveform
      return (
        <svg {...common}>
          {[8, 20, 34, 18, 46, 28, 56, 24, 38, 14, 26, 10].map((h, i) => (
            <path
              key={i}
              d={`M${6 + i * 9.5} ${36 - h / 2}v${h}`}
              strokeWidth="3"
            />
          ))}
        </svg>
      );
    case "rag":
      // documents → vector points → cited answer
      return (
        <svg {...common}>
          <path d="M6 12h22v28H6zM12 18h22v28H12zM18 24h22v28H18z" />
          <path d="M48 36h12" />
          <circle cx="70" cy="22" r="2.5" />
          <circle cx="82" cy="40" r="2.5" />
          <circle cx="72" cy="52" r="2.5" />
          <circle cx="92" cy="26" r="2.5" />
          <path d="M70 22l12 18M82 40l-10 12M82 40l10-14" />
          <path d="M100 30h16M100 40h16M100 50h10" />
        </svg>
      );
  }
}
