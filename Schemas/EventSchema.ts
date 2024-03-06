import mongoose, { Document, Schema } from "mongoose";

interface IEvent extends Document {
  Id: number;
  EventName: string;
  EventDescription: string;
  EventPhotoURL: string;
  EventPhotoList?: string[];
  DonatedAmount?: number;
  EventDate: Date;
}

const EventSchema: Schema = new Schema({
  Id: { type: Number, required: true },
  EventName: { type: String, required: true },
  EventDescription: { type: String, required: true },
  EventPhotoURL: { type: String, required: true },
  EventPhotoList: { type: [String], required: false },
  DonatedAmount: { type: Number, required: false },
  EventDate: { type: Date, required: true },
});

const EventModel = mongoose.model<IEvent>("Event", EventSchema);
export default EventModel;
