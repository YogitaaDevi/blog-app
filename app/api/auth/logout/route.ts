import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  // Clear the auth cookies
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
  cookieStore.delete('auth_status');
  cookieStore.delete('user_info');
  
  // Redirect to main app home page
  return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_MAIN_APP_URL || 'http://localhost:3000'));
}
