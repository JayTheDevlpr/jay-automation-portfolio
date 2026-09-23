type Props = {
  index: string;
  label: string;
  // Node rather than string so a section can colour parts of its title
  // (About sets its second line in the accent); the other sections pass
  // a plain string and are unaffected. Omit it to show the numbered label
  // on its own.
  title?: React.ReactNode;
  note?: string;
  tone?: "light" | "dark";
};

// Numbered, ledger-style section opener shared by About → CaseStudies.
export default function SectionHeading({
  index,
  label,
  title,
  note,
  tone = "light",
}: Props) {
  const rule = tone === "light" ? "border-line" : "border-ink/30";
  const muted = tone === "light" ? "text-mute" : "text-ink/60";
  // Without a title the numbered label carries the heading, so the section
  // still has one in the document outline. Tailwind's preflight drops the
  // default h2 size, weight and margin, so it renders exactly like the span.
  const LabelTag = title ? "span" : "h2";

  return (
    <header className={`mb-10 border-t pt-4 sm:mb-14 ${rule}`}>
      <div
        className={`label flex items-baseline justify-between gap-6 ${muted}`}
      >
        <LabelTag>
          <span className="text-ember">{index}</span> / {label}
        </LabelTag>
        {note ? <span className="hidden sm:block">{note}</span> : null}
      </div>
      {title ? (
        <h2 className="display mt-5 max-w-[18ch] text-[clamp(2.3rem,6vw,4.75rem)]">
          {title}
        </h2>
      ) : null}
    </header>
  );
}
