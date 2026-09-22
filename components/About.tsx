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

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] border border-line">
              <Image
                src={ABOUT.portrait}
                alt="Portrait of Jay Marin"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="display max-w-[22ch] text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.02]">
              {ABOUT.statement}
            </p>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div className="space-y-5 leading-relaxed text-bone/80">
                {ABOUT.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <dl className="divide-y divide-line border-y border-line font-mono text-sm">
                {ABOUT.facts.map((fact) => (
                  <div key={fact.k} className="flex justify-between gap-6 py-3">
                    <dt className="label text-mute">{fact.k}</dt>
                    <dd className="text-right">{fact.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
