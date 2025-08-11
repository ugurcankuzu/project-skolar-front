import getParticipantsInClass from "@/helpers/getParticipantsInClass";
import swrFetchAdapter from "@/helpers/swrFetchAdapter";
import TParticipant from "@/types/participant";
import useSWR from "swr";

const SWR_KEY = "participantsInClassroom";
export default function useParticipantsInClassSWR(classId: number) {
  const { data, isLoading, error } = useSWR(SWR_KEY, () => {
    const fetchAdapterWithArgs = swrFetchAdapter<TParticipant[], [number]>(
      getParticipantsInClass
    );
    return fetchAdapterWithArgs(classId);
  });
  return {
    participants: data,
    isLoading,
    error,
  };
}
