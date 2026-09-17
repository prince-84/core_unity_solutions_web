import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto') || 'https';

  const isWww = host.startsWith('www.');
  const isHttp = proto === 'http';

  // 301 Permanent Redirect for HTTP -> HTTPS and www -> non-www
  if (isWww || isHttp) {
    const cleanHost = host.replace(/^www\./i, '');
    const redirectUrl = new URL(
      `https://${cleanHost}${request.nextUrl.pathname}${request.nextUrl.search}`
    );
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static assets & internal routes
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
