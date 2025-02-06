"use client";
import React from "react";
import TopSection from "./top-section";
import FAQBanner from "./faq-banner";
import FAQSection from "./faq-section";

const FAQContent = () => {
  return (
    <div className="min-h-[100vh]">
      <TopSection />
      <FAQBanner />
      <FAQSection/>
    </div>
  );
};

export default FAQContent;