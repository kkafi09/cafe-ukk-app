import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    />
  );
};

export default Nav;
