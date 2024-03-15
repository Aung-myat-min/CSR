"use client";
import { IEvent } from "@/Schemas/EventSchema";
import EventSwitch from "@/components/EventSwitch";
import ItemShowCase from "@/components/itemShowCase";
import { useEffect, useState } from "react";
import { ClipLoader, SyncLoader } from "react-spinners";

export default function App() {
  const fetchPreviousEvents = async () => {
    const res = await fetch("/api/events/recents", { cache: "no-store" });
    const events = res.json();
    return events;
  };
  const fetchUpcomingEvents = async () => {
    const res = await fetch("/api/events/upcoming", { cache: "no-store" });
    const events = res.json();
    return events;
  };

  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<IEvent[]>();

  useEffect(() => {
    setLoading(true);
    fetchPreviousEvents().then((events: IEvent[]) => {
      setEvents(events);
      setLoading(false);
    });
  }, []);

  const handlePreviousClick = () => {
    setLoading(true);
    fetchPreviousEvents().then((events: IEvent[]) => {
      setEvents(events);
      setLoading(false);
    });
  };

  const handleUpcomingClick = () => {
    setLoading(true);
    fetchUpcomingEvents().then((events: IEvent[]) => {
      setEvents(events);
      setLoading(false);
    });
  };

  return (
    <div className="w-11/12 m-auto flex-grow">
      <EventSwitch
        upcomingFunc={handleUpcomingClick}
        previousFunc={handlePreviousClick}
      />
      <div className="grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 md:gap-7 gap-4  grid-cols-1 mt-8">
        {loading ? (
          <div></div>
        ) : events && events.length > 0 ? (
          events.map((item) => (
            <ItemShowCase
              key={item._id}
              header={item.EventName}
              description={item.EventDescription}
              url={item.EventPhotoURL}
              id={item._id}
            />
          ))
        ) : (
          <p>No Events right now</p>
        )}
      </div>
    </div>
  );
}
