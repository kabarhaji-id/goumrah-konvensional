import { NextResponse } from "next/server";

export async function GET() {
    const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        (process.env.NODE_ENV === "production"
            ? "https://goumrah.id"
            : "http://localhost:3002");

    try {
        // Fetch daftar slug dari Static API /api/seo
        const response = await fetch(`${baseUrl}/api/seo`);
        console.log("Fetch status:", response.status);

        const packageSlugs = await response.json();
        console.log("Fetched slugs (raw response):", packageSlugs);

        // ✅ Pastikan packageSlugs adalah array sebelum diproses
        if (!Array.isArray(packageSlugs)) {
            console.error("Error: API response is not an array", packageSlugs);
            return new NextResponse("Internal Server Error", { status: 500 });
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
            "/umrah/rekomendasi"
        ];

        // ✅ Filter slug agar tidak ada duplikasi dan tidak masuk ke halaman statis
        const dynamicPages = packageSlugs
            .filter((slug) => typeof slug === "string" && slug.trim() !== "") // Pastikan slug valid
            .filter((slug) => !staticPages.includes(`/${slug}`)) // Hindari duplicate dengan static pages
            .map((slug) => `/umrah/${slug}`);

        console.log("Dynamic Pages after filtering:", dynamicPages); // ✅ Cek apakah 9 item ada

        // Gabungkan semua URL dan hapus duplikat dengan Set()
        const allPages = Array.from(new Set([
            ...staticPages.map((slug) => `${baseUrl}${slug}`),
            ...dynamicPages.map((slug) => `${baseUrl}${slug}`)
        ]));

        console.log("Final Sitemap URLs:", allPages); // ✅ Pastikan semua path benar

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
        console.error("Error generating sitemap:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
