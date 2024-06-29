import getTotalEvents from "@/app/api/v1/homepage/utils/getTotalEvents";
import { useEffect, useState } from "react";

export default function ({ id }: { id: string }) {
  const [totalEvent, setTotalEvent] = useState(0);
  useEffect(() => {
    const fetchTotalEvents = async () => {
      try {
        const totalEventsCount = await getTotalEvents();
        setTotalEvent(totalEventsCount);
      } catch (error) {
        console.error("Error fetching total events:", error);
      }
    };

    fetchTotalEvents();
  }, []);

  const isPrevEventAvailable = parseInt(id as string) > 1;
  const isNextEventAvailable = parseInt(id as string) < totalEvent;

  const nextEvent = () => {
    window.location.href = "/events/" + (parseInt(id as string) + 1).toString();
  };

  const prevEvent = () => {
    window.location.href = "/events/" + (parseInt(id as string) - 1).toString();
  };
  return (
    <div className="flex flex-row gap-6 justify-center items-center mt-6 transition-all">
      <button
        className="p-4 bg-main rounded text-white hover:bg-blue-300 disabled:opacity-75"
        disabled={isPrevEventAvailable}
        onClick={prevEvent}
      >
        {"<"} Past
      </button>
      <button
        className="p-4 bg-main rounded text-white hover:bg-blue-300"
        disabled={isNextEventAvailable}
        onClick={nextEvent}
      >
        Next {">"}
      </button>
    </div>
  );
}
