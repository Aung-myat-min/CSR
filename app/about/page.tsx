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
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchMember().then((members: IMember[]) => {
      setMembers(members);
      setLoading(false);
    });
  }, []);

  const loadMoreMembers = async () => {
    setLoading(true);
    const nextPage = page + 1; // Calculate next page
    const res = await fetch(`/api/members?page=${nextPage}`); // Pass page as query parameter
    const data = await res.json();
    const newMembers = data;
    setMembers((prevMembers) => [...prevMembers, ...newMembers]);
    setLoading(false);
    setPage(nextPage); // Update page state
  };

  if (loading) {
    return (
      <div className="w-11/12 m-auto flex items-center justify-center flex-grow">
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
    <main className="bg-backgroud dark:bg-content flex-grow pt-24 sm:pt-32">
      <div className="m-auto w-10/12">
        <h1 className="text-4xl font-bold text-center">Our Members</h1>
        <ul
          role="list"
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 m-auto"
        >
          {members.map((member) => (
            <li key={member._id} className=" my-8">
              <div className="flex items-center gap-x-2 ">
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
                  <p className="text-base font-semibold leading-7 tracking-tight">
                    {member.Name}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-main">
                    {member.Role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4">
          <button onClick={loadMoreMembers}>See More Members</button>
        </div>
      </div>
    </main>
  );
}

function convertObjectToBase64(data: any): Buffer {
  return Buffer.from(data, "base64");
}
