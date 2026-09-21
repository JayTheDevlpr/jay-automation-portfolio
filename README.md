# Jay Marin — AI Automation Portfolio

Single-page portfolio built with Next.js 14 (App Router), Tailwind CSS and Framer Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

- `app/page.tsx` — assembles the sections in order: Hero, ProofBar, About, Services, ToolsStack, CaseStudies, Contact.
- `components/` — one component per section, plus `SiteHeader`, `SectionHeading` and `ServiceGlyph`.
- `components/ProofBar.tsx` — the quiet tools teaser under the Hero; the whole strip links to `#stack`. Tools are text wordmarks; swap in official SVG logos when you have them.
- `lib/content.ts` — **all copy lives here** (some sections are still placeholder). Edit this file to change content.
- `lib/motion.ts` — the Hero entrance timing (`SEQUENCE`) and the reduced-motion hook.
- `lib/tone.ts` — sets the per-category colour used by Services and CaseStudies.

## Motion

- The only entrance animation is on the Hero: the role label, then the headline resolving in word by word, then the subhead, then the manual-vs-automated table printing row by row. The timeline is defined in `SEQUENCE`.
- CaseStudies cards are an accordion (one open at a time) with a height transition.
- `prefers-reduced-motion` is respected: the Hero renders straight to its final state, the accordion toggles instantly, and the teaser's jump to `#stack` is not smooth-scrolled.

## Design notes

- Each service has its own colour (ember, lime, rose, ice). The colour carries from the Services tiles to the matching case-study cards.
- Display type is Bricolage Grotesque at a narrow, heavy width; labels are IBM Plex Mono.
