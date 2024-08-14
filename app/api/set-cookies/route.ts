import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import setCookie from "@/actions/cookies.action";

export async function POST(req: NextRequest) {
    // Parse the request body
    const body = await req.json();
    const authToken = body.authToken;
    console.log("Token", authToken);

    await setCookie(authToken);

    // Return a 200 status code with no content
    return new NextResponse(null, { status: 200 });
}
