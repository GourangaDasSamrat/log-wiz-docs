# log-wiz-docs

Documentation site for [`@gouranga_samrat/log-wiz`](https://www.npmjs.com/package/@gouranga_samrat/log-wiz) — built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

🌐 **Live site:** https://gourangadassamrat.github.io/log-wiz-docs/

## Stack

- **Framework:** Astro 4
- **Docs theme:** Starlight
- **Styling:** Custom CSS with `#7c3aed` brand palette
- **Fonts:** Outfit (display) + JetBrains Mono (code)
- **Deployment:** GitHub Pages via Actions

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build

```bash
npm run build     # output → dist/
npm run preview   # preview the build locally
```

## Structure

```
src/
├── components/Hero.astro         # Custom homepage hero
├── styles/custom.css             # Brand overrides for Starlight
├── assets/                       # Logo SVGs
└── content/docs/
    ├── index.mdx                 # Homepage
    ├── guides/                   # Getting started, concepts, how-tos
    └── reference/                # API, config, and type reference
```

## Deployment

Pushes to `main` automatically trigger the `deploy.yml` workflow,
which builds the Astro site and deploys to GitHub Pages.
