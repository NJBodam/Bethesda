import { NextResponse } from "next/server";

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const events: Event[] = [
  {
    id: "1",
    title: "Sunday Worship Service",
    date: "2026-03-01",
    time: "10:00 AM",
    location: "Main Sanctuary",
    description: "Join us for our weekly Sunday worship service.",
  },
  {
    id: "2",
    title: "Mid-Week Bible Study",
    date: "2026-02-26",
    time: "7:00 PM",
    location: "Fellowship Hall",
    description: "Deepen your understanding of Scripture with fellow believers.",
  },
  {
    id: "3",
    title: "Youth Night",
    date: "2026-02-28",
    time: "6:30 PM",
    location: "Youth Center",
    description: "An evening of worship, games, and fellowship for youth.",
  },
];

export async function GET() {
  return NextResponse.json(events);
}
