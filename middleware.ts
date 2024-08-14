import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import {
    apiPrefix,
    authRoutes,
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
} from "@/routes";

export async function middleware(req: NextRequest) {
    const { nextUrl } = req;

    // Retrieve token from cookies or URL query params
    const cookieStore = cookies();
    const cookie = cookieStore.get('authToken');
    const token = cookie?.value;
    console.log("token from mdware", token);

    // Determine the type of route
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    // Allow API auth routes to proceed without checks
    if (isApiAuthRoute) {
        return NextResponse.next();
    }

    // Handle public routes and prevent them from being protected
    if (isPublicRoute) {
        return NextResponse.next();
    }

    // Handle authentication routes
    if (isAuthRoute) {
        if (!token) {
            // Redirect to sign-in if no token is found
            return NextResponse.redirect(new URL('/signin', req.url));
        }

        // Check if JWT_SECRET is defined and is a string
        if (typeof process.env.JWT_SECRET !== 'string') {
            throw new Error('JWT_SECRET is not defined or not a string');
        }

        // Verify token if it exists
        try {
            jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            // Redirect to sign-in if token verification fails
            return NextResponse.redirect(new URL('/signin', req.url));
        }

        // Allow request to continue to dashboard if verification passes
        return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, req.url));
    }

    // Redirect unauthenticated users trying to access protected routes
    if (!token && !isPublicRoute) {
        const callbackUrl = nextUrl.pathname;
        return NextResponse.redirect(
            new URL(`/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`, nextUrl)
        );
    }

    // Allow request to continue by default
    return NextResponse.next();
}

// Middleware configuration: Matching paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next|signin).*)", "/", "/(api|trpc)(.*)"]
}
