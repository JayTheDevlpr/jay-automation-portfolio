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
    },
  },
  plugins: [],
};
export default config;
