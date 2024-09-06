"use server";
import mongoose, { Document, Schema } from "mongoose";

export interface IEvent extends Document {
  _id: number;
  EventName: string;
  EventDescription: string;
  EventPhotoURL: string;
  EventPhotoList?: string[];
  DonatedAmount?: number;
  EventDate: Date;
  Completed: boolean;
  MemberLists?: number[];
}

const EventSchema: Schema = new Schema({
  _id: { type: Number, required: true },
  EventName: { type: String, required: true },
  EventDescription: { type: String, required: true },
  EventPhotoURL: { type: String, required: true },
  EventPhotoList: { type: [String], required: false },
  DonatedAmount: { type: Number, required: false },
  EventDate: { type: Date, required: true },
  Completed: { type: Boolean, required: true },
  MemberLists: [{ type: [Number], required: false, default: [] }],
});

export type IEventData = Pick<
  IEvent,
  | "_id"
  | "EventName"
  | "EventDescription"
  | "EventPhotoURL"
  | "EventPhotoList"
  | "DonatedAmount"
  | "EventDate"
  | "Completed"
  | "MemberLists"
>;

const EventModel =
  mongoose.models.Event || mongoose.model<IEvent>("Event", EventSchema);
export default EventModel;
