import { SERVICES } from "@/lib/content";
import { toneStyle } from "@/lib/tone";
import SectionHeading from "./SectionHeading";
import ServiceGlyph from "./ServiceGlyph";

// Staggered spans on a 12-column grid so the four tiles are deliberately
// different sizes rather than a uniform card row.
const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
];

export default function Services() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          index="02"
          label="Services"
          title="Four things I build, end to end."
        />

        <div className="grid gap-4 lg:grid-cols-12">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              style={toneStyle(service.tone)}
              className={`group border-t-4 border-t-[rgb(var(--tone))] p-5 transition-colors sm:p-6 ${SPANS[i]} ${
                i % 3 === 0
                  ? "bg-moss hover:bg-[rgb(var(--tone)/0.14)]"
                  : "border-x border-b border-line hover:bg-[rgb(var(--tone)/0.08)]"
              }`}
            >
              <div className="flex items-start justify-between gap-4 text-[rgb(var(--tone))]">
                <span className="label">S/0{i + 1}</span>
                <ServiceGlyph id={service.id} />
              </div>

              {/* Sized to sit between the section headline and body copy, the
                  same step down the Hero and About use, rather than competing
                  with the headline above it. */}
              <h3 className="display mt-6 max-w-[16ch] text-[clamp(1.6rem,2.6vw,2.25rem)]">
                {service.title}
              </h3>
              <p className="mt-3 max-w-[48ch] text-[0.95rem] leading-[1.65] text-bone/75">
                {service.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
