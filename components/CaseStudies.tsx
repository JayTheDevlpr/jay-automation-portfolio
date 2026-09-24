"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CASE_STUDIES, type CaseStudy } from "@/lib/content";
import { EASE, useMotionMode } from "@/lib/motion";
import { toneStyle } from "@/lib/tone";
import SectionHeading from "./SectionHeading";

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
          note="Placeholder case studies"
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

          <span className="order-last col-span-2 flex items-baseline gap-3 md:order-none md:col-span-1">
            <span className="display text-[clamp(2.2rem,4vw,3.4rem)] text-[rgb(var(--tone))]">
              {study.stat.value}
            </span>
            <span className="label text-mute">{study.stat.label}</span>
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
        {(
          [
            ["Problem", study.problem],
            ["Build", study.build],
            // Sits between Build and Outcome, so the trade-off is read before
            // the result it shaped. Omitted entirely when a study has none.
            ...(study.theCatch
              ? ([["The catch", study.theCatch]] as [string, string][])
              : []),
            ["Outcome", study.outcome],
          ] as [string, string][]
        ).map(([heading, body]) => (
          <div key={heading}>
            <h4 className="label mb-2 text-[rgb(var(--tone))]">{heading}</h4>
            <p className="max-w-[60ch] leading-relaxed text-bone/80">{body}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8 lg:col-span-5">
        <dl className="divide-y divide-line border-y border-line font-mono text-sm">
          {/* Build type runs long enough to wrap, so it stacks rather than
              sitting opposite its label like the short metric values do. */}
          <div className="py-3">
            <dt className="label text-mute">Build type</dt>
            <dd className="mt-1.5 leading-relaxed text-bone/80">
              {study.buildType}
            </dd>
          </div>
          {study.metrics.map((m) => (
            <div key={m.k} className="flex justify-between gap-6 py-3">
              <dt className="label text-mute">{m.k}</dt>
              <dd className="text-right">{m.v}</dd>
            </div>
          ))}
        </dl>

        <div>
          <h4 className="label mb-3 text-mute">Stack</h4>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
            {study.stack.map((tool) => (
              <li key={tool} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 bg-[rgb(var(--tone))]"
                />
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
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
