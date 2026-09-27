"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";
import { EASE, useMotionMode } from "@/lib/motion";
import { toneStyle } from "@/lib/tone";
import SectionHeading from "./SectionHeading";
import ToolLogo from "./ToolLogo";

export default function CaseStudies() {
  // Accordion: at most one case study open at a time.
  const [openId, setOpenId] = useState<string | null>(null);
  const reduced = useMotionMode() === "reduced";

  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          index="04"
          label="Work"
          title="Selected builds, with the numbers."
        />

        <ul className="space-y-5">
          {CASE_STUDIES.map((study, i) => (
            <CaseCard
              key={study.id}
              study={study}
              index={i}
              open={openId === study.id}
              reduced={reduced}
              onToggle={() =>
                setOpenId((current) => (current === study.id ? null : study.id))
              }
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function CaseCard({
  study,
  index,
  open,
  reduced,
  onToggle,
}: {
  study: CaseStudy;
  index: number;
  open: boolean;
  reduced: boolean;
  onToggle: () => void;
}) {
  const buttonId = `${study.id}-toggle`;
  const panelId = `${study.id}-panel`;

  return (
    <li
      style={toneStyle(study.tone)}
      className={`border border-l-4 border-line border-l-[rgb(var(--tone))] transition-[background-color,box-shadow] duration-300 ${
        open
          ? "bg-moss shadow-[7px_7px_0_0_rgb(var(--tone))]"
          : "hover:bg-[rgb(var(--tone)/0.07)]"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="grid w-full grid-cols-[1fr_auto] items-center gap-x-6 gap-y-4 px-5 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-bone sm:px-8 md:grid-cols-[3rem_1.5fr_1fr_auto]"
        >
          <span className="label hidden text-[rgb(var(--tone))] md:block">
            0{index + 1}
          </span>

          <span className="col-span-1">
            <span className="label block text-[rgb(var(--tone))]">
              {study.categoryLabel}
            </span>
            <span className="display mt-2 block text-[clamp(1.6rem,3vw,2.4rem)] leading-[1]">
              {study.title}
            </span>
          </span>

          {/* Each study leads with an anchor — a figure, or a brand mark
              where the platform is the point — with its descriptor beside
              it. A mark centres against the text; a numeral sits on its
              baseline, which is what makes a figure and its caption read as
              one line. */}
          <span
            className={`order-last col-span-2 flex gap-3 md:order-none md:col-span-1 ${
              study.stat.logo ? "items-center" : "items-baseline"
            }`}
          >
            {study.stat.logo ? (
              // A brand mark in place of a figure, at the size the Stack
              // section sets its logos. Plain img rather than ToolLogo:
              // that renders a button, and this sits inside the accordion's
              // own button, which may not nest one.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={study.stat.logo.src}
                alt={study.stat.logo.alt}
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-10 w-10 shrink-0 object-contain"
              />
            ) : (
              <span className="display text-[clamp(2.2rem,4vw,3.4rem)] text-[rgb(var(--tone))]">
                {study.stat.value}
              </span>
            )}

            {/* One line from xl up, where the stat column is wide enough to
                hold it at a readable size: 0.6rem clears 1280px and 0.7rem
                clears 1536px. Below xl the four-column header squeezes this
                track to 164-239px, where one line would mean 4.7-6.9px type
                — or, since a grid track's min width is its content, a line
                that pushes the track wider and crushes the title beside it.
                So it wraps there instead, between phrases. */}
            <span className="label text-mute xl:whitespace-nowrap xl:text-[0.6rem] 2xl:text-[0.7rem]">
              {/* A label with no separators comes back as a single part, so
                  this renders the short ones unchanged. The spaces around each
                  separator are the only break opportunities once the phrases
                  are nowrap, so a long descriptor wraps between phrases rather
                  than splitting "auto-reply" at its hyphen. */}
              {study.stat.label.split("·").map((part, i) => (
                <span key={part}>
                  {i > 0 ? (
                    <>
                      {" "}
                      <span
                        aria-hidden
                        className="text-[rgb(var(--mute)/0.45)]"
                      >
                        ·
                      </span>{" "}
                    </>
                  ) : null}
                  <span className="whitespace-nowrap">{part.trim()}</span>
                </span>
              ))}
            </span>
          </span>

          <PlusMinus open={open} />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="panel"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={
              reduced ? { duration: 0 } : { duration: 0.55, ease: EASE }
            }
          >
            <CaseBody study={study} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}

function CaseBody({ study }: { study: CaseStudy }) {
  return (
    <div className="grid gap-10 border-t border-line px-5 py-8 sm:px-8 md:pl-[calc(3rem+3.5rem)] lg:grid-cols-12">
      <div className="space-y-7 lg:col-span-7">
        <p className="text-lg leading-snug text-bone/90">{study.summary}</p>

        {/* Walkthrough first: it frames everything read below it. */}
        {study.video ? (
          <div className="aspect-video w-full border border-line bg-ink">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${study.video.id}`}
              title={study.video.title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : null}

        <Prose heading="Problem" body={study.problem} />
        <Prose heading="Build" body={study.build} />

        {/* Straight after Build, so the canvas is seen while the description
            of it is still in mind. */}
        {study.shots?.length ? <Shots shots={study.shots} /> : null}

        {/* The trade-off is read before the result it shaped. Omitted
            entirely when a study has none. */}
        {study.theCatch ? (
          <Prose heading="The catch" body={study.theCatch} />
        ) : null}

        <Prose heading="Outcome" body={study.outcome} />
      </div>

      <div className="space-y-8 lg:col-span-5">
        {/* A study with nothing to report renders no table at all, rather
            than an empty ruled box. */}
        {study.metrics.length ? (
          <dl className="divide-y divide-line border-y border-line font-mono text-sm">
            {study.metrics.map((m) => (
              <div key={m.k} className="flex justify-between gap-6 py-3">
                <dt className="label text-mute">{m.k}</dt>
                <dd className="text-right">{m.v}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div>
          <h4 className="label mb-3 text-mute">Stack</h4>
          {/* Same treatment as the Stack section: frameless marks, name on
              hover or tap. Studies still carrying placeholder tools have no
              logo to show, so those stay as text. */}
          <ul className="flex flex-wrap gap-x-7 gap-y-5">
            {study.stack.map((tool) =>
              tool.logo ? (
                <ToolLogo key={tool.name} tool={tool} />
              ) : (
                <li
                  key={tool.name}
                  className="flex items-center gap-2 font-mono text-sm"
                >
                  <span
                    aria-hidden
                    className="inline-block h-2 w-2 bg-[rgb(var(--tone))]"
                  />
                  {tool.name}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

type Shot = NonNullable<CaseStudy["shots"]>[number];

// Thumbnails that open full screen. Hand-rolled rather than pulled from a
// package: it is a piece of state, a portal and a keydown listener.
function Shots({ shots }: { shots: Shot[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shot = openIndex === null ? null : shots[openIndex];

  const closeRef = useRef<HTMLButtonElement>(null);
  // The thumbnail that opened the overlay, so focus can go back to it.
  const openerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!shot) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("keydown", onKey);

    // The page behind must not scroll under the overlay.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const opener = openerRef.current;
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      opener?.focus();
    };
  }, [shot]);

  return (
    <>
      {/* The width sits on each item rather than the button, so a caption
          wraps to the thumbnail's measure instead of the row's. */}
      <ul className="flex flex-wrap gap-x-4 gap-y-5">
        {shots.map((s, i) => (
          <li key={s.src} className="w-44 sm:w-52">
            <figure>
              {/* The description lives on the button, so the thumbnail
                  itself is decorative — otherwise a screen reader reads it
                  twice. */}
              <button
                type="button"
                aria-label={`Expand screenshot: ${s.alt}`}
                onClick={(e) => {
                  openerRef.current = e.currentTarget;
                  setOpenIndex(i);
                }}
                className="block w-full border border-line transition-colors hover:border-[rgb(var(--tone))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--tone))]"
              >
                <Image
                  src={s.src}
                  alt=""
                  width={s.w}
                  height={s.h}
                  sizes="208px"
                  className="h-auto w-full"
                />
              </button>

              {/* Mono like the site's other small type, but left in its own
                  case rather than the uppercase .label rule: these name
                  camelCase tools, and TOOL ROUTING: CHECKAVAILABILITY reads
                  as one word. */}
              {s.caption ? (
                <figcaption className="mt-2 font-mono text-[0.68rem] leading-snug text-mute">
                  {s.caption}
                </figcaption>
              ) : null}
            </figure>
          </li>
        ))}
      </ul>

      {/* Portalled to the body so no ancestor's overflow or stacking context
          can clip or bury it. */}
      {shot
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={shot.alt}
              onClick={() => setOpenIndex(null)}
              // 95% ink still leaves the page faintly legible behind it, which
              // reads as a glitch rather than a backdrop; the blur settles it.
              className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md"
            >
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpenIndex(null)}
                className="label absolute right-4 top-4 border border-bone/40 px-3 py-2 text-bone transition-colors hover:bg-bone hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone"
              >
                Close ✕
              </button>

              {/* Clicks on the image itself must not reach the backdrop, or
                  the overlay would close the moment it was aimed at. */}
              {/* Largest size that fits inside 90vw x 90vh with the ratio
                  intact. Width is the single controlling value: 90vh scaled
                  by the aspect ratio is what the image would be if height
                  were the binding limit, so whichever of the two is smaller
                  is the correct width, and height follows. Unlike a bare
                  max-width this also scales *up*, so a screenshot narrower
                  than the viewport no longer sits small on a big display. */}
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.w}
                height={shot.h}
                sizes="90vw"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: `min(90vw, ${((shot.w / shot.h) * 90).toFixed(3)}vh)`,
                }}
                className="h-auto max-w-none border border-line"
              />
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function Prose({ heading, body }: { heading: string; body: string }) {
  return (
    <div>
      <h4 className="label mb-2 text-[rgb(var(--tone))]">{heading}</h4>
      <p className="max-w-[60ch] leading-relaxed text-bone/80">{body}</p>
    </div>
  );
}

// The vertical stroke rotates into the horizontal one: + becomes −.
function PlusMinus({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className="relative block h-7 w-7 border border-line text-[rgb(var(--tone))]"
    >
      <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-current" />
      <span
        className={`absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-current transition-transform duration-300 motion-reduce:transition-none ${
          open ? "rotate-90" : ""
        }`}
      />
    </span>
  );
}
