"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import TextArea from "@/components/TextArea";
import Label from "@/components/Label";
import InputBox from "@/components/InputBox";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", emailRef.current?.value?.toString() || "");
    formData.append("message", messageRef.current?.value?.toString() || "");
    try {
      await axios.post("/api/contact", formData);
      return "Message Sent!";
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message ||
          "An error occurred while sending the message."
      );
    }
  };

  const getToast = (event: React.FormEvent<HTMLFormElement>) => {
    toast.promise(handleSubmit(event), {
      loading: "Sending...",
      success: () => {
        emailRef.current!.value! = "";
        messageRef.current!.value! = "";
        return "Message Sent!";
      },
      error: (error) => {
        return error.message;
      },
    });
  };

  return (
    <>
      {isClient && (
        <div className="lg:mt-24 md:mt-52 mt-28 flex-grow">
          <section className="">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-5 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                Contact Us
              </h2>
              <p className="mb-8 lg:mb-14 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Got a technical issue? Want to send feedback about features?
                Need details about our plan? Let us know.
              </p>
              <form onSubmit={getToast} className="space-y-8">
                <div>
                  <Label label="Your Email" forInput="email" />
                  <InputBox
                    type="email"
                    placeholder="example@email.com"
                    id="email"
                    ref={emailRef}
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <Label label="Your Message" forInput="message" />
                  <TextArea
                    id="message"
                    placeholder="Leave a comment..."
                    ref={messageRef}
                    required
                  />
                </div>
                <div className="flex ">
                  <Link
                    href={"https://www.facebook.com/gustocsrprogram/"}
                    className="flex items-center"
                  >
                    <FaFacebookF />
                    <p className="text-xs font-medium  ms-1">
                      GUSTO CSR Program
                    </p>
                  </Link>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-main sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
              <Toaster
                toastOptions={{
                  className: "",
                  style: {
                    background: "#015486",
                    color: "#ffe4e6",
                  },
                }}
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
}
