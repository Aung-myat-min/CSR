'use server';
import { NextRequest, NextResponse } from 'next/server';
import EventModel, { IEvent } from '@/Schemas/EventSchema';
import { unstable_noStore } from 'next/cache';
import connectMongo from '@/app/db/mongoConnect';

export async function GET(request: NextRequest) {
  unstable_noStore();
  await connectMongo();
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); 
    
    if (!id) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

    const event = await EventModel.findById(parseInt(id));

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(event, { status: 200 });
  } catch (error) {
    console.error("Error Fetching Event by Id: ", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
