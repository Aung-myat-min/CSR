"use client";
import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import EventSwitch from "@/components/EventSwitch";

const Events = dynamic(() => import("@/components/eventspage/container"), {
  ssr: false,
});

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
      <Suspense fallback={<>Hello</>}>
        <Events fetchEvents={fetchEvents} />
      </Suspense>
    </main>
  );
}
