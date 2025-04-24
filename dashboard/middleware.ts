import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl, auth } = req;

  const isAdminRoute = nextUrl.pathname.startsWith("/");
  const isSignInPage = nextUrl.pathname === "/auth/login";
  const isAuthRoute = nextUrl.pathname.startsWith("/auth");

  if (isAdminRoute) {
    if (!auth && !isSignInPage) {
      console.log("Redirecting to sign-in page.");
      if (isAuthRoute) {
        console.log("Accessing auth route, no authentication required.");
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL("/auth/login", nextUrl));
    }

    if (auth && isSignInPage) {
      console.log("Redirecting to admin dashboard.");
      return NextResponse.redirect(new URL("/", nextUrl));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|index.html|robots.txt|images|css|js|fonts).*)",
  ],
};
