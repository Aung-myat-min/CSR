"use client";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { IEvent } from "@/Schemas/EventSchema";
import { SyncLoader } from "react-spinners";
import CSRLOGO from "@/public/svg/blue_csr_logo.svg";
import { numberFormatter } from "./utils/numberFormatter";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import getTotalEvents from "@/app/api/v1/homepage/utils/getTotalEvents";
import { combineArraysToString } from "../funcitons/combineArraysToString";
import { splitStringIntoTwoArrays } from "../funcitons/splitStringIntoTwoArrays";
import { dateFormatChanger } from "../funcitons/dateFormatter";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<IEvent | null>(null);
  const [totalEvents, setTotalEvents] = useState<number>(0);
  const currentIndex = parseInt(Array.isArray(id) ? id[0] : id, 10);
  const [eventNotFound, setEventNotFound] = useState(false);

  const textShadowStyle = {
    textShadow:
      "1px 1px 2px rgba(0,0,0,.7), 0 0 1em rgba(0,0,0,.3), 0 0 0.2em rgba(0,0,0,.2)",
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`/api/v1/events/${currentIndex}`);
        console.log(response);
        if (!response.ok) {
          const contentType = response.headers.get("Content-Type");
          if (contentType && contentType.includes("application/json")) {
            const errorData = await response.json();
            toast.error(
              errorData.error || "An error occurred while fetching the event."
            );
          } else {
            const text = await response.text();
            toast.error(text || "An error occurred while fetching the event.");
          }
          setEventNotFound(true);
        } else {
          const eventString = await response.json();
          setEvent(eventString);
          setEventNotFound(false);
        }
      } catch (error) {
        console.error(error);
        setEvent(null);
        setEventNotFound(true);
      }
    };

    const fetchEvents = async () => {
      try {
        const events = await getTotalEvents();
        setTotalEvents(events);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvent();
    fetchEvents();
  }, [id, currentIndex]);

  if (eventNotFound) {
    notFound();
    return null; // Ensure that the component stops rendering after calling notFound()
  }

  if (!event) {
    return (
      <div className="w-11/12 h-[100vh] m-auto flex items-center justify-center">
        <SyncLoader color="#02598B" margin={5} size={20} />
      </div>
    );
  }

  let headerFormat = combineArraysToString(
    splitStringIntoTwoArrays(event.EventName)
  );
  const date = dateFormatChanger(event.EventDate.toString());

  const handlePrevious = () => {
    if (currentIndex > 1) {
      if (currentIndex === 3) {
        router.push(`/events/${currentIndex - 2}`);
      } else {
        router.push(`/events/${currentIndex - 1}`);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < totalEvents) {
      if (currentIndex === 1) {
        router.push(`/events/${currentIndex + 2}`);
      } else {
        router.push(`/events/${currentIndex + 1}`);
      }
    }
  };

  let photos = [];
  if (event.EventPhotoList?.length! > 0) {
    for (let i = 0; i < event.EventPhotoList?.length!; i++) {
      photos.push({ src: event.EventPhotoList![i] });
    }
  }
  const inline = {
    style: {
      width: "100%",
      maxWidth: "900px",
      aspectRatio: "3 / 2",
      margin: "0 auto",
    },
  };

  return (
    <main
      className="bg-white bg-opacity-20 dark:bg-black -z-[2] relative"
      style={{
        backgroundImage: `url(${CSRLOGO.src})`,
        backgroundSize: "50%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-full h-full bg-white dark:bg-black opacity-70 -z-[1]"></div>
      <section className="w-11/12 m-auto lg:mt-28 md:mt-24 xl:mt-30 mt-20 text-center">
        <p className="font-bold opacity-75 mb-2 text-sm md:mb-6 md:text-base">
          {date}
        </p>
        <h1 className="font-black text-4xl" style={textShadowStyle}>
          {headerFormat[0]}
          <br />
          {headerFormat[1]}
        </h1>
      </section>
      <div
        className="max-w-[600px] h-fit w-11/12 m-auto flex items-center relative group my-10 flex-col"
        style={{ zIndex: 0 }}
      >
        <Suspense fallback="Image Loading">
          <Image
            className="rounded-2xl my-4 shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]"
            src={event.EventPhotoURL}
            alt={event.EventName}
            priority={false}
            title={event.EventName}
            width={1920}
            height={1080}
          />
        </Suspense>
        <p className="font-bold text-3xl m-2 md:text-4xl">
          Donated Amount:{" "}
          {event.DonatedAmount
            ? numberFormatter(event.DonatedAmount) + " Kyats"
            : ""}
        </p>
      </div>
      <section className="w-9/12 m-auto">
        <h2
          className="font-bold text-2xl md:text-3xl my-6 drop-shadow-xl shadow-black"
          style={textShadowStyle}
        >
          {event.EventName}
        </h2>
        <p className="text-lg ">{event.EventDescription}</p>
      </section>
      <section className="w-9/12 m-auto">
        <h2 className="font-bold text-2xl md:text-3xl my-4">More Photos</h2>
        <div className="">
          <Suspense fallback="Images are Loading. Please Wait">
            {event.EventPhotoList && event.EventPhotoList.length > 0 ? (
              <Lightbox
                slides={photos}
                inline={inline}
                plugins={[Inline, Fullscreen, Slideshow, Zoom]}
                className="h-[20vh]"
              />
            ) : (
              <p>No photos at current</p>
            )}
          </Suspense>
        </div>
      </section>
      <section className="flex items-center justify-center w-9/12 m-auto my-8 gap-10">
        <button
          onClick={handlePrevious}
          disabled={currentIndex <= 1}
          className={`px-4 py-2 rounded bg-blue-500 text-white ${
            currentIndex <= 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= totalEvents}
          className={`px-4 py-2 rounded bg-blue-500 text-white ${
            currentIndex >= totalEvents ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </section>
      <Toaster />
    </main>
  );
}
