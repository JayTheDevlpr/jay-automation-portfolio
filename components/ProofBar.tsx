"use client";

import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { PROOF, type ProofStat } from "@/lib/content";
import { EASE, SEQUENCE, useMotionMode } from "@/lib/motion";

export default function ProofBar() {
  const mode = useMotionMode();

  return (
    <section
      aria-label="Results at a glance"
      className="border-b border-ink/20 bg-bone text-ink"
    >
      <dl className="mx-auto grid max-w-[88rem] grid-cols-2 lg:grid-cols-4">
        {PROOF.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col-reverse justify-end border-ink/20 px-5 py-6 sm:px-8 [&:nth-child(2n)]:border-l lg:border-l lg:first:border-l-0 [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0"
          >
            {/* Label comes first in the DOM (dt before dd); flex-col-reverse puts the number on top. */}
            <dt className="label mt-3 text-ink/65">{stat.label}</dt>
            <dd className="display text-[clamp(2.4rem,5vw,4.25rem)] tabular-nums">
              <Counter stat={stat} index={i} mode={mode} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function format(value: number, decimals: number) {
  // Fixed locale so server and client render identical text.
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// Counts from 0 once, starting at the end of the Hero sequence. Under reduced
// motion the final value is set immediately with no tween.
function Counter({
  stat,
  index,
  mode,
}: {
  stat: ProofStat;
  index: number;
  mode: ReturnType<typeof useMotionMode>;
}) {
  const decimals = stat.decimals ?? 0;
  const value = useMotionValue(0);
  const text = useTransform(
    value,
    (v) => `${format(v, decimals)}${stat.suffix}`,
  );

  useEffect(() => {
    if (mode === "pending") return;
    if (mode === "reduced") {
      value.set(stat.value);
      return;
    }
    const controls = animate(value, stat.value, {
      duration: 1.7,
      delay: SEQUENCE.counters + index * 0.12,
      ease: EASE,
    });
    return () => controls.stop();
  }, [mode, value, stat.value, index]);

  return (
    <>
      <span className="sr-only">
        {format(stat.value, decimals)}
        {stat.suffix}
      </span>
      <motion.span aria-hidden>{text}</motion.span>
    </>
  );
}
