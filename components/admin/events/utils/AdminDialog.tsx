"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import ImagePick from "./ImagePick";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function AdminDialog() {
  const [date, setDate] = useState<Date>();
  const [eventTime, setEventTime] = useState(0);
  const form = useForm();
  const members = [
    {
      id: 1,
      name: "Aung Myat Min",
    },
    {
      id: 2,
      name: "Phyo Min Khant",
    },
    {
      id: 3,
      name: "Wai Yan Phone Myint",
    },
  ];
  return (
    //title
    //description
    //main photo
    //sub photos
    //date
    //donated amount
    //participated members
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent className="h-3/5 w-[875px] max-w-none">
        <DialogHeader>
          <DialogTitle>Event Form</DialogTitle>
          <DialogDescription className="h-full">
            <form action="#" method="post" className="w-full h-full">
              {/* <section className="flex flex-col h-full w-full justify-evenly">
                <div className="flex flex-col gap-4">
                  <Label htmlFor="title" className="text-lg">
                    Event Title
                  </Label>
                  <Input id="title" placeholder="Event Name" type="text" />
                </div>
                <div className="flex flex-col gap-4">
                  <Label htmlFor="description" className="text-lg">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="description... "
                    rows={4}
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
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        className="bg-white"
                        mode="single"
                        selected={date}
                        onSelect={setDate}
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
                    type="number" //TODO: format number
                  />
                </div>
              </section> */}

              {/* PHOTO SECTION */}

              {/* <section className="grid grid-cols-3 h-full gap-4 items-end">
                <div>
                  <Label className="text-lg">Main Photo</Label>
                  <ImagePick height={48} />
                </div>
                <div>
                  <Label className="text-md">Sub Photos</Label>
                  <ImagePick />
                </div>
                <ImagePick />
                <ImagePick />
                <ImagePick />
                <ImagePick />
              </section> */}

              {/* MEMBERS SECTION */}

              <section>
                <p className="w-full p-2 bg-slate-400 text-lg text-center rounded">
                  Note: Don't add members if this is a future event.
                </p>
                <div>
                  <div>
                    <p>Future Event: </p>
                    <Switch
                      value={eventTime}
                      onChange={() => {
                        setEventTime(eventTime == 0 ? 1 : 0);
                      }}
                    />
                  </div>
                  <div></div>
                  <div className="relative w-full max-w-xs">
                    <input
                      type="text"
                      name="member"
                      id="member"
                      list="members"
                      placeholder="Enter member name"
                      className="w-full px-4 py-2 bg-slate-200 text-black border border-gray-300 rounded"
                    />
                    <datalist
                      id="members"
                      className="absolute z-10 w-full max-w-xs bg-white border border-gray-300 rounded"
                      style={{ maxHeight: "200px", overflowY: "auto" }}
                    >
                      {members.map((member) => (
                        <option value={member.name} key={member.id} />
                      ))}
                    </datalist>
                  </div>
                </div>
                <CustomDropdown members={members} />
              </section>
            </form>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-auto">
          <Button className="bg-slate-500">Previous</Button>
          <Button className="">Next</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const CustomDropdown = ({ members }) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (value) => {
    setInputValue(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        name="member"
        id="member"
        placeholder="Enter member name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 100)} // Delay to allow click event on dropdown items
        className="w-full px-4 py-2 bg-slate-200 text-black border border-gray-300 rounded"
      />
      {isOpen && (
        <div
          className="absolute z-10 w-full max-w-xs bg-white border border-gray-300 rounded mt-1"
          style={{ maxHeight: "200px", overflowY: "auto" }}
        >
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => handleSelect(member.name)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                {member.name}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results</div>
          )}
        </div>
      )}
    </div>
  );
};
