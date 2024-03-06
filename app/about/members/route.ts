import MemberModel from "@/Schemas/MemberSchema";
import connectMongo from "@/app/db/mongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongo();
  try {
    const members = await MemberModel.find({});
    return NextResponse.json(members);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
