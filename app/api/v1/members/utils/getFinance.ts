"use server";
import connectMongo from "@/app/db/mongoConnect";
import MemberModel, { IMember } from "@/Schemas/MemberSchema";

export async function getFinance(): Promise<IMember[]> {
  await connectMongo();
  try {
    const finances = await MemberModel.find({ Role: "Finance" });
    return finances as IMember[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
