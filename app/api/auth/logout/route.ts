import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  // Delete auth cookies
  const cookieStore = await cookies();
  cookieStore.delete("auth_token");
  cookieStore.delete("auth_status");
  cookieStore.delete("user_info");

  // Return success response
  return NextResponse.json({ 
    success: true, 
    message: "Successfully logged out" 
  });
}