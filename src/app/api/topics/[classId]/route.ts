import { IApiResponse } from "@/types/fetchWrapper";
import TTopic from "@/types/Topics";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ classId: string }> }
) {
  try {
    const urlParams = await params;
    const { classId } = urlParams;
    const cookieStore = await cookies();
    const res = await fetch(process.env.API_URL + "/topics/" + classId + "/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
    });
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
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ classId: string }> }
) {
  try {
    const formData = await req.formData();
    const cookieStore = await cookies();
    const urlParams = await params;
    const { classId } = urlParams;
    const res = await fetch(process.env.API_URL + "/topics/" + classId + "/", {
      method: "POST",
      headers: {
        Cookie: cookieStore.toString(),
      },
      body: formData,
    });
    console.log(res);
    const data: IApiResponse<TTopic> = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: data.message },
        { status: res.status }
      );
    }
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
