import type { Tool } from "@/lib/content";

// One brand mark, frameless, with its name on hover or tap. Shared by the
// Stack section and the case-study panels so the two can't drift apart.
//
// Expects to sit in a flex list, and reads `--tone` from an ancestor for its
// focus ring and lettermark, so it takes the colour of whichever layer or case
// study it lands in.
export default function ToolLogo({ tool }: { tool: Tool }) {
  return (
    <li className="group relative">
      {/* A button rather than a focusable span: tapping one reliably moves
          focus on touch, which is what reveals the label on a device with no
          hover. Frameless — the mark sits straight on the background, and only
          keyboard focus draws a ring. */}
      <button
        type="button"
        aria-label={tool.name}
        className="peer flex h-8 items-center justify-center opacity-90 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(var(--tone))]"
      >
        {tool.logo ? (
          <>
            {/* Plain img, not next/image: these are local SVGs, and next/image
                would need SVG serving turned on to do nothing useful for a
                32px mark. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={tool.logo}
              alt=""
              width={32}
              height={32}
              loading="lazy"
              decoding="async"
              // contain keeps one visual size across marks drawn on very
              // different aspect ratios (n8n is 1.9:1, Sheets is 0.74:1).
              className="h-8 w-8 object-contain"
            />
          </>
        ) : (
          // Nothing to source a real mark from, so a lettermark in the
          // surrounding tone, set in the same display face the headings use.
          <span
            aria-hidden
            className="display flex h-8 w-8 items-center justify-center text-[1.6rem] leading-none text-[rgb(var(--tone))]"
          >
            {tool.name.charAt(0)}
          </span>
        )}
      </button>

      {/* Revealed on hover, and on plain :focus rather than :focus-visible — a
          tap moves focus but browsers hold :focus-visible back for keyboard
          use, which would leave touch devices with no way to read the name.
          Edge tiles align their label to the row edge instead of centring it,
          so the first and last never sit half off the container. */}
      <span
        aria-hidden
        className="label pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 -translate-x-1/2 whitespace-nowrap border border-line bg-bog px-2 py-1 text-[0.6rem] text-bone opacity-0 transition-opacity group-first:left-0 group-first:translate-x-0 group-last:left-auto group-last:right-0 group-last:translate-x-0 group-hover:opacity-100 peer-focus:opacity-100"
      >
        {tool.name}
      </span>
    </li>
  );
}
