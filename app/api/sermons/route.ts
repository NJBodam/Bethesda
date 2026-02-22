import { NextResponse } from "next/server";

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  series: string;
  description: string;
  videoUrl: string | null;
  audioUrl: string | null;
}

const sermons: Sermon[] = [
  {
    id: "1",
    title: "Walking in Faith",
    speaker: "Pastor John Bodam",
    date: "2026-02-15",
    series: "Faith That Moves Mountains",
    description:
      "Discover how stepping out in faith can transform your life and bring you closer to God's purpose.",
    videoUrl: "https://www.youtube.com/watch?v=example",
    audioUrl: null,
  },
];

export async function GET() {
  return NextResponse.json(sermons[0]);
}
