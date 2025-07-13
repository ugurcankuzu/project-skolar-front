import getClassroomsSummary from "@/helpers/getClassroomsSummary";
import swrFetchAdapter from "@/helpers/swrFetchAdapter";
import TClassroomSummary from "@/types/ClassroomSummary";
import useSWR from "swr";

const SWR_KEY = "classroomsSummary";

export default function useClassroomsSummarySWR() {
  const { data, isLoading, error } = useSWR(
    SWR_KEY,
    swrFetchAdapter<TClassroomSummary[], []>(getClassroomsSummary)
  );
  if (error) console.log(error);
  return {
    classrooms: data,
    isLoading,
    error,
  };
}
