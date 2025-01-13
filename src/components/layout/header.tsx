import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute w-full">
      <div className="flex h-14 items-center justify-between px-6">
        <Image
          alt="goumrah.id logo"
          src="/assets/image/logo-main.svg"
          width={150}
          height={32}
          placeholder="blur"
          blurDataURL="/assets/image/logo-main.svg"
        />
      </div>
    </header>
  );
};

export default Header;
