'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Image from "next/image";
import { useRouter } from 'next/navigation'; 
import dynamic from 'next/dynamic';
import { StatisticItem } from '@/data/popup/promo-stats';
import { ActionButton } from '@/data/popup/action-btn';

interface Statistic {
  label: string;
  value: string;
  unit: string;
}

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''; 
  const router = useRouter();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setIsVisible(true);
      localStorage.setItem('hasSeenPopup', 'true');
    }
  }, []);

  const handleClose = () => {
    console.log("Popup ditutup"); // Debugging log
    setIsVisible(false);
  };

  const statistics: Statistic[] = [
    { label: "DP mulai", value: "7", unit: "Juta" },
    { label: "Sudah Berangkat", value: "1000+", unit: "Jama'ah" },
    { label: "Sisa Kuota", value: "25", unit: "Jama'ah" }
  ];

  const handleOrderClick = () => {
    window.open(`${whatsappLink}${encodeURIComponent("Assalamualaikum, Saya tertarik untuk melakukan pemesanan paket Silver Umrah Hemat - Ibadah Fokus. Saya ingin bertanya lebih lanjut mengenai paket tersebut. Terima kasih atas bantuannya. Saya tunggu informasi lebih lanjut.")}`, '_blank');
  };

  const handleConsultClick = () => {
    window.open(`${whatsappLink}${encodeURIComponent("Assalamualaikum, Saya ingin berkonsultasi mengenai paket Umrah. Bisakah Anda memberikan informasi lebih lanjut? Terima kasih.")}`, '_blank');
  };

  const handlePackageDetailClick = async () => {
    if (typeof window !== "undefined") {
      router.push("/umrah/umrah-hemat-ibadah-fokus-silver");
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-40 flex items-center justify-center bg-black-400 bg-opacity-50"
      onClick={handleClose} // Klik di luar popup akan menutupnya
      role="dialog" 
      aria-modal="true"
    >
      <div 
        className="relative flex flex-col justify-center items-center text-white bg-shadow-lg aspect-square w-[20%] rounded-[10px]"
        onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam popup menutupnya
      >
        <button
          className="absolute top-2 right-2 z-50 text-black hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={handleClose}
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>
        <Image
          src="/assets/image/image_popup.png"
          alt="Umroh package promotional image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="flex relative flex-col justify-center max-w-full w-[312px] p-4 rounded-lg"
             onClick={handlePackageDetailClick}
             tabIndex={0}
        >
          <h3 className="text-3xl font-bold leading-8 text-center">
            Paket Umroh Paling Hemat mulai Rp 22 Jutaan
          </h3>
          <div className="flex gap-4 justify-center items-center mt-5 w-full tracking-normal">
            {statistics.map((stat, index) => (
              <StatisticItem
                key={index}
                label={stat.label}
                value={stat.value}
                unit={stat.unit}
              />
            ))}
          </div>
          <p className="mt-5 text-xl font-bold leading-none text-center">
            Keberangkatan Juli 2025
          </p>
          <div className="flex flex-col gap-2 mt-5 w-full text-sm font-semibold tracking-normal leading-none text-center">
            <ActionButton
              text="Pesan Paket Umroh ini"
              primary={true}
              onClick={(e) => {
                e.stopPropagation();
                handleOrderClick();
              }}
            />
            <ActionButton
              text="Konsultasi dengan Kami"
              primary={false}
              onClick={(e) => {
                e.stopPropagation();
                handleConsultClick();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(PromoPopup), { ssr: false });
