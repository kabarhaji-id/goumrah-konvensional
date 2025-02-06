"use client"
import React, { useRef } from 'react';
import { ServicesSection } from "./services-section";

const BussinesSection = () => {
  return (
    <section
      className="flex flex-col mx-auto w-full max-w-[480px] text-emerald-950 bg-white shadow-lg p-8 py-4"
      aria-labelledby="business-title"
    >
      <h2
        id="business-title"
        className="text-xs font-light tracking-wide capitalize"
      >
        Bisnis Kami
      </h2>

      <h3
        className="mt-2 text-2xl font-bold text-lg text-teal-600 capitalize"
        aria-level={3}
      >
        Setiap perjalanan ibadah kamu memiliki cerita, dan kami ingin memastikan cerita kamu dimulai dengan langkah yang
        tenang, nyaman, dan penuh makna
      </h3>

      <div className="mx-auto my-4 flex flex-col gap-4 px-6"></div>

      <ServicesSection />
    </section>
  );
};

export { BussinesSection };