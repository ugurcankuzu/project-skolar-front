import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import verifyToken from "./helpers/verifyToken";

const AUTH_ROUTES = ["/login", "/signup"];
const PUBLIC_ROUTES = ["/"];
const PROTECTED_ROUTES = ["/skolar"];

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const isRouteProtected = PROTECTED_ROUTES.some((route) =>
    url.pathname.startsWith(route)
  );
  const isRoutePublic = PUBLIC_ROUTES.some((route) =>
    url.pathname.startsWith(route)
  );
  const isRouteAuth = AUTH_ROUTES.some((route) =>
    url.pathname.startsWith(route)
  );
  const isUserAuthenticated = (await verifyToken()).success;
  console.log("User auth:" + isUserAuthenticated);

  //1 -> User authenticated ve tekrar authentication routelara erişmek istiyor. (Login, Signup)
  if (isUserAuthenticated && isRouteAuth) {
    return NextResponse.redirect(new URL("/skolar", req.url));
  }
  //2 -> User Authenticated değil ve protected routelara erişmek istiyor.
  if (!isUserAuthenticated && isRouteProtected) {
    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("skolar_access_token");
    return response;
  }
  return NextResponse.next();
}
export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
