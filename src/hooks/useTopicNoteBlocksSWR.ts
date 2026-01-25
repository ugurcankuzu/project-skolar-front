"use client";
import getTopicNoteBlocks from "@/helpers/getTopicNoteBlocks";
import swrFetchAdapter from "@/helpers/swrFetchAdapter";
import TTopicNoteBlock from "@/types/TopicNoteBlock";
import useSWR from "swr";

const SWR_KEY = "topicNoteBlocks";

export default function useTopicNoteBlocksSWR(
    topicId: number,
    noteId: number
) {
    const { data, isLoading, error } = useSWR(
        [SWR_KEY, topicId, noteId],
        () => {
            const fetchAdapterWithArgs = swrFetchAdapter<
                TTopicNoteBlock[],
                [number, number]
            >(getTopicNoteBlocks);
            return fetchAdapterWithArgs(topicId, noteId);
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
