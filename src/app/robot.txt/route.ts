import { NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://goumrah.id";

export async function GET() {
    const content = `
      User-agent: *
      Allow: /
      Sitemap: ${baseUrl}/sitemap.xml
  `;

    return new NextResponse(content, {
        headers: { "Content-Type": "text/plain" }
    });
}
