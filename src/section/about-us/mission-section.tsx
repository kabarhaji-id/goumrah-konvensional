import * as React from "react";
import { MissionPoint } from "@/data/about/mission-poin";

const missionPoints = [
  {
    icon: "🔹",
    title: "Kemudahan Akses",
    description: "Menghubungkan jama'ah dengan berbagai pilihan perjalanan umroh yang sesuai kebutuhan dan kepercayaan mereka."
  },
  {
    icon: "🔹",
    title: "Keamanan & Transparansi",
    description: "Setiap paket umroh yang kami tawarkan sudah kami jamin 100% sesuai dengan apa yang tertulis di dalam paket kami, mulai dari Maskapai, Hotel, dan Fasilitas lainnya."
  },
  {
    icon: "🔹",
    title: "Bimbingan Sepanjang Perjalanan",
    description: "Membantu jama'ah dari persiapan hingga kepulangan, agar setiap ibadah dilakukan dengan tenang dan khusyuk."
  },
  {
    icon: "🔹",
    title: "Inovasi Berkelanjutan",
    description: "Mengembangkan teknologi yang membuat proses pendaftaran, pembayaran, dan informasi perjalanan lebih sederhana dan dapat digunakan oleh setiap jama’ah."
  }
];

export const MissionSection: React.FC = () => {
  return (
    <section aria-labelledby="mission-heading" className="flex flex-col mx-auto w-full max-w-screen text-emerald-950 bg-white p-8 py-4">
      <h1 id="mission-heading" className="text-md font-light tracking-wide capitalize">
        Misi Kami
      </h1>
      <h2 className="mt-2 text-2xl font-extrabold text-teal-600 capitalize">
        Setiap langkah menuju Baitullah harus dimulai dengan ketenangan hati
      </h2>
      <div className="self-stretch py-4 mt-2 w-full text-sm tracking-wide leading-6 text-justify">
        <p>
          Di Goumrah.id, kami hadir untuk menghadirkan pengalaman umroh yang lebih
          mudah, aman, dan transparan.
        </p>
        <br />
        {missionPoints.map((point, index) => (
          <MissionPoint key={index} {...point} />
        ))}
        <p>
          Kami percaya bahwa perjalanan suci ini harus bebas dari keraguan. Itulah
          yang kami perjuangkan.
        </p>
      </div>
    </section>
  );
};