# Jay — AI Automation Portfolio

Single-page portfolio built with Next.js 14 (App Router), Tailwind CSS and Framer Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

- `app/page.tsx` — assembles the sections in order: Hero, ProofBar, About, Services, ToolsStack, CaseStudies, Contact.
- `components/` — one component per section, plus `SiteHeader`, `SectionHeading` and `ServiceGlyph`.
- `lib/content.ts` — **all placeholder copy lives here.** Edit this file to fill in real content.
- `lib/motion.ts` — the Hero entrance timing (`SEQUENCE`) and the reduced-motion hook.
- `lib/tone.ts` — sets the per-category colour used by Services and CaseStudies.

## Motion

- The only entrance animation is on the Hero: headline resolves in word by word, then the run log prints, then the ProofBar numbers count up once. The timeline is defined in `SEQUENCE`.
- CaseStudies cards are an accordion (one open at a time) with a height transition.
- `prefers-reduced-motion` is respected: the Hero and counters render straight to their final state and the accordion toggles instantly.

## Design notes

- Each service has its own colour (ember, lime, rose, ice). The colour carries from the Services tiles to the matching case-study cards.
- Display type is Bricolage Grotesque at a narrow, heavy width; labels are IBM Plex Mono.
