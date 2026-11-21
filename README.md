# Deven Shah — portfolio (React + Vite)

## Run locally

Needs Node 18+. If `node -v` fails, install the LTS build from nodejs.org first.

    npm install
    npm run dev        # http://localhost:5173

Production build: `npm run build`, output goes to `dist/`. `vercel.json` sets the
framework, build command and output directory, so Vercel shouldn't need dashboard changes.

## Edit content

All copy lives in `src/data/content.js`. Components only read from it.
Lines marked `[ASSUMED]` were not on devenshah.in — verify or delete them.

## Palette

Values in `src/styles.css` `:root`. Base, text and borders match satyamgajjar.in;
aqua is the primary accent and lime is a rare highlight, so this reads as the same
mood rather than a copy.

| Token | Value | Use |
|---|---|---|
| `--navy` | `#07120f` | page background |
| `--surface` | `#0b1814` | lifted sections |
| `--surface-2` | `#050d0b` | Decisions, closing CTA, footer |
| `--ink` | `#f3f6f2` | body text |
| `--muted` | `#aeb7b2` | secondary text |
| `--line` | `rgba(255,255,255,.12)` | borders, glass edges |
| `--aqua` | `#64e9d9` | primary accent |
| `--lime` | `#c8ff53` | rare highlight only |

All text pairs pass WCAG AA; the lowest is muted-on-surface at 8.85:1.

## Static assets

`public/` is served from the site root, so these keep their existing URLs:
`/photo.png`, `/Deven_Shah_CV.pdf`, `/ai-journey.html`, `/qc-ads-teardown.html`, `/fonts/*`.
The two article pages load the Cormorant and Inter woff2 files, which is why
`public/fonts/` is still there even though the React site uses Geist.

`Deven_Shah_CV.docx` was deliberately **not** copied across. It's currently public
at devenshah.in/Deven_Shah_CV.docx, meaning anyone can download your editable CV.

## Not yet verified

This build has not been compiled or opened in a browser — Node isn't installed on
the machine it was written on. Checked statically: contrast ratios, import/export
resolution, CSS class coverage. Run `npm run build` and the animation pass before deploying.

## Before you publish

- `site.status` shows in the nav on a public page your employer can read.
  Change it to "Let's talk" if your search is quiet.
- The contact form has no backend; it opens the visitor's mail app. Connect
  Formspree or Resend, or delete the form and keep the large email link.
- Push to a branch, not `main`, so Vercel builds a preview URL and devenshah.in
  stays untouched until you merge. Don't use GitHub's web uploader — it can't
  move or delete files, and this layout moves assets into `public/`.
