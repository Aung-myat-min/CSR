import Image from "next/image";
import React from "react";
import { IEvent } from "@/Schemas/EventSchema";

export default function EventWidget({
  event,
  filter,
}: {
  event: IEvent;
  filter: string;
}) {
  const eventDate = new Date(event.EventDate);
  const currentDate = new Date();

  const isPastEvent = eventDate < currentDate;
  const isUpcomingEvent = eventDate >= currentDate;

  const shouldHideEvent =
    (filter === "1" && !event.Completed && !isPastEvent) ||
    (filter === "2" && event.Completed && !isUpcomingEvent);

  return (
    <div
      className={`w-96 aspect-[5/2] bg-gray-200 flex flex-row items-center rounded-lg border-2 border-main p-4 shadow-md cursor-pointer hover:bg-gray-100 ${
        shouldHideEvent ? "hidden" : ""
      }`}
    >
      <div className="flex-[3] flex flex-col justify-evenly h-full items-start pr-4">
        <p className="text-lg font-semibold text-left">{event.EventName}</p>
        <time>{eventDate.toDateString()}</time>
      </div>
      <div className="flex-[2] h-full w-full relative">
        <Image
          src={event.EventPhotoURL}
          layout="fill"
          objectFit="cover"
          alt="Event image"
          className="rounded-lg"
          quality={100}
        />
      </div>
    </div>
  );
}
