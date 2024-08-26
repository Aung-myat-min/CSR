import Image from "next/image";
import React from "react";
import { IEvent } from "@/Schemas/EventSchema";
import { DateRange } from "react-day-picker";

export default function EventWidget({
  event,
  filter,
  dayRange,
}: {
  event: IEvent;
  filter: string;
  dayRange: DateRange | undefined;
}) {
  const eventDate = new Date(event.EventDate);

  let shouldHideEvent = false;

  if (filter === "2") {
    shouldHideEvent = event.Completed; // Hide if 'Past' is selected and event is upcoming
  } else if (filter === "1") {
    shouldHideEvent = !event.Completed; // Hide if 'Upcoming' is selected and event is past
  }

  // Apply the date range filter regardless of the selected filter value
  let isWithinRange = true;

  if (dayRange?.from && dayRange?.to) {
    isWithinRange = eventDate >= dayRange.from && eventDate <= dayRange.to;
    shouldHideEvent = !isWithinRange || shouldHideEvent;
  }

  if (filter === "0") {
    shouldHideEvent = !isWithinRange;
  }

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
          sizes="1"
          objectFit="cover"
          alt="Event image"
          className="rounded-lg"
          quality={100}
        />
      </div>
    </div>
  );
}
