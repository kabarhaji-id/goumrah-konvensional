"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

import HomeIcon from "@/assets/icons/home.svg";
import CustomerServiceIcon from "@/assets/icons/customer-service.svg";
import KaabaIcon from "@/assets/icons/kaaba.svg";

const NavbarItem = ({
  icon: Icon,
  text,
  href,
}: {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  href: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = React.useCallback(() => {
    router.push(href);
  }, [router, href]);

  return (
    <button
      data-active={pathname === href ? "true" : "false"}
      className="group flex flex-col items-center gap-1 text-foreground/30 data-[active=true]:text-primary"
      onClick={handleClick}
    >
      <Icon className="size-7" />
      <p className="whitespace-nowrap text-xs font-light tracking-normal group-data-[active=true]:font-bold">
        {text}
      </p>
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="sticky bottom-0 flex items-start justify-center gap-20 rounded-t-2xl bg-white px-12 py-4">
      <NavbarItem icon={HomeIcon} text="Beranda" href="/" />
      <NavbarItem
        icon={CustomerServiceIcon}
        text="Tanya Isma"
        href="/tanya-isma"
      />
      <NavbarItem icon={KaabaIcon} text="Paket Umrah" href="/paket-umrah" />
    </nav>
  );
};

export default Navbar;
