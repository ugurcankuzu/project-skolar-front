import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const cookie = await cookies();
  const accessTkn = cookie.get("skolar_access_token");
  const authRoutes = ["/login", "/signup"];
  if (!accessTkn?.value) {
    if (!authRoutes.includes(req.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else {
    if (
      req.nextUrl.pathname === "/login" ||
      req.nextUrl.pathname === "/signup"
    ) {
      return NextResponse.redirect(new URL("/skolar", req.url));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
