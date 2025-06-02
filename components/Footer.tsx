"use client";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import whiteLogo from "@/public/images/blue_csr_logo.png";
import blackLogo from "@/public/images/white_csr_logo.png";

export default function Footer() {
  const { resolvedTheme, theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (theme !== undefined) {
      setIsLoading(false);
    }
  }, [theme]);

  if (isLoading) return null;

  const logo = resolvedTheme === "light" ? whiteLogo : blackLogo;

  return (
    <footer className="bg-primary dark:bg-secondary w-11/12 mx-auto mt-24 mb-5 rounded-xl shadow p-6 md:p-10 text-gray-800 dark:text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and tagline */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src={logo}
              alt="CSR Logo"
              className="w-10 h-10 mr-3"
              priority
            />
            <h1 className="font-bold text-xl">GUSTO CSR Program</h1>
          </div>
          <p className="text-sm opacity-80">Helps Others For Better Unity</p>
        </div>

        {/* Links */}
        <nav
          className="grid grid-cols-2 gap-6 text-sm"
          aria-label="Footer Navigation"
        >
          <div>
            <h2 className="font-semibold mb-2">Donation</h2>
            <ul className="space-y-1 opacity-80">
              <li>
                <a href="#" className="hover:underline">
                  Previous Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Upcoming Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">Help</h2>
            <ul className="space-y-1 opacity-80">
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Social & Contact */}
        <div className="space-y-4">
          <h2 className="font-semibold text-sm">Connect with Us</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100090924746210&mibextid=ZbWKwL"
              className="flex items-center gap-2 px-4 py-2 border border-black dark:border-white rounded-full text-sm transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              aria-label="Facebook Page"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 border border-black dark:border-white rounded-full text-sm transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              aria-label="Contact Page"
            >
              Contact
              <span className="p-1.5 bg-main text-white rounded-full">
                <FiArrowUpRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-300 dark:border-gray-600" />

      {/* Footer Credits */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-center md:text-left gap-2 text-gray-600 dark:text-gray-400">
        <span>
          © 2024{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100090924746210"
            className="hover:underline"
          >
            GUSTO CSR Program
          </a>
        </span>
        <span>
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
