import Image from "next/image";
import { ABOUT } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    // overflow-hidden keeps the swaying badge from ever widening the page.
    <section
      id="about"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24">
        {/* Label only — the headline sits at the top of the left column. */}
        <SectionHeading index="01" label="About" />

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* Left: headline, then the paragraph directly beneath it. */}
          <div>
            <h2 className="display text-[clamp(2.75rem,6vw,5rem)]">
              <span className="block">The person behind</span>
              <span className="block text-ember">the workflow.</span>
            </h2>

            <p className="mt-8 max-w-[42ch] text-[1rem] font-normal leading-[1.7] tracking-[-0.011em] text-pretty text-bone/70 lg:text-[1.0625rem]">
              {ABOUT.paragraph}
            </p>
          </div>

          {/* Right: the portrait as an ID badge on a lanyard. self-center keeps
              it vertically centred against the text column, so it never drives
              the section's height. */}
          <div className="flex justify-center lg:justify-end lg:self-center lg:pr-6">
            <div className="flex flex-col items-center">
              {/* The rail the lanyard hangs from. Stays put while the badge
                  below it swings. Decorative. */}
              <span
                aria-hidden
                className="h-[5px] w-16 rounded-full bg-line shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
              />

              {/* Strap + card swing together, pivoting at the rail. */}
              <div className="flex w-[11rem] origin-top animate-sway flex-col items-center sm:w-[12.5rem]">
                {/* A plain slim cord rather than a drawn shape. */}
                <span aria-hidden className="h-14 w-[3px] bg-ember" />
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
                      sizes="(min-width: 640px) 12.5rem, 11rem"
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
