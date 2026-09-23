import Image from "next/image";
import { ABOUT } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    // overflow-hidden clips the full-bleed backdrop layer below, which is
    // deliberately wider than the viewport — without it the page would gain a
    // horizontal scrollbar.
    <section
      id="about"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24">
        {/* Label only — the headline lives in the oversized backdrop below. */}
        <SectionHeading index="01" label="About" />

        <div className="relative">
          {/* Oversized ghosted repeat of the headline: heavy (800 via .display),
              all-caps, tight tracking and sub-1 leading, full-bleed so the lines
              run off both edges, and toned to near-background so it reads only as
              texture. Sat high in the composition so it crosses the portrait's
              upper area rather than sitting centred behind it. Decorative and a
              duplicate of the headline, so it is hidden from screen readers and
              dropped entirely below lg, where the headline is already right
              above it. */}
          <p
            aria-hidden
            className="display pointer-events-none absolute left-1/2 top-0 z-0 hidden w-[130vw] max-w-none -translate-x-1/2 -translate-y-1/3 text-center text-[clamp(4rem,12vw,9rem)] uppercase leading-[0.82] tracking-[-0.035em] text-moss lg:block"
          >
            {ABOUT.backdrop}
          </p>

          {/* Portrait centred above the text layer, the paragraph and pull-quote
              flanking it and vertically centred against it. Explicit column/row
              placement on lg keeps the source order the stacked mobile layout
              wants. */}
          <div className="relative z-10 grid items-center gap-y-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-12 xl:gap-x-16">
            <div className="justify-self-center lg:col-start-2 lg:row-start-1">
              <div
                className="relative aspect-[4/5] w-[15rem] overflow-hidden border border-line/70 shadow-[0_24px_50px_rgba(0,0,0,0.45)] sm:w-[17rem] lg:w-[20rem]"
                // Oval rather than a circle: horizontal radii at 50%, vertical
                // pulled back to 45% so the top and bottom read a little
                // flatter than a plain ellipse.
                style={{ borderRadius: "50% / 45%" }}
              >
                <Image
                  src={ABOUT.portrait}
                  alt="Portrait of Jay Marin"
                  fill
                  sizes="(min-width: 1024px) 20rem, (min-width: 640px) 17rem, 15rem"
                  priority
                  className="object-cover saturate-[0.85] contrast-[1.05] brightness-95"
                />
              </div>
            </div>

            {/* Left: plain body copy — regular weight, soft off-white, a
                measured line length and standard body leading. */}
            <p className="max-w-[33ch] text-[1rem] font-normal leading-[1.7] tracking-[-0.011em] text-pretty text-bone/70 lg:col-start-1 lg:row-start-1 lg:justify-self-start lg:text-[1.0625rem]">
              {ABOUT.paragraph}
            </p>

            {/* Right: compressed display face, bold, in the same ember accent as
                the headline's second line so the two read as a pair. */}
            <p className="display max-w-[24rem] text-balance text-[clamp(1.5rem,2.1vw,2.1rem)] font-bold leading-[1.1] text-ember lg:col-start-3 lg:row-start-1 lg:justify-self-end">
              {ABOUT.pullQuote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
