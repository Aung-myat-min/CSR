import EventModel from "@/Schemas/EventSchema";
import connectMongo from "@/app/db/mongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongo();
  try {
    const events = await EventModel.find({ Completed: true }).lean();
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
