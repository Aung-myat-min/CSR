"use server";
import connectMongo from "@/app/db/mongoConnect";
import MemberModel, { IMember } from "@/Schemas/MemberSchema";

export async function getFounder(): Promise<IMember[]> {
  await connectMongo();
  try {
    const founders = await MemberModel.find({ Role: "Founder" });
    return founders as IMember[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
