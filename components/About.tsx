import Image from "next/image";
import { ABOUT } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          index="01"
          label="About"
          title="The person behind the pipelines."
        />

        <div className="relative">
          {/* The statement. On lg it becomes the oversized, very low-contrast
              texture sitting behind the portrait; below that it stays a plain
              readable line above the stack, so small screens don't lose the
              content entirely. Real text either way, never aria-hidden. */}
          <p className="display mb-10 text-[1.6rem] leading-tight text-bone/70 lg:pointer-events-none lg:absolute lg:inset-0 lg:mb-0 lg:flex lg:items-center lg:justify-center lg:text-center lg:text-[clamp(2rem,6.5vw,5rem)] lg:leading-[0.92] lg:text-bone/[0.07]">
            <span className="lg:max-w-[22rem] xl:max-w-[32rem]">
              {ABOUT.statement}
            </span>
          </p>

          {/* Portrait centred, paragraphs flanking it and vertically centred
              against it. Explicit column/row placement on lg keeps the source
              order (portrait first) that the stacked mobile layout wants. */}
          <div className="relative grid items-center gap-y-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-12 xl:gap-x-16">
            <div className="justify-self-center lg:col-start-2 lg:row-start-1">
              <Image
                src={ABOUT.portrait}
                alt="Portrait of Jay Marin"
                width={373}
                height={549}
                priority
                // Colour treatment lives in the filter chain, not an overlay:
                // an overlay rectangle would tint the cutout's transparent
                // area too, showing as a visible box.
                className="h-auto w-[15rem] saturate-[0.8] contrast-[1.05] brightness-95 drop-shadow-[0_24px_45px_rgba(0,0,0,0.55)] sm:w-[17rem] lg:w-[20rem]"
              />
            </div>

            {/* Anchored to the outer edges so the centre stays clear for the
                portrait and the text behind it. */}
            <p className="max-w-[34ch] leading-relaxed text-bone/75 lg:col-start-1 lg:row-start-1 lg:justify-self-start">
              {ABOUT.paragraphs[0]}
            </p>

            <p className="max-w-[34ch] leading-relaxed text-bone/75 lg:col-start-3 lg:row-start-1 lg:justify-self-end">
              {ABOUT.paragraphs[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
