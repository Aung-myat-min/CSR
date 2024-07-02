"use server";

import connectMongo from "@/app/db/mongoConnect";
import EmailtemplateV2 from "@/components/contactuspage/EmailTemplate";
import MessageModel from "@/Schemas/MessagesSchema";
import { render } from "@react-email/render";
import { unstable_noStore } from "next/cache";
const nodemailer = require("nodemailer");

const ourEmail = process.env.EMAIL;

export async function sendEMail(formData: FormData) {
  unstable_noStore(); //because this is a post action
  try {
    await connectMongo();
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const totalMessage = (await MessageModel.countDocuments()) || 0;
    const id = totalMessage + 1;
    const time = Date.now();

    const newMessage = await MessageModel.create({
      _id: id,
      email,
      message,
      time,
    });

    await newMessage.save();

    const emailSentingStatus = await sendMail(email);

    if (emailSentingStatus === 0) {
      return "sending email failed";
    }

    return "sent email successfully";
  } catch (error) {
    console.error(error);
    return "sending email failed";
  }
}

async function sendMail(email: string) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const emailHTML = render(EmailtemplateV2({ userFirstname: email }));
    const emailOptions = {
      from: ourEmail,
      to: email,
      subject: "We are happy to get in touch with you",
      html: emailHTML,
    };
    await transporter
      .sendMail(emailOptions)
      .then(() => {
        return 1;
      })
      .catch((error: any) => {
        console.error("Error sending email:", error);
        return 0;
      });
  } catch (error) {
    console.log(error);
    return 0;
  }
}
