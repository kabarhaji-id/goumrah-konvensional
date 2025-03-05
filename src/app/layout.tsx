import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { FacebookPixelEvents } from "@/components/analytic/pixel-events";
import { Suspense } from "react";
import { Analytics } from "@/components/analytic/google-analytic";
import { ScrollTracker } from "@/components/tracker/scroll-event";

import "./globals.css";
import HotjarTracker from "@/components/analytic/hotjar-analytic";

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


    return (
        <html lang="id">
        <body className={`${plusJakartaSans.className} antialiased`}>
        <div className="mx-auto max-w-screen-sm bg-white shadow-custom-sm">
            <main>
                <Suspense fallback={null}>
                    <HotjarTracker />
                    <Analytics />
                    <FacebookPixelEvents />
                </Suspense>
                <ScrollTracker />
                {children}
            </main>
        </div>
        </body>
        </html>
    );
}
