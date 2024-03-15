"use client";
import { IMember } from "@/Schemas/MemberSchema";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

export default function Example() {
  const fetchMember = async () => {
    const res = await fetch("/about/members", { cache: "no-store" });
    const members = await res.json();
    return members;
  };

  const [members, setMembers] = useState<IMember[]>();
  const [loading, setLoading] = useState<boolean>(true); // State for loading

  useEffect(() => {
    fetchMember().then((members: IMember[]) => {
      setMembers(members);
      setLoading(false); // Set loading to false when data is fetched
    });
  }, []);

  // Display loading state if data is being fetched
  if (loading) {
    return (
      <div className="w-11/12 m-auto flex-grow items-center justify-center">
        <SyncLoader color="#02598B" margin={5} size={20} />
      </div>
    );
  }

  // Display message if members data is empty
  if (!members || members.length === 0) {
    return (
      <div className="w-11/12 m-auto mt-24 flex-grow">
        <p className="font-bold text-2xl flex  justify-center h-96 items-center">
          No Events right now
        </p>
      </div>
    );
  }

  return (
    <div className="bg-backgroud dark:bg-content flex-grow py-24 sm:py-32">
      <div className="m-auto w-11/12">
        <ul
          role="list"
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 m-auto"
        >
          {members.map((member) => (
            <li key={member._id} className="m-auto my-4">
              <div className="flex items-center gap-x-2">
                <Image
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full"
                  src={member.Photo}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    {member.Name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-main">
                    {member.Role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
