import mongoose, { Document, Schema } from "mongoose";

//interface for TS
export interface IMessage extends Document {
  _id: number;
  email: string;
  message: string;
  time: Date;
}

//mongoose schema
const MessageSchema: Schema = new Schema({
  _id: { type: Number, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  time: { type: Date, required: true },
});

const MessageModel =
  mongoose.models.Message || mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;
