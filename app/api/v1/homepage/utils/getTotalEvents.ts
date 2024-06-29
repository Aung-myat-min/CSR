import connectMongo from "@/app/db/mongoConnect";
import EventModel from "@/Schemas/EventSchema";
import { unstable_noStore } from "next/cache";

const getTotalEvents = async (): Promise<number> => {
  unstable_noStore();
  await connectMongo();
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
