import { TOOLS } from "@/lib/content";
import { toneStyle } from "@/lib/tone";
import SectionHeading from "./SectionHeading";
import ToolLogo from "./ToolLogo";

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
                  <ToolLogo key={tool.name} tool={tool} />
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
