import {NextResponse} from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://goumrah.id";

export async function GET() {
    const content = `
        # General access for all search engines
        User-agent: *
        Allow: /
        
        # Specific rules for major search engines
        User-agent: Googlebot
        Allow: /
        
        User-agent: Bingbot
        Allow: /
        
        User-agent: Slurp  # Yahoo's search engine
        Allow: /
        
        # Block sensitive or unnecessary pages
        Disallow: /admin/
        Disallow: /login/
        Disallow: /cart/
        Disallow: /checkout/
        
        # Sitemap URL to help search engines index your site properly
        Sitemap: ${baseUrl}/sitemap.xml
    `;

    return new NextResponse(content, {
        headers: {"Content-Type": "text/plain"}
    });
}
