import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

// Drafts show up in `npm run dev` but never in the production build.
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const hasPage = (p: Post) => (p.body ?? '').trim().length > 0;

/** Where the title links: the post's own page, or its first external link. */
export const postHref = (p: Post) => (hasPage(p) ? `/posts/${p.id}/` : p.data.links[0]?.href);

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
