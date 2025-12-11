import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth_token');
  const pathname = request.nextUrl.pathname;

  // Jika user sudah login dan mengakses login page, redirect ke dashboard
  if (authToken && pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Jika user belum login dan mengakses dashboard, redirect ke login
  if (!authToken && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
