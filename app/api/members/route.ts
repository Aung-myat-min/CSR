import MemberModel from "@/Schemas/MemberSchema";
import connectMongo from "@/app/db/mongoConnect";
import { unstable_noStore } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  unstable_noStore();
  await connectMongo();
  try {
    const members = await MemberModel.find({});
    return NextResponse.json(members);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
