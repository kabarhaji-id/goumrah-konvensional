"use client";
import React, { useState } from 'react';
import SubscriptionForm from './component/subcription-form';
import Image from "next/image";
import GoumrahLogo from "@/public/image/logo-main.svg";

const NewsletterSubscription: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false); // State to track subscription status

  // This function will be called once the subscription is successful
  const handleSubscriptionSuccess = () => {
    setIsSubscribed(true);
  };

  return (
    <section className="flex relative flex-col items-center px-4 pt-4 pb-80 mx-auto w-full">
      <Image
        src="/assets/image/isma-subcribes.png"
        alt="Newsletter subscription illustration"
        width={179}
        height={213}
        className="object-contain z-0 self-center"
        priority={true}
      />
      <div
        className={`flex absolute left-2/4 z-0 flex-col items-center p-4 max-w-full bg-white rounded-2xl shadow-sm -translate-x-2/4 ${
          isSubscribed ? "bottom-0" : "bottom-[49px]"
        } translate-y-[0%] w-[300px]`}
      >
        <div className="flex self-center py-2 min-h-[39px]" />
        <GoumrahLogo />
        <h2 className="mt-5 text-lg font-extrabold leading-6 text-center text-emerald-950">
          Subscribe Newsletter untuk Promo goumrah.id
        </h2>
        <SubscriptionForm onSuccess={handleSubscriptionSuccess} />
      </div>
    </section>
  );
};

export default NewsletterSubscription;
