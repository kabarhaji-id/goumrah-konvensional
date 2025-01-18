import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";

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
