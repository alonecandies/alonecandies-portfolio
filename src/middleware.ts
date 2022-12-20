import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (url.pathname.endsWith('.html')) {
    url.pathname = url.pathname.replace(/\.html$/, '');
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
