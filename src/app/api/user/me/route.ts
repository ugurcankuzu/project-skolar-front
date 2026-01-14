// app/api/user/me/route.ts
import getJWT from "@/helpers/getJWT";
import { IApiResponse } from "@/types/fetchWrapper";
import { TUserProfile } from "@/types/UserProfile";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const tkn = await getJWT();

    if (!tkn) {
      return NextResponse.json(
        {
          success: false,
          message: "No authentication token found",
        },
        { status: 401 }
      );
    }

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${tkn}`);

    const res = await fetch(process.env.API_URL + "/user/me", {
      method: "GET",
      headers: headers,
    });

    console.log("API USER ME RESPONSE:", res.status);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return NextResponse.json(
        {
          success: false,
          message: errorData.message || "Failed to fetch user profile",
        },
        { status: res.status }
      );
    }

    const data: IApiResponse<TUserProfile> = await res.json();

    return NextResponse.json(
      {
        success: true,
        data: data.data,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching user profile:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) { } //Implemented later.
export async function DELETE(req: NextRequest) { } //Implemented later
