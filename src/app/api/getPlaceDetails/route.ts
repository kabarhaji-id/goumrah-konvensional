import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const placeId = searchParams.get("placeId");

    if (!placeId) {
      return NextResponse.json({ error: "Missing placeId" }, { status: 400 });
    }

    const googleApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(googleApiUrl);

    if (!response.ok) {
      return NextResponse.json({ error: "Google API error" }, { status: response.status });
    }

    const data = await response.json();

    // ✅ Tambahkan validasi jika response tidak memiliki 'result'
    if (!data.result) {
      return NextResponse.json({ error: "Invalid placeId or API Key issues" }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
