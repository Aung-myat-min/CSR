"use client";
import { IEvent } from "@/Schemas/EventSchema";
import EventSwitch from "@/components/EventSwitch";
import ItemShowCase from "@/components/itemShowCase";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

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

  const goto = (link: string) => {
    window.location.href = link;
  };

  return (
    <main className="w-11/12 m-auto flex-grow relative">
      <EventSwitch
        upcomingFunc={handleUpcomingClick}
        previousFunc={handlePreviousClick}
      />
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col gap-4 items-center justify-center absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
            <ClipLoader color="#02598B" size={30} />
            <p className="mt-2 text-lg font-bold">Loading...</p>
          </div>
        </div>
      ) : (
        <section className="grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 md:gap-7 gap-4 grid-cols-1 mt-8">
          {events && events.length > 0 ? (
            events.map((item) => (
              <ItemShowCase
                key={item._id}
                header={item.EventName}
                url={item.EventPhotoURL}
                id={item._id}
                func={async () => goto(`/events/${item._id}`)}
              />
            ))
          ) : (
            <div className="col-span-3 flex items-center h-96 justify-center">
              <p className="font-bold text-2xl">No Events right now</p>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
