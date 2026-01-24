import { IApiResponse } from "@/types/fetchWrapper";
import TTopicNoteBlock from "@/types/TopicNoteBlock";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ topicId: string; topicNoteId: string }> }
) {
    try {
        const urlParams = await params;
        const { topicId, topicNoteId } = urlParams;
        const cookieStore = await cookies();

        const res = await fetch(
            `${process.env.API_URL}/topics/${topicId}/notes/${topicNoteId}/blocks`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Cookie: cookieStore.toString(),
                },
            }
        );

        const data: IApiResponse<TTopicNoteBlock[]> = await res.json();

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
