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

        {/* Row: portrait left, statement right. */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Portrait: kept small and deliberately muted (grayscale + an
              ember color-wash via mix-blend-color) inside a bordered mat, so
              a bright photo doesn't clash with the dark theme. */}
          <div className="lg:col-span-3">
            <div className="w-full max-w-[14rem] border border-line bg-moss p-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={ABOUT.portrait}
                  alt="Portrait of Jay Marin"
                  fill
                  sizes="14rem"
                  className="object-cover grayscale contrast-110 brightness-90"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-ember/25 mix-blend-color"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <p className="display max-w-[22ch] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.02]">
              {ABOUT.statement}
            </p>
          </div>
        </div>

        {/* Full-width row: each paragraph as its own card, matching the
            bordered, flat-bg treatment used for the Services tiles. */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {ABOUT.paragraphs.map((p) => (
            <div
              key={p}
              className="border border-line bg-moss p-6 leading-relaxed text-bone/80"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
