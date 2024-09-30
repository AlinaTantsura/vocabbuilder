import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = request.cookies.get('token');

  if (isLoggedIn) {
    if (
      request.nextUrl.pathname === '/register' ||
      request.nextUrl.pathname === '/login' ||
      request.nextUrl.pathname === '/'
    ) {
      return NextResponse.redirect(new URL('/dictionary', request.url));
    }
  } else {
    if (
      request.nextUrl.pathname === '/dictionary' ||
      request.nextUrl.pathname === '/recommend' ||
      request.nextUrl.pathname === '/training' ||
      request.nextUrl.pathname === '/'
    ) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/register',
    '/login',
    '/dictionary',
    '/recommend',
    '/training',
  ],
};
