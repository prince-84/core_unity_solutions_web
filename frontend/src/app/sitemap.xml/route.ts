export const dynamic = 'force-static';

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <sitemap>
    <loc>https://coreunitysolutions.com/sitemap-pages.xml</loc>
  </sitemap>

  <sitemap>
    <loc>https://coreunitysolutions.com/sitemap-services.xml</loc>
  </sitemap>

  <sitemap>
    <loc>https://coreunitysolutions.com/sitemap-industries.xml</loc>
  </sitemap>

  <sitemap>
    <loc>https://coreunitysolutions.com/sitemap-blogs.xml</loc>
  </sitemap>

</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
