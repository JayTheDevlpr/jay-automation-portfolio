import { TOOLS } from "@/lib/content";
import { toneStyle } from "@/lib/tone";
import SectionHeading from "./SectionHeading";

// A stack manifest: one ruled row per layer, tool names set as running type
// rather than chips or logo tiles.
export default function ToolsStack() {
  return (
    <section id="stack" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          index="03"
          label="Stack"
          title="What the systems run on."
          note="Placeholder tool list"
        />

        <ol className="border-t border-line">
          {TOOLS.map((group, i) => (
            <li
              key={group.layer}
              style={toneStyle(group.tone)}
              className="grid gap-x-8 gap-y-2 border-b border-line py-5 sm:grid-cols-[14rem_1fr] sm:py-7"
            >
              <div className="label flex items-center gap-3 text-mute">
                <span
                  aria-hidden
                  className="inline-block h-2.5 w-2.5 bg-[rgb(var(--tone))]"
                />
                L{i + 1} · {group.layer}
              </div>
              <p className="display text-[clamp(1.7rem,3.6vw,3rem)] leading-[1.05]">
                {group.tools.map((tool, t) => (
                  <span key={tool}>
                    {t > 0 ? (
                      <span aria-hidden className="mx-[0.35em] text-line">
                        /
                      </span>
                    ) : null}
                    {tool}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
