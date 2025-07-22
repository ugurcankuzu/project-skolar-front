import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const credentials = await req.json();
    const res = await fetch(process.env.API_URL + "/auth/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: credentials.idToken,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          message: data.message || "Login failed",
        },
        { status: res.status }
      );
    }
    const nextResponse = NextResponse.json(data);
    const setCookieHeader = res.headers.get("set-cookie");
    if (setCookieHeader) {
      nextResponse.headers.set("Set-Cookie", setCookieHeader);
    }
    return nextResponse;
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: (err as Error).message,
      },
      { status: 500 }
    );
  }
}
