import { NextResponse } from "next/server";
import getTotalEvents from "./utils/getTotalEvents";
import getTotalMembers from "./utils/getTotalMembers";
import getTotalMoneyDonated from "./utils/getTotalMoneyDonated";

export async function GET() {
  try {
    const totalEvents = await getTotalEvents();
    const totalMoney = await getTotalMoneyDonated();
    const totalMembers = await getTotalMembers();

    return NextResponse.json(
      {
        events: totalEvents,
        money: totalMoney,
        members: totalMembers,
        message: "success",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "failed" }, { status: 400 });
  }
}
