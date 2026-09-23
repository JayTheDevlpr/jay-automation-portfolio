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
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        sway: "sway 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
