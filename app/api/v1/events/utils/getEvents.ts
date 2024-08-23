"use server";

import connectMongo from "@/app/db/mongoConnect";
import EventModel, { IEvent } from "@/Schemas/EventSchema";

export async function getEvents(): Promise<string> {
    await connectMongo();
    try {
        const events = await EventModel.find();
        return JSON.stringify(events);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error occurred while fetching events:", error.message);
            throw new Error("Failed to fetch events. Please try again later.");
        } else {
            console.error("Unexpected error:", error);
            throw new Error("An unexpected error occurred.");
        }
    }
}
