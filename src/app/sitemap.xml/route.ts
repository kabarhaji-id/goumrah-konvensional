import { NextResponse } from "next/server";

export async function GET() {
    const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        (process.env.NODE_ENV === "production"
            ? "https://goumrah.id"
            : "http://localhost:3002");

    try {
        // Fetch daftar slug dari Static API /api/seo
        const response = await fetch(`${baseUrl}/api/seo`, { cache: "no-store" });

        if (!response.ok) {
            throw new Error("Failed to fetch SEO slugs");
        }

        const packageSlugs = await response.json();

        if (!Array.isArray(packageSlugs)) {
            throw new Error("Invalid SEO data format");
        }

        // Static pages (halaman yang tidak memiliki dynamic slug)
        const staticPages = [
            "/",
            "/syarat-ketentuan",
            "/faq",
            "/about-us",
            "/umrah",
            "/umroh",
            "/umrah/ideal",
            "/umrah/rekomendasi",
            "/umrah/eksklusif"
        ];

        // Filter slug agar valid dan tidak ada duplikasi
        const dynamicPages = packageSlugs
            .filter((slug) => typeof slug === "string" && slug.trim() !== "") // Pastikan slug valid
            .map((slug) => encodeURI(slug.toLowerCase())) // Normalisasi slug + encode untuk keamanan
            .filter((slug) => !staticPages.includes(`/${slug}`)) // Hindari duplicate dengan static pages
            .map((slug) => `/umrah/${slug}`);

        // Gabungkan semua URL dan hapus duplikat
        const allPages = Array.from(new Set([
            ...staticPages.map((slug) => `${baseUrl}${slug}`),
            ...dynamicPages.map((slug) => `${baseUrl}${slug}`)
        ]));

        // Pastikan semua halaman memiliki tanggal `lastmod` yang sama
        const lastModifiedDate = new Date().toISOString();

        // Generate XML sitemap
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${allPages
            .map(
                (url) => ` 
            <url>
              <loc>${url}</loc>
              <lastmod>${lastModifiedDate}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${url === baseUrl ? 1.0 : 0.8}</priority>
            </url>
          `)
            .join("")}
        </urlset>`.trim();

        return new NextResponse(sitemap, {
            headers: {
                "Content-Type": "application/xml",
                "X-Robots-Tag": "index, follow",
                "Cache-Control": "public, max-age=86400, immutable" // Cache selama 24 jam
            },
        });
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
