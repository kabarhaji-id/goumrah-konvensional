import { NextResponse } from "next/server";
import seoData from "@/data/seo/seo-data.json"; // Pastikan file ini ada

export async function GET() {
    try {

        if (!seoData || typeof seoData !== "object") {
            return NextResponse.json({ error: "Invalid SEO data" }, { status: 500 });
        }

        // Ambil semua slug dari JSON
        const slugs = Object.keys(seoData);

        return NextResponse.json(slugs, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
