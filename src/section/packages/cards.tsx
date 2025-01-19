import { PackageCard } from "@/components/ui/package-card";
import { UmrahPackage } from "@/types/package-details";

const CardsSection = ({ packages }: { packages: UmrahPackage[] }) => {
  return (
    <section className="mx-auto my-4 flex max-w-[361px] flex-col gap-4">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} data={pkg} className="shadow-xl" />
      ))}
    </section>
  );
};

export default CardsSection;
