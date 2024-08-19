"use client";
import ThemeSwitch from "../app/themes/ThemeSwitch";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "@/public/images/blue_csr_logo.png";
import blackLogo from "@/public/images/white_csr_logo.png";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function NavigationBar() {
  const currentRoute = usePathname();

  let Links = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/events" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (theme !== undefined) {
      setIsLoading(false);
    }
  }, [theme]);

  if (isLoading) {
    return <div></div>; // Or any loading indicator
  }

  const logo = resolvedTheme === "light" ? whiteLogo : blackLogo;
  return (
    <nav className="fixed w-full top-0 left-0 z-[2]">
      <div className="flex justify-between items-center w-11/12 lg:h-20 md:h-16 h-14  rounded-xl m-auto mt-3 bg-primary dark:bg-secondary relative shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]">
        <Image
          className="lg:ms-5 md:ms-3 my-2 lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 cursor-pointer"
          src={logo}
          alt="Loading Light/Dark Toggle"
          priority={true}
          title="Loading Light/Dark Toggle"
          loading="eager"
        />

        <ul
          className={`md:flex md:items-center md:pb-0  absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 bg-primary dark:bg-secondary rounded-xl"
              : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                href={link.link}
                className={`${
                  currentRoute === link.link
                    ? "opacity-100"
                    : "opacity-50 hover:opacity-100 duration-500"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex">
          <div
            onClick={() => setOpen(!open)}
            className="items-center flex cursor-pointer md:hidden"
          >
            {open ? <RxCross2 /> : <RiMenu4Line />}
          </div>

          <div className="flex items-center lg:me-5 md:me-3 md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static cursor-pointer">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
