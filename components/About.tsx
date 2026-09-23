import Image from "next/image";
import { ABOUT } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    // overflow-hidden keeps the swaying card from ever widening the page.
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

          {/* Right: the portrait as an ID badge hanging from a lanyard. */}
          <div className="flex justify-center lg:justify-end lg:pr-6">
            <div className="flex flex-col items-center">
              {/* Anchor the strap hangs from — decorative. */}
              <span
                aria-hidden
                className="h-3 w-3 rounded-full border-2 border-line bg-bog"
              />

              {/* Lanyard + card swing together, pivoting at the anchor. */}
              <div className="flex w-[15rem] origin-top animate-sway flex-col items-center sm:w-[17rem]">
                {/* The lace: two strands splaying from the anchor down to the
                    card's top corners. preserveAspectRatio lets it stretch to
                    the card's width, and non-scaling-stroke keeps the strands
                    an even thickness while it does. */}
                <svg
                  aria-hidden
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                  className="h-16 w-full text-mute"
                >
                  <path
                    d="M50 0 L7 40"
                    stroke="currentColor"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M50 0 L93 40"
                    stroke="currentColor"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <div className="w-full rounded-2xl border border-bone/40 bg-bone p-3 shadow-[0_22px_45px_rgba(0,0,0,0.5)]">
                  {/* Punch slot, as on a real badge — decorative. */}
                  <span
                    aria-hidden
                    className="mx-auto mb-3 block h-1.5 w-12 rounded-full bg-ink/25"
                  />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <Image
                      src={ABOUT.portrait}
                      alt="Portrait of Jay Marin"
                      fill
                      sizes="(min-width: 640px) 17rem, 15rem"
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
