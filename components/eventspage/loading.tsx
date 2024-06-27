import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
        <ClipLoader color="#02598B" size={30} />
        <p className="mt-2 text-lg font-bold">Loading...</p>
      </div>
    </div>
  );
}
