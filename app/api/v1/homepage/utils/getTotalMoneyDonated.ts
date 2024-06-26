import EventModel from "@/Schemas/EventSchema";

const getTotalMoneyDonated = async () => {
  try {
    const result = await EventModel.aggregate([
      {
        $group: {
          _id: null,
          totalDonatedAmount: { $sum: "$DonatedAmount" },
        },
      },
    ]);

    const totalMoney = result[0] ? result[0].totalDonatedAmount : 0;
    return totalMoney;
  } catch (error) {
    console.error("Error calculating total donated amount:", error);
    return 0; // or handle the error as needed
  }
};

export default getTotalMoneyDonated;
