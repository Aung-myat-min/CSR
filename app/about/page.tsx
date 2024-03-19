"use client";
import { IMember } from "@/Schemas/MemberSchema";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";

export default function MemberList() {
  const fetchMember = async () => {
    try {
      const res = await fetch("/api/members", { next: { revalidate: 3600 } });
      if (!res.ok) {
        throw new Error("Failed to fetch members");
      }
      const members = await res.json();
      return members;
    } catch (error) {
      console.error("Error fetching members:", error);
      return [];
    }
  };

  const [members, setMembers] = useState<IMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMember().then((members: IMember[]) => {
      setMembers(members);
      setLoading(false);
    });
  }, []);

  const loadMoreMembers = async () => {
    setLoading(true);
    const newMembers = await fetchMember();
    setMembers((prevMembers) => [...prevMembers, ...newMembers]);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="w-11/12 m-auto flex items-center justify-center">
        <SyncLoader color="#02598B" margin={5} size={20} />
      </div>
    );
  }

  if (!members || members.length === 0) {
    return (
      <div className="w-11/12 m-auto mt-24 flex-grow">
        <p className="font-bold text-2xl flex justify-center h-96 items-center">
          No Members Data Right Now
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
                {typeof member.Photo === "object" && member.Photo !== null ? (
                  <Image
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full"
                    src={`data:image/png;base64,${convertObjectToBase64(
                      member.Photo
                    )}`}
                    alt=""
                  />
                ) : (
                  <span>No image available</span>
                )}
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
        <div className="flex justify-center">
          <button onClick={loadMoreMembers}>See More Members</button>
        </div>
      </div>
    </div>
  );
}

function convertObjectToBase64(data: any): Buffer {
  return Buffer.from(data, "base64");
}
