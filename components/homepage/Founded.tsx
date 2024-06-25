"use client";
import foundedImage from "@/public/images/founded.jpg";
import Image from "next/image";
import left_arrow from "@/public/arrow-narrow-left-svgrepo-com.svg";

const photos = [
  {
    src: foundedImage.src,
    width: foundedImage.width,
    height: foundedImage.height,
  },
];
export default function Founded() {
  const styles = {
    div: "",
  };
  return (
    // <section className="flex flex-row w-11/12 mx-auto mt-14 gap-3 h-40">
    //   <div className="flex-1 relative">
    //     <p className="text-4xl absolute top-4 left-4 rotate-[-40deg] z-10 bg-white dark:bg-secondary">
    //       Since
    //     </p>
    //     <div className="mask-gradient h-full text-3xl p-4 flex bg-primary dark:bg-sescondary rounded-xl font-bold lg:mx-10 md:mx-3 justify-center items-center dark:text-secondary">
    //       20, March 2023
    //     </div>
    //   </div>
    //   <div className="flex-1 relative">
    //     <p className="text-xl absolute top-4 left-4 rotate-[-40deg] z-10 bg-white dark:bg-secondary">
    //       Founded By
    //     </p>
    //     <div className="mask-gradient h-full text-3xl p-4 flex bg-primary dark:bg-sescondary rounded-xl font-bold lg:mx-10 md:mx-3 justify-center items-center dark:text-secondary">
    //       Level-3 {"(Batch-17)"}
    //     </div>
    //   </div>
    // </section>
    <section className="grid grid-cols-2 grid-rows-2 w-11/12 my-20 mx-auto gap-5 h-[400px] relative lg:px-4">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">
          <span className="text-6xl text-main font-bold">It</span> is:
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-3 border-4 border-solid border-main rounded-xl md:flex-row">
        <h1 className="text-3xl md:text-5xl">Since </h1>
        <i className="text-xl text-center md:text-2xl">20, March 2023</i>
      </div>

      <div className="flex flex-row items-center justify-center gap-4">
        <Image
          className="border-4 border-solid border-main rounded-xl"
          src={foundedImage}
          alt="first group photo"
          width={250}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-3 border-4 border-solid border-main rounded-xl md:flex-row">
        <h1 className="text-xl md:text-3xl">Founded By </h1>
        <i className="text-xl text-center md:text-2xl">
          Level-3 {"(Batch-17)"}
        </i>
      </div>
      <Image
        src={left_arrow}
        alt="indicating the photo"
        className="hidden md:block absolute invert-[15%] sepia-[46%] saturate-[5770%] hue-rotate-[188deg] brightness-[96%] contrast-[99%] left-[41%] bottom-[15%]"
        width={50}
      />
    </section>
  );
}
