import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "./sendEmail";
import { ratelimiter } from "@/app/utils/rate-limiter";

const apiCallLimit = 5;
const duration = "86400s";

export async function POST(request: NextRequest) {
  const ip = request.ip || "127.0.0.1";
  const { success, pending, limit, reset, remaining } = await ratelimiter(
    apiCallLimit,
    duration
  ).limit(ip);
  if (!success) {
    console.log(ip);
    return NextResponse.json(
      { message: "Our Server is busy. Please comeback after sometimes." },
      { status: 429 }
    );
  }

  const formData = await request.formData();
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";
  const sendingEmail = await sendMail(email, message);
  if (!sendingEmail) {
    return NextResponse.json(
      {
        message: "sending email failed",
      },
      {
        status: 500,
      }
    );
  }
  return NextResponse.json(
    {
      message: "email sent successfully",
    },
    {
      status: 200,
    }
  );
}
