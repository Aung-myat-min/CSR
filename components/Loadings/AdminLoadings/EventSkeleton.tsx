import EventWidgetLoading from "./utils/EventWidgetLoading";

export default function EventSkeleton() {
  return (
    <div className="flex flex-row flex-wrap gap-3 w-full h-auto p-2 justify-center">
      <EventWidgetLoading />
      <EventWidgetLoading />
      <EventWidgetLoading />
      <EventWidgetLoading />
      <EventWidgetLoading />
      <EventWidgetLoading />
      <EventWidgetLoading />
      <EventWidgetLoading />
    </div>
  );
}
