// Brand-color marks for the tools teaser — each logo keeps its own colors
// rather than picking up the page's theme. Keyed by the tool names in
// TEASER.tools (lib/content.ts); a tool with no entry here falls back to its
// name as text.
//
// Sources
//  - n8n (#EA4B71) and Make (#6D00CC): official brand colors per Simple Icons
//    (CC0), https://simpleicons.org
//  - Supabase: the real two-tone bolt mark (dark-to-bright green gradient over
//    a flat #3ECF8E), from Supabase's own open-source brand asset
//  - VAPI: the exact icon linked from vapi.ai itself — a black rounded-square
//    tile (#0a0a0a) with an off-white glyph (#fefefe)
//  - GoHighLevel: no vector was available anywhere public. The three-arrow
//    geometry is redrawn from their official favicon, and its gold/blue/green
//    fills are sampled directly from that same favicon's pixels. Swap in
//    HighLevel's official SVG from their brand kit if you have it.
//
// `height` is in px and is tuned per mark so they read at similar visual weight.

type PathSpec = { d: string; fill: string };

type Logo = {
  viewBox: string;
  height: number;
  paths: PathSpec[];
  // VAPI's tile background; omitted for every flat (no-background) mark.
  rect?: { fill: string; rx: number };
  // Supabase's gradient definition, referenced by a path's fill as a url(#id).
  defs?: string;
};

const LOGOS: Record<string, Logo> = {
  n8n: {
    viewBox: "0 5.68 24 12.63",
    height: 26,
    paths: [
      {
        fill: "#EA4B71",
        d: "M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632",
      },
    ],
  },
  Make: {
    viewBox: "0 3.5 24 17",
    height: 26,
    paths: [
      {
        fill: "#6D00CC",
        d: "M13.38 3.498c-.27 0-.511.19-.566.465L9.85 18.986a.578.578 0 0 0 .453.678l4.095.826a.58.58 0 0 0 .682-.455l2.963-15.021a.578.578 0 0 0-.453-.678l-4.096-.826a.589.589 0 0 0-.113-.012zm-5.876.098a.576.576 0 0 0-.516.318L.062 17.697a.575.575 0 0 0 .256.774l3.733 1.877a.578.578 0 0 0 .775-.258l6.926-13.781a.577.577 0 0 0-.256-.776L7.762 3.658a.571.571 0 0 0-.258-.062zm11.74.115a.576.576 0 0 0-.576.576v15.426c0 .318.258.578.576.578h4.178a.58.58 0 0 0 .578-.578V4.287a.578.578 0 0 0-.578-.576Z",
      },
    ],
  },
  VAPI: {
    viewBox: "0 0 48 48",
    height: 30,
    rect: { fill: "#0a0a0a", rx: 12 },
    paths: [
      {
        fill: "#fefefe",
        d: "M21.273 23.48c1.599.82 3.418.402 4.576-.972a83 83 0 0 0 2.154-2.687a3.7 3.7 0 0 1 2.92-1.448c1.475 0 2.804.897 3.355 2.267l5.2 12.926c.068.17-.125.328-.273.221c-1.557-1.113-6.364-4.48-10.017-6.273c-1.565-.768-3.332-.4-4.442.945c-.977 1.184-2.048 2.638-2.829 3.73a3.8 3.8 0 0 1-3.09 1.604a3.72 3.72 0 0 1-3.45-2.334l-6.83-17.04c-.073-.18.15-.342.293-.211c1.865 1.695 7.723 6.858 12.433 9.272",
      },
    ],
  },
  Supabase: {
    viewBox: "0 0 109 113",
    height: 30,
    defs: `<linearGradient id="supabase-grad" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
      <stop stop-color="#249361" />
      <stop offset="1" stop-color="#3ECF8E" />
    </linearGradient>`,
    paths: [
      {
        fill: "url(#supabase-grad)",
        d: "M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z",
      },
      {
        fill: "#3ECF8E",
        d: "M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z",
      },
    ],
  },
  GoHighLevel: {
    viewBox: "5.8 5.6 20.4 20.8",
    height: 30,
    // Colors sampled from the official favicon; see file header.
    paths: [
      { fill: "#D4B70A", d: "M10 6L13.8 10.4H11.5V26H8.5V10.4H6.2Z" },
      { fill: "#3BA1D0", d: "M16 11.5L19.8 15.9H17.5V26H14.5V15.9H12.2Z" },
      { fill: "#4DD329", d: "M22 6L25.8 10.4H23.5V26H20.5V10.4H18.2Z" },
    ],
  },
};

export default function ToolLogo({ name }: { name: string }) {
  const logo = LOGOS[name];

  if (!logo) {
    return <span className="text-lg font-semibold tracking-tight">{name}</span>;
  }

  return (
    <svg
      viewBox={logo.viewBox}
      height={logo.height}
      aria-hidden
      className="block shrink-0"
      style={{ height: logo.height, width: "auto" }}
    >
      {logo.defs ? (
        <defs dangerouslySetInnerHTML={{ __html: logo.defs }} />
      ) : null}
      {logo.rect ? (
        <rect
          width={logo.viewBox.split(" ")[2]}
          height={logo.viewBox.split(" ")[3]}
          fill={logo.rect.fill}
          rx={logo.rect.rx}
        />
      ) : null}
      {logo.paths.map((p) => (
        <path key={p.d} d={p.d} fill={p.fill} />
      ))}
    </svg>
  );
}
