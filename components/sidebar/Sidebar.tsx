"use client";
import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ReactSVG } from "react-svg";
import { Button } from "../ui/button";

const Menus = [
  { title: "Dashboard", src: "home", href: "/" },
  { title: "Menu", src: "book", href: "/menu" },
  { title: "History", src: "history", href: "/history" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const pathName = usePathname();

  const handleLogout = () => {
    deleteCookie("jwtToken");
    router.push("/login");
  };

  return (
    <div
      className={` ${
        open ? "w-60" : "w-20 "
      } bg-white h-screen p-5 shadow pt-8 relative top-0 overflow-hidden duration-300`}
    >
      <div className="flex gap-x-4 items-center">
        <h1
          onClick={() => setOpen(!open)}
          className="px-4 py-2 bg-primary text-white font-bold rounded-md cursor-pointer hover:bg-orange-400 duration-300"
        >
          K
        </h1>
        <h1
          className={`text-zinc-800 origin-left font-semibold text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Coffee
        </h1>
      </div>
      <ul className="pt-6 flex flex-col gap-y-2">
        {Menus.map((Menu, index) => (
          <Link
            href={Menu.href}
            key={index}
            className={`flex p-2 cursor-pointer border-l-4 text-zinc-800 hover:bg-light-white text-base items-center gap-x-4 ${
              pathName === Menu.href ? "border-primary" : "border-white"
            } ${index === 0 && "bg-light-white"} `}
          >
            <ReactSVG src={`/assets/icons/${Menu.src}.svg`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </Link>
        ))}
        <Button
          variant={"ghost"}
          className="text-zinc-800 hover:bg-light-white text-base items-center gap-x-4 mt-20"
          onClick={() => handleLogout()}
        >
          <ReactSVG src={`/assets/icons/logout.svg`} />
          <span className={`${!open && "hidden"} duration-200`}>Logout</span>
        </Button>
      </ul>
    </div>
  );
};
export default Sidebar;
