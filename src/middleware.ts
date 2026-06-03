import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /maria/* (except login), the photo listing API, and the media streaming API
  const isProtectedPath =
    (pathname.startsWith('/maria') && !pathname.startsWith('/maria/login')) ||
    pathname.startsWith('/api/maria-photos') ||
    pathname.startsWith('/api/maria-media');

  if (isProtectedPath) {
    const token = request.cookies.get('maria_session')?.value;
    if (token !== process.env.MARIA_SESSION_TOKEN) {
      // For API requests, return 401 instead of redirecting
      if (pathname.startsWith('/api/')) {
        return new NextResponse('Unauthorized', { status: 401 });
      }
      const loginUrl = new URL('/maria/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/maria/:path*', '/api/maria-photos/:path*', '/api/maria-media/:path*'],
};
