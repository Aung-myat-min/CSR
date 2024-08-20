import textImg from "@/public/images/founded.jpg";
import Image from "next/image";
export default function ImagePick() {
  return (
    <div className=" rounded-md">
      <Image
        src={textImg}
        alt="test image"
        className="rounded-md w-full h-full"
      />
    </div>
  );
}
