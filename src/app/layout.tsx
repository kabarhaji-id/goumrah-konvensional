import type {Metadata} from "next";
import {Plus_Jakarta_Sans} from "next/font/google";
import GoogleAnalytics from "@/components/analytic/google-analytics";
import TagManager from "@/components/analytic/tag-manager";
import FacebookPixel from "@/components/analytic/meta-pixel";

import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim() || "https://goumrah.id";

export const metadata: Metadata = {
    title: "GoUmrah.id - Rumah ke Makkah Hanya Satu Langkah",
    description: "Temukan paket umrah terbaik dengan harga terjangkau dan pelayanan terbaik di goumrah.id.",
    keywords: "paket umrah 2025, biaya umrah 2025, umrah murah, travel umrah terpercaya, promo umrah 2025",
    metadataBase: baseUrl ? new URL(baseUrl) : undefined, // ✅ Prevents error
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: baseUrl,
        siteName: "GoUmrah",
        images: [
            {
                url: `${baseUrl}/assets/image/thumbnail-image.jpg`,
                width: 1200,
                height: 630,
                alt: "GoUmrah - Paket Umrah Terbaik",
            },
        ],
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1", // Default robots meta
    publisher: "goumrah.id", // Default publisher
    authors: [{name: `GoUmrah Teams`}, {name: `GoUmrah Teams`, url: `${baseUrl}`}],

};

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({children}: { children: React.ReactNode }) {
    const nonce = typeof window !== "undefined"
        ? document.querySelector('meta[name="X-Nonce"]')?.getAttribute('content') || ''
        : '';

    return (
        <html lang="id">
        <head>
            <meta name="X-Nonce" content={nonce}/>
            <GoogleAnalytics nonce={nonce}/>
            <TagManager nonce={nonce}/>
            <FacebookPixel nonce={nonce}/>
        </head>
        <body className={`${plusJakartaSans.className} antialiased`}>
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
                height="0"
                width="0"
                style={{display: "none", visibility: "hidden"}}
            ></iframe>
        </noscript>
        <div className="mx-auto max-w-screen-sm bg-white shadow-custom-sm">
            <main>{children}</main>
        </div>
        </body>
        </html>
    );
}
