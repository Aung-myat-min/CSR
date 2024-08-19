import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  
  // Get hostname of request (e.g. admin.localhost:3000)
  const hostname = req.headers.get("host")!;

  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

  // Handling for `admin.localhost:3000` domain
  if (hostname === `admin.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}` || hostname === `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/admin`) {
    return NextResponse.rewrite(
      new URL(`/csrsadmin${path === "/" ? "" : path}`, req.url),
    );
  }

  // Allow requests to pass through for other domains
  return NextResponse.next();
}
