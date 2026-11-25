import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/** Envoie la racine vers le français. Les autres langues passent par l'URL. */
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/fr';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
