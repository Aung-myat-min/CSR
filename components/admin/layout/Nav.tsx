"use client";
import { Link } from "next-view-transitions";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCalendarDays, FaPeopleGroup } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function AdminNav() {
  const pathname = usePathname();
  const links = [
    {
      link: "/",
      name: "Dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      link: "/events",
      name: "Events",
      icon: <FaCalendarDays />,
    },
    {
      link: "/members",
      name: "Members",
      icon: <FaPeopleGroup />,
    },
  ];

  return (
    <nav className="absolute top-0 left-0 bottom-0 h-screen w-[20vw] max-w-[390px] bg-main bg-opacity-85 text-white flex items-center flex-col p-6">
      <div className="flex flex-col gap-8 text-center mt-10">
        <h1 className="text-2xl font-bold">GUSTO CSR Program</h1>
        <h2 className="text-xl">Admin Dashboard</h2>
      </div>
      <div className="flex flex-col gap-2 mt-20 w-full">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className={`flex flex-row gap-3 items-center text-lg p-3 rounded-lg bg-slate-600  ${
              pathname === link.link ? "text-blue-400" : "text-white"
            } hover:bg-slate-400`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
      <div className="mt-auto flex flex-row gap-2 justify-evenly items-center w-full">
        <CgProfile />
        <p>Admin Name</p>
        <TbLogout2 />
      </div>
    </nav>
  );
}
