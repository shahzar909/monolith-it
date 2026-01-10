import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Lead from "../../../models/Lead";

export async function POST(request: Request) {
  try {
    const { name, email, phone, countryCode } = await request.json();

    if (!name || !email || !phone || !countryCode) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    await Lead.create({
      name,
      email,
      phone,
      countryCode,
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
