import { CrossCircledIcon } from "@radix-ui/react-icons";

interface ImageProps {
  height?: number;
}

const heightClasses = {
  32: "h-32",
  40: "h-40",
  48: "h-48",
};

export default function ImagePick({ height }: ImageProps) {
  if (!height) {
    height = 32;
  }
  return (
    <div className="h-auto relative rounded-md">
      <div
        className={`relative rounded-md border-4 border-dotted mb-2 ${
          heightClasses[height as keyof typeof heightClasses]
        }`}
      >
        <input
          type="file"
          accept="image/*"
          className="w-full h-full opacity-0 cursor-pointer absolute z-10"
        />
        <p className="absolute inset-0 flex items-center justify-center">
          No File Chosen
        </p>
        <CrossCircledIcon className="w-5 h-5 cursor-pointer text-red-500 absolute -top-2 -right-2" />
      </div>
      <div className="w-full border rounded-md flex flex-row items-center gap-1">
        <input
          type="text"
          name="file-name"
          id="file-name"
          placeholder="file name"
          className="border-none flex-3 rounded-md"
        />
        <p>.jpg</p>
      </div>
    </div>
  );
}
