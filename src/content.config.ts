import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Everything (papers, projects, blog posts) lives in src/content/posts/<slug>.md
// and renders at /posts/<slug>/. If the body is empty, the homepage links straight
// to the first entry in `links` instead of a page.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(), // one line shown on the homepage
    kind: z.string().optional(), // free-form label shown under the title, e.g. "Project", "Unpublished"
    authors: z.string().optional(), // papers: "H. Liuson, A. Coauthor"
    venue: z.string().optional(), // papers: "arXiv preprint"
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
