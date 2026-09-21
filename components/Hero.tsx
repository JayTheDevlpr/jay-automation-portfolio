"use client";

import { motion, type Transition } from "framer-motion";
import { HERO } from "@/lib/content";
import { EASE, SEQUENCE, useMotionMode } from "@/lib/motion";

const LOG_TONES = [
  "text-ember",
  "text-ice",
  "text-lime",
  "text-rose",
  "text-bone",
] as const;

export default function Hero() {
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
      <div className="mx-auto grid h-full max-w-[88rem] items-center gap-x-10 gap-y-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:py-12">
        <div className="lg:col-span-7">
          <motion.p
            className="label mb-6 flex items-center gap-3 text-mute"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={at(SEQUENCE.eyebrow, 0.5)}
          >
            <span aria-hidden className="inline-block h-2 w-2 bg-ember" />
            {HERO.eyebrow}
          </motion.p>

          <h1 className="display text-[clamp(2.6rem,6.6vw,6.5rem)]">
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
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={at(SEQUENCE.sub, 0.6)}
          >
            <p className="max-w-[46ch] text-lg leading-relaxed text-bone/80">
              {HERO.sub}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
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

        <div
          className="border border-line bg-ink/70 font-mono text-[0.8rem] leading-6 lg:col-span-5"
          aria-hidden
        >
          <div className="label flex justify-between border-b border-line px-4 py-2 text-mute">
            <span>run log</span>
            <span>placeholder</span>
          </div>
          <div className="space-y-0.5 px-4 py-3">
            <LogLine index={0} ready={ready} at={at}>
              <span className="text-mute">$</span> {HERO.log.command}
            </LogLine>
            {HERO.log.steps.map((step, i) => (
              <LogLine key={step.tag} index={i + 1} ready={ready} at={at}>
                <span className="grid grid-cols-[1.6rem_4.6rem_1fr_auto] gap-x-2">
                  <span className="text-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={LOG_TONES[i % LOG_TONES.length]}>
                    {step.tag}
                  </span>
                  <span className="truncate text-bone/85">{step.text}</span>
                  <span className="text-mute">{step.ms}</span>
                </span>
              </LogLine>
            ))}
            <LogLine index={HERO.log.steps.length + 1} ready={ready} at={at}>
              <span className="text-lime">✓ {HERO.log.done}</span>
            </LogLine>
          </div>
        </div>
      </div>
    </section>
  );
}

// Each log line is wiped in left-to-right, like output being printed.
function LogLine({
  index,
  ready,
  at,
  children,
}: {
  index: number;
  ready: boolean;
  at: (delay: number, duration?: number) => Transition;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={ready ? { clipPath: "inset(0 0% 0 0)" } : undefined}
      transition={at(SEQUENCE.logStart + index * SEQUENCE.logStagger, 0.35)}
    >
      {children}
    </motion.div>
  );
}
