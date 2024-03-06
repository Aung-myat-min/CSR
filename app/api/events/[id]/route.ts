import EventModel from "@/Schemas/EventSchema";
import connectMongo from "@/app/db/mongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectMongo();
  try {
    const id = params.id;
    const event = await EventModel.findById(id);
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
