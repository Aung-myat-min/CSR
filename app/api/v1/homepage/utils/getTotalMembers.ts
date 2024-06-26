import connectMongo from "@/app/db/mongoConnect";
import MemberModel from "@/Schemas/MemberSchema";
import { unstable_noStore } from "next/cache";

const getTotalMembers = async () => {
  unstable_noStore();
  await connectMongo();
  try {
    const totalMembers = await MemberModel.countDocuments();
    return totalMembers;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export default getTotalMembers;
