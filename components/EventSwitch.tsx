export default function EventSwitch() {
  return (
    <div className="w-11/12 m-auto flex justify-center lg:mt-32 md:mt-24 xl:mt-30 mt-20">
      <div className="lg:w-4/12 w-8/12 flex bg-primary dark:bg-secondary text-center rounded-xl font-bold text-xs md:text-sm lg:text-base ">
        <div className="w-1/2  rounded-se-xl rounded-s-xl lg:py-0.5 py-1 text-background bg-main">
          Previous
        </div>
        <div className="w-1/2 rounded-es-xl rounded-e-xl lg:py-0.5 py-1 ">
          Upcoming
        </div>
      </div>
    </div>
  );
}
