import { NextRequest, NextResponse } from "next/server";

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  let body: ContactMessage;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  // In a production environment, integrate an email service (e.g. SendGrid, Nodemailer)
  // to deliver the message to the church's inbox.
  console.log("Contact form submission:", { name, email, subject, message });

  return NextResponse.json(
    { success: true, message: "Your message has been received. We will be in touch soon!" },
    { status: 200 }
  );
}
