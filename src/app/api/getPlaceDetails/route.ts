import { NextResponse } from "next/server";
import { Client } from "@googlemaps/google-maps-services-js";

const googleMapsClient = new Client({});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const placeId = searchParams.get("placeId");

    if (!placeId) {
      return NextResponse.json({ error: "Missing placeId parameter" }, { status: 400 });
    }

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing Google Maps API Key" }, { status: 500 });
    }

    // Call Google Maps API using google-maps-services-js
    const response = await googleMapsClient.placeDetails({
      params: {
        place_id: placeId,
        key: apiKey,
        fields: ["name", "formatted_address", "geometry"],
      },
    });

    if (response.data.status !== "OK") {
      return NextResponse.json({ error: `Google API error: ${response.data.status}` }, { status: 500 });
    }

    return NextResponse.json(response.data.result);
  } catch (error: any) {
    console.error("Error fetching place details:", error.message);
    return NextResponse.json({ error: "Failed to fetch place details" }, { status: 500 });
  }
}
