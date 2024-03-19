import mongoose, { Schema, Document } from "mongoose";

// Define an interface representing a document in MongoDB
export interface IMember extends Document {
  _id: number;
  Name: string;
  Batch: string;
  Role:
    | "Founder"
    | "Finance"
    | "Content writer"
    | "Digital Graphic"
    | "Volunteer Head"
    | "Facilitator"
    | "Volunteer"
    | "Designer"
    | "Developer";
  Email: string;
  Photo: string;
}

// Define the schema
const MemberSchema: Schema = new Schema({
  _id: { type: Number, required: true, unique: true },
  Name: { type: String, required: true },
  Batch: { type: String, required: true },
  Role: {
    type: String,
    enum: [
      "Founder",
      "Finance",
      "Content Writer",
      "Digital Graphic",
      "Volunteer Head",
      "Facilitator",
      "Volunteer",
      "Designer",
      "Developer",
    ],
    required: true,
  },
  Email: { type: String, required: true },
  Photo: { type: Buffer, required: true },
});

// Compile the model
const MemberModel =
  mongoose.models.Member || mongoose.model<IMember>("Member", MemberSchema);

export default MemberModel;
