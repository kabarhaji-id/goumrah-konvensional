import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;
  const accessToken = process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    return NextResponse.json(
        { error: "Missing Facebook Pixel ID or Access Token" },
        { status: 500 }
    );
  }

  try {
    // Parse request headers
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "Unknown IP";
    const userAgent = req.headers.get("user-agent") || "Unknown User Agent";
    const eventSourceUrl = req.headers.get("referer") || "https://goumrah.id";

    const eventData = {
      data: [
        {
          event_name: "PageView",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: eventSourceUrl,
          user_data: {
            client_ip_address: clientIp,
            client_user_agent: userAgent,
          },
        },
      ],
    };

    // Send data to Facebook Conversions API
    const fbResponse = await fetch(
        `https://graph.facebook.com/v22.0/${pixelId}/events?access_token=${accessToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eventData),
        }
    );

    const fbResult = await fbResponse.json();

    // Check for API success
    if (!fbResponse.ok) {
      return NextResponse.json(
          { error: "Facebook API error", details: fbResult },
          { status: fbResponse.status }
      );
    }

    return NextResponse.json(fbResult, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
