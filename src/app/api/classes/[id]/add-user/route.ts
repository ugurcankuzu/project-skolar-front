import { IApiResponse } from "@/types/fetchWrapper";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } = await params;
    const body = await req.formData();
    const cookieStore = await cookies();
    const res = await fetch(
      process.env.API_URL + "/classes/" + id + "/add-user",
      {
        method: "POST",
        headers: {
          Cookie: cookieStore.toString(),
        },
        body,
      }
    );
    const data: IApiResponse<string> = await res.json();
    if (!res.ok)
      return NextResponse.json(
        { success: false, message: data.message },
        { status: res.status }
      );
    return NextResponse.json(
      { success: true, message: data.message },
      { status: res.status }
    );
  } catch (e) {
    return NextResponse.json(
      { success: false, message: (e as Error).message },
      { status: 500 }
    );
  }
}
