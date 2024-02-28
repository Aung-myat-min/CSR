"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { dateFormatChanger } from "../funcitons/dateFormatter";
import { splitStringIntoTwoArrays } from "../funcitons/splitStringIntoTwoArrays";
import { combineArraysToString } from "../funcitons/combineArraysToString";

export default function Page() {
  const { id } = useParams();
  const data = {
    date: "1/12/2023",
    header: "CSR MOTHER DAY DONATION",
    image_url:
      "https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg",
    header2: "Introduction",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          deserunt! A sed impedit quasi ad fuga saepe? Esse repudiandae aperiam
          odit voluptatem aspernatur, natus, corporis cupiditate, labore unde
          vitae porro.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          deserunt! A sed impedit quasi ad fuga saepe? Esse repudiandae aperiam
          odit voluptatem aspernatur, natus, corporis cupiditate, labore unde
          vitae porro.`,
    images: [
      "https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg",
      "https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg",
      "https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg",
      "https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg",
      "https://wallpaperbat.com/img/864499-anime-wallpaper-hd-1920x1080.jpg",
    ],
  };
  let headerFormat = combineArraysToString(
    splitStringIntoTwoArrays(data.header)
  );
  const date = dateFormatChanger(data.date);
  return (
    <div className="">
      <div className="w-11/12 m-auto lg:mt-28 md:mt-24 xl:mt-30 mt-20 text-center">
        <p className="font-bold opacity-75 mb-2 text-sm ">{date}</p>
        <h1 className="font-black text-4xl">
          {headerFormat[0]}
          <br />
          {headerFormat[1]}
        </h1>
      </div>
      <div className="max-w-[600px] h-fit w-11/12 m-auto  flex items-center relative group my-10">
        <Image
          className="rounded-2xl"
          src={data.image_url}
          alt={data.header}
          priority={false}
          title={data.header}
          width={1920}
          height={1080}
        />
      </div>
      <div className="w-11/12 m-auto">
        <h2 className="font-bold text-2xl mb-2">{data.header2}</h2>
        <p className="text-sm">{data.description}</p>
      </div>
      <div className="w-11/12 m-auto">
        <h2 className="font-bold text-2xl mb-2">More Photo</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mt-5">
          {data.images.map((image, index) => {
            return (
              <div className="max-w-[600px] h-fit " key={index}>
                <Image
                  className="rounded-2xl"
                  src={image}
                  alt="Moment of CSR's Donation" //add a function which change these according to the image name
                  priority={false}
                  title="Moment of CSR's Donation" //add a function which change these according to the image name
                  width={1920}
                  height={1080}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
