import { Skeleton } from "@/components/ui/skeleton";

export default function EventWidgetLoading() {
  return (
    <div className="w-96 aspect-[5/2] bg-gray-200 flex flex-row items-center rounded-lg border-2 border-main p-4 shadow-md cursor-pointer hover:bg-gray-100">
      <div className="flex-[3] flex flex-col justify-evenly h-full items-start pr-4">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-7 h-3" />
      </div>
      <div className="flex-[2] h-full w-full relative">
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  );
}
