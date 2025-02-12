import { NextRequest, NextResponse } from "next/server";
import { fetchSEOData } from "@/lib/seo";

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const seoData = await fetchSEOData(slug);

    if (!seoData) {
      return NextResponse.json({ error: "SEO data not found" }, { status: 404 });
    }

    return NextResponse.json(seoData);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
