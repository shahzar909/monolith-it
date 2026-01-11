import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  // remove the admin token cookie
  cookies().delete("admin_token");

  // redirect to admin login
  return NextResponse.redirect(
    new URL("/admin/login", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000")
  );
}
