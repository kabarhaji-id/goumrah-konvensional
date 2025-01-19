import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const PackagesNavbar = ({ title }: { title: string }) => {
  return (
    <nav className="sticky top-0 z-50 flex h-12 items-center justify-between bg-primary px-4">
      <Link href="/">
        <ChevronLeft className="size-5 text-white" />
      </Link>
      <h1 className="text-base font-bold tracking-wide text-white">{title}</h1>
      <span className="size-5" />
    </nav>
  );
};

export default PackagesNavbar;
