import EventModel from "@/Schemas/EventSchema";

const getTotalEvents = async () => {
  try {
    const totalEvents = await EventModel.countDocuments({
      Completed: true,
    });
    return totalEvents;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export default getTotalEvents;
