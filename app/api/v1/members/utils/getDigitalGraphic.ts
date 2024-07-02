"use server";
import connectMongo from "@/app/db/mongoConnect";
import MemberModel, { IMember } from "@/Schemas/MemberSchema";

export async function getDigitalGraphic(): Promise<IMember[]> {
  await connectMongo();
  try {
    const DG = await MemberModel.find({ Role: "Digital Graphic" });
    return DG as IMember[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
