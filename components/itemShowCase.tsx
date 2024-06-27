import Image from "next/image";
import Link from "next/link";
export default function ItemShowCase(props: {
  header: string;
  url: string;
  id: number;
  func: () => {};
}) {
  return (
    <div className="w-full aspect-video m-auto " onClick={props.func}>
      <div className="">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
          <div className="">
            <Image
              src={props.url}
              alt={props.header}
              priority={false}
              title={props.header}
              width={400}
              height={300}
              className="aspect-video object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 className="font-dmserif text-3xl font-bold text-white my-4">
              {props.header}
            </h1>
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
