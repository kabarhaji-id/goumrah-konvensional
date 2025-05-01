import Image from "next/image";
import React from "react";
import LogoDark from "@/public/image/logo-main.svg";

const HeroSection = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-4 pb-3">
      {/* <section className="flex h-fit w-full max-w-screen-sm flex-col bg-hero bg-cover bg-bottom"> */}
      <div className="relative">
        <Image
          alt="Background Logo"
          src="/assets/image/hero-bg.png"
          title="Background"
          width={150}
          height={32}
          loading="eager"
          className="absolute top-0 z-0 w-full object-cover"
        />
      </div>

      <header className="mt-7 flex h-fit w-full items-center justify-center py-3">
        <LogoDark />
      </header>

      <div className="z-10 flex flex-col items-center gap-2 text-primary-foreground">
        <div className="max-w-2xl bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 text-center mb-6">
            PHK Karyawan tidak Sesuai Dengan UU Ketenagakerjaan dan tanpa pesangon
          </h1>

          <div className="text-gray-800 space-y-4 text-justify">
            <p>
              Pemutusan hubungan kerja (PHK) secara sepihak tanpa prosedur yang benar dan tanpa memberikan pesangon merupakan pelanggaran terhadap ketentuan hukum ketenagakerjaan di Indonesia.
            </p>

            <p><strong>Dasar hukum:</strong></p>
            <ul className="list-disc list-inside">
              <li><strong>Undang-Undang Nomor 13 Tahun 2003 tentang Ketenagakerjaan</strong></li>
              <li><strong>Undang-Undang Nomor 11 Tahun 2020 tentang Cipta Kerja</strong></li>
              <li><strong>Peraturan Pemerintah Nomor 35 Tahun 2021</strong></li>
            </ul>

            <p><strong>Pasal-pasal terkait:</strong></p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-sm">
              <p><strong>Pasal 151 ayat (1) UU No. 13 Tahun 2003:</strong></p>
              <p>“Pengusaha, pekerja/buruh dan pemerintah harus mengupayakan agar jangan terjadi pemutusan hubungan kerja.”</p>
            </blockquote>

            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-sm">
              <p><strong>Pasal 156 ayat (1) UU No. 13 Tahun 2003:</strong></p>
              <p>“Dalam hal terjadi pemutusan hubungan kerja, pengusaha wajib membayar uang pesangon, uang penghargaan masa kerja, dan uang penggantian hak yang seharusnya diterima.”</p>
            </blockquote>

            <p>
              Jika Anda mengalami PHK yang tidak sah, Anda dapat melaporkannya ke <strong>Dinas Ketenagakerjaan</strong> setempat atau membawa kasus ini ke <strong>Pengadilan Hubungan Industrial (PHI)</strong>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
