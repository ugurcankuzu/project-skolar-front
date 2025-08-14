import { IApiResponse } from "@/types/fetchWrapper";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ classId: string; topicId: string }> }
) {
  try {
    const cookieStore = await cookies();
    const { classId, topicId } = await params;
    const res = await fetch(
      process.env.API_URL +
        `/topics/${classId}/${topicId}
      `,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
      }
    );
    const data: IApiResponse<string> = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          message: data.message,
        },
        { status: res.status }
      );
    } else {
      return NextResponse.json(
        {
          success: true,
          message: "Topic deleted successfully",
        },
        { status: res.status }
      );
    }
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
