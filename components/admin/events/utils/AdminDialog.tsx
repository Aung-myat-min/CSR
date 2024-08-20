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

export default function AdminDialog() {
  const [date, setDate] = useState<Date>();
  const form = useForm();
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
              <section className="grid grid-cols-3 h-full gap-3">
                <ImagePick />
                <ImagePick />
                <ImagePick />
                <ImagePick />
                <ImagePick />
                <ImagePick />
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
