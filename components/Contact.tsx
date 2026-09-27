import { CONTACT, SITE } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-moss text-bone">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24">
        <div className="label flex justify-between border-t border-line pt-4 text-mute">
          <span>05 / Contact</span>
          <span className="hidden sm:block">Available for work</span>
        </div>

        <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.8rem,9vw,8rem)]">
          {CONTACT.headline}
        </h2>

        <div className="mt-10 grid items-end gap-10 lg:grid-cols-12">
          <p className="max-w-[44ch] text-lg leading-relaxed text-bone/85 lg:col-span-5">
            {CONTACT.sub}
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="display break-all text-[clamp(1.6rem,3.6vw,3.25rem)] no-underline transition-colors hover:text-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone lg:col-span-7"
          >
            {SITE.email}
          </a>
        </div>

        <footer className="label mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-line pt-5">
          <ul className="flex flex-wrap gap-3">
            {CONTACT.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-line px-4 py-2 transition-colors hover:bg-bone hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
          <span className="text-mute">
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <span className="text-mute">Built by {SITE.name}</span>
        </footer>
      </div>
    </section>
  );
}
