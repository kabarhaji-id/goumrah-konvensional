import React from "react";
import Image from "next/image";

import MenuCIcon from "@/assets/icons/lucide-menu.svg";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="absolute w-full">
      <nav className="flex h-14 items-center justify-between px-6">
        <Image
          alt="goumrah.id logo"
          src="/assets/image/logo-main.svg"
          width={150}
          height={32}
          placeholder="blur"
          blurDataURL="/assets/image/logo-main.svg"
        />

        <Button
          size="icon"
          className="flex h-11 w-11 items-center justify-center overflow-visible"
          variant="ghost"
        >
          <MenuCIcon className="!size-6" />
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
