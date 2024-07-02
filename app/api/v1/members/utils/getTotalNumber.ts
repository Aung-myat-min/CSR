// import connectMongo from "@/app/db/mongoConnect";
// import MemberModel from "@/Schemas/MemberSchema";

// const roles = {
//   "1": "*", //find all
//   "2": "Founder",
//   "3": "Finance",
//   "4": "Digital Graphic",
//   "5": "Graphic",
//   "6": "Developer",
//   "7": "Designer",
//   "8": "Others",
// };

// export async function getTotalNumber({ roleNumber }: { roleNumber: string }) {
//   try {
//     await connectMongo();
//     const role = roles[roleNumber as keyof typeof roles];
//     let members;

//     if (role === "*") {
//       members = await MemberModel.find();
//     } else if (role === "Others") {
//       members = await MemberModel.find({
//         Role: { $in: ["Volunteer Head", "Facilitator", "Volunteer"] },
//       });
//     } else {
//       members = await MemberModel.find({ Role: role });
//     }

//     return members;
//   } catch (error) {
//     console.error(error);
//     return 0;
//   }
// }

// export const revalidate = 3600;
