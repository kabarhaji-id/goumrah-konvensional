import type {Metadata} from "next";
import {Plus_Jakarta_Sans} from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "goumrah.id",
  description: "Platform Umrah No.1 Seindonesia",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.className} antialiased`}>
      <div className="mx-auto max-w-screen-sm">
        <main>{children}</main>
      </div>
      </body>
    </html>
  );
}
