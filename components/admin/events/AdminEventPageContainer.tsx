import { Button } from "@/components/ui/button";
import { AdminDateRangePick } from "./utils/AdminDateRangePick";
import AdminSelect, { SelectItem } from "./utils/AdminSelect";
import EventWidget from "./utils/EventWidget";
import { CiCirclePlus } from "react-icons/ci";

export default function AdminEventPageContainer() {
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
    </main>
  );
}
