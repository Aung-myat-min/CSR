import MemberModel from "@/Schemas/MemberSchema";

const getTotalMembers = async () => {
  try {
    const totalMembers = await MemberModel.countDocuments();
    return totalMembers;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export default getTotalMembers;
