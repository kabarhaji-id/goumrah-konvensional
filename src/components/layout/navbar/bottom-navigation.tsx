"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

import HomeIcon from "@/public/icons/home.svg";
import CustomerServiceIcon from "@/public/icons/customer-service.svg";
import KaabaIcon from "@/public/icons/kaaba.svg";
import FaqIcon from "@/public/icons/faq-filled.svg";
import AboutIcon from "@/public/icons/about-us.svg";

// Lazy-load TanyaIsma to avoid blocking navigation
const TanyaIsma = dynamic(() => import("@/section/tanya-isma"), { ssr: false });

const BottomNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-50 bg-white flex items-center justify-center gap-2 rounded-t-2xl py-4 border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-5 pt-5 mx-auto font-medium">
        <NavButton href="/" icon={<HomeIcon className="size-7" />} active={pathname === "/"} label="Beranda" />
        <NavButton href="/umrah" icon={<KaabaIcon className="size-7" />} active={pathname === "/umrah"} label="Paket Umrah" />
        <div className={`invisible group inline-flex px-5 flex flex-col items-center gap-1 text-primary/50`}>
          <CustomerServiceIcon className="size-7" />
          <p className={`whitespace-nowrap text-xs font-light tracking-normal invisible`}>
            Tanya Isma
          </p>
        </div>
        <NavButton href="/faq" icon={<FaqIcon className="size-7" />} active={pathname === "/faq"} label="Goumrah Care" />
        <NavButton href="/about-us" icon={<AboutIcon className="size-7" />} active={pathname === "/about-us"} label="Tentang Kami" />

        {/* Lazy-loaded TanyaIsma to optimize page speed */}
        <TanyaIsma />
      </div>
    </nav>
  );
};

// Reusable navigation button component
interface NavButtonProps {
  href: string;
  icon: React.ReactNode;
  active: boolean;
  label: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, icon, active, label }) => (
  <Link href={href} prefetch={true} className={`group inline-flex px-5 flex flex-col items-center gap-1 text-primary/50 ${active ? "text-primary" : ""}`} aria-current={active ? "page" : undefined}>
    {icon}
    <p className={`whitespace-nowrap text-xs font-light tracking-normal ${active ? "font-bold text-[#1b8386]" : "invisible"}`}>
      {label}
    </p>
  </Link>
);

export default BottomNavigation;
