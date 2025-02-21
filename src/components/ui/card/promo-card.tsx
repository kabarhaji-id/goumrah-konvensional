'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
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
    setIsVisible(true);
    /*if (hasSeenPopup) {
      setIsVisible(true);
      localStorage.setItem('hasSeenPopup', 'true');
    }*/
  }, []);

  const handleClose = () => {
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
      className="fixed inset-0 z-40 flex items-center justify-center bg-opacity-50 p-4"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative flex flex-col justify-center items-center text-white w-full max-w-[350px] rounded-lg overflow-hidden"
        style={{
          backgroundImage: "url('/assets/image/image_popup.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-7 right-2 z-50 text-white hover:text-gray-300"
          onClick={handleClose}
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-lg w-full"
             onClick={handlePackageDetailClick}
             tabIndex={0}>
          <div className="p-6">
            <h3 className="text-2xl font-bold">
              Paket Umroh Paling Hemat <br /> mulai Rp 22 Jutaan
            </h3>

            {/* Statistics */}
            <div className="flex gap-4 justify-center items-center mt-4 text-white">
              {statistics.map((stat, index) => (
                <StatisticItem
                  key={index}
                  label={stat.label}
                  value={stat.value}
                  unit={stat.unit}
                />
              ))}
            </div>

            <p className="mt-4 text-lg font-bold text-white">
              Keberangkatan Juli 2025
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-2 mt-5 w-full">
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
    </div>
  );
};

export default dynamic(() => Promise.resolve(PromoPopup), { ssr: false });
