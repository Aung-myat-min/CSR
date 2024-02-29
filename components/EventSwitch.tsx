export default function EventSwitch() {
  return (
    <div className="w-11/12 m-auto flex justify-center lg:mt-28 md:mt-24 xl:mt-30 mt-20">
      <div className="w-4/12 flex bg-primary text-center rounded-xl font-bold ">
        <div className="w-1/2  rounded-se-xl rounded-s-xl py-0.5 ">
          Previous
        </div>
        <div className="w-1/2 rounded-es-xl rounded-e-xl text-background bg-main py-0.5 ">
          {" "}
          Upcoming
        </div>
      </div>
    </div>
  );
}
