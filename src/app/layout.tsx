import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "goumrah.id",
  description: "Rumah ke Makkah Hanya Satu Langkah",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-gray-50">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s) {
                  if(f.fbq) return;
                  n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq) f._fbq=n;
                  n.push=n;
                  n.loaded=!0;
                  n.version='2.0';
                  n.queue=[];
                  t=b.createElement(e);
                  t.async=!0;
                  t.src=v;
                  s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s);
                }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                
                fbq('init', '${process.env.NEXT_PUBLIC_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
          }}
        />
      </head>

      <body className={`${plusJakartaSans.className} antialiased`}>
        <div className="mx-auto max-w-screen-sm bg-white shadow-custom-sm">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
