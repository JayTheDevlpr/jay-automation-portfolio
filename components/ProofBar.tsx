import { TEASER } from "@/lib/content";

// Quiet tools teaser under the hero. The whole strip is a single link to the
// full stack section; the page's smooth-scroll (globals.css) animates the jump
// and is switched off for prefers-reduced-motion.
//
// Each tool is set as a text wordmark. To use official logos instead, swap the
// wordmark <span> below for that brand's SVG (kept monochrome via currentColor).
export default function ProofBar() {
  return (
    <a
      href={TEASER.href}
      className="group block border-b border-line bg-ink/60 transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-bone"
    >
      <span className="mx-auto flex max-w-[88rem] flex-wrap items-center justify-between gap-x-10 gap-y-3 px-5 py-5 sm:px-8">
        <span className="label text-mute">{TEASER.label}</span>

        <span className="flex flex-1 flex-wrap items-center gap-x-9 gap-y-2 sm:justify-center">
          {TEASER.tools.map((tool) => (
            <span
              key={tool}
              className="text-[1.15rem] font-semibold tracking-tight text-mute transition-colors group-hover:text-bone/80"
            >
              {tool}
            </span>
          ))}
        </span>

        <span className="label text-bone/70 transition-colors group-hover:text-ember">
          {TEASER.cta}{" "}
          <span
            aria-hidden
            className="inline-block transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </span>
    </a>
  );
}
