"use server";
import connectMongo from "@/app/db/mongoConnect";
import MemberModel, { IMember } from "@/Schemas/MemberSchema";

export async function getAllTMembers(skip: number): Promise<IMember[]> {
  await connectMongo();
  const page = skip || 1;
  const limit = 15;
  try {
    const skips = (page - 1) * limit;
    const members = await MemberModel.find({}).skip(skips).limit(limit);
    return members as IMember[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
