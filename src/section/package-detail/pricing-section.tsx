import PricingCard from "./section-component/pricing-card";

import { UmrahPackage } from "@/types/package-details";
import { FilterSection } from "./section-component/pricing-filter";
import { Section, SectionContent } from "@/components/layout/section";

const PricingSection = ({ packageData }: { packageData: UmrahPackage }) => {
  const pricingList = [
    {
      title: "quad",
      price: packageData.quadPrice,
      priceFinal: packageData.quadFinalPrice,
      description: "Sekamar berempat",
      note: "",
    },
    {
      title: "triple",
      price: packageData.triplePrice,
      priceFinal: packageData.tripleFinalPrice,
      description: "Sekamar bertiga",
      note: "",
    },
    {
      title: "double",
      price: packageData.doublePrice,
      priceFinal: packageData.doubleFinalPrice,
      description: "Sekamar berdua",
      note: "",
    },
    {
      title: "infant",
      price: packageData.infantPrice,
      priceFinal: packageData.infantFinalPrice,
      description: "Untuk bayi dibawah 1 tahun",
      note: "",
    },
  ];

  return (
    <Section className="py-0">
      <SectionContent className="space-y-3 pb-2">
        {/* --- Filter for Departure Date */}
        <FilterSection
          variant="departureDate"
          departureDates={packageData.departureDate}
          embarkation={packageData.cityDeparture}
        />

        {/* --- Filter for Embarkation */}
        <FilterSection
          variant="departureCity"
          embarkation={packageData.cityDeparture}
          departureDates={packageData.departureDate}
        />

        {/* --- Pricing Section */}
        <PricingCard pricingList={pricingList} />
      </SectionContent>
    </Section>
  );
};

export default PricingSection;
