import connectMongo from "@/app/db/mongoConnect";
import initDataSeeding from "@/app/seed/intitialDataSeeding";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongo();
    await initDataSeeding();
    return new NextResponse("Hello World!", { status: 200 });
  } catch (error) {
    return new NextResponse(`Error ${error}`, { status: 500 });
  }
}
