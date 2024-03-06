"use client";
import { IMember } from "@/Schemas/MemberSchema";
import { useEffect, useState } from "react";

export default function Example() {
  const fetchMember = async () => {
    const res = await fetch("/about/members");
    const members = await res.json();
    return members;
  };

  const [members, setMembers] = useState<IMember[]>();

  useEffect(() => {
    fetchMember().then((members: IMember[]) => {
      setMembers(members);
    });
  }, []);

  return (
    <div className="bg-backgroud dark:bg-content flex-grow py-24 sm:py-32">
      <div className="m-auto w-11/12">
        <ul
          role="list"
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 m-auto"
        >
          {members &&
            members.map((member) => (
              <li key={member._id} className="m-auto my-4">
                <div className="flex items-center gap-x-2">
                  <img
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
