"use server";

import EventModel, { IEvent } from "@/Schemas/EventSchema";

export async function getEventById(id: number): Promise<string | null> {
  try {
    const event : IEvent | null = await EventModel.findById(id);
    if (!event) {
      return null;
    }

    return JSON.stringify(event);
  } catch (error) {
    console.error("Error Fetching Event by Id: ", error);
    return null;
  }
}
