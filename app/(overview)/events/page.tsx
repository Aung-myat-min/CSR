"use client";
import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import EventSwitch from "@/components/EventSwitch";
import Loading from "@/components/eventspage/loading";
import { getPastEvents } from "@/app/api/v1/events/utils/pastEvents";
import { getFutureEvents } from "@/app/api/v1/events/utils/futureEvents";

const Events = dynamic(() => import("@/components/eventspage/container"), {
  ssr: false,
});

const fetchPreviousEvents = async () => {
  const events = await getPastEvents();
  return events;
};
const fetchUpcomingEvents = async () => {
  const events = await getFutureEvents();
  return events;
};

export default function App() {
  const [fetchEvents, setFetchEvents] = useState(() => fetchPreviousEvents);

  const handlePreviousClick = () => setFetchEvents(() => fetchPreviousEvents);
  const handleUpcomingClick = () => setFetchEvents(() => fetchUpcomingEvents);

  return (
    <main className="w-11/12 m-auto flex-grow relative">
      <EventSwitch
        upcomingFunc={handleUpcomingClick}
        previousFunc={handlePreviousClick}
      />
      <Suspense fallback={<Loading />}>
        <Events fetchEvents={fetchEvents} />
      </Suspense>
    </main>
  );
}
