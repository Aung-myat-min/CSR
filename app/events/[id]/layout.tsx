"use client";
import ThemeSwitch from "@/app/themes/ThemeSwitch";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function EventLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  return (
    <div className="relative w-screen h-screen bg-background z-[999]  text-content dark:bg-content dark:text-background">
      <nav className="fixed w-full top-0 left-0">
        <div className="flex justify-between items-center w-11/12 lg:h-20 md:h-16 h-14 bg-white  rounded-xl m-auto mt-3 relative">
          <div className="flex items-center lg:ms-5 md:ms-3 font-semibold px-3 py-1 rounded duration-500 md:static cursor-pointer">
            <FaChevronLeft onClick={() => router.back()} />
          </div>
          <div className="flex items-center lg:me-5 md:me-3 font-semibold px-3 py-1 rounded duration-500 md:static cursor-pointer">
            <ThemeSwitch />
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
