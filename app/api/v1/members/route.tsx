import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json(
    { message: "sorry, not allowed to use right now!" },
    { status: 404 }
  );
}
