import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;
  const accessToken = process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    return NextResponse.json({ error: "Missing Facebook Pixel ID or Access Token" }, { status: 500 });
  }

  // Attempt to get client IP address from headers (e.g., x-forwarded-for)
  const clientIp = (req.headers.get("x-forwarded-for") || "").split(",")[0] || "Unknown IP";

  const eventData = {
    data: [
      {
        event_name: "PageView",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: req.headers.get("referer") || "https://goumrah.id",
        user_data: {
          client_ip_address: clientIp,
          client_user_agent: req.headers.get("user-agent"),
        },
      },
    ],
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v12.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      }
    );

    const result = await response.json();
    return NextResponse.json(result, { status: response.ok ? 200 : 400 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
