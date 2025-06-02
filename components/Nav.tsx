"use client";
import ThemeSwitch from "../app/themes/ThemeSwitch"; // Adjust the path based on your project structure
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "@/public/images/blue_csr_logo.png";
import blackLogo from "@/public/images/white_csr_logo.png";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import LanguageToggle from "./homepage/Language";

export default function NavigationBar() {
  const currentRoute = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  let Links = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/events" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  useEffect(() => {
    if (theme !== undefined) {
      setIsLoading(false);
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  if (isLoading) {
    return <div></div>; // Or any loading indicator
  }

  const logo = resolvedTheme === "light" ? whiteLogo : blackLogo;

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-[2] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full lg:h-20 md:h-16 h-14 m-auto bg-primary dark:bg-secondary relative">
        <Image
          className="lg:ms-8 md:ms-5 ms-3 my-2 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 cursor-pointer"
          src={logo}
          alt="Loading Light/Dark Toggle"
          priority={true}
          title="Loading Light/Dark Toggle"
        />

        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
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

        <div className="flex items-center">
          <LanguageToggle />
          <div
            onClick={() => setOpen(!open)}
            className="items-center flex cursor-pointer md:hidden ms-3"
          >
            {open ? <RxCross2 /> : <RiMenu4Line />}
          </div>

          <div className="flex items-center lg:me-5 md:me-3 font-semibold px-3 py-1 rounded duration-500 md:static cursor-pointer">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
