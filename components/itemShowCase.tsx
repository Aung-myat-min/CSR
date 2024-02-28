import Image from "next/image";
import Link from "next/link";
export default function ItemShowCase(props: {
  header: string;
  description: string;
  url: string;
  id: number;
}) {
  return (
    <div className="w-11/12 m-auto">
      <div className="">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
          <div className="">
            <Image
              src={props.url}
              alt={props.header}
              priority={false}
              title={props.header}
              width={1920}
              height={1080}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white">
              {props.header}
            </h1>
            <p className="my-2 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {props.description}
            </p>
            <Link
              href={`/events/${props.id}`}
              className=" px-3.5 font-com text-sm capitalize text-white shadow "
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
