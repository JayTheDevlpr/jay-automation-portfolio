import Image from "next/image";
import { ABOUT } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    // overflow-hidden clips the full-bleed statement layer below, which is
    // deliberately wider than the viewport — without it the page would gain a
    // horizontal scrollbar.
    <section
      id="about"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24">
        {/* Two-tone headline: the second line carries the accent, pairing it
            with the accented pull-quote on the right of the composition. */}
        <SectionHeading
          index="01"
          label="About"
          title={
            <>
              <span className="block">The person behind</span>
              <span className="block text-ice">the pipelines.</span>
            </>
          }
        />

        <div className="relative">
          {/* The statement as display type: heavy (800 via .display), tight
              negative tracking and sub-1 leading so it reads as a dense block.
              On lg it becomes a full-bleed layer (wider than the viewport, so
              the lines run off both edges) centred on the portrait and toned
              down to near-background so it reads as texture. Below lg it stays
              a legible line above the stack rather than vanishing. */}
          <p className="display mb-10 text-[1.55rem] leading-[1.05] tracking-[-0.03em] text-bone/70 lg:pointer-events-none lg:absolute lg:left-1/2 lg:top-1/2 lg:z-0 lg:mb-0 lg:w-[130vw] lg:max-w-none lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-center lg:text-[clamp(4rem,12vw,9rem)] lg:uppercase lg:leading-[0.82] lg:tracking-[-0.035em] lg:text-moss">
            {ABOUT.statement}
          </p>

          {/* Portrait centred above the text layer, paragraphs flanking it and
              vertically centred against it. Explicit column/row placement on
              lg keeps the source order the stacked mobile layout wants. */}
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
              {ABOUT.paragraphs[0]}
            </p>

            {/* Right: the same copy set as a pull-quote — compressed display
                face, bold, and in the accent so it reads as a pair with the
                headline's second line. */}
            <p className="display max-w-[24rem] text-balance text-[clamp(1.2rem,1.55vw,1.5rem)] font-bold leading-[1.2] text-ice lg:col-start-3 lg:row-start-1 lg:justify-self-end">
              {ABOUT.paragraphs[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
