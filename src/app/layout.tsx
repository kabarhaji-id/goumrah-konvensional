import type {Metadata} from "next";
import {Plus_Jakarta_Sans} from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>

        {/* Qontak Webchat Script 
        <script
            dangerouslySetInnerHTML={{
                __html: `
              const qchatInit = document.createElement('script');
              qchatInit.src = "https://webchat.qontak.com/qchatInitialize.js";
              const qchatWidget = document.createElement('script');
              qchatWidget.src = "https://webchat.qontak.com/js/app.js";
              document.head.prepend(qchatInit);
              document.head.prepend(qchatWidget);
              qchatInit.onload = function() {
                qchatInitialize({
                  id: "ef1ce316-d184-4861-b495-10ba1b5acf52", 
				  code: "FOrxizC1qgkQwG7ht7SZnA"  
                });
              };
            `,
            }}
        />
        */}
        </body>
        </html>
    );
}
