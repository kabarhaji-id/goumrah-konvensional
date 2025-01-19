import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { UmrahPackage } from "@/types/package-details";
import { FilterSection } from "./pricing-filter";
import { Section, SectionContent } from "@/components/layout/section";
import { capitalize, getAmountOfDiscount, priceToLocale } from "@/lib/utils";

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
        <div className="border-subtle mx-4 space-y-2 rounded-[14px] border bg-white px-3 py-4 text-primary-foreground shadow-custom-sm transition-all">
          {pricingList
            .filter((p) => p.price)
            .map((data, index) => {
              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold leading-6 tracking-[0.15px]">
                          {capitalize(data.title)}
                        </p>

                        {data.priceFinal &&
                          data.price !== Number(data.priceFinal) && (
                            <Badge variant="destructive" size="medium">
                              <span className="text-[11px]">
                                {getAmountOfDiscount(
                                  data.price!,
                                  Number(data.priceFinal),
                                )}
                              </span>
                            </Badge>
                          )}
                      </div>
                      <p className="text-xs leading-4 tracking-wide opacity-60">
                        {data.description} <br />
                        {data.note}
                      </p>
                    </div>
                    <div className="flex flex-shrink-0 flex-col">
                      {data.priceFinal &&
                      data.price !== Number(data.priceFinal) ? (
                        <>
                          <span className="text-end text-sm leading-5 tracking-wide line-through opacity-60">
                            {priceToLocale(data.price!)}
                          </span>

                          <span className="text-base font-bold leading-6 tracking-wide">
                            {priceToLocale(Number(data.priceFinal))}
                          </span>
                        </>
                      ) : (
                        <span className="text-base font-bold leading-6 tracking-wide">
                          {priceToLocale(data.price!)}
                        </span>
                      )}
                    </div>
                  </div>

                  {index !== pricingList.filter((p) => p.price).length - 1 && (
                    <Separator />
                  )}
                </div>
              );
            })}
        </div>
      </SectionContent>
    </Section>
  );
};

export default PricingSection;
