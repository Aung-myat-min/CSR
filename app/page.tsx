import ThemeSwitch from "./themes/ThemeSwitch"; // Adjust the path based on your project structure
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/blue_csr_logo.png";

export default function Home() {
  return (
    <div className="flex justify-between items-center w-11/12 h-20  rounded-xl m-auto mt-5 bg-primary dark:bg-secondary">
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
      <div className="flex items-center">
        <Link href="home" className="mx-5">
          Home
        </Link>
        <Link href="events" className="mx-5">
          Events
        </Link>
        <Link href="about" className="mx-5">
          About
        </Link>
        <Link href="contact" className="mx-5">
          Contact
        </Link>
      </div>
      <div className="flex items-center me-5">
        <ThemeSwitch />
      </div>
    </div>
  );
}
