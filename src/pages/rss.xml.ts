import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../data/site';
import { getPosts, postHref } from '../lib/content';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: site.name,
    description: site.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description,
      link: postHref(p) ?? '/',
    })),
  });
}
