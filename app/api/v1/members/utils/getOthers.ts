"use server";
import connectMongo from "@/app/db/mongoConnect";
import MemberModel, { IMember } from "@/Schemas/MemberSchema";

export async function getOthers(skip: number): Promise<IMember[]> {
  await connectMongo();
  const page = skip || 1;
  const limit = 15;
  const sort: any = { Role: 1 };
  try {
    const skips = (page - 1) * limit;
    const others = await MemberModel.find({
      Role: { $in: ["Volunteer Head", "Facilitator", "Volunteer"] },
    })
      .sort(sort)
      .skip(skips)
      .limit(limit);
    return others as IMember[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
