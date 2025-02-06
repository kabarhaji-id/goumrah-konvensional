"use client"
import React from 'react';
import SubscriptionForm from './component/subcription-form';
import Image from 'next/image';
import GoumrahLogo from "@/public/image/logo-main.svg"

const NewsletterSubscription: React.FC = () => {
  return (
    <div className="flex relative flex-col items-center px-4 pt-4 pb-80 max-w-[430px]">
      <Image
        loading="lazy"
        src="/assets/image/isma-subcribes.png"
        alt="Newsletter subscription illustration"
        width={179}
        height={213}
        className="object-contain z-0 self-center max-w-full aspect- w-[179px]"
      />
      <div className="flex absolute left-2/4 z-0 flex-col items-center p-4 max-w-full bg-white rounded-2xl shadow-sm -translate-x-2/4 bottom-[49px] translate-y-[0%] w-[300px]">
        <div className="flex self-center py-2 min-h-[39px]" />
        <GoumrahLogo />
        <h2 className="mt-5 text-lg font-extrabold leading-6 text-center text-emerald-950">
          Subscribe Newsletter untuk Promo goumrah.id
        </h2>
        <SubscriptionForm />
      </div>
    </div>
  );
};

export default NewsletterSubscription;