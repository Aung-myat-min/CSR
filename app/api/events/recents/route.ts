"use server";
import EventModel from "@/Schemas/EventSchema";
import connectMongo from "@/app/db/mongoConnect";
import { unstable_noStore } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  unstable_noStore();
  await connectMongo();
  try {
    const events = await EventModel.find({ Completed: true });
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
