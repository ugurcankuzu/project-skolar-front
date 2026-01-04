"use client";
import getTopics from "@/helpers/getTopics";
import swrFetchAdapter from "@/helpers/swrFetchAdapter";
import TTopic from "@/types/Topics";
import useSWR from "swr";

const SWR_KEY = "topics";

export default function useTopicsSWR(id: number) {
  const { data, isLoading, error } = useSWR([SWR_KEY, id], () => {
    const fetchAdapterWithArgs = swrFetchAdapter<TTopic[], [number]>(getTopics);
    return fetchAdapterWithArgs(id);
  });
  return {
    topics: data,
    isLoading,
    error,
  };
}
