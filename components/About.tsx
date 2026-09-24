import Image from "next/image";
import { ABOUT } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import WorkflowBackdrop from "./WorkflowBackdrop";

export default function About() {
  return (
    // overflow-hidden keeps the swaying badge from ever widening the page.
    <section
      id="about"
      // dot-grid is the same utility the Hero uses, so the blueprint grid
      // carries between the two sections at identical size, colour and opacity.
      className="dot-grid relative overflow-hidden border-b border-line"
    >
      <WorkflowBackdrop />

      {/* z-10 keeps the content above the absolutely positioned backdrop,
          which would otherwise paint over it. */}
      <div className="relative z-10 mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24">
        {/* Label only — the headline sits at the top of the left column. */}
        <SectionHeading index="01" label="About" />

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left: headline, paragraph, then the CTA. */}
          <div className="lg:pl-16">
            <h2 className="display text-[clamp(3rem,6.5vw,5.5rem)]">
              <span className="block">The person behind</span>
              <span className="block text-ember">the workflow.</span>
            </h2>

            <p className="mt-8 max-w-[46ch] text-[1.0625rem] font-normal leading-[1.7] tracking-[-0.011em] text-pretty text-bone/70 lg:text-[1.15rem]">
              {ABOUT.paragraph}
            </p>

            {/* Same treatment as the Hero's primary button. The page's
                scroll-behavior handles the smooth scroll, and section
                scroll-margin keeps the target clear of the sticky header. */}
            <a
              href={ABOUT.cta.href}
              className="label mt-8 inline-block bg-bone px-6 py-4 text-[0.78rem] text-ink transition-colors hover:bg-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone"
            >
              {ABOUT.cta.label} →
            </a>
          </div>

          {/* Right: the portrait as an ID badge on a lanyard. self-center keeps
              it vertically centred against the text column, so it never drives
              the section's height. */}
          <div className="flex justify-center lg:justify-center lg:self-center">
            <div className="flex flex-col items-center">
              {/* The rail the lanyard hangs from. Stays put while the badge
                  below it swings. Decorative. */}
              <span
                aria-hidden
                className="h-[5px] w-16 rounded-full bg-line shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
              />

              {/* Strap + card swing together, pivoting at the rail. */}
              <div className="flex w-[12rem] origin-top animate-sway flex-col items-center sm:w-[13.75rem]">
                {/* A plain slim cord rather than a drawn shape. */}
                <span aria-hidden className="h-24 w-[3px] bg-ember" />
                {/* Clip where the cord meets the card. */}
                <span
                  aria-hidden
                  className="h-3 w-7 rounded-[3px] bg-mute shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
                />

                <div className="-mt-1 w-full rounded-xl border border-bone/40 bg-bone p-2.5 shadow-[0_18px_36px_rgba(0,0,0,0.5)]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                    <Image
                      src={ABOUT.portrait}
                      alt="Portrait of Jay Marin"
                      fill
                      sizes="(min-width: 640px) 13.75rem, 12rem"
                      priority
                      className="object-cover"
                    />
                  </div>

                  <p className="display mt-2.5 text-center text-[0.95rem] uppercase leading-none tracking-[0.02em] text-ember">
                    {ABOUT.idName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
