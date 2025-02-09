"use client";
import { useEffect } from "react";
import Script from "next/script";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID || "";

export default function FacebookPixel({ nonce }: { nonce: string }) {
  useEffect(() => {
    if (typeof window !== "undefined" && FB_PIXEL_ID) {
      if (!window.fbq) {
        window.fbq = function (...args: unknown[]) {
          (window.fbq as any).queue.push(args);
        } as any;
        window.fbq.push = window.fbq;
        window.fbq.loaded = true;
        window.fbq.version = "2.0";
        window.fbq.queue = [];
      }

      // ✅ Cek apakah Pixel sudah diinisialisasi
      if (!window.fbq.initialized) {
        window.fbq("init", FB_PIXEL_ID);
        window.fbq("track", "PageView");
        window.fbq.initialized = true; // ✅ Tambahkan flag agar tidak duplikat
        console.log("✅ Facebook Pixel Initialized");
      }
    }
  }, []);

  return (
    <Script
      strategy="afterInteractive"
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: `
          if (!window.fbq) {
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
            fbq.initialized = true;
            console.log("✅ Facebook Pixel Loaded");
          }
        `,
      }}
    />
  );
}