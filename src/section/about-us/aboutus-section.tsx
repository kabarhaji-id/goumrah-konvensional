import React from 'react';
import ReactMarkdown from 'react-markdown';
import { FeatureItem, FeatureItemProps } from "./component/featured-item";

interface AboutUsSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: FeatureItemProps[];
}

const aboutUsData: AboutUsSectionProps = {
  title: "Tentang Kami",
  subtitle: "Setiap langkah menuju Baitullah harus dimulai dengan ketenangan hati",
  description: "**Goumrah.Id** secara resmi terdaftar sebagai **Travel Umroh dan Haji resmi Kementerian Agama dengan nomor Izin : 27052200387740007**. Goumrah.id telah berpengalaman memberangkatkan ribuan Jamaah Umroh selama lebih dari 15 Tahun.",
  features: [
    {
      title: "Kemudahan Akses",
      description: "Menghubungkan jama'ah dengan berbagai pilihan perjalanan umroh yang sesuai kebutuhan dan kepercayaan mereka."
    },
    {
      title: "Keamanan & Transparansi",
      description: "Setiap paket umroh yang kami tawarkan sudah kami jamin 100% sesuai dengan apa yang tertulis di dalam paket kami, mulai dari Maskapai, Hotel, dan Fasilitas lainnya."
    },
    {
      title: "Bimbingan Sepanjang Perjalanan",
      description: "Membantu jama'ah dari persiapan hingga kepulangan, agar setiap ibadah dilakukan dengan tenang dan khusyuk."
    },
    {
      title: "Inovasi Berkelanjutan",
      description: "Mengembangkan teknologi yang membuat proses pendaftaran, pembayaran, dan informasi perjalanan lebih sederhana dan dapat digunakan oleh setiap jama'ah."
    }
  ]
};

export const AboutUsSection: React.FC = () => {
  const { title, subtitle, description, features } = aboutUsData;

  return (
    <section className="flex flex-col mx-auto w-full max-w-screen text-emerald-950 bg-white p-8 py-4" aria-labelledby="about-us-title">
      <h2 id="about-us-title" className="text-md font-light tracking-wide capitalize">
        {title}
      </h2>
      <p className="mt-2 text-2xl font-extrabold text-teal-600 capitalize">
        {subtitle}
      </p>
      <div className="self-stretch py-4 mt-2 w-full text-sm tracking-wide leading-6 text-justify">
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <FeatureItem {...feature} />
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm tracking-wide leading-6 text-justify">
        Kami percaya bahwa perjalanan suci ini harus bebas dari keraguan. Itulah yang kami perjuangkan.
      </p>
    </section>
  );
};