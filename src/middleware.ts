import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /maria/* (except login), the photo listing API, and the media streaming API
  const isMariaProtected =
    (pathname.startsWith('/maria') && !pathname.startsWith('/maria/login')) ||
    pathname.startsWith('/api/maria-photos') ||
    pathname.startsWith('/api/maria-media');

  if (isMariaProtected) {
    const token = request.cookies.get('maria_session')?.value;
    if (token !== process.env.MARIA_SESSION_TOKEN) {
      if (pathname.startsWith('/api/')) {
        return new NextResponse('Unauthorized', { status: 401 });
      }
      const loginUrl = new URL('/maria/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Protect /flos/* (except login) and /api/flos/*
  const isFLOsProtected =
    (pathname.startsWith('/flos') && !pathname.startsWith('/flos/login')) ||
    pathname.startsWith('/api/flos/');

  if (isFLOsProtected) {
    const token = request.cookies.get('flos_session')?.value;
    if (token !== process.env.FLOS_SESSION_TOKEN) {
      if (pathname.startsWith('/api/')) {
        return new NextResponse('Unauthorized', { status: 401 });
      }
      const loginUrl = new URL('/flos/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/maria/:path*',
    '/api/maria-photos/:path*',
    '/api/maria-media/:path*',
    '/flos/:path*',
    '/api/flos/:path*',
  ],
};
