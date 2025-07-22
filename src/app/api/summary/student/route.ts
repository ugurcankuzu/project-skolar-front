import getJWT from "@/helpers/getJWT";
import TDashboardSummaryStudent from "@/types/dashboardSummaryStudent";
import { IApiResponse } from "@/types/fetchWrapper";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tkn = await getJWT();
    const res = await fetch(
      process.env.API_URL + "/dashboard/summary/student",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tkn}`,
        },
      }
    );
    const data: IApiResponse<TDashboardSummaryStudent> = await res.json();
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
          data: data.data,
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
