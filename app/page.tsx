"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import NavigationBar from "@/components/Nav";
import Carousal from "@/components/Carousal";
export default function App() {
  return (
    <div>
      <NavigationBar />
      <Carousal />
    </div>
  );
}
