import { IApiResponse } from "@/types/fetchWrapper";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ classId: string; topicId: string; topicNoteId: string }>;
  }
) {
  try {
    const { classId, topicId, topicNoteId } = await params;
    const cookieStore = await cookies();
    const res = await fetch(
      process.env.API_URL + "/topics/" + topicId + "/notes/" + topicNoteId,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify({
          classId: classId,
        }),
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
    return NextResponse.json(
      {
        success: true,
        message: "Note deleted successfully",
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
