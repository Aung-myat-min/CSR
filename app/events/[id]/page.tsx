"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { dateFormatChanger } from "../funcitons/dateFormatter";
import { splitStringIntoTwoArrays } from "../funcitons/splitStringIntoTwoArrays";
import { combineArraysToString } from "../funcitons/combineArraysToString";
import { useEffect, useState } from "react";
import { IEvent } from "@/Schemas/EventSchema";

export default function Page() {
  const { id } = useParams();
  const [event, setEvent] = useState<IEvent>();

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch("/api/events/" + id);
      const event = await res.json();
      setEvent(event);
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return <div>Loading...</div>; // or any loading indicator
  }

  // Now event is defined, you can access its properties safely
  let headerFormat = combineArraysToString(
    splitStringIntoTwoArrays(event.EventName)
  );
  const date = dateFormatChanger(event.EventDate.toString());

  return (
    <div className="">
      <div className="w-11/12 m-auto lg:mt-28 md:mt-24 xl:mt-30 mt-20 text-center">
        <p className="font-bold opacity-75 mb-2 text-sm ">{date}</p>
        <h1 className="font-black text-4xl">
          {headerFormat[0]}
          <br />
          {headerFormat[1]}
        </h1>
      </div>
      <div className="max-w-[600px] h-fit w-11/12 m-auto  flex items-center relative group my-10 z-[-1]">
        <Image
          className="rounded-2xl"
          src={event!.EventPhotoURL}
          alt={event!.EventName}
          priority={false}
          title={event!.EventName}
          width={1920}
          height={1080}
        />
      </div>
      <div className="w-11/12 m-auto">
        <h2 className="font-bold text-2xl mb-2">{event!.EventName}</h2>
        <p className="text-sm">{event!.EventDescription}</p>
      </div>
      <div className="w-11/12 m-auto">
        <h2 className="font-bold text-2xl mb-2">More Photo</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-5">
          {event &&
            event.EventPhotoList!.map((image, index) => {
              return (
                <div className="max-w-[600px] h-fit " key={index}>
                  <Image
                    className="rounded-2xl"
                    src={image}
                    alt="Moment of CSR's Donation" //add a function which change these according to the image name
                    priority={false}
                    title="Moment of CSR's Donation" //add a function which change these according to the image name
                    width={1920}
                    height={1080}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
