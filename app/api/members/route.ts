import MemberModel from "@/Schemas/MemberSchema";
import connectMongo from "@/app/db/mongoConnect";
import { unstable_noStore } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  unstable_noStore();
  await connectMongo();
  const page = parseInt(req.nextUrl.searchParams.get("page")!) || 1;
  const limit = 15;
  try {
    // Calculate the number of documents to skip based on the page number and limit
    const skip = (page - 1) * limit;

    // Fetch members with pagination
    const members = await MemberModel.find({}).skip(skip).limit(limit);

    // Return total members count along with the paginated members
    return NextResponse.json(members);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
