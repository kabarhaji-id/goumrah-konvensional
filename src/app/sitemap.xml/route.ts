import { NextResponse } from "next/server";

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://goumrah.id";

    try {
        // Fetch dynamic slugs for /umrah/[slug]
        const packageSlugs = await fetch(`${baseUrl}/api/seo`)
            .then((res) => res.json())
            .then((data) => (Array.isArray(data) ? data : []))
            .catch(() => []);


        // Define static routes
        const staticPages = [
            `/`,
            `/syarat-ketentuan`,
            `/faq`,
            `/about-us`,
            `/umrah`,
            `/umrah/ideal`,
            `/umrah/rekomendasi`
        ];

        const dynamicPages = packageSlugs.map((slug) => `/umrah/${slug}`);

        // Gabungkan semua URL dan hapus duplikat dengan Set()
        const allPages = Array.from(
            new Set([
                ...staticPages.map((slug) => `${baseUrl}${slug}`),
                ...dynamicPages.map((slug) => `${baseUrl}${slug}`)
            ])
        );

        // Generate XML sitemap
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
            .map(
                (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${url === baseUrl ? 1.0 : 0.8}</priority>
        </url>
      `
            )
            .join("")}
    </urlset>`;

        return new NextResponse(sitemap, {
            headers: { "Content-Type": "application/xml" },
        });
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
