import { useEffect } from 'react';
import { BRAND_ICON, SITE_NAME, SITE_URL, type PageMeta } from './site';

/**
 * Keeps browser-tab and client-side share tags in sync with the current route.
 *
 * NOTE FOR HOSTING (single-page app): social crawlers do not run JavaScript, so
 * the authoritative tags for each route live in the static HTML that the host
 * serves for that route. The home page's tags are written directly in index.html.
 * When the remaining routes are built, generate a static HTML shell per route
 * (pre-render) so the tags below are also present without JavaScript.
 */

function upsertMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(href: string): void {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function usePageMeta(page: PageMeta): void {
  useEffect(() => {
    const url = `${SITE_URL}${page.path === '/' ? '/' : page.path}`;
    const image = page.image ?? BRAND_ICON;
    const imageAlt = page.imageAlt ?? `${SITE_NAME} share image`;

    document.title = page.title;
    upsertCanonical(url);

    upsertMeta('name', 'description', page.description);
    upsertMeta('name', 'robots', page.robots ?? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    upsertMeta('property', 'og:type', page.type ?? 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', page.title);
    upsertMeta('property', 'og:description', page.description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:image:alt', imageAlt);
    upsertMeta('property', 'og:locale', 'en_CA');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', page.title);
    upsertMeta('name', 'twitter:description', page.description);
    upsertMeta('name', 'twitter:image', image);
    upsertMeta('name', 'twitter:image:alt', imageAlt);
  }, [page]);
}