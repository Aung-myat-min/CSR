import Image from "next/image";
import React from "react";
import testImg from "@/public/images/founded.jpg";

export default function EventWidget() {
  return (
    <div className="w-96 aspect-[5/2] bg-gray-200 flex flex-row items-center rounded-lg border-2 border-main p-4 shadow-md cursor-pointer hover:bg-gray-100">
      <div className="flex-[3] flex flex-col justify-evenly h-full items-start">
        <h2 className="text-lg font-semibold">Event Name</h2>
        <time>12/02/2022</time>
      </div>
      <Image
        src={testImg}
        alt="test image"
        className="h-full flex-1 w-auto rounded-lg"
      />
    </div>
  );
}
