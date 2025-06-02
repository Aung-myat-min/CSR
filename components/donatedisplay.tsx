export default function DonateDisplay() {
  // Fake data
  const donations = [
    { name: "John Doe", batch: "Batch A", amount: "$100" },
    { name: "Jane Smith", batch: "Batch B", amount: "$200" },
    { name: "Alice Johnson", batch: "Batch C", amount: "$150" },
    { name: "Bob Brown", batch: "Batch D", amount: "$180" },
    { name: "Charlie White", batch: "Batch E", amount: "$120" },
  ];

  return (
    <div className="w-full font-sans md:mt-16 lg:mt-20 mt-14 ">
      {/* First Row: Centered Topic */}
      <div className="flex justify-center items-center py-3 bg-main text-white">
        <h2 className="text-lg font-semibold">ငလျင်ဘေးအလှူ</h2>
      </div>

      {/* Second Row: Horizontal layout with non-stop scrolling */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-6 px-4 py-2">
          {donations.concat(donations).map((donation, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2  rounded-lg  text-center text-nowrap"
            >
              <h4 className="font-semibold">{donation.name}</h4>
              <p className="font-bold mx-3">{donation.batch}</p>
              <p className="text-green-600">{donation.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
