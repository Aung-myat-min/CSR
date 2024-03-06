import { truncate } from "fs/promises";
import mongoose, { Schema, Document } from "mongoose";

// Define an interface representing a document in MongoDB
export interface IMember extends Document {
  _id: number;
  Photo: string;
  Name: string;
  Role:
    | "Founder"
    | "Finance"
    | "Content writer"
    | "Graphic Designer"
    | "Volunteer Head"
    | "Facilitator"
    | "Volunteer"
    | "Designer"
    | "Developer";
  Since: Date;
}

// Define the schema
const MemberSchema: Schema = new Schema({
  _id: { type: Number, required: true },
  Photo: { type: String, required: true },
  Name: { type: String, required: true },
  Role: {
    type: String,
    enum: [
      "Founder",
      "Finance",
      "Content writer",
      "Graphic Designer",
      "Volunteer Head",
      "Facilitator",
      "Volunteer",
      "Designer",
      "Developer",
    ],
    required: true,
  },
  Since: { type: Date, required: true },
});

// Compile the model
const MemberModel =
  mongoose.models.Member || mongoose.model<IMember>("Member", MemberSchema);

export default MemberModel;
