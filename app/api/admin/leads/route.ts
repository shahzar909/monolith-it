import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { verifyAdminToken } from "@/lib/auth";

export async function GET() {
  const token = cookies().get("admin_token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    verifyAdminToken(token);
  } catch {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  await connectDB();
  const leads = await Lead.find().sort({ createdAt: -1 });

  return NextResponse.json(leads);
}
