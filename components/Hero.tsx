"use client";

import { motion, type Transition } from "framer-motion";
import { HERO } from "@/lib/content";
import { EASE, SEQUENCE, useMotionMode } from "@/lib/motion";

export default function Hero() {
  const compare = HERO.compare;
  const mode = useMotionMode();
  const ready = mode !== "pending";
  const reduced = mode === "reduced";

  // Every element holds its hidden state until the motion preference is known,
  // then either plays at its slot in the sequence or snaps to the end.
  const at = (delay: number, duration = 0.7): Transition =>
    reduced ? { duration: 0 } : { delay, duration, ease: EASE };

  let wordIndex = 0;

  return (
    <section
      aria-label="Introduction"
      className="dot-grid relative flex-1 border-b border-line"
    >
      <div className="mx-auto grid h-full max-w-[88rem] items-center gap-x-10 gap-y-10 px-5 py-10 sm:px-8 lg:grid-cols-[18.5rem_minmax(0,1fr)] lg:py-12">
        {/* Dominant text block: on lg screens this sits on the right (order-2)
            and is right-aligned, but inset from the true right edge (pr-10)
            so it reads as off-center toward the right rather than flush
            against it. The panel gets a fixed-width column (so its box shape
            holds steady at every desktop width) and the text takes all the
            remaining space, dwarfing it. On narrower screens the text stays
            first in source order, left-aligned and full width, above the panel. */}
        <div className="lg:order-2 lg:pr-10">
          {/* Role label: the strong secondary highlight, sized between the nav
              name (~1.5rem) and the headline (up to 6.5rem). */}
          <motion.p
            className="display mb-5 flex items-center gap-4 text-[clamp(1.6rem,3.3vw,2.75rem)] text-ember lg:justify-end"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={at(SEQUENCE.eyebrow, 0.5)}
          >
            <span aria-hidden className="inline-block h-[3px] w-10 bg-ember" />
            {HERO.eyebrow}
          </motion.p>

          <h1 className="display text-[clamp(2.6rem,7.2vw,7.25rem)] lg:text-right">
            {HERO.headline.map((line) => (
              <span key={line} className="block">
                {line.split(" ").map((word) => {
                  const i = wordIndex++;
                  return (
                    <span key={i}>
                      <motion.span
                        className="inline-block will-change-[filter,opacity]"
                        initial={{ opacity: 0, filter: "blur(18px)" }}
                        animate={
                          ready
                            ? { opacity: 1, filter: "blur(0px)" }
                            : undefined
                        }
                        transition={at(
                          SEQUENCE.headline + i * SEQUENCE.headlineStagger,
                          0.9,
                        )}
                      >
                        {word}
                      </motion.span>{" "}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.div
            className="mt-8 lg:flex lg:flex-col lg:items-end"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={at(SEQUENCE.sub, 0.6)}
          >
            <p className="max-w-[46ch] text-lg leading-relaxed text-bone/80 lg:text-right">
              {HERO.sub}
            </p>
            <div className="mt-7 flex flex-wrap gap-3 lg:justify-end">
              <a
                href={HERO.primaryCta.href}
                className="label bg-bone px-5 py-3.5 text-ink transition-colors hover:bg-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone"
              >
                {HERO.primaryCta.label} ↓
              </a>
              <a
                href={HERO.secondaryCta.href}
                className="label border border-bone/50 px-5 py-3.5 transition-colors hover:border-ember hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone"
              >
                {HERO.secondaryCta.label}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Supporting detail: a compact box — a bit taller than wide, not the
            tall narrow column this had briefly become — sized well below the
            text block so it reads as a side note, not a competing panel. */}
        <div
          className="w-full max-w-[18.5rem] border border-line/70 bg-ink/40 font-mono text-[0.72rem] leading-5 lg:order-1"
          aria-label="Manual versus automated time, per task"
        >
          <div className="border-b border-line/70 px-4 py-2.5">
            <p className="label text-[0.62rem] text-mute">{compare.title}</p>
            <p className="label mt-0.5 text-[0.58rem] text-mute/60">
              {compare.caption}
            </p>
          </div>

          <div className="px-4 py-3">
            <WipeRow
              index={0}
              ready={ready}
              at={at}
              className={`${ROW} border-b border-line/40 pb-2`}
            >
              <span className="label text-[0.58rem] text-mute">
                {compare.columns.task}
              </span>
              <span className="label text-right text-[0.58rem] text-mute">
                {compare.columns.manual}
              </span>
              <span className="label text-right text-[0.58rem] text-mute">
                {compare.columns.automated}
              </span>
            </WipeRow>

            <div className="space-y-2 pt-2">
              {compare.rows.map((row, i) => (
                <WipeRow
                  key={row.task}
                  index={i + 1}
                  ready={ready}
                  at={at}
                  className={ROW}
                >
                  <span className="text-bone/75">{row.task}</span>
                  <span className="text-right text-bone/45">{row.manual}</span>
                  <span className="text-right text-lime/80">
                    {row.automated}
                  </span>
                </WipeRow>
              ))}
            </div>

            <WipeRow
              index={compare.rows.length + 1}
              ready={ready}
              at={at}
              className={`${ROW} mt-2 border-t border-dashed border-line/70 pt-2 font-medium`}
            >
              <span className="text-bone/90">{compare.total.task}</span>
              <span className="text-right text-ember/90">
                {compare.total.manual}
              </span>
              <span className="text-right text-lime">
                {compare.total.automated}
              </span>
            </WipeRow>
          </div>

          <WipeRow
            index={compare.rows.length + 2}
            ready={ready}
            at={at}
            className="border-t border-line/70 px-4 py-2.5 text-bone/70"
          >
            <span aria-hidden className="text-lime">
              ✓{" "}
            </span>
            {compare.footnote}
          </WipeRow>
        </div>
      </div>
    </section>
  );
}

// Task | Manual | Automated column template shared by every table row.
const ROW = "grid grid-cols-[minmax(0,1fr)_3.5rem_4.5rem] gap-x-2";

// Each row is wiped in left-to-right, like output being printed.
function WipeRow({
  index,
  ready,
  at,
  className,
  children,
}: {
  index: number;
  ready: boolean;
  at: (delay: number, duration?: number) => Transition;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={ready ? { clipPath: "inset(0 0% 0 0)" } : undefined}
      transition={at(SEQUENCE.tableStart + index * SEQUENCE.tableStagger, 0.35)}
    >
      {children}
    </motion.div>
  );
}
