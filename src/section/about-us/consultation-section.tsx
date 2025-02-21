"use client"
import React from 'react';
import { Button } from '@/components/ui/button';

export const ConsultationSection: React.FC = () => {
  const whatsappLink = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

  const handleConsultationClick = () => {
    window.open(`${whatsappLink}${encodeURIComponent("Assalamualaikum, Saya ingin berkonsultasi mengenai paket Umrah. Bisakah Anda memberikan informasi lebih lanjut? Terima kasih.")}`, '_blank');
  };




  return (
    <section
      className="flex flex-col justify-center self-stretch p-6 text-center text-teal-600 bg-teal-200 max-w-[430px]"
      aria-labelledby="umroh-consultation-title"
    >
      <h2
        id="umroh-consultation-title"
        className="text-2xl font-extrabold text-teal capitalize"
      >
        Punya Kebutuhan Umroh yang berbeda dari paket umroh kami?
      </h2>
      <p className="mt-4 text-base tracking-wide capitalize">
        Konsultasikan Kebutuhan Umroh kamu sekarang
      </p>
      <div className="mt-4 w-full">
        <Button className='w-full px-4 py-2 text-sm font-semibold tracking-normal leading-none text-white bg-teal-600 rounded-xl min-h-[36px]'
          onClick={handleConsultationClick}
        >Konsultasi Sekarang</Button>
      </div>
    </section>
  );
};