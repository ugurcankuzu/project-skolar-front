import { IApiResponse } from "@/types/fetchWrapper";
import TTopicNoteBlock from "@/types/TopicNoteBlock";

export default async function getTopicNoteBlocks(
    topicId: number,
    noteId: number
): Promise<IApiResponse<TTopicNoteBlock[]>> {
    const res = await fetch(
        `/api/topics/${topicId}/notes/${noteId}/blocks`
    );
    const data = await res.json();
    return data;
}
