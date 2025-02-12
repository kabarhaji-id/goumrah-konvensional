import { NextResponse } from "next/server";
import seoData from "@/data/seo/seo-data.json"; // Import data SEO

export async function GET() {
    try {
        // Ambil semua slug dari object seoData
        const slugs = Object.keys(seoData);

        return NextResponse.json(slugs, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
