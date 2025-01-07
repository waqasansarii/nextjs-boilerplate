import axios from "axios";
import next from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { apiClient } from "./lib/api-client";

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const currentPath = url.pathname;

  // Allow static assets, API routes, and public paths without interception
  //   if (currentPath.startsWith("/_next") || currentPath.startsWith("/api") || currentPath === "/favicon.ico") {
  //     return NextResponse.next();
  //   }

  // Avoid middleware for /auth/signin and /dashboard to prevent infinite loops
  //   if (currentPath === "/auth/signin" || currentPath === "/dashboard") {
  //     return NextResponse.next();
  //   }
  try {
    const cookieHeader = request.headers.get("cookie") || "";
    const res = await apiClient.get("/users/profile", {
      withCredentials: true,

      headers: {
        Cookie: cookieHeader || "",
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      // User is authenticated, allow access or redirect to dashboard
      if (currentPath.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
      return NextResponse.next();
    } else {
      // User is not authenticated, redirect to signin
      if (currentPath == "/dashboard") {
        return NextResponse.redirect(new URL("/auth/signin", request.url));
      }
      return NextResponse.next();
    }
  } catch (error) {
    // console.error("Error fetching profile:", error);
    if (currentPath !== "/auth/signin") {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!_next/static|api|favicon.ico).*)"],
};
