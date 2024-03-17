export default function Card() {
  return (
    <div className="w-11/12 m-auto mt-12 text-center ">
      <h2 className="mb-5 font-bold text-3xl">Our Records</h2>
      <div className=" grid lg:grid-cols-3 lg:gap-16 md:grid-cols-2 md:gap-7 gap-4  grid-cols-1 ">
        <div className="bg-primary dark:bg-secondary py-10 rounded-xl font-bold text-xl lg:mx-10 md:mx-3 ">
          <h3>8</h3>
          <p>Events</p>
        </div>
        <div className="bg-primary dark:bg-secondary py-10 rounded-xl font-bold text-xl lg:mx-10 md:mx-3 ">
          <h3>~3000000</h3>
          <p>MMK Donated</p>
        </div>
        <div className="bg-primary dark:bg-secondary py-10 rounded-xl font-bold text-xl lg:mx-10 md:mx-3 ">
          <h3>175</h3>
          <p>Members</p>
        </div>
      </div>
    </div>
  );
}
