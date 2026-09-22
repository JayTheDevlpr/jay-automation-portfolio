import { TEASER } from "@/lib/content";
import ToolLogo from "./ToolLogos";

// The marquee track is two identical groups and slides left by exactly one
// group's width (see `marquee` in tailwind.config.ts), so the loop is seamless.
// Each group repeats the tool list so it is always wider than the strip.
const REPEATS = 3;

// Quiet tools teaser under the hero: a continuously sliding strip of logos.
// The whole strip is one link to #stack; the page's smooth-scroll animates the
// jump. Sliding pauses on hover/focus, and prefers-reduced-motion turns it into
// a static row of one copy of each logo.
export default function ProofBar() {
  return (
    <a
      href={TEASER.href}
      className="group block border-b border-line bg-ink/60 transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-bone"
    >
      <span className="mx-auto flex max-w-[88rem] flex-wrap items-center gap-x-8 gap-y-3 px-5 py-4 sm:px-8">
        <span className="label order-1 text-mute">{TEASER.label}</span>
        {/* The moving logos are decorative; this is what assistive tech reads. */}
        <span className="sr-only">{TEASER.tools.join(", ")}</span>

        <span className="label order-2 ml-auto text-bone/70 transition-colors group-hover:text-ember lg:order-3">
          {TEASER.cta}{" "}
          <span
            aria-hidden
            className="inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </span>

        <span
          aria-hidden
          className="order-3 flex w-full min-w-0 overflow-hidden text-mute [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:justify-center lg:order-2 lg:w-auto lg:flex-1 group-hover:text-bone/80"
        >
          <span className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused] motion-reduce:w-auto motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
            {[0, 1].map((group) => (
              <span
                key={group}
                className={`flex shrink-0 items-center gap-14 pr-14 motion-reduce:gap-x-10 motion-reduce:gap-y-3 motion-reduce:pr-0 ${
                  group === 1 ? "motion-reduce:hidden" : ""
                }`}
              >
                {Array.from({ length: REPEATS }).flatMap((_, repeat) =>
                  TEASER.tools.map((tool) => (
                    <span
                      key={`${repeat}-${tool}`}
                      className={`flex items-center ${
                        repeat > 0 ? "motion-reduce:hidden" : ""
                      }`}
                    >
                      <ToolLogo name={tool} />
                    </span>
                  )),
                )}
              </span>
            ))}
          </span>
        </span>
      </span>
    </a>
  );
}
