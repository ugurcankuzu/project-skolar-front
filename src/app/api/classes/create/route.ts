import getJWT from "@/helpers/getJWT";
import { IApiResponse } from "@/types/fetchWrapper";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const tkn = await getJWT();
    const res = await fetch(process.env.API_URL + "/classes/create", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + tkn,
      },
      body: formData,
    });
    const data: IApiResponse<TClassroom> = await res.json();
    console.log("Ham data", data);
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
        message: data.message,
      },
      { status: res.status }
    );
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
