"use server";
import connectMongo from "@/app/db/mongoConnect";
import MemberModel, { IMember } from "@/Schemas/MemberSchema";

export async function getConentWriter(): Promise<IMember[]> {
  await connectMongo();
  try {
    const CW = await MemberModel.find({ Role: "Content Writer" });
    return CW as IMember[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
