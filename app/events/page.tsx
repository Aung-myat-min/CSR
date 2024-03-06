"use client";
import { IEvent } from "@/Schemas/EventSchema";
import EventSwitch from "@/components/EventSwitch";
import ItemShowCase from "@/components/itemShowCase";
import { useEffect, useState } from "react";

export default function App() {
  const fetchEvents = async () => {
    const res = await fetch("/api/events/recents");
    const events = res.json();
    return events;
  };

  const [events, setEvents] = useState<IEvent[]>();
  useEffect(() => {
    fetchEvents().then((events: IEvent[]) => {
      setEvents(events);
    });
  }, []);
  return (
    <div className="w-11/12 m-auto flex-grow">
      <EventSwitch />
      <div className="grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 md:gap-7 gap-4  grid-cols-1 mt-8">
        {events &&
          events.map((item) => {
            return (
              <ItemShowCase
                key={item._id}
                header={item.EventName}
                description={item.EventDescription}
                url={item.EventPhotoURL}
                id={item._id}
              />
            );
          })}
      </div>
    </div>
  );
}
