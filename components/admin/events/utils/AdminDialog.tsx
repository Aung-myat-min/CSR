"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { PopoverContent } from "@radix-ui/react-popover";
import { format } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import ImagePick from "./ImagePick";
import MemberSelect, { MemberSelectProps } from "./MemberSelect";
import { Calendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import CancelButton from "./CancelButton";
import { IEvent, IEventData } from "@/Schemas/EventSchema";
import { fetchMemberDetails } from "@/app/csrsadmin/apis/members/admin_members";
import MemberList from "@/app/(overview)/about/page";
import {
  updateEvent,
  uploadPhotoToBlob,
} from "@/app/csrsadmin/apis/events/admin_events";

interface AdminDialogProps {
  event?: IEvent;
  children: React.ReactNode;
}

export default function AdminDialog({ event, children }: AdminDialogProps) {
  const eventDate = event?.EventDate ? new Date(event.EventDate) : new Date();
  const isValidDate = !isNaN(eventDate.getTime()); // Check if the parsed date is valid
  const [currentStep, setCurrentStep] = useState(1);

  //first section
  const [title, setTitle] = useState(event?.EventName || "");
  const [description, setDescription] = useState(event?.EventDescription || "");
  const [donatedAmount, setDonatedAmount] = useState(event?.DonatedAmount);
  const [date, setDate] = useState<Date>(isValidDate ? eventDate : new Date());

  //second section
  const [mainPhoto, setMainPhoto] = useState<File | string | undefined>(
    event?.EventPhotoURL
  );

  //set the sub photos if they are not set (undefined)
  const photoList = event?.EventPhotoList
    ? [
        ...event.EventPhotoList,
        ...Array(5 - event.EventPhotoList.length).fill(undefined),
      ].slice(0, 5)
    : [undefined, undefined, undefined, undefined, undefined];

  const [eventPhotos, setEventPhotos] =
    useState<(File | string | undefined)[]>(photoList);

  //third section
  const [eventTime, setEventTime] = useState(event?.Completed);
  const [members, setMembers] = useState<MemberSelectProps[]>([]);

  // Fetch member details based on the member IDs
  useEffect(() => {
    async function loadMembers() {
      try {
        if (event?.MemberLists) {
          const memberData = await fetchMemberDetails(event.MemberLists);
          if (typeof memberData == "string") {
            setMembers(JSON.parse(memberData) as MemberSelectProps[]);
          } else {
            alert("Fetching Members for existing members went wrong");
          }
        }
      } catch (error) {
        console.error("Failed to load members:", error);
      }
    }

    loadMembers();
  }, [event?.MemberLists]);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleFormSubmit = async () => {
    const memberIdList = members.map((member: MemberSelectProps) => member._id);

    // Upload main photo if it's a File
    if (mainPhoto instanceof File) {
      try {
        const mainPhotoUrl = await uploadPhoto(mainPhoto);
        if (mainPhotoUrl) {
          setMainPhoto(mainPhotoUrl); // Set the uploaded URL back to the state
        }
      } catch (error) {
        console.error("Failed to upload main photo:", error);
      }
    }

    // Iterate over eventPhotos, upload each one if it's a File
    const uploadedPhotos = await Promise.all(
      eventPhotos.map(async (photo, index) => {
        if (photo instanceof File) {
          try {
            const photoUrl = await uploadPhoto(photo);
            return photoUrl;
          } catch (error) {
            console.error(`Failed to upload photo ${index}:`, error);
            return photo;
          }
        } else {
          return photo; // Return the existing photo URL if it's not a File
        }
      })
    );

    setEventPhotos(uploadedPhotos as (string | undefined)[]); // Update the state with the uploaded URLs

    // Continue with form submission logic here (e.g., updating the event)
    const updateEventData: IEventData = {
      _id: event!._id,
      EventName: title,
      EventDescription: description,
      EventPhotoURL: mainPhoto as string,
      EventPhotoList: uploadedPhotos as string[],
      DonatedAmount: donatedAmount,
      EventDate: date,
      Completed: eventTime ?? false,
      MemberLists: memberIdList,
    };

    const updatedEvent = await updateEvent(updateEventData);
    if (!updatedEvent) {
      alert("Sorry, something went wrong!");
    }
  };

  async function uploadPhoto(image: File): Promise<string | null> {
    const formData = new FormData();
    formData.append("image", image); // 'image' should match the backend field name

    try {
      const response = await uploadPhotoToBlob(formData);

      return response;
    } catch (error) {
      console.error("Failed to upload image:", error);
      return null;
    }
  }

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="h-3/5 w-[875px] max-w-none">
        <DialogHeader>
          <DialogTitle>Event Form</DialogTitle>
          <DialogDescription className="h-full">
            <div className="w-full h-full">
              {/* Section 1: Event Details */}
              {currentStep === 1 && (
                <section className="flex flex-col h-full w-full justify-evenly">
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="title" className="text-lg">
                      Event Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="Event Name"
                      type="text"
                      value={title}
                      onChange={(v) => {
                        setTitle(v.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="description" className="text-lg">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="description... "
                      rows={4}
                      value={description}
                      onChange={(v) => {
                        setDescription(v.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="date" className="text-lg">
                      Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          className="bg-white"
                          mode="single"
                          selected={date}
                          onSelect={handleDateSelect}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Label htmlFor="donated" className="text-lg">
                      Donated Amount:
                    </Label>
                    <Input
                      id="donated"
                      placeholder="1,000,000"
                      type="number"
                      value={donatedAmount}
                      onChange={(v) => {
                        setDonatedAmount(parseInt(v.target.value));
                      }}
                    />
                  </div>
                </section>
              )}

              {/* Section 2: Photo Upload */}
              {currentStep === 2 && (
                <section className="grid grid-cols-3 h-full gap-4 items-end">
                  <div>
                    <Label className="text-lg">Main Photo</Label>
                    <ImagePick
                      height={48}
                      img={mainPhoto}
                      setStateAction={setMainPhoto}
                    />
                  </div>
                  <div>
                    <Label className="text-md">Sub Photos</Label>
                    <ImagePick
                      img={eventPhotos[0]}
                      setStateAction={setEventPhotos}
                      index={0}
                    />
                  </div>
                  <ImagePick
                    img={eventPhotos[1]}
                    setStateAction={setEventPhotos}
                    index={1}
                  />
                  <ImagePick
                    img={eventPhotos[2]}
                    setStateAction={setEventPhotos}
                    index={2}
                  />
                  <ImagePick
                    img={eventPhotos[3]}
                    setStateAction={setEventPhotos}
                    index={3}
                  />
                  <ImagePick
                    img={eventPhotos[4]}
                    setStateAction={setEventPhotos}
                    index={4}
                  />
                </section>
              )}

              {/* Section 3: Member Selection */}
              {currentStep === 3 && (
                <section className="h-full">
                  <p className="w-full p-2 bg-slate-400 text-lg text-center rounded text-white">
                    Note: Don't add members if this is a future event.
                  </p>
                  <div className="relative w-full h-full flex flex-row items-center">
                    <MemberSelect
                      eventTime={eventTime}
                      setEventStatus={setEventTime}
                      selectedMembers={members}
                      setSelectedMembers={setMembers}
                    />
                  </div>
                </section>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>

        {/* Navigation Buttons */}
        <DialogFooter className="mt-auto">
          {currentStep > 1 && (
            <Button className="bg-slate-500" onClick={previousStep}>
              Previous
            </Button>
          )}
          {currentStep < 3 && <Button onClick={nextStep}>Next</Button>}
          {currentStep === 3 && (
            // <CancelButton func={}>
            //   <Button type="submit" className="bg-green-500">
            //     Done
            //   </Button>
            // </CancelButton>
            <Button
              type="submit"
              className="bg-green-500"
              onClick={handleFormSubmit}
            >
              Done
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
