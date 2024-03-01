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
    <footer className="bg-primary w-11/12 m-auto rounded-t-xl shadow dark:bg-secondary mt-8">
      <div className="w-full  mx-auto p-5 ">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <a href="https://flowbite.com/" className="flex items-center ">
            <Image
              className="lg:ms-5 md:ms-3  lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 cursor-pointer"
              src={logo}
              alt="Loading Light/Dark Toggle"
              priority={true}
              title="Loading Light/Dark Toggle"
            />
          </a>
          <h2 className="lg:me-5 md:me-3 ">Helps Other For Better Unity</h2>
        </div>

        <hr className=" border-secondary sm:mx-auto dark:border-primary my-5 " />
        <span className="block text-sm  sm:text-center pb-1">
          © 2024{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100090924746210&mibextid=ZbWKwL"
            className="hover:underline"
          >
            GUSTO CSR Program
          </a>
          . By{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            DigitalSphere
          </a>
        </span>
        <span className="block text-xs sm:text-center ">
          Developer:{" "}
          <a
            href="https://github.com/Aung-myat-min"
            className="hover:underline"
          >
            Aung Myat Min
          </a>{" "}
          &{" "}
          <a
            href="https://github.com/PhyoMinKhant-Xem"
            className="hover:underline"
          >
            Phyo Min Khant
          </a>
        </span>
      </div>
    </footer>
  );
}
