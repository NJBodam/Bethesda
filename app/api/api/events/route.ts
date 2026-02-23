import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getEvents, createEvent } from "@/lib/data";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const events = getEvents();
  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { title, date, time, location, description, imageUrl } = body;
  if (!title || !date || !time || !location) {
    return NextResponse.json(
      { error: "title, date, time, and location are required" },
      { status: 400 }
    );
  }
  const event = createEvent({
    title,
    date,
    time,
    location,
    description: description || "",
    imageUrl: imageUrl || "",
  });
  return NextResponse.json(event, { status: 201 });
}
