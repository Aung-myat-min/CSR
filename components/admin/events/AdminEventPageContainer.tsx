"use client";
import { Button } from "@/components/ui/button";
import { AdminDateRangePick } from "./utils/AdminDateRangePick";
import AdminSelect, { SelectItem } from "./utils/AdminSelect";
import EventWidget from "./utils/EventWidget";
import { CiCirclePlus } from "react-icons/ci";
import { Suspense, useEffect, useState } from "react";
import { IEvent } from "@/Schemas/EventSchema";
import { getEvents } from "@/app/api/v1/events/utils/getEvents";
import AdminDialog from "./utils/AdminDialog";
import EventSkeleton from "@/components/Loadings/AdminLoadings/EventSkeleton";
import { DateRange } from "react-day-picker";

export default function AdminEventPageContainer() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [eventType, setEventType] = useState("0");
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<DateRange | undefined>();

  const eventTypes: SelectItem[] = [
    {
      value: 0,
      label: "Event Type",
    },
    {
      value: 1,
      label: "Past",
    },
    {
      value: 2,
      label: "Upcoming",
    },
  ];
  const handleEventType = (eventNumber: string) => {
    setEventType(eventNumber);
  };

  const getEventsFromDB = async () => {
    setLoading(true);
    const e = await getEvents();
    setEvents(JSON.parse(e) as IEvent[]);
    setLoading(false);
    console.log(events);
  };
  useEffect(() => {
    getEventsFromDB();
  }, []);

  const handleResetFilter = () => {
    setEventType("0");
    setDate(undefined);
  };

  return (
    <main>
      <section className="flex flex-row items-center p-3 gap-4 justify-end">
        <AdminDialog>
          <Button className="flex flex-row gap-1 items-center">
            <CiCirclePlus /> New
          </Button>
        </AdminDialog>
        <AdminSelect
          placeholder="Event Type"
          items={eventTypes}
          func={handleEventType}
        />
        <AdminDateRangePick value={date} setValue={setDate} />
        <Button type="reset" onClick={handleResetFilter}>
          Reset
        </Button>
      </section>

      <Suspense fallback={<EventSkeleton />}>
        {loading ? (
          <EventSkeleton />
        ) : (
          <div className="flex flex-row flex-wrap gap-3 w-full h-auto p-2 justify-center">
            {events.map((event) => (
              <AdminDialog event={event} key={event.id}>
                <EventWidget event={event} filter={eventType} dayRange={date} />
              </AdminDialog>
            ))}
          </div>
        )}
      </Suspense>
    </main>
  );
}
