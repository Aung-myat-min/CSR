"use client";
import ThemeSwitch from "./themes/ThemeSwitch"; // Adjust the path based on your project structure
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/blue_csr_logo.png";
import logo2 from "@/public/images/white_csr_logo.png";
import { useState } from "react";

export default function Home() {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/events" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full top-0 left-0">
      <div className="flex justify-between items-center w-11/12 h-20  rounded-xl m-auto mt-5 bg-primary dark:bg-secondary relative">
        <Image
          className="ms-5"
          src={logo}
          width={80}
          height={80}
          sizes="80x80"
          alt="Loading Light/Dark Toggle"
          priority={false}
          title="Loading Light/Dark Toggle"
        />
        <div
          onClick={() => setOpen(!open)}
          className="fixed right-8 top-6 cursor-pointer md:hidden w-20 h-20"
        >
          {open ? <Image src={logo2} alt="" /> : <Image src={logo} alt="" />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-gray-300" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold " key={index}>
              <Link
                href={link.link}
                className="hover:text-blue-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="flex items-center me-5 md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static cursor-pointer">
            <ThemeSwitch />
          </div>
        </ul>
      </div>
    </nav>
  );
}
