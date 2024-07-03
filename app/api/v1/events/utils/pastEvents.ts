"use server";
import connectMongo from "@/app/db/mongoConnect";
import EventModel, { IEvent } from "@/Schemas/EventSchema";

export async function getPastEvents(): Promise<IEvent[]> {
  await connectMongo();
  try {
    const events = await EventModel.find({ Completed: true });
    return events;
  } catch (error) {
    console.log(error);
    return [];
  }
}
