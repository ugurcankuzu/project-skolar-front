import TClassroomSummary from "@/types/ClassroomSummary";
import fetchWrapper from "./fetchWrapper";
import getJWT from "./getJWT";

export default async function getClassroomsSummary() {
  const tkn = await getJWT();
  const res = await fetchWrapper<TClassroomSummary[]>({
    url: process.env.NEXT_PUBLIC_API_URL + "/classes/my-classes",
    method: "GET",
    parseJson: true,
    headers: {
      Authorization: "Bearer " + tkn,
    },
  });
  return res;
}
