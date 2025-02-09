import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import GoogleAnalytics from "@/components/analytic/google-analytics";
import TagManager from "@/components/analytic/tag-manager";
import FacebookPixel from "@/components/analytic/meta-pixel";

import "./globals.css";

export const metadata: Metadata = {
  title: "goumrah.id",
  description: "Rumah ke Makkah Hanya Satu Langkah",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const nonce = typeof window !== "undefined"
    ? document.querySelector('meta[name="X-Nonce"]')?.getAttribute('content') || ''
    : '';

  console.log("🔐 Client-side Nonce:", nonce); // Log the nonce on the client side

  return (
    <html lang="id">
    <head>
      <meta name="X-Nonce" content={nonce} />
      <GoogleAnalytics nonce={nonce} />
      <TagManager nonce={nonce} />
      <FacebookPixel nonce={nonce} />
    </head>
    <body className={`${plusJakartaSans.className} antialiased`}>
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
    <div className="mx-auto max-w-screen-sm bg-white shadow-custom-sm">
      <main>{children}</main>
    </div>
    </body>
    </html>
  );
}