import { IApiResponse } from "@/types/fetchWrapper";
import TTopicNote from "@/types/TopicNote";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ topicId: string }> }
) {
  try {
    //ClassId bypassed we don't need classId for this request. But we had to use this dynamic path
    // and nextjs dynamic route requires all the params to be present in the path.

    const urlParams = await params;
    const topicId = urlParams.topicId;
    const cookieStore = await cookies();
    const body = await req.formData();
    const res = await fetch(
      process.env.API_URL + "/topics/" + topicId + "/notes",
      {
        method: "POST",
        headers: {
          Cookie: cookieStore.toString(),
        },
        body: body,
      }
    );
    console.log(res);
    const data: IApiResponse<TTopicNote> = await res.json();
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
        data: data.data,
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
