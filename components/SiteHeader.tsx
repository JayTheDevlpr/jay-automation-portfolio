import { NAV, SITE } from "@/lib/content";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[88rem] items-center justify-between gap-6 px-5 sm:px-8">
        {/* Name: heavy display type, the smallest of the three top-level text
            sizes (name < role label < headline). */}
        <a
          href="#"
          className="display flex items-center gap-3 text-[clamp(1.2rem,1.6vw,1.5rem)] leading-none text-bone"
        >
          <span aria-hidden className="inline-block h-3 w-3 bg-ember" />
          {SITE.name}
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="label flex gap-7 text-mute">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-ember focus-visible:text-ember"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
