import getTotalEvents from "@/app/api/v1/homepage/utils/getTotalEvents";
import getTotalMembers from "@/app/api/v1/homepage/utils/getTotalMembers";
import getTotalMoneyDonated from "@/app/api/v1/homepage/utils/getTotalMoneyDonated";

export default function Card() {
  const events = getTotalEvents();
  const money = getTotalMoneyDonated();
  const member = getTotalMembers();
  return (
    <section className="w-11/12 m-auto my-12 text-center ">
      <h2 className="mb-5 font-bold text-3xl">Our Records</h2>
      <div className=" grid lg:grid-cols-3 lg:gap-12 md:grid-cols-2 md:gap-7 gap-4  grid-cols-1 ">
        <div className="bg-primary dark:bg-secondary py-10 rounded-xl font-bold text-xl lg:mx-10 md:mx-3 ">
          <h3>{events}</h3>
          <p>Events</p>
        </div>
        <div className="bg-primary dark:bg-secondary py-10 rounded-xl font-bold text-xl lg:mx-10 md:mx-3 ">
          <h3>~{money}</h3>
          <p>MMK Donated</p>
        </div>
        <div className="bg-primary dark:bg-secondary py-10 rounded-xl font-bold text-xl lg:mx-10 md:mx-3 md:col-span-2 lg:col-span-1">
          <h3>{member}</h3>
          <p>Members</p>
        </div>
      </div>
    </section>
  );
}
