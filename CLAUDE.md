# jay-automation-portfolio

A single-page Next.js 14 portfolio (App Router, React 18, TypeScript, Tailwind
3.4, framer-motion). Everything renders from one route: `app/page.tsx` composes
the sections in order — SiteHeader, Hero, ProofBar, About, Services,
ToolsStack, CaseStudies, Contact.

## Commands

```bash
npm run dev     # next dev on :3000
npm run build   # next build  — see the warning below before running this
npm run start   # serve a production build
npm run lint    # next lint
npm run logos   # regenerate public/logos/*.svg from simple-icons
```

Before committing, run `npx tsc --noEmit` and `npm run lint`. Both should be
clean.

Prettier is **not** a dependency and there is no config file. Formatting is
applied with `npx prettier --write <files>` using Prettier's defaults, which is
what the existing files are formatted to. Keep using that rather than
hand-aligning, so diffs stay minimal.

## Where things live

- **`lib/content.ts` is the single source of every piece of copy on the site.**
  Headlines, paragraphs, case studies, tool lists, contact details — all of it.
  Components read from it and contain no prose of their own. A copy change is
  almost always a one-file change here, not a component edit.
- `lib/tone.ts` sets the per-category `--tone` channel so descendants can use
  `text-[rgb(var(--tone))]`. `lib/motion.ts` owns the entrance timing.
- `components/` — one file per section, plus `SectionHeading` and `ToolLogo`,
  which are shared.
- `public/logos/*.svg` — brand marks. `public/images/projects/project-N/` —
  case study screenshots.

### Colour

Tokens live in `app/globals.css` as **space-separated RGB channels**
(`--ink: 13 20 17`), not hex, so Tailwind opacity modifiers work:
`bg-ink/70`, `text-[rgb(var(--tone)/0.4)]`. Each token is also exposed as a
Tailwind colour in `tailwind.config.ts`.

| token    | hex       | used for                                     |
| -------- | --------- | -------------------------------------------- |
| `--ink`  | `#0D1411` | `html` background, the Stack section         |
| `--bog`  | `#151F1B` | `body` background — most sections inherit it |
| `--moss` | `#1E2B25` | Contact, expanded Work rows, active Services |
| `--line` | `#34443C` | hairline rules, the dot-grid pattern         |
| `--bone` | `#EBE3D0` | body text and headings                       |
| `--mute` | `#9AA79F` | small labels and captions                    |

`--ember`, `--lime`, `--rose` and `--ice` are one per service category, and
carry from the Services tiles into the matching Work rows. Colour is
information here, not decoration — don't reassign them per-section.

Most sections declare no background and simply show `body`'s `--bog` through.
Check computed styles rather than assuming a section sets its own.

When changing a background, **re-measure text contrast** rather than eyeballing
it. Low-opacity type that passes on one panel can fail on another: `text-ink/70`
measures 7:1 on white but 4.2:1 on `--mute`, under the 4.5 that the 11.5px label
type needs.

## Dev server gotchas

- **Never run `next build` while `next dev` is running.** Both write to
  `.next/`; the build overwrites the dev server's hashed asset URLs and the site
  then serves unstyled HTML. Recovery: stop the server, `rm -rf .next`, restart.
- **Tailwind reads `tailwind.config.ts` only at startup.** Any change to the
  config — new keyframes, colours, spacing — needs a dev server restart to take
  effect. Editing classes in components does not.
- The dev server is tied to the shell that starts it, so it stops when a
  session ends or the machine sleeps. `ERR_CONNECTION_REFUSED` after a break
  means it needs restarting, not that anything broke.
- Webpack logs a wall of warnings about resolving `d:\...` versus `D:\...`.
  That is a drive-letter casing mismatch. It only disables build-dependency
  caching for those paths; it is noise, not a fault.

## Verifying in a real browser

Changes are checked against the running page over the Chrome DevTools Protocol
— launch headless Chrome with `--remote-debugging-port`, connect with Node's
built-in `WebSocket`, and assert on computed styles, rendered text and real
input events. Prefer this over reasoning from source when the question is
"what does the user actually see".

Note that this reads the local filesystem, so it **cannot catch a file that
exists but was never committed**. When a change references a new asset, confirm
it is tracked (`git ls-files`) as well as present on disk.

### Shutting the browser down

**Never kill Chrome by image name.** Do not run `taskkill /F /IM chrome.exe /T`,
`pkill chrome`, or any equivalent. The developer has real Chrome windows open on
the same machine, and matching on the executable name destroys their browsing
session along with the headless instance.

Close only the instance that was launched:

1. Send the CDP `Browser.close` command over the WebSocket already open for the
   verification. It shuts down that browser and its renderer children and
   touches nothing else.
2. Failing that, capture the process ID at launch and stop that PID
   specifically. Find child processes by parent PID, never by name.

The same rule applies to any process started for tooling: stop the one that was
started, not everything sharing its name.
