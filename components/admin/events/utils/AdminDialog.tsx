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
import React, { useState } from "react";
import ImagePick from "./ImagePick";
import MemberSelect from "./MemberSelect";
import { Calendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import CancelButton from "./CancelButton";

export default function AdminDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [date, setDate] = useState<Date>();
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm();

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="h-3/5 w-[875px] max-w-none">
        <DialogHeader>
          <DialogTitle>Event Form</DialogTitle>
          <DialogDescription className="h-full">
            <form
              action="#"
              method="post"
              className="w-full h-full"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {/* Section 1: Event Details */}
              {currentStep === 1 && (
                <section className="flex flex-col h-full w-full justify-evenly">
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
                </section>
              )}

              {/* Section 2: Photo Upload */}
              {currentStep === 2 && (
                <section className="grid grid-cols-3 h-full gap-4 items-end">
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
                </section>
              )}

              {/* Section 3: Member Selection */}
              {currentStep === 3 && (
                <section className="h-full">
                  <p className="w-full p-2 bg-slate-400 text-lg text-center rounded text-white">
                    Note: Don't add members if this is a future event.
                  </p>
                  <div className="relative w-full h-full flex flex-row items-center">
                    <MemberSelect />
                  </div>
                </section>
              )}
            </form>
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
            <CancelButton func={() => {}}>
              <Button type="submit" className="bg-green-500">
                Done
              </Button>
            </CancelButton>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
