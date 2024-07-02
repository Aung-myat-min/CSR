import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "sorry this api is still under development" },
    { status: 404 }
  );
}
