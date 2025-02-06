
import  BottomNavigation from "@/components/layout/navbar/bottom-navigation";
import { FAQSearchProvider } from "@/context/search-context";
import FAQContent from "@/section/faq/faq-content";

export default async function FaqPage() {
  return (
    <FAQSearchProvider> {/* Wrap everything inside the provider */}
      <FAQContent />
      <BottomNavigation />
    </FAQSearchProvider>

  );
}
