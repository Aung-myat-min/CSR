"use client";
import ThemeSwitch from "../app/themes/ThemeSwitch"; // Adjust the path based on your project structure
import Image from "next/image";

import whiteLogo from "@/public/images/blue_csr_logo.png";
import blackLogo from "@/public/images/white_csr_logo.png";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function Footer() {
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
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-16">
      <div className="w-full max-w-screen-xl mx-auto p-4 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              className="lg:ms-5 md:ms-3  lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 cursor-pointer"
              src={logo}
              alt="Loading Light/Dark Toggle"
              priority={true}
              title="Loading Light/Dark Toggle"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GUSTO CSR Program
            </span>
          </a>
          <h2>Helps Other For Better Unity</h2>
        </div>

        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 my-4" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            GUSTO CSR Program
          </a>
          . By{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            DigitalSphere
          </a>
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Developer:{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Aung Myat Min
          </a>{" "}
          &{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Phyo Min Khant
          </a>
        </span>
      </div>
    </footer>
  );
}
