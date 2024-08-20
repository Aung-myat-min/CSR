"use client";
import { Button } from "@/components/ui/button";
import { AdminDateRangePick } from "./utils/AdminDateRangePick";
import AdminSelect, { SelectItem } from "./utils/AdminSelect";
import EventWidget from "./utils/EventWidget";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { IEvent } from "@/Schemas/EventSchema";
import { getEvents } from "@/app/api/v1/events/utils/getEvents";
import AdminDialog from "./utils/AdminDialog";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function AdminEventPageContainer() {
  // const [events, setEvents] = useState<IEvent[]>([]);
  const form = useForm();
  const eventType: SelectItem[] = [
    {
      value: "past",
      label: "Past",
    },
    {
      value: "upcoming",
      label: "Upcoming",
    },
  ];

  // const getEventsFromDB = async()=>{
  //   const e = await getEvents();
  //   setEvents(e);
  // }

  return (
    <main>
      <section className="flex flex-row items-center p-3 gap-4 justify-end">
        <Button className="flex flex-row gap-1 items-center">
          <CiCirclePlus /> New
        </Button>
        <AdminSelect placeholder="Event Type" items={eventType} />
        <AdminDateRangePick />
      </section>
      <EventWidget />
      <AdminDialog />
    </main>
  );
}
