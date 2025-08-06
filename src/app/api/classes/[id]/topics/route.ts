import { IApiResponse } from "@/types/fetchWrapper";
import TTopic from "@/types/Topics";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const urlParams = await params;
    const { id } = urlParams;
    const cookieStore = await cookies();
    const res = await fetch(
      process.env.API_URL + "/classes/" + id + "/topics",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
      }
    );
    const data: IApiResponse<TTopic[]> = await res.json();
    if (!res.ok)
      return NextResponse.json(
        { success: false, message: data.message },
        { status: res.status }
      );
    return NextResponse.json(
      { success: true, data: data.data },
      { status: res.status }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: (err as Error).message },
      { status: 500 }
    );
  }
}
