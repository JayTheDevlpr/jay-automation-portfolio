import type { Config } from "tailwindcss";

// Colours are stored as space-separated RGB channels in globals.css so that
// Tailwind opacity modifiers (bg-ember/10) and the per-category `--tone`
// variable can both build on them.
const channel = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: channel("ink"),
        bog: channel("bog"),
        moss: channel("moss"),
        line: channel("line"),
        bone: channel("bone"),
        mute: channel("mute"),
        ember: channel("ember"),
        lime: channel("lime"),
        rose: channel("rose"),
        ice: channel("ice"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.14em",
      },
      keyframes: {
        // Slides one full group (half the track) so the loop has no seam.
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        // Pendulum swing for the hanging ID card. Paired with origin-top so it
        // pivots from the anchor rather than its own centre. Rests at 0deg, so
        // the reduced-motion rule in globals.css leaves the card hanging straight.
        sway: {
          "0%, 100%": { transform: "rotate(-2.5deg)" },
          "50%": { transform: "rotate(2.5deg)" },
        },
        // Signal running along the About backdrop's wire. The stops are the
        // node centres as a percentage of the track, each held briefly so the
        // dot reads as arriving at a node rather than sliding past it. Fades
        // in on the first node and out on the last, so the loop has no jump.
        travel: {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "5%": { offsetDistance: "0%", opacity: "1" },
          "23%": { offsetDistance: "27.4%" },
          "30%": { offsetDistance: "27.4%" },
          "46%": { offsetDistance: "50%" },
          "53%": { offsetDistance: "50%" },
          "69%": { offsetDistance: "72.6%" },
          "76%": { offsetDistance: "72.6%" },
          "94%": { offsetDistance: "100%", opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        sway: "sway 6s ease-in-out infinite",
        travel: "travel 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
