"use server";
import connectMongo from "@/app/db/mongoConnect";
import MemberModel, { IMember } from "@/Schemas/MemberSchema";

export async function getDeveloper(): Promise<IMember[]> {
  await connectMongo();
  try {
    const developers = await MemberModel.find({ Role: "Developer" });
    return developers as IMember[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
