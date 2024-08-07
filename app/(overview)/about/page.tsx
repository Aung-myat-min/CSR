"use client";
import MiniNav from "@/components/aboutpage/MiniNav";
import { IMember } from "@/Schemas/MemberSchema";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { getFounder } from "@/app/api/v1/members/utils/getFounder";
import { getFinance } from "@/app/api/v1/members/utils/getFinance";
import { getDigitalGraphic } from "@/app/api/v1/members/utils/getDigitalGraphic";
import { getDeveloper } from "@/app/api/v1/members/utils/getDeveloper";
import { getDesigner } from "@/app/api/v1/members/utils/getDesigner";
import { getOthers } from "@/app/api/v1/members/utils/getOthers";
import { getAllTMembers } from "@/app/api/v1/members/utils/getAllTMembers";
import { getConentWriter } from "@/app/api/v1/members/utils/getContentWriter";
import Loading from "@/components/eventspage/loading";
import { SyncLoader } from "react-spinners";

export default function MemberList() {
  const [role, setRole] = useState("1");
  const [members, setMembers] = useState<IMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const fetchMembersByRoleAndPage = async (
    role: string,
    page: number
  ): Promise<IMember[]> => {
    try {
      let member: IMember[];
      switch (role) {
        case "2":
          member = await getFounder();
          break;
        case "3":
          member = await getFinance();
          break;
        case "4":
          member = await getConentWriter();
          break;
        case "5":
          member = await getDigitalGraphic();
          break;
        case "6":
          member = await getDeveloper();
          break;
        case "7":
          member = await getDesigner();
          break;
        case "8":
          member = await getOthers(page);
          break;
        default:
          member = await getAllTMembers(page);
          break;
      }
      return member;
    } catch (error) {
      console.error("Error fetching members:", error);
      return []; // Return an empty array on error
    }
  };

  const fetchMember = async (): Promise<IMember[]> => {
    return fetchMembersByRoleAndPage(role, page);
  };

  useEffect(() => {
    setLoading(true);
    fetchMember().then((members: IMember[]) => {
      setMembers(members);
      setLoading(false);
    });
  }, [role]); // Add role and page as dependencies

  useEffect(() => {
    setPage(1); // Reset page to 1 whenever the role changes
  }, [role]);

  const loadMoreMembers = async () => {
    setLoading(true);
    const nextPage = page + 1; // Calculate next page
    const newMembers = await fetchMembersByRoleAndPage(role, nextPage);
    setMembers((prevMembers) => [...prevMembers, ...newMembers]);
    setLoading(false);
    setPage(nextPage); // Update page state
  };

  if (loading) {
    return (
      <div className="w-11/12 m-auto mt-24 flex-grow">
        <MiniNav role={role} setRole={setRole} />
        <div className="flex justify-center items-center h-96">
          <SyncLoader color="#015486" />
        </div>
      </div>
    );
  }

  if (!members || members.length === 0) {
    return (
      <div className="w-11/12 m-auto mt-24 flex-grow">
        <MiniNav role={role} setRole={setRole} />
        <p className="font-bold text-2xl flex justify-center h-96 items-center">
          No Members Data Right Now
        </p>
      </div>
    );
  }

  return (
    <main className="bg-backgroud dark:bg-content flex-grow pt-24 sm:pt-32">
      <div className="m-auto w-10/12 md:w-9/12">
        <h1 className="text-4xl font-bold text-center">Our Members</h1>
        <MiniNav role={role} setRole={setRole} />
        <ul
          role="list"
          className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 m-auto"
        >
          <Suspense fallback={<Loading />}>
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
          </Suspense>
        </ul>
        <div
          className={`flex justify-center mt-4 ${
            role === "1" || role === "8" ? `` : `hidden`
          }`}
        >
          <button onClick={loadMoreMembers}>See More Members</button>
        </div>
      </div>
    </main>
  );
}

function convertObjectToBase64(data: any): Buffer {
  return Buffer.from(data, "base64");
}
