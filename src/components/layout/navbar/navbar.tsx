"use client";

import Link from "next/link";
import GoUmrahLogo from "/public/assets/image/logo-white.svg";

interface NavbarProps {
  hrefLink?: string;
  routerBack?: boolean;
}

const NavbarSecondary = ({ hrefLink }: NavbarProps) => {
  return (
    <nav className="fixed z-50 flex h-fit w-full max-w-screen-sm items-center bg-primary px-4 py-3 text-white">
      {hrefLink && (
        <Link href={hrefLink}>
          <GoUmrahLogo className="w-fit flex-shrink-0" />
        </Link>
      )}
    </nav>
  );
};

export default NavbarSecondary;
