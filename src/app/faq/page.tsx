
import TopSection from "@/section/faq/top-section";
import  BottomNavigation from "@/components/layout/navbar/bottom-navigation";
import  FAQSection from "@/section/faq/faq-section";
import  FAQBanner from "@/section/faq/faq-banner";
import { FAQSearchProvider } from "@/context/search-context";

export default async function FaqPage() {
  return (
    <FAQSearchProvider> {/* Wrap everything inside the provider */}
      <TopSection />
      <FAQBanner />
      <FAQSection/>
      <BottomNavigation/>
    </FAQSearchProvider>

  );
}
