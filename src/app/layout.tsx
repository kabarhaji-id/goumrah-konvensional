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
  const nonce = process.env.NEXT_PUBLIC_CSP_NONCE || "";

  return (
    <html lang="id">
    <head>
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

/*return (
  <html lang="en" className="scroll-smooth bg-gray-50">
  <head>
    {/!* Google tag Code *!/}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    ></script>
    <meta http-equiv="Content-Security-Policy"
          content="default-src 'self' data: gap: ws: ;
  style-src 'self' https: *.googleapis.com;
  script-src 'self' https: *.googleapis.com;
  media-src 'none';
  font-src *;
  connect-src *;
  img-src 'self' data: content: https: *.googleapis.com;" />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `
      }}
    />
    {/!* Meta Pixel Code *!/}
    <script
      dangerouslySetInnerHTML={{
        __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_PIXEL_ID}');
          fbq('track', 'PageView');`
      }}
    />
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_PIXEL_ID}&ev=PageView&noscript=1" />`
      }}
    />
  </head>

  <body className={`${plusJakartaSans.className} antialiased`}>
  {/!* Include Analytics Tracking as a Client Component *!/}
  <AnalyticsTracker />
  <div className="mx-auto max-w-screen-sm bg-white shadow-custom-sm">
    <main>{children}</main>
  </div>
  </body>
  </html>
);*/
