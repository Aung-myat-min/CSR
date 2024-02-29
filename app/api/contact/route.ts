import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "./sendEmail";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = formData.get("email") || "";
  const message = formData.get("message") || "";
  const sendingEmail = await sendMail(email, message);
  if (!sendingEmail) {
    return NextResponse.json({
      status: "error",
      message: "sending email failed",
    });
  }
  return NextResponse.json({
    status: "success",
    message: "email sent successfully",
  });
}
