import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getSermons, createSermon } from "@/lib/data";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const sermons = getSermons();
  return NextResponse.json(sermons);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { title, speaker, date, description, videoUrl, audioUrl } = body;
  if (!title || !speaker || !date) {
    return NextResponse.json(
      { error: "title, speaker, and date are required" },
      { status: 400 }
    );
  }
  const sermon = createSermon({
    title,
    speaker,
    date,
    description: description || "",
    videoUrl: videoUrl || "",
    audioUrl: audioUrl || "",
  });
  return NextResponse.json(sermon, { status: 201 });
}
