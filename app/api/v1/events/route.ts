import { NextResponse } from "next/server";
import getTotalEvents from "../homepage/utils/getTotalEvents";

export async function GET() {
  const res = await getTotalEvents();
  return NextResponse.json({ totalEvents: res }, { status: 200 });
}
