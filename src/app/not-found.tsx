import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Halaman Tidak Ditemukan",
    description: "Halaman yang Anda cari tidak ditemukan.",
    keywords: `Umroh 2025, Paket Umroh, Travel Umroh, Biaya Umroh 2025, Umroh murah, Umroh Ramadhan 2025, Travel umroh terpercaya, Tips perjalanan umroh, Umroh mandiri, Paket Umroh VIP`,
    openGraph: {
      title: `Halaman Tidak Ditemukan`,
      url: `https://goumrah.id`,
      siteName: "goumrah.id",
      locale: "id_ID",
      type: "website",
    },
  };
};

export default async function NotFound() {
  return (
    <main className="h-[100vh] justify-center">
      <div className="flex w-full max-w-screen-sm justify-center py-3">
        <Image
          alt="goumrah.id logo"
          src="/assets/image/logo-main.svg"
          width={150}
          height={32}
          placeholder="blur"
          blurDataURL="/assets/image/logo-main.svg"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-4 pt-[15%]">
        <Image
          alt="goumrah.id logo"
          src="/assets/isma/isma-not-found.png"
          width={320}
          height={320}
          placeholder="blur"
          blurDataURL="/assets/isma/isma-not-found.png"
          priority
        />

        <div className="flex w-full max-w-[351px] flex-col items-center gap-2">
          <h1 className="w-fit text-[64px] font-extrabold leading-[130%] text-primary">
            404
          </h1>
          <p className="text-center text-lg leading-[140%] tracking-[0.5px] text-primary-foreground/75">
            Halaman yang anda cari tidak ditemukan
          </p>
        </div>

        <Button className="mx-auto h-11 w-fit px-5 py-1 shadow-custom-lg">
          <Link href="/">
            <p className="text-base font-semibold leading-[150%]">
              Kembali ke beranda
            </p>
          </Link>
        </Button>
      </div>
    </main>
  );
}
