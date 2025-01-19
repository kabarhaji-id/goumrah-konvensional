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
      description: "Tipe kamar ini berisi 4 orang",
      note: "Minimal pembelian 1 pax",
    },
    {
      title: "triple",
      price: packageData.triplePrice,
      priceFinal: packageData.tripleFinalPrice,
      description: "Tipe kamar ini berisi 3 orang",
      note: "Minimal pembelian 3 pax",
    },
    {
      title: "double",
      price: packageData.doublePrice,
      priceFinal: packageData.doubleFinalPrice,
      description: "Tipe kamar ini berisi 2 orang",
      note: "Minimal pembelian 2 pax",
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
      <SectionContent className="space-y-3 pb-5">
        {/* --- Filter for Departure Date */}
        <FilterSection
          variant="departureDate"
          departureDates={packageData.departure_date}
          embarkation={packageData.city_departure}
        />

        {/* --- Filter for Embarkation */}
        <FilterSection
          variant="departureCity"
          embarkation={packageData.city_departure}
          departureDates={packageData.departure_date}
        />

        {/* --- Pricing Section */}
        <PricingCard pricingList={pricingList} />
      </SectionContent>
    </Section>
  );
};

export default PricingSection;
