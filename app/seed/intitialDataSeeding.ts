import MemberModel from "@/Schemas/MemberSchema";
import connectMongo from "../db/mongoConnect";
import MemberData from "./members.json";

export default async function initDataSeeding() {
  await connectMongo();
  MemberModel.insertMany(MemberData);
}
