"use client";
import getTopicNoteBlocks from "@/helpers/getTopicNoteBlocks";
import swrFetchAdapter from "@/helpers/swrFetchAdapter";
import TTopicNoteBlock from "@/types/TopicNoteBlock";
import useSWR from "swr";

const SWR_KEY = "topicNoteBlocks";

export default function useTopicNoteBlocksSWR(
    classId: number,
    topicId: number,
    noteId: number
) {
    const { data, isLoading, error } = useSWR(
        [SWR_KEY, classId, topicId, noteId],
        () => {
            const fetchAdapterWithArgs = swrFetchAdapter<
                TTopicNoteBlock[],
                [number, number, number]
            >(getTopicNoteBlocks);
            return fetchAdapterWithArgs(classId, topicId, noteId);
        }
    );

    // Sort blocks by blockOrder
    const sortedBlocks = data
        ? [...data].sort((a, b) => a.blockOrder - b.blockOrder)
        : undefined;

    return {
        blocks: sortedBlocks,
        isLoading,
        error,
    };
}
