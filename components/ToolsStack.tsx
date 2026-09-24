import { TOOLS } from "@/lib/content";
import { toneStyle } from "@/lib/tone";
import SectionHeading from "./SectionHeading";

// A stack manifest: one ruled row per layer, each layer's tools shown as a
// compact grid of brand marks rather than running type. The name is kept off
// the page and surfaced on hover or tap, so the row stays dense.

// Counted from the list itself, so the headline number can't drift out of step
// with the rows under it when a tool is added or dropped.
const TOOL_COUNT = TOOLS.reduce((n, group) => n + group.tools.length, 0);

export default function ToolsStack() {
  return (
    // overflow-x-clip keeps a tooltip at the row's edge from widening the
    // page. Unlike overflow-hidden it leaves the vertical axis alone, so the
    // tooltips themselves still show above their tiles.
    <section id="stack" className="overflow-x-clip border-b border-line bg-ink">
      <div className="mx-auto max-w-[88rem] px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeading
          index="03"
          label="Stack"
          title="What the systems run on."
          note={`${TOOL_COUNT} tools, actually used.`}
        />

        <ol className="border-t border-line">
          {TOOLS.map((group, i) => (
            <li
              key={group.layer}
              style={toneStyle(group.tone)}
              className="grid gap-x-8 gap-y-3 border-b border-line py-4 sm:grid-cols-[13rem_1fr] sm:items-center sm:py-5"
            >
              <div className="label flex items-center gap-3 text-mute">
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 bg-[rgb(var(--tone))]"
                />
                L{i + 1} · {group.layer}
              </div>

              <ul className="flex flex-wrap gap-x-7 gap-y-5">
                {group.tools.map((tool) => (
                  <li key={tool.name} className="group relative">
                    {/* A button rather than a focusable span: tapping one
                        reliably moves focus on touch, which is what reveals
                        the label on a device with no hover. Frameless — the
                        mark sits straight on the section background, and only
                        keyboard focus draws a ring. */}
                    <button
                      type="button"
                      aria-label={tool.name}
                      className="peer flex h-8 items-center justify-center opacity-90 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[rgb(var(--tone))]"
                    >
                      {tool.logo ? (
                        <>
                          {/* Plain img, not next/image: these are local SVGs,
                              and next/image would need SVG serving turned on
                              to do nothing useful for a 32px mark. */}
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={tool.logo}
                            alt=""
                            width={32}
                            height={32}
                            loading="lazy"
                            decoding="async"
                            // contain keeps one visual size across marks drawn
                            // on very different aspect ratios (n8n is 1.9:1,
                            // Sheets is 0.74:1).
                            className="h-8 w-8 object-contain"
                          />
                        </>
                      ) : (
                        // Nothing to source a real mark from, so a lettermark
                        // in the layer's tone, set in the same display face
                        // the section headings use.
                        <span
                          aria-hidden
                          className="display flex h-8 w-8 items-center justify-center text-[1.6rem] leading-none text-[rgb(var(--tone))]"
                        >
                          {tool.name.charAt(0)}
                        </span>
                      )}
                    </button>

                    {/* Revealed on hover, and on plain :focus rather than
                        :focus-visible — a tap moves focus but browsers hold
                        :focus-visible back for keyboard use, which would leave
                        touch devices with no way to read the name. Edge tiles
                        align their label to the row edge instead of centring
                        it, so the first and last never sit half off the
                        container. */}
                    <span
                      aria-hidden
                      className="label pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 -translate-x-1/2 whitespace-nowrap border border-line bg-bog px-2 py-1 text-[0.6rem] text-bone opacity-0 transition-opacity group-first:left-0 group-first:translate-x-0 group-last:left-auto group-last:right-0 group-last:translate-x-0 group-hover:opacity-100 peer-focus:opacity-100"
                    >
                      {tool.name}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
