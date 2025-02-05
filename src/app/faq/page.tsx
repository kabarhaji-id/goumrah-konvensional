import TopSection from "@/section/faq/top-section";
import  BottomNavigation from "@/components/layout/navbar/bottom-navigation";
import  FAQSection from "@/section/faq/faq-section";
import PackagesNavbar from "@/components/layout/navbar/packages-navbar";

export default async function FaqPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen"> {/* Key: Flex container */}
        <PackagesNavbar title="Frequently Asked Questions (FAQ)" />
        <TopSection />

        <div className="flex-grow"> {/* Key: Allow content to fill available space */}
          <FAQSection />
        </div>

        <BottomNavigation className="sticky bottom-0 w-full" /> {/* Key: Sticky footer */}
      </div>
    </>
  );
}
