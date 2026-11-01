# Landing page and docs

A Next.js (App Router) site, exported as plain static files. It has the landing page, the docs, one page per orb (33) and
a global playground, all with live WebGPU previews.

```bash
npm run dev        # dev server at http://localhost:3000
npm run build      # static export into apps/web/out
npm run start      # preview out/ at http://localhost:4173
npm run typecheck
```

(Or from the repo root: `pnpm site` and `pnpm site:dev`.)

## Pages

| Route | What it is |
|---|---|
| `/` | Landing page, with a live interactive orb. |
| `/docs/...` | The guides and reference, from `content/docs/*.md`. |
| `/docs/components/orbs/` | Gallery of all orbs with live thumbnails. |
| `/docs/components/orbs/orb-01/` | One orb: a live preview (mood picker, "Open in playground"), installation, usage, props, shader params, colors, credits. **No sliders here.** |
| `/playground/` | The only place with controls: orb picker, mood, size, colors, volumes, every parameter, and **Copy JSX**. Deep links work: `?orb=orb-05&state=speaking`. |

The orb pages follow the structure of shadercn's own docs. The preview card is small and the controls live in one shared
playground.

## For tools and AI assistants

| URL | What it is |
|---|---|
| `/llms.txt` | A short index in the [llms.txt](https://llmstxt.org) format: the key facts, every docs page, every orb. |
| `/llms-full.txt` | All the docs and every orb's parameters, as one text file. |
| `/r/registry.json` | The orb catalog. `/r/orb-01.json` etc. add the per-mood presets. |

They're generated at build time by `lib/llms.ts` and `lib/registry.ts` from the same data as the pages. The links are
relative until you set `url` in `lib/site.ts`; then they become absolute. The catalog is **not** a shadcn registry: the
orbs ship inside the npm package.

The **MCP server** is in `packages/mcp`. It reads the catalog, runs locally over stdio, and has five tools. After a site
build, `npm run sync` there copies the catalog in, and `npm run smoke` starts the server like a client would and
checks every tool. See the MCP page in the docs for setup.

## Design system

The UI is built on [shadcn/ui](https://ui.shadcn.com) (Radix base, `nova` preset) and Tailwind v4. `components.json` is
set up, so `npx shadcn@latest add <component>` works here. The components live in `components/ui`.

- **Light and dark mode.** `next-themes` toggles a class on `<html>`, defaulting to the system setting. The toggle is in
  the nav. All colors come from the theme tokens in `app/globals.css` (`:root` and `.dark`).
- **Orbs and code blocks stay dark in both themes.** The shaders are built for black, so each orb sits on a dark stage
  panel in light mode too. The stage is a `<div class="orb-stage dark">`: the `dark` class re-themes any shadcn control
  inside it. Use the same pattern for anything new that holds an orb.
- **Search (⌘K or Ctrl+K, or `/`).** A command palette over every docs page, every heading, and every orb. Orbs also match
  their parameter names, so "exposure" finds the orbs that have it. The index is built at build time in `lib/search.ts`.
- **Toasts** (copy confirmations) use `sonner`. **Gallery previews wake on hover**, and freeze again when you leave.

Custom CSS lives in `@layer components`, so Tailwind utilities and shadcn variants can always override it.

## How it's built

| Path | Role |
|---|---|
| `lib/site.ts` | Package name, `published` flag, repo URL, and the docs sidebar structure. |
| `content/docs/*.md` | The docs, in Markdown. `{{pkg}}` and `{{install}}` are filled in at build time. |
| `lib/markdown.ts` | Renders Markdown on the server (marked + highlight.js). |
| `lib/orbs.ts` | Server-only view of the orb definitions, used for the tables. |
| `lib/orb-loader.ts` | Loads one orb at a time in the browser, so a page downloads only the shaders it shows. |
| `lib/web-orb.ts` | The browser WebGPU renderer. |
| `components/orb-view.tsx` | A live orb: placeholder disc, lazy loading, still-glow fallback without WebGPU. |
| `components/playground.tsx` | The playground. |
| `app/` | Routes and the stylesheet (`globals.css`). |

The orb pages are generated from the real definitions in `packages/react-native-shader-orbs/src/orbs`. Rebuild after
regenerating the orbs and the site follows. The browser renderer reuses the library's own `createOrbShader`, so the orbs
here behave like the app: same springs, moods and touch response.

## Before you publish

- **Name.** Change `pkg` in `lib/site.ts`. It's used on every page.
- **Pre-release notices.** While `published` is `false` the site shows a banner and notes that the package isn't on npm.
  Set it to `true` when the package is released.
- **Repository link.** Set `repo` to show GitHub links; leave it empty to hide them.
- **Licensing page.** `content/docs/licensing.md` carries the XorDev non-commercial terms. Keep it accurate.

## Hosting

`out/` is static, so any static host works.

- **Domain root** (Vercel, Netlify, Cloudflare Pages): build command `npm run build`, output directory `apps/web/out`.
- **Sub-path** (for example GitHub Pages at `/repo-name/`): build with `BASE=/repo-name`.

```bash
BASE=/repo-name npm run build
```

> **On Windows with Git Bash**, a value like `/repo-name` is silently rewritten into a Windows path. Set
> `MSYS_NO_PATHCONV=1` first, or use PowerShell: `$env:BASE = "/repo-name"`.

> **Build the site you deploy on Linux (CI).** Next's link prefetching expects payload files named
> `__next.docs.$oc$slug.__PAGE__.txt`. A Windows export stores them as folders instead, so on a plain static host the
> prefetch requests 404 and Next quietly falls back to normal page loads. Nothing breaks, links are just not instant.
> `npm run start` (the preview server here) maps the two forms so you can test the real behavior locally.

## Notes

- **Dependencies are installed with npm inside `apps/web`**, not by the repo's pnpm install, because the site is
  independent of the Expo app. Run `npm install` here once.
- Orbs render through the browser's WebGPU. It has been tested in Chrome; other browsers depend on their WebGPU
  support. Without it the page falls back to a still glow and says so; the docs and code samples still work.
- Gallery previews mount as they scroll into view, draw for about a second and a half, then freeze on a frame, the same
  trick the app's sidebar uses.
- There's no Open Graph image yet.
