# hliuson.github.io

Personal site, built with [Astro](https://astro.build) and deployed to GitHub Pages on push to `main`.

```sh
npm install
npm run dev      # http://localhost:4321, drafts visible
npm run build    # static output in dist/, drafts excluded
```

## Where things live

| What | Where |
| --- | --- |
| Bio, homepage sections | `src/pages/index.astro` |
| Name, social links | `src/data/site.ts` |
| Papers, projects, blog posts | `src/content/posts/*.md` → `/posts/<slug>/`. `kind:` is an optional label shown under the title (e.g. `Project`, `Unpublished`). Leave the body empty to have the title link straight to the first entry in `links` (supports `$math$`, code, footnotes, HTML tables) |
| PDFs (CV, papers) | `public/files/` |
| Styles | `src/styles/global.css` |

Frontmatter fields are defined (and validated at build time) in `src/content.config.ts`.
Set `draft: true` to hide an entry from the production build.
