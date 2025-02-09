"use client";
import { useEffect } from "react";
import Script from "next/script";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

export default function GoogleAnalytics({ nonce }: { nonce: string }) {
  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    window.dataLayer = window.dataLayer || [];

    function gtag(event: string, ...args: unknown[]) {
      if (!event) {
        return;
      }
      window.dataLayer.push({ event, args });
    }

    gtag("js", new Date());
    gtag("config", GA_TRACKING_ID, { send_page_view: false });
  }, []);

  return (
    <>
      {/* Script untuk memuat Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        nonce={nonce}
      />
      {/* Inisialisasi Google Analytics */}
      <Script
        strategy="afterInteractive"
        nonce={nonce}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', { send_page_view: false });
          `,
        }}
      />
    </>
  );
}
