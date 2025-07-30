import { IApiResponse } from "@/types/fetchWrapper";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await fetch(process.env.API_URL + "/classes/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: req.headers.get("cookie") || "",
      },
      body: JSON.stringify(body),
    });
    const data: IApiResponse<{
      id: number;
      classId: number;
      joinedAt: string;
    }> = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          message: data.message,
        },
        { status: res.status }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Classroom joined successfully",
      },
      { status: res.status }
    );
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
