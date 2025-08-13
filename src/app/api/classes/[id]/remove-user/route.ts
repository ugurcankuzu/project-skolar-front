import { IApiResponse } from "@/types/fetchWrapper";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const urlParams = await params;
    const id = urlParams.id;
    const cookieStore = await cookies();
    const body = await req.json();

    const res = await fetch(
      process.env.API_URL + "/classes/" + id + "/remove-user",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(body),
      }
    );
    const data: IApiResponse<string> = await res.json();
    if (!res.ok)
      return NextResponse.json(
        {
          success: false,
          message: data.message,
        },
        { status: res.status }
      );
    return NextResponse.json({
      success: true,
      message: data.message,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occured.",
      },
      { status: 500 }
    );
  }
}
