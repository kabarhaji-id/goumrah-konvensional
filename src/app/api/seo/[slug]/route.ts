import { NextRequest, NextResponse } from "next/server";
import seoDataJson from "@/data/seo/seo-data.json"; // Import JSON langsung

// Definisikan tipe data untuk SEO
type SeoData = {
  title: string;
  description: string;
  keywords: string;
  image: string;
};

// Pastikan TypeScript mengenali bahwa ini adalah objek dengan index signature
const seoData: Record<string, SeoData> = seoDataJson;

export async function GET(req: Request, context: { params?: { slug?: string } }) {
  const { params } = context;
  const slug = params?.slug;

  if (!slug) {
    // Jika slug tidak diberikan, kembalikan daftar semua slug
    const slugs = Object.keys(seoData);
    return NextResponse.json(slugs, { status: 200 });
  }

  // Jika slug ada, cari data SEO-nya
  if (!(slug in seoData)) {
    return new NextResponse(JSON.stringify({ error: "SEO data not found" }), { status: 404 });
  }

  return NextResponse.json(seoData[slug], { status: 200 });
}
