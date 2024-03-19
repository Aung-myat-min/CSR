import MemberModel from "@/Schemas/MemberSchema";
import connectMongo from "@/app/db/mongoConnect";
import { unstable_noStore } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  unstable_noStore();
  await connectMongo();
  const totalMembers = await MemberModel.countDocuments({});
  try {
    const members = await MemberModel.find({}).limit(15);
    return NextResponse.json(members);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
