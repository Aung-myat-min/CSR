"use server";
import connectMongo from "@/app/db/mongoConnect";
import MemberModel, { IMember } from "@/Schemas/MemberSchema";

export async function getDesigner(): Promise<IMember[]> {
  await connectMongo();
  try {
    const designer = await MemberModel.find({ Role: "Designer" });
    return designer as IMember[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
