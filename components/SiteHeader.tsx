"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NAV, SITE } from "@/lib/content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Escape closes and returns focus to the control that opened it, and the
  // page behind the panel shouldn't scroll under it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  // The viewport can cross the breakpoint while the panel is open — a rotate
  // or a window resize. The desktop nav takes over there, so the panel must
  // not be left behind holding the body scroll lock.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = () => desktop.matches && setOpen(false);
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

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

        {/* -mr-2 pulls the 44px tap target back so the glyph inside it still
            lines up with the section gutter. */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bone md:hidden"
        >
          <Burger open={open} />
        </button>
      </div>

      {/* Portalled to the body on purpose: this header sets backdrop-blur,
          and a backdrop-filter makes an element the containing block for its
          fixed-position descendants. Left inside, the overlay would resolve
          against the 56px bar instead of the viewport and collapse to nothing
          — still clickable from script, but invisible and untappable. */}
      {open
        ? createPortal(
            <div
              aria-hidden
              data-mobile-nav-backdrop
              onClick={() => setOpen(false)}
              className="fixed inset-x-0 bottom-0 top-14 z-10 bg-ink/80 md:hidden"
            />,
            document.body,
          )
        : null}

      {/* Rendered even when closed so `aria-controls` always resolves. */}
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full z-20 border-b border-line bg-ink md:hidden"
      >
        <ul className="label mx-auto max-w-[88rem] divide-y divide-line px-5 sm:px-8">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-bone transition-colors hover:text-ember focus-visible:text-ember"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// Three rules that fold into a cross: the outer two rotate onto the middle
// line while it fades out.
function Burger({ open }: { open: boolean }) {
  const bar =
    "absolute left-0 h-px w-full bg-bone transition-transform duration-200";
  return (
    <span aria-hidden className="relative block h-[15px] w-6">
      <span
        className={`${bar} top-0 ${open ? "translate-y-[7px] rotate-45" : ""}`}
      />
      <span
        className={`absolute left-0 top-[7px] h-px w-full bg-bone transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`${bar} top-[14px] ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}
