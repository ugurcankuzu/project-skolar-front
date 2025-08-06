import getClassroomDetail from "@/helpers/getClassroomDetail";
import swrFetchAdapter from "@/helpers/swrFetchAdapter";
import useSWR from "swr";

const SWR_KEY = "classroomDetail";

export default function useClassroomDetailSWR(clasroomId: number) {
  const { data, isLoading, error } = useSWR(SWR_KEY, () => {
    const fetchAdapterWithArgs = swrFetchAdapter<TClassroom, [number]>(
      getClassroomDetail
    );
    return fetchAdapterWithArgs(clasroomId);
  });
  return {
    classroom: data,
    isLoading,
    error,
  };
}
