"use server";

import EventModel, { IEvent } from "@/Schemas/EventSchema";

export async function getEventById(id: number): Promise<IEvent | null> {
  try {
    const event = await EventModel.findById(id);
    if (!event) {
      return null;
    }
    return event;
  } catch (error) {
    console.error("Error Fetching Event by Id: ", error);
    return null;
  }
}
