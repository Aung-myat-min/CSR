export default function Card() {
  return (
    <div className="w-11/12 m-auto mt-12 text-center ">
      <h2 className="mb-5 font-bold text-3xl">Our Records</h2>
      <div className="  grid grid-cols-3 gap-16 ">
        <div className="bg-primary py-10 rounded-xl font-bold text-xl mx-10">
          <h3>10</h3>
          <p>Projects</p>
        </div>
        <div className="bg-primary py-10 rounded-xl font-bold text-xl mx-10">
          <h3>3000000</h3>
          <p>MMK Donated</p>
        </div>
        <div className="bg-primary py-10 rounded-xl font-bold text-xl mx-10">
          <h3>175</h3>
          <p>Members</p>
        </div>
      </div>
    </div>
  );
}
