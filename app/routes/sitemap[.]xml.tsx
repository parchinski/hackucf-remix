import type { LoaderFunction } from '@remix-run/cloudflare';

export const loader: LoaderFunction = async () => {
  const baseUrl = 'https://hackucf-remix.pages.dev';

  // Define your routes
  const routes = [
    '',
    'about-us',
    'competitions',
    'constitution',
    'sponsorship',
    'contact-us',
    'nonprofit',
    'calendar',
    'execs',
    'wicys',
    'ccdc',
    'ctf',
    'faq',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map(
          route => `
        <url>
          <loc>${baseUrl}${route ? `/${route}` : ''}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${route === '' ? '1.0' : '0.8'}</priority>
        </url>
      `,
        )
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
