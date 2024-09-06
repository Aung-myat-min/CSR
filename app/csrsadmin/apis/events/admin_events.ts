"use server";
import connectMongo from "@/app/db/mongoConnect";
import EventModel, { IEventData } from "@/Schemas/EventSchema";
import { del, put } from "@vercel/blob";

async function updateEvent(event: IEventData): Promise<string | null> {
  await connectMongo();
  try {
    const updatedEvent = await EventModel.findByIdAndUpdate(event._id, event, {
      new: true,
    });

    console.log(event.EventPhotoList);
    return JSON.stringify(updatedEvent);
  } catch (error) {
    console.error("Failed to update event: ", error);
    return null;
  }
}

async function deletePhoto(url: string): Promise<string | null> {
  try {
    await del(url);
    return "";
  } catch (error) {
    console.error("Failed to delete the photo: ", error);
    return null;
  }
}

async function uploadPhotoToBlob(image: FormData): Promise<string | null> {
  try {
    const img = image.get("image") as File;
    const imageUrl = await put("/events/images", img, { access: "public" });
    console.log(imageUrl.url);
    return imageUrl.url;
  } catch (error) {
    console.log("Failed to upload image ", error);
    return null;
  }
}

export { updateEvent, deletePhoto, uploadPhotoToBlob };
