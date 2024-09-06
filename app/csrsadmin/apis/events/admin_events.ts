"use server";
import connectMongo from "@/app/db/mongoConnect";
import EventModel, { IEventData } from "@/Schemas/EventSchema";

async function updateEvent(event: IEventData): Promise<String | null> {
  await connectMongo();
  try {
    const updatedEvent = await EventModel.findByIdAndUpdate(event._id, event, {
      new: true,
    });

    const e = await EventModel.findById(event._id);
    console.log(updatedEvent.MemberLists);
    return JSON.stringify(updatedEvent);
  } catch (error) {
    console.error("Failed to update event: ", error);
    return null;
  }
}

export { updateEvent };
