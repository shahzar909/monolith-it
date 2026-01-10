import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Contact from "../../../models/Contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    await connectDB();

    await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    return NextResponse.json(
      { success: true, message: "Message saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
