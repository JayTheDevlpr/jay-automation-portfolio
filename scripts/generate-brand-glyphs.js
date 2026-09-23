// Writes public/logos/*.svg for the brands that only exist as a single-path
// glyph. Each keeps its official brand colour, lifted in lightness where the
// raw value would disappear against the site's near-black background.
//
// Run with `npm run logos` after adding an entry to TARGETS below. The output
// is committed, so simple-icons is only needed to regenerate, never at build
// or run time.
const fs = require("fs");
const path = require("path");
const si = require("simple-icons");

const OUT = path.join(process.cwd(), "public", "logos");
const MIN_L = 0.55;

function hexToHsl(hex) {
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  if (d === 0) return [0, 0, l];
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [h, s, l];
}

function hslToHex(h, s, l) {
  const f = (n) => {
    const k = (n + h * 12) % 12;
    const a = s * Math.min(l, 1 - l);
    const v = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(v * 255)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

const TARGETS = {
  make: "siMake",
  elevenlabs: "siElevenlabs",
  airtable: "siAirtable",
  hubspot: "siHubspot",
  claudecode: "siClaudecode",
};

for (const [slug, key] of Object.entries(TARGETS)) {
  const icon = si[key];
  if (!icon) throw new Error(`missing simple-icons entry: ${key}`);

  const [h, s, l] = hexToHsl(icon.hex);

  // A colourless brand (ElevenLabs' mark is pure black) has no hue to
  // preserve, so lifting its lightness only yields a dead grey. Those take the
  // site's own cream instead, which is what a white-on-dark lockup would be.
  let lifted = `#${icon.hex}`;
  if (l < MIN_L) lifted = s < 0.1 ? "#EBE3D0" : hslToHex(h, s, MIN_L);

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${lifted}" role="img">` +
    `<title>${icon.title}</title>` +
    `<path d="${icon.path}"/>` +
    `</svg>\n`;

  fs.writeFileSync(path.join(OUT, `${slug}.svg`), svg);
  console.log(
    `${slug.padEnd(12)} #${icon.hex} -> ${lifted}${l < MIN_L ? "  (lifted)" : ""}`,
  );
}
