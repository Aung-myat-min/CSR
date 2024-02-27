"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import NavigationBar from "@/components/Nav";
import Carousal from "@/components/Carousal";
import Test from "@/public/images/slide.jpg";
import Image from "next/image";
export default function App() {
  return (
    <div className="w-11/12 m-auto">
      <div className="grid grid-cols-3 gap-10">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
          <div className="">
            <Image
              src={Test}
              alt="Loading Light/Dark Toggle"
              priority={false}
              title="Loading Light/Dark Toggle"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white">
              Beauty
            </h1>
            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              dolore adipisci placeat.
            </p>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
