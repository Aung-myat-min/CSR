"use client";

import Carousal from "@/components/Carousal";
import ThemeSwitch from "./themes/ThemeSwitch";
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image";

export default function App() {
  return (
    <div className="">
      <nav className="fixed w-full top-0 left-0">
        <div className="flex justify-between items-center w-11/12 lg:h-20 md:h-16 h-14 bg-white  rounded-xl m-auto mt-3 relative">
          <div className="flex items-center lg:ms-5 md:ms-3 font-semibold px-3 py-1 rounded duration-500 md:static cursor-pointer">
            <FaChevronLeft />
          </div>

          <div className="flex items-center lg:me-5 md:me-3 font-semibold px-3 py-1 rounded duration-500 md:static cursor-pointer">
            <ThemeSwitch />
          </div>
        </div>
      </nav>
      <div className="w-11/12 m-auto lg:mt-28 md:mt-24 xl:mt-30 mt-20 text-center">
        <p className="font-bold opacity-75 mb-2 text-sm ">1st December 2023</p>
        <h1 className="font-black text-4xl">
          CSR MOTHER <br />
          DAY DONATION
        </h1>
      </div>
      <div className="max-w-[600px] h-fit w-11/12 m-auto  flex items-center relative group my-10">
        <Image
          className="rounded-2xl"
          src="https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg"
          alt="Loading Light/Dark Toggle"
          priority={false}
          title="Loading Light/Dark Toggle"
          width={1920}
          height={1080}
        />
      </div>
      <div className="w-11/12 m-auto">
        <h2 className="font-bold text-2xl mb-2">Introduction</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          deserunt! A sed impedit quasi ad fuga saepe? Esse repudiandae aperiam
          odit voluptatem aspernatur, natus, corporis cupiditate, labore unde
          vitae porro.
        </p>
      </div>
      <div className="w-11/12 m-auto">
        <h2 className="font-bold text-2xl mb-2">More Photo</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-5">
          <div className="max-w-[600px] h-fit ">
            <Image
              className="rounded-2xl"
              src="https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg"
              alt="Loading Light/Dark Toggle"
              priority={false}
              title="Loading Light/Dark Toggle"
              width={1920}
              height={1080}
            />
          </div>
          <div className="max-w-[600px] h-fit ">
            <Image
              className="rounded-2xl"
              src="https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg"
              alt="Loading Light/Dark Toggle"
              priority={false}
              title="Loading Light/Dark Toggle"
              width={1920}
              height={1080}
            />
          </div>
          <div className="max-w-[600px] h-fit ">
            <Image
              className="rounded-2xl"
              src="https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg"
              alt="Loading Light/Dark Toggle"
              priority={false}
              title="Loading Light/Dark Toggle"
              width={1920}
              height={1080}
            />
          </div>
          <div className="max-w-[600px] h-fit ">
            <Image
              className="rounded-2xl"
              src="https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg"
              alt="Loading Light/Dark Toggle"
              priority={false}
              title="Loading Light/Dark Toggle"
              width={1920}
              height={1080}
            />
          </div>
          <div className="max-w-[600px] h-fit ">
            <Image
              className="rounded-2xl"
              src="https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg"
              alt="Loading Light/Dark Toggle"
              priority={false}
              title="Loading Light/Dark Toggle"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
