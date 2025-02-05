import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const PackagesNavbar = ({ title }: { title: string }) => {
  return (
    <nav
      className="sticky top-0 z-50 flex h-12 items-center justify-center bg-primary px-4"> {/* justify-center on the nav */}
      <h1 className="text-base font-bold tracking-wide text-white">{title}</h1>
    </nav>
  );
};

export default PackagesNavbar;
