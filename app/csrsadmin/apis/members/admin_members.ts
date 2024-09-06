"use server";
import connectMongo from "@/app/db/mongoConnect";
import { MemberSelectProps } from "@/components/admin/events/utils/MemberSelect";
import MemberModel from "@/Schemas/MemberSchema";

/**
 * Fetches members by their IDs and returns them as a JSON string.
 * @param {number[]} memberIds IDs of the members to fetch
 * @returns {Promise<String | null>} The members as a JSON string, or null if there was an error.
 */
async function fetchMemberDetails(memberIds: number[]): Promise<String | null> {
  await connectMongo();
  try {
    const members: MemberSelectProps[] = await MemberModel.find(
      { _id: { $in: memberIds[0] } }, //I do this because of an error
      { Name: 1, Batch: 1 }
    );

    return JSON.stringify(members);
  } catch (error) {
    console.error("Failed to fetch members:", error);
    return null;
  }
}

async function searchMember(name: string): Promise<String | null> {
  await connectMongo();
  try {
    const members = await MemberModel.find(
      { Name: { $regex: name, $options: "i" } }, // Case-insensitive search
      { _id: 1, Name: 1, Batch: 1 } // Select only _id, Name, and Batch
    )
      .sort({ Name: 1 }) // Sort by Name in ascending order
      .limit(7) // Limit the results to 7 members
      .exec();

    return JSON.stringify(members);
  } catch (error) {
    console.error("Failed to search members:", error);
    return null;
  }
}

export { fetchMemberDetails, searchMember };
