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
      <body className={`${plusJakartaSans.className} antialiased`}>
        <div className="mx-auto max-w-screen-sm bg-white shadow-custom-sm">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
