type Props = {
  index: string;
  label: string;
  // Optional: About omits it and carries its own headline inside the layout
  // below, so this renders as just the numbered label.
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

  return (
    <header className={`mb-10 border-t pt-4 sm:mb-14 ${rule}`}>
      <div
        className={`label flex items-baseline justify-between gap-6 ${muted}`}
      >
        <span>
          <span className="text-ember">{index}</span> / {label}
        </span>
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
