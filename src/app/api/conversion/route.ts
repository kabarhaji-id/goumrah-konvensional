import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" }); // ✅ Pastikan hanya menerima POST
  }

  const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;
  const accessToken = process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    return res.status(500).json({ error: "Missing Facebook Pixel ID or Access Token" });
  }

  const eventData = {
    data: [
      {
        event_name: "PageView",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: req.headers.referer || "https://goumrah.id",
        user_data: {
          client_ip_address: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
          client_user_agent: req.headers["user-agent"],
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
    return res.status(response.ok ? 200 : 400).json(result);
  } catch (error) {
    console.error("Facebook API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
