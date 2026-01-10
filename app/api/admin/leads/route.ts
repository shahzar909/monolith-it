export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import connectDB from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { verifyAdminToken } from "@/lib/auth";

export async function GET() {
  try {
    const token = cookies().get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    verifyAdminToken(token);

    await connectDB();

    const leads = await Lead.find().sort({ createdAt: -1 });

    return NextResponse.json({ leads });
  } catch (error) {
    console.error("ADMIN LEADS API ERROR:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
