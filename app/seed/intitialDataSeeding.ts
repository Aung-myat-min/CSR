import MemberModel from "@/Schemas/MemberSchema";
import connectMongo from "../db/mongoConnect";
import MemberData from "./members.json";
import EventModel from "@/Schemas/EventSchema";
import EventData from "./events.json";

export default async function initDataSeeding() {
  await connectMongo();
  // MemberModel.insertMany(MemberData);
  EventModel.insertMany(EventData);
}
