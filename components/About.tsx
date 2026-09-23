import Image from "next/image";
import { ABOUT, SITE } from "@/lib/content";
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

          {/* Right: the portrait as an ID badge on a lanyard. */}
          <div className="flex justify-center lg:justify-end lg:pr-6">
            <div className="flex flex-col items-center">
              {/* The rail the lanyard hangs from. Stays put while the badge
                  below it swings. Decorative. */}
              <span
                aria-hidden
                className="h-[6px] w-28 rounded-full bg-line shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
              />

              {/* Lanyard + card swing together, pivoting at the rail. */}
              <div className="flex w-[15rem] origin-top animate-sway flex-col items-center sm:w-[17rem]">
                {/* The lace: a looped ribbon bowing out from the rail and
                    gathering into a metal clip just above the card. Scales
                    uniformly with the card width, so nothing distorts. */}
                <svg
                  aria-hidden
                  viewBox="0 0 272 168"
                  className="w-full overflow-visible"
                >
                  <path
                    d="M136 2 C 114 42 108 104 122 142"
                    className="stroke-ember"
                    strokeWidth="12"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M136 2 C 158 42 164 104 150 142"
                    className="stroke-ember"
                    strokeWidth="12"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Clip, with its slot, biting over the top of the card. */}
                  <rect
                    x="118"
                    y="136"
                    width="36"
                    height="24"
                    rx="5"
                    className="fill-mute"
                  />
                  <rect
                    x="128"
                    y="144"
                    width="16"
                    height="5"
                    rx="2.5"
                    className="fill-ink/60"
                  />
                </svg>

                <div className="-mt-3 w-full rounded-2xl border border-bone/40 bg-bone p-3 shadow-[0_22px_45px_rgba(0,0,0,0.5)]">
                  {/* Punch slot the clip hooks through — decorative. */}
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

                  <p className="display mt-3 text-[1.15rem] uppercase leading-none tracking-[-0.01em] text-ink">
                    {ABOUT.idName}
                  </p>
                  <p className="label mt-1.5 text-[0.6rem] text-ink/60">
                    {SITE.role}
                  </p>

                  {/* Barcode strip, as on a real badge — decorative. */}
                  <span
                    aria-hidden
                    className="mt-3 block h-6 w-full rounded-[2px] [background-image:repeating-linear-gradient(90deg,rgb(var(--ink))_0_2px,transparent_2px_5px,rgb(var(--ink))_5px_6px,transparent_6px_10px)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
