import { useEffect, useState } from "react";
import Loading from "./loading";
import ItemShowCase from "../itemShowCase";
import { IEvent } from "@/Schemas/EventSchema";

export default function Events({
  fetchEvents,
}: {
  fetchEvents: () => Promise<IEvent>;
}) {
  const [events, setEvents] = useState<IEvent[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents().then((data) => {
      setEvents(Array.isArray(data) ? data : [data]);
      setLoading(false);
    });
  }, [fetchEvents]);

  if (loading) {
    return <Loading />;
  }

  return (
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
  );
}

function goto(link: string) {
  window.location.href = link;
}
