export default function Hero() {
  return (
    <section className="gap-10 flex flex-col w-11/12 m-auto mt-12 md:flex-row">
      <h1 className="flex-1 font-bold text-9xl relative flex justify-center pb-8">
        WE
        <p className=" text-primary dark:text-white font-medium text-6xl absolute bottom-0 right-0">
          CSR
        </p>
      </h1>
      <div className="h-auto text-3xl p-4 flex bg-primary dark:bg-sescondary rounded-xl font-bold lg:mx-10 md:mx-3 justify-center items-center md:h-[160px]">
        Help others for better unity.
      </div>
    </section>
  );
}
