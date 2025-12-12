'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    // Langsung set cookie aja
    const cookieStore = await cookies();
    cookieStore.set('auth_token', 'logged_in', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  } catch (error) {
    console.error('Authentication error:', error);
    return 'An error occurred. Please try again.';
  }
  
  // Redirect di luar try-catch
  redirect('/dashboard');
}

export async function logout() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('auth_token');
  } catch (error) {
    console.error('Logout error:', error);
  }
  
  redirect('/');
}